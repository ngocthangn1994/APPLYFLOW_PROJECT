import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import { connectDB } from "./config/db";
import { User } from "./models/User";
import { SubscriptionPlan } from "./models/SubscriptionPlan";
import { Job } from "./models/Job";
import { EmailThread, EmailMessage } from "./models/InboxModels";
import { ChatThread } from "./models/ChatThread";
import { ChatMessage } from "./models/ChatMessage";
import { Subscription } from "./models/BillingModels";
import { Resume } from "./models/Resume";
import { SearchFilter } from "./models/SearchFilter";
import {
  ApplicationAnswer,
  Notification,
  Preference,
} from "./models/AppMetaModels";
import { DelegatedJob } from "./models/DelegatedJob";
import { Task } from "./models/Task";

async function clearDatabase() {
  await Promise.all([
    ChatMessage.deleteMany({}),
    ChatThread.deleteMany({}),
    EmailMessage.deleteMany({}),
    EmailThread.deleteMany({}),
    DelegatedJob.deleteMany({}),
    Task.deleteMany({}),
    Notification.deleteMany({}),
    Preference.deleteMany({}),
    ApplicationAnswer.deleteMany({}),
    Resume.deleteMany({}),
    SearchFilter.deleteMany({}),
    Subscription.deleteMany({}),
    Job.deleteMany({}),
    SubscriptionPlan.deleteMany({}),
    User.deleteMany({}),
  ]);
}

