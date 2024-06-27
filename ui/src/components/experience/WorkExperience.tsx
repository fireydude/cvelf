import React, { useState } from "react";
import { FocusText } from "../shared/FocusText";
import { Experience } from "../../model/Experience";
import { CvSection } from "../shared/CvSection";
import { CvArticle } from "../shared/CvArticle";

interface IWorkExperience {
  experiences: Experience[];
  addExperience: () => void;
  removeExperience: (index: number) => void;
  updateExperience: (val: Experience, index: number) => void;
}

export const WorkExperience: React.FC<IWorkExperience> = (props) => {
  const { experiences, addExperience, removeExperience, updateExperience } = props;

  const [updateTitle, setUpdateTitle] = useState<number>();
  const [updateOrg, setUpdateOrg] = useState<number>();
  const [updateLocation, setUpdateLocation] = useState<number>();
  const [updateDesc, setUpdateDesc] = useState<number>();

  const [dragIndex, setDragIndex] = useState<number>();

  function handleItemDragStart(e: React.DragEvent<HTMLParagraphElement>) {
    setDragIndex(Number((e.target as any).dataset.id));
  }

  function handleItemDragEnd(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragIndex(undefined);
  }

  function handleListDragOver(e: React.DragEvent<HTMLDivElement>): void {
    e.preventDefault();
    const id = Number((e.target as any).dataset.id);
    if (id === undefined || isNaN(id) || dragIndex === undefined || dragIndex === id) {
      return;
    }
    const to = id;
    const from = dragIndex;
    experiences.splice(to, 0, experiences.splice(from, 1)[0]);
    setDragIndex(to);
  }

  return (<CvArticle>
    <h2>Employment History</h2>
    <div style={{ marginTop: 50, marginLeft: 20 }}>
      <button onClick={() => addExperience()}>
        Add Experience
      </button>
    </div>
    <div onDragOver={handleListDragOver}>
      {experiences && experiences.map((val, index) => (
        <div key={index} data-id={index} draggable onDragStart={handleItemDragStart} onDragEnd={handleItemDragEnd}>
          <button style={{ float: 'right' }} onClick={() => removeExperience(index)}>Delete</button>
          <CvSection dragId={index + ''} 
          style={{
            cursor: 'move',
          }}
          >
            <h3
              style={{ gridArea: 'title', textAlign: 'left', color: val.title ? undefined : '#888' }}
              onClick={() => updateTitle === undefined && setUpdateTitle(index)}
            >
              <FocusText
                val={val.title}
                placeholder='title'
                hasFocus={updateTitle === index}
                onChange={(v: string) => updateExperience({ ...val, title: v }, index)}
                onBlur={() => setUpdateTitle(undefined)}
                focusWidth={500} />
            </h3>
            <div style={{ fontWeight: 'bold', display: 'inline-block', width: 420 }} 
              onClick={() => updateOrg === undefined && setUpdateOrg(index)}>
              <FocusText val={val.organisation}
                placeholder='organisation'
                hasFocus={updateOrg === index}
                onChange={(v: string) => updateExperience({ ...val, organisation: v }, index)}
                onBlur={() => setUpdateOrg(undefined)}
                focusWidth={400} />
            </div>
            <div style={{ display: 'inline-block', width: 200 }} 
              onClick={() => updateLocation === undefined && setUpdateLocation(index)}>
              <FocusText val={val.location}
                placeholder='location'
                hasFocus={updateLocation === index}
                onChange={(v: string) => updateExperience({ ...val, location: v }, index)}
                onBlur={() => setUpdateLocation(undefined)}
                focusWidth={160} />
            </div>
            <div style={{ display: 'inline-block' } as any}>
              <label htmlFor="startExperience">Start:</label>
              <input type="date" id="startExperience" name="startExperience"
                value={val.startDate.toISOString().split('T')[0]}
                onChange={(e) => {
                  const d: Date = e.currentTarget?.valueAsDate ?? new Date();
                  if (d) {
                    updateExperience({ ...val, startDate: d }, index);
                  }
                }}
              />
              <label htmlFor="endExperience" style={{ paddingLeft: 15 }}>End:</label>
              <input type="date" id="endExperience" name="endExperience"
                value={val.endDate.toISOString().split('T')[0]}
                onChange={(e) => {
                  const d: Date = e.currentTarget?.valueAsDate ?? new Date();
                  if (d) {
                    updateExperience({ ...val, endDate: d }, index);
                  }
                }}
              />
            </div>
            <div style={{ marginTop: 2 }} onClick={() => updateLocation === undefined && setUpdateDesc(index)}>
              <FocusText val={val.description}
                placeholder="description"
                hasFocus={updateDesc === index}
                onChange={(v: string) => updateExperience({ ...val, description: v }, index)}
                onBlur={() => setUpdateDesc(undefined)}
                textArea />
            </div>
          </CvSection>
        </div>
      ))}
    </div>
  </CvArticle>);
};