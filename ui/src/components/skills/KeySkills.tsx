import React from "react";
import { AddItem } from "../shared/AddItem";
import { Skills } from "../../model/KeySkills";

interface IKeySkills {
  keySkills: Skills;
  removeSkill: (level: 'excellent' | 'good' | 'average', skill: string) => void;
  addSkill: (level: 'excellent' | 'good' | 'average', skill: string) => void;
}

export const KeySkills: React.FC<IKeySkills> = (props) => {
  const { keySkills, removeSkill, addSkill } = props;

  return (
    <article>
      <h2>Key Skills</h2>
      <div style={{
        display: 'grid',
        gridTemplateAreas: `'excellent good average'`,
        gap: 5,
        gridTemplateColumns: '33% 33% 33%',
        border: 'solid 1px',
        borderRadius: 5,
        backgroundColor: '#eee',
        margin: 'auto',
        width: '1000px',
        padding: 20,
      }}>
        <div style={{ gridArea: 'excellent' }}>
          <h3>Excellent</h3>
          {keySkills.excellent.map((skill, index) => {
            return (<p key={index}>{skill}<button onClick={() => removeSkill('excellent', skill)}>Delete</button></p>);
          })}
          <AddItem addText="Add Excellent Skill" add={(name) => addSkill('excellent', name)} />
        </div>
        <div style={{ gridArea: 'good' }}>
          <h3>Good</h3>
          {keySkills.good.map((skill, index) => {
            return (<p key={index}>{skill}<button onClick={() => removeSkill('good', skill)}>Delete</button></p>);
          })}
          <AddItem addText="Add Good Skill" add={(name) => addSkill('good', name)} />
        </div>
        <div style={{ gridArea: 'average' }}>
          <h3>Average</h3>
          {keySkills.average.map((skill, index) => {
            return (<p key={index}>{skill}<button onClick={() => removeSkill('average', skill)}>Delete</button></p>);
          })}
          <AddItem addText="Add Average Skill" add={(name) => addSkill('average', name)} />
        </div>
      </div>
      <hr />
    </article>
  );
};