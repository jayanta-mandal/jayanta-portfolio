export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  /** Company handling payroll, when it differs from the client-facing employer. */
  payroll?: string;
  start: string;
  end: string;
  yearRange: string;
  focus: string[];
  current?: boolean;
}
