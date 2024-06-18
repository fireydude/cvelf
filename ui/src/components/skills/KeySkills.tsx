import { useContext } from "react";
import { CvContext } from "../../CvContext";
import React from "react";
import { AddItem } from "../shared/AddItem";

export const KeySkills: React.FC = () => {
  var cvContext = useContext(CvContext);

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
          {cvContext.data.keySkills.excellent.map((skill, index) => {
            return (<p key={index}>{skill}<button onClick={() => cvContext.removeSkill('excellent', skill)}>Delete</button></p>);
          })}
          <AddItem addText="Add Excellent Skill" add={(name) => cvContext.addSkill('excellent', name)} />
        </div>
        <div style={{ gridArea: 'good' }}>
          <h3>Good</h3>
          {cvContext.data.keySkills.good.map((skill, index) => {
            return (<p key={index}>{skill}<button onClick={() => cvContext.removeSkill('good', skill)}>Delete</button></p>);
          })}
          <AddItem addText="Add Good Skill" add={(name) => cvContext.addSkill('good', name)} />
        </div>
        <div style={{ gridArea: 'average' }}>
          <h3>Average</h3>
          {cvContext.data.keySkills.average.map((skill, index) => {
            return (<p key={index}>{skill}<button onClick={() => cvContext.removeSkill('average', skill)}>Delete</button></p>);
          })}
          <AddItem addText="Add Average Skill" add={(name) => cvContext.addSkill('average', name)} />
        </div>
      </div>
      <hr />
    </article>
  );
};