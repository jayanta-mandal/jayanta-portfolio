export interface SkillGroup {
  id: string;
  name: string;
  summary: string;
  skills: string[];
  /** Number of columns the card spans on large screens (out of 6). */
  span: 2 | 3 | 6;
}
