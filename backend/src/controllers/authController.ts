import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { User } from "../models/User";
import { RefreshToken } from "../models/RefreshToken";
import { env } from "../config/env";
import { asyncHandler } from "../utils/asyncHandler";

const signAccessToken = (id: string, role: string) =>
  jwt.sign({ id, role }, env.JWT_SECRET, { expiresIn: "15m" });

const issueRefreshToken = async (userId: string, req: Request) => {
  const raw = crypto.randomBytes(32).toString("hex");

  await RefreshToken.create({
    userId,
    token: raw,
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
    userAgent: req.headers["user-agent"],
    ip: req.ip,
  });

  return raw;
};

const authPayload = (
  user: any,
  accessToken: string,
  refreshToken?: string,
) => ({
  accessToken,
  refreshToken,
  user: {
    id: user._id,
    email: user.email,
    fullName: user.fullName,
    role: user.role,
  },
});

export const register = asyncHandler(async (req: Request, res: Response) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return res
      .status(400)
      .json({ message: "Full name, email, and password are required" });
  }

  if (password.length < 8) {
    return res
      .status(400)
      .json({ message: "Password must be at least 8 characters" });
  }

  const normalizedEmail = email.toLowerCase().trim();

  const existing = await User.findOne({ email: normalizedEmail });
  if (existing) {
    return res.status(400).json({ message: "Email already in use" });
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await User.create({
    fullName: fullName.trim(),
    email: normalizedEmail,
    passwordHash,
    role: "client",
  });

  const accessToken = signAccessToken(String(user._id), user.role);
  const refreshToken = await issueRefreshToken(String(user._id), req);

  res.status(201).json({
    message: "Account created successfully",
    ...authPayload(user, accessToken, refreshToken),
  });
});

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const normalizedEmail = email.toLowerCase().trim();

  const user = await User.findOne({ email: normalizedEmail });
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, user.passwordHash);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const accessToken = signAccessToken(String(user._id), user.role);
  const refreshToken = await issueRefreshToken(String(user._id), req);

  res.json({
    message: "Logged in successfully",
    ...authPayload(user, accessToken, refreshToken),
  });
});

export const refresh = asyncHandler(async (req: Request, res: Response) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(400).json({ message: "refreshToken is required" });
  }

  const session = await RefreshToken.findOne({
    token: refreshToken,
    revokedAt: null,
    expiresAt: { $gt: new Date() },
  });

  if (!session) {
    return res.status(401).json({ message: "Session expired" });
  }

  const user = await User.findById(session.userId);
  if (!user) {
    return res.status(401).json({ message: "Invalid session" });
  }

  const accessToken = signAccessToken(String(user._id), user.role);

  res.json({
    message: "Token refreshed successfully",
    ...authPayload(user, accessToken),
  });
});

export const logout = asyncHandler(async (req: Request, res: Response) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(400).json({ message: "refreshToken is required" });
  }

  await RefreshToken.updateOne(
    { token: refreshToken },
    { $set: { revokedAt: new Date() } },
  );

  res.json({ success: true, message: "Logged out successfully" });
});

export const forgotPassword = asyncHandler(
  async (req: Request, res: Response) => {
    const { email } = req.body;

    res.json({
      success: true,
      mode: "mock",
      message: `Password reset link prepared for ${email}`,
    });
  },
);

export const me = asyncHandler(async (req: Request, res: Response) => {
  const user = await User.findById(req.user!.id).select("-passwordHash");

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json({
    message: "Current user fetched successfully",
    user,
  });
});
