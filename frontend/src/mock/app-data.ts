export const dashboardStats = [
  { label: "Matched jobs", value: 86, subtext: "Strong-fit roles identified" },
  { label: "Saved jobs", value: 24, subtext: "Bookmarked for review" },
  { label: "Delegated jobs", value: 18, subtext: "Assigned to assistant" },
  { label: "Applied jobs", value: 11, subtext: "Submitted successfully" },
  { label: "Response rate", value: "19%", subtext: "Above recent average" },
];

export const onboardingQuestions = [
  "What is your current work authorization status?",
  "Will you require sponsorship now or in the future?",
  "Are you legally authorized to work in the country you are applying in?",
  "What locations are you open to?",
  "Are you open to relocation?",
  "Are you open to remote, hybrid, or onsite roles?",
  "What salary range are you targeting?",
  "What job titles are you targeting?",
  "What seniority level are you targeting?",
  "What industries are you interested in?",
  "What is your earliest start date?",
  "Are you comfortable with contract roles?",
  "Are you open to travel for work?",
  "Do you identify as a veteran? (optional)",
  "Do you need visa support or immigration assistance? (optional)",
];

const jobSeeds = [
  {
    title: "Senior Frontend Engineer",
    company: "Northbeam",
    location: "Remote (US)",
    remoteType: "Remote",
    salary: "$110k - $145k",
    skills: ["TypeScript", "React", "System Design"],
    summary:
      "Build scalable frontend systems, improve product performance, and collaborate with design and backend teams.",
    employmentType: "Full-time",
    experienceLevel: "Senior",
  },
  {
    title: "Product Designer",
    company: "Evermint",
    location: "New York, NY",
    remoteType: "Hybrid",
    salary: "$120k - $155k",
    skills: ["Figma", "Design Systems", "User Research"],
    summary:
      "Own end-to-end design flows, improve product usability, and work closely with cross-functional partners.",
    employmentType: "Full-time",
    experienceLevel: "Mid-Senior",
  },
  {
    title: "Data Analyst",
    company: "CloudRiver",
    location: "Austin, TX",
    remoteType: "Onsite",
    salary: "$95k - $125k",
    skills: ["SQL", "Python", "Dashboards"],
    summary:
      "Analyze business data, build reporting dashboards, and help teams make clearer product and growth decisions.",
    employmentType: "Full-time",
    experienceLevel: "Mid-Level",
  },
];

export const jobs = Array.from({ length: 12 }).map((_, i) => {
  const seed = jobSeeds[i % jobSeeds.length];
  const matchScore = 92 - i;

  return {
    id: i + 1,
    title: seed.title,
    company: seed.company,
    location: seed.location,
    remoteType: seed.remoteType,
    salary: seed.salary,
    matchScore,
    skills: seed.skills,
    summary: seed.summary,
    employmentType: seed.employmentType,
    experienceLevel: seed.experienceLevel,
    postedAt:
      i === 0
        ? "Today"
        : i < 4
          ? "1 day ago"
          : i < 8
            ? "2 days ago"
            : "This week",
    status:
      i % 4 === 0
        ? "New"
        : i % 4 === 1
          ? "Saved"
          : i % 4 === 2
            ? "Delegated"
            : "Applied",
    assistantRecommended: matchScore >= 88,
  };
});
