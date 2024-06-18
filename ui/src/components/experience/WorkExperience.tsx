import React, { useContext, useState } from "react";
import { CvContext } from "../../CvContext";
import { FocusText } from "./FocusText";

export const WorkExperience: React.FC = () => {
  const [updateTitle, setUpdateTitle] = useState<number>();
  const [updateOrg, setUpdateOrg] = useState<number>();
  const [updateLocation, setUpdateLocation] = useState<number>();
  const [updateDesc, setUpdateDesc] = useState<number>();
  var cvContext = useContext(CvContext);
  var experiences = cvContext.data.experiences;

  return (<article>
    <h2>Employment History</h2>
    {experiences && experiences.map((val, index) => (
      <section key={index} style={{
        display: 'grid',
        gridTemplateAreas: `'title title title'
        'organisation location date'
        'desc desc desc`,
        alignContent: 'left',
        gap: 5,
        border: 'solid 1px',
        borderRadius: 5,
        backgroundColor: '#eee',
        margin: 'auto',
        width: '1000px',
        padding: 20,
        marginTop: 20,
      }}>
        <h3
          style={{ gridArea: 'title', textAlign: 'left', color: val.title ? undefined : '#888' }}
          onClick={() => updateTitle === undefined && setUpdateTitle(index)}
        >
          <FocusText
            val={val.title}
            placeholder='title'
            hasFocus={updateTitle === index}
            onChange={(v: string) => cvContext.updateExperience({ ...val, title: v }, index)}
            onBlur={() => setUpdateTitle(undefined)} />
        </h3>
        <div style={{ gridArea: 'organisation', fontWeight: 'bold', textAlign: 'left' }} onClick={() => updateOrg === undefined && setUpdateOrg(index)}>
          <FocusText val={val.organisation} 
            placeholder='organisation'
            hasFocus={updateOrg === index}
            onChange={(v: string) => cvContext.updateExperience({ ...val, organisation: v }, index)}
            onBlur={() => setUpdateOrg(undefined)} />
        </div>
        <div style={{ gridArea: 'location', textAlign: 'left' }} onClick={() => updateLocation === undefined && setUpdateLocation(index)}>
          <FocusText val={val.location} 
            placeholder='location'
            hasFocus={updateLocation === index}
            onChange={(v: string) => cvContext.updateExperience({ ...val, location: v }, index)}
            onBlur={() => setUpdateLocation(undefined)} />
        </div>
        <div style={{ gridArea: 'date', textAlign: 'left' }}>
          <label htmlFor="startExperience">Start:</label>
          <input type="date" id="startExperience" name="startExperience"
            value={val.startDate.toISOString().split('T')[0]}
            onChange={(e) => {
              const d: Date = e.currentTarget?.valueAsDate ?? new Date();
              if (d) {
                cvContext.updateExperience({ ...val, startDate: d }, index);
              }
            }}
          />
          <label htmlFor="endExperience">End:</label>
          <input type="date" id="endExperience" name="endExperience"
            value={val.endDate.toISOString().split('T')[0]}
            onChange={(e) => {
              const d: Date = e.currentTarget?.valueAsDate ?? new Date();
              if (d) {
                cvContext.updateExperience({ ...val, endDate: d }, index);
              }
            }}
          />
        </div>
        <div style={{ gridArea: 'desc', textAlign: 'left' }} onClick={() => updateLocation === undefined && setUpdateDesc(index)}>
          <FocusText val={val.description}
            placeholder="description"
            hasFocus={updateDesc === index}
            onChange={(v: string) => cvContext.updateExperience({ ...val, description: v }, index)}
            onBlur={() => setUpdateDesc(undefined)} />
        </div>
      </section>
    ))}
    <div style={{ marginTop: 50, marginLeft: 20 }}>
      <button onClick={() => cvContext.addExperience()}>
        Add Experience
      </button>
    </div>
    <hr />
  </article>);
};