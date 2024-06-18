import { Education } from "./Education";
import { Experience } from "./Experience";
import { Skills } from "./KeySkills";
import { Summary } from "./Summary";

export interface CV {
  summary: Summary;
  keySkills: Skills;
  experiences: Experience[];
  educations: Education[];
}