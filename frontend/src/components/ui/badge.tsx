import { cn } from "@/lib/utils";

type BadgeProps = {
  label: string;
  className?: string;
};

export function Badge({ label, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-slate-700 shadow-sm",
        className,
      )}
    >
      {label}
    </span>
  );
}
