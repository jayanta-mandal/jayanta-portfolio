import type { IconName } from '../components/ui/Icon';

export interface NavItem {
  id: string;
  label: string;
}

export interface Principle {
  id: string;
  title: string;
  description: string;
  icon: IconName;
}

export interface WorkflowStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: IconName;
}

export interface PipelineStep {
  id: string;
  title: string;
  description: string;
}

export interface EducationEntry {
  id: string;
  qualification: string;
  field?: string;
  institution: string;
  location?: string;
  period: string;
  score?: string;
}
