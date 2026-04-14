export type ApplicationStatus =
  | "Suggested"
  | "Pending"
  | "Applied"
  | "Review"
  | "Interview"
  | "Rejected"
  | "Offer";

export interface AppMetric {
  label: string;
  value: string | number;
  hint: string;
}
