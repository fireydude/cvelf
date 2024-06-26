import { Education } from "./Education";
import { Experience } from "./Experience";
import { Skills } from "./KeySkills";
import { Summary } from "./Summary";

export interface CV {
  name: string;
  summary: Summary;
  keySkills: Skills;
  experiences: Experience[];
  educations: Education[];
}