async function run() {
  try {
    await connectDB();
    console.log("Connected to MongoDB");

    await clearDatabase();
    console.log("Old seed data cleared");

    const passwordHash = await bcrypt.hash("Password123!", 10);

    const [client, assistant, admin] = await User.create([
      {
        fullName: "Ava Client",
        email: "client@applyflow.dev",
        passwordHash,
        role: "client",
      },
      {
        fullName: "Mason Assistant",
        email: "assistant@applyflow.dev",
        passwordHash,
        role: "assistant",
      },
      {
        fullName: "Noah Admin",
        email: "admin@applyflow.dev",
        passwordHash,
        role: "admin",
      },
    ]);

    const plans = await SubscriptionPlan.create([
      {
        name: "AI Basic",
        priceMonthly: 29,
        applicationLimit: 25,
        assistantSupportLevel: "none",
        features: ["AI matching", "Resume insights"],
        active: true,
      },
      {
        name: "Human Assistant Starter",
        priceMonthly: 149,
        applicationLimit: 60,
        assistantSupportLevel: "shared",
        features: ["Manual apply support", "Chat"],
        active: true,
      },
      {
        name: "Human Assistant Growth",
        priceMonthly: 299,
        applicationLimit: 140,
        assistantSupportLevel: "dedicated",
        features: ["Priority queue", "Proof reports"],
        active: true,
      },
      {
        name: "Human Assistant Premium",
        priceMonthly: 549,
        applicationLimit: 999,
        assistantSupportLevel: "concierge",
        features: ["White-glove execution", "Advanced docs"],
        active: true,
      },
    ]);

    const jobTitles = ["Frontend Engineer", "Product Designer", "Data Analyst"];
    const companies = ["Northbeam", "Pilotworks", "MintLayer"];
    const locations = ["New York, NY", "Remote (US)", "Austin, TX"];
    const remoteTypes = ["remote", "hybrid", "onsite"];

    const jobs = await Job.create(
      Array.from({ length: 30 }).map((_, i) => ({
        source: "seed",
        sourceUrl: `https://jobs.example.com/${i + 1}`,
        externalId: `seed-${i + 1}`,
        title: jobTitles[i % jobTitles.length],
        company: companies[i % companies.length],
        location: locations[i % locations.length],
        remoteType: remoteTypes[i % remoteTypes.length],
        salaryMin: 90000 + i * 1500,
        salaryMax: 120000 + i * 2000,
        description:
          "Build delightful product experiences with modern tooling and strong cross-functional collaboration.",
        requirements: ["3+ years experience", "TypeScript", "Communication"],
        skills: ["typescript", "react", "next.js", "node.js"],
        postedAt: new Date(Date.now() - i * 86400000),
        metadata: {
          seniority: i % 2 ? "mid" : "senior",
        },
      })),
    );

    await Subscription.create({
      userId: client._id,
      planId: plans[1]._id,
      status: "active",
      provider: "mock",
      currentPeriodStart: new Date(),
      currentPeriodEnd: new Date(Date.now() + 86400000 * 30),
    });

    await Resume.create({
      userId: client._id,
      title: "Software Engineer Resume",
      fileUrl: "/uploads/resume-1.pdf",
      parsedText: "React TypeScript Node distributed systems",
      parsedData: { skills: ["React", "TypeScript"] },
      isDefault: true,
    });

    await SearchFilter.create([
      {
        userId: client._id,
        name: "Primary Remote SWE",
        roleTitles: ["Software Engineer"],
        locations: ["Remote"],
        keywords: ["React", "Node"],
        isPrimary: true,
      },
      {
        userId: client._id,
        name: "NYC Product",
        roleTitles: ["Product Manager"],
        locations: ["New York, NY"],
        keywords: ["B2B SaaS"],
        isPrimary: false,
      },
    ]);

    await ApplicationAnswer.create({
      userId: client._id,
      answers: {
        workAuthorizationStatus: "US Citizen",
        sponsorshipFuture: false,
        legalAuthorizationCountry: true,
        locationsOpen: "US major cities",
        relocationOpen: true,
        workMode: "Remote + Hybrid",
        salaryRange: "$140k-$180k",
        targetTitles: "Senior Software Engineer",
        seniorityLevel: "Senior",
        industries: "Fintech, Healthtech",
        earliestStartDate: "2 weeks",
        contractComfort: true,
        travelOpen: true,
        veteranStatus: false,
        visaSupport: false,
      },
    });
    const threads = await EmailThread.create(
      Array.from({ length: 10 }).map((_, i) => ({
        userId: client._id,
        subject: `Application update #${i + 1}`,
        labels: [i % 2 ? "follow-up" : "interview invite"],
        unread: i % 3 === 0,
      })),
    );

    await EmailMessage.create(
      threads.map((thread, i) => ({
        threadId: thread._id,
        sender: i % 2 === 0 ? "Talent Team" : "Recruiter",
        body:
          i % 2 === 0
            ? "Thanks for applying. Please complete the assessment."
            : "We reviewed your background and would like to move forward.",
        statusTag: i % 2 === 0 ? "assessment" : "interview_invite",
        read: i % 3 !== 0,
      })),
    );

    const chats = await ChatThread.create([
      {
        clientId: client._id,
        assistantId: assistant._id,
        participantIds: [client._id, assistant._id],
        isPremiumUnlocked: true,
        lastMessageAt: new Date(),
      },
      {
        clientId: client._id,
        assistantId: assistant._id,
        participantIds: [client._id, assistant._id],
        isPremiumUnlocked: true,
        lastMessageAt: new Date(),
      },
      {
        clientId: client._id,
        assistantId: assistant._id,
        participantIds: [client._id, assistant._id],
        isPremiumUnlocked: true,
        lastMessageAt: new Date(),
      },
    ]);

    await ChatMessage.create([
      {
        threadId: chats[0]._id,
        senderId: assistant._id,
        body: "I delegated three strong matches and started the first application.",
      },
      {
        threadId: chats[1]._id,
        senderId: client._id,
        body: "Thanks. I will upload my updated resume tonight.",
      },
      {
        threadId: chats[2]._id,
        senderId: assistant._id,
        body: "I need your portfolio link before I submit the next role.",
      },
    ]);

    await DelegatedJob.create({
      clientId: client._id,
      assistantId: assistant._id,
      jobId: jobs[0]._id,
      status: "in_progress",
      notes: "Need portfolio link.",
    });

    await Task.create({
      clientId: client._id,
      assistantId: assistant._id,
      title: "Generate tailored resume for Northbeam role",
      priority: "high",
      dueAt: new Date(Date.now() + 86400000),
    });

    await Preference.create({
      userId: client._id,
      emailUpdates: true,
      whatsappUpdates: false,
      dailyProgressReport: true,
      escalationAlerts: true,
      autoGenerateDocuments: true,
      assistantNotifications: true,
    });

    await Notification.create([
      {
        userId: client._id,
        title: "Assistant assigned",
        body: "Mason is now managing your delegated applications.",
        type: "assistant_assigned",
      },
      {
        userId: client._id,
        title: "3 jobs delegated",
        body: "Your assistant started three applications today.",
        type: "application_progress",
      },
    ]);

    console.log("Seed complete");
    console.log("Demo accounts:");
    console.log("client@applyflow.dev / Password123!");
    console.log("assistant@applyflow.dev / Password123!");
    console.log("admin@applyflow.dev / Password123!");
  } catch (error) {
    console.error("Seed failed:", error);
    process.exitCode = 1;
  } finally {
    await mongoose.connection.close();
    console.log("MongoDB connection closed");
  }
}

run();
