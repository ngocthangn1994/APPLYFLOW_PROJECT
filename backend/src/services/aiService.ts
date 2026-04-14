import OpenAI from "openai";
import { env } from "../config/env";

const client = env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: env.OPENAI_API_KEY })
  : null;

export interface ResumeAnalysisResult {
  bestMatchingJobTitles: string[];
  topSkillsFound: string[];
  missingSkills: string[];
  candidateSummary: string;
  jobSearchKeywords: string[];
}

export interface CoverLetterInput {
  jobTitle: string;
  company: string;
  resumeSummary: string;
  candidateName?: string;
  tone?: "professional" | "confident" | "concise";
}

const mockResumeAnalysis = (
  resumeText: string,
  profileContext: Record<string, unknown>,
): ResumeAnalysisResult => {
  const lowerText = resumeText.toLowerCase();
  const targetTitles = Array.isArray(profileContext?.targetTitles)
    ? (profileContext.targetTitles as string[])
    : [];

  const detectedSkills: string[] = [];

  if (lowerText.includes("javascript")) detectedSkills.push("JavaScript");
  if (lowerText.includes("typescript")) detectedSkills.push("TypeScript");
  if (lowerText.includes("react")) detectedSkills.push("React");
  if (lowerText.includes("node")) detectedSkills.push("Node.js");
  if (lowerText.includes("express")) detectedSkills.push("Express.js");
  if (lowerText.includes("mongodb")) detectedSkills.push("MongoDB");
  if (lowerText.includes("sql")) detectedSkills.push("SQL");
  if (lowerText.includes("python")) detectedSkills.push("Python");
  if (lowerText.includes("aws")) detectedSkills.push("AWS");
  if (lowerText.includes("docker")) detectedSkills.push("Docker");

  const topSkillsFound =
    detectedSkills.length > 0
      ? detectedSkills
      : ["Communication", "Problem Solving", "Team Collaboration"];

  const bestMatchingJobTitles =
    targetTitles.length > 0
      ? targetTitles.slice(0, 5)
      : ["Software Engineer", "Full Stack Developer", "Backend Developer"];

  const missingSkills = ["System Design", "CI/CD", "Testing"];

  return {
    bestMatchingJobTitles,
    topSkillsFound,
    missingSkills,
    candidateSummary:
      "Candidate shows a solid technical foundation with transferable experience and strong potential for job-ready positioning.",
    jobSearchKeywords: [
      ...bestMatchingJobTitles.map((title) => title.toLowerCase()),
      ...topSkillsFound.map((skill) => skill.toLowerCase()),
    ].slice(0, 8),
  };
};

function safeJsonParse<T>(value: string, fallback: T): T {
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

export const analyzeResume = async (
  resumeText: string,
  profileContext: Record<string, unknown>,
): Promise<ResumeAnalysisResult> => {
  const fallback = mockResumeAnalysis(resumeText, profileContext);

  if (!resumeText || !resumeText.trim()) {
    return fallback;
  }

  if (!client) {
    return fallback;
  }

  try {
    const response = await client.responses.create({
      model: env.OPENAI_MODEL,
      input: [
        {
          role: "system",
          content: [
            {
              type: "input_text",
              text: [
                "You are an expert career analysis assistant.",
                "Analyze the resume and profile context.",
                "Return valid JSON only.",
                "Do not include markdown.",
                "Use this exact shape:",
                "{",
                '  "bestMatchingJobTitles": string[],',
                '  "topSkillsFound": string[],',
                '  "missingSkills": string[],',
                '  "candidateSummary": string,',
                '  "jobSearchKeywords": string[]',
                "}",
              ].join("\n"),
            },
          ],
        },
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: `Resume Text:
${resumeText}

Profile Context:
${JSON.stringify(profileContext, null, 2)}`,
            },
          ],
        },
      ],
      text: {
        format: {
          type: "json_object",
        },
      },
    });

    const parsed = safeJsonParse<ResumeAnalysisResult>(
      response.output_text,
      fallback,
    );

    return {
      bestMatchingJobTitles: Array.isArray(parsed.bestMatchingJobTitles)
        ? parsed.bestMatchingJobTitles
        : fallback.bestMatchingJobTitles,
      topSkillsFound: Array.isArray(parsed.topSkillsFound)
        ? parsed.topSkillsFound
        : fallback.topSkillsFound,
      missingSkills: Array.isArray(parsed.missingSkills)
        ? parsed.missingSkills
        : fallback.missingSkills,
      candidateSummary:
        typeof parsed.candidateSummary === "string" &&
        parsed.candidateSummary.trim()
          ? parsed.candidateSummary
          : fallback.candidateSummary,
      jobSearchKeywords: Array.isArray(parsed.jobSearchKeywords)
        ? parsed.jobSearchKeywords
        : fallback.jobSearchKeywords,
    };
  } catch (error) {
    console.error("analyzeResume error:", error);
    return fallback;
  }
};

export const generateCoverLetter = async ({
  jobTitle,
  company,
  resumeSummary,
  candidateName = "Candidate",
  tone = "professional",
}: CoverLetterInput): Promise<string> => {
  const fallback = `Dear Hiring Team at ${company},

I am excited to apply for the ${jobTitle} position. My background aligns well with the needs of this role, and I believe I can contribute strong execution, communication, and problem-solving skills from day one.

${resumeSummary}

I would welcome the opportunity to contribute to ${company} and discuss how my experience can support your team.

Sincerely,
${candidateName}`;

  if (!client) {
    return fallback;
  }

  try {
    const response = await client.responses.create({
      model: env.OPENAI_MODEL,
      input: [
        {
          role: "system",
          content: [
            {
              type: "input_text",
              text: [
                "You are an expert job application writing assistant.",
                "Write a concise, realistic, tailored cover letter.",
                "Keep it professional, natural, and not overly dramatic.",
                "Do not use markdown.",
                "Keep it around 250 to 350 words.",
              ].join("\n"),
            },
          ],
        },
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: `Write a ${tone} cover letter for:
Job Title: ${jobTitle}
Company: ${company}
Candidate Name: ${candidateName}
Resume Summary: ${resumeSummary}`,
            },
          ],
        },
      ],
    });

    return response.output_text?.trim() || fallback;
  } catch (error) {
    console.error("generateCoverLetter error:", error);
    return fallback;
  }
};
