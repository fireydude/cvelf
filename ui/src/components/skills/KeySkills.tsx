import React from "react";
import { AddItem } from "../shared/AddItem";
import { Skills } from "../../model/KeySkills";
import { CvSection } from "../shared/CvSection";
import { CvArticle } from "../shared/CvArticle";
import { SkillList } from "./SkillList";

interface IKeySkills {
  keySkills: Skills;
  removeSkill: (level: 'excellent' | 'good' | 'average', skill: string) => void;
  addSkill: (level: 'excellent' | 'good' | 'average', skill: string) => void;
}

export const KeySkills: React.FC<IKeySkills> = (props) => {
  const { keySkills, removeSkill, addSkill } = props;

  return (
    <CvArticle>
      <h2>Key Skills</h2>
      <CvSection style={{
        display: 'grid',
        gridTemplateAreas: `'excellent good average'`,
        gap: 5,
        gridTemplateColumns: '33% 33% 33%',
      }}>
        <div style={{ gridArea: 'excellent' }}>
          <h3>Excellent</h3>
          <SkillList items={keySkills.excellent} remove={(x: string) => removeSkill('excellent', x)} />
          <AddItem addText="Add Excellent Skill" add={(name) => addSkill('excellent', name)} />
        </div>
        <div style={{ gridArea: 'good' }}>
          <h3>Good</h3>
          <SkillList items={keySkills.good} remove={(x: string) => removeSkill('good', x)} />
          <AddItem addText="Add Good Skill" add={(name) => addSkill('good', name)} />
        </div>
        <div style={{ gridArea: 'average' }}>
          <h3>Average</h3>
          <SkillList items={keySkills.average} remove={(x: string) => removeSkill('average', x)} />
          <AddItem addText="Add Average Skill" add={(name) => addSkill('average', name)} />
        </div>
      </CvSection>
    </CvArticle>
  );
};