import { useState } from "react";
import { Education } from "../../model/Education";
import { FocusText } from "../shared/FocusText";
import { CvSection } from "../shared/CvSection";
import { CvArticle } from "../shared/CvArticle";

interface IEducationTraining {
  educations: Education[];
  addEducation: () => void;
  removeEducation: (i: number) => void;
  updateEducation: (val: Education, i: number) => void;
  addSubject: (educationIndex: number) => void;
  removeSubject: (educationIndex: number, val: string | null) => void;
}

export const EducationTraining: React.FC<IEducationTraining> = (props) => {
  const { educations, addEducation, removeEducation, updateEducation, addSubject, removeSubject } = props;

  const [updateEstablishment, setUpdateEstablishment] = useState<number>();
  const [updateQualification, setUpdateQualification] = useState<number>();
  const [updateYear, setUpdateYear] = useState<number>();
  const [updateArea, setUpdateArea] = useState<{ educationIndex: number, areaIndex: number }>();

  const handleUpdateArea = (education: Education, educationIndex: number, areaIndex: number, val: string) => {
    education.areas[areaIndex] = val;
    updateEducation(education, educationIndex);
  };

  return (<CvArticle>
    <h2>Education and Training</h2>
    <div style={{ marginTop: 50, marginLeft: 20 }}>
      <button onClick={() => addEducation()}>
        Add Education or training
      </button>
    </div>
    {educations && educations.map((e, i) => (
      <div key={i}>
        <button style={{ float: 'right' }} onClick={() => removeEducation(i)}>Delete</button>
        <CvSection>
          <h3 onClick={() => updateEstablishment === undefined && setUpdateEstablishment(i)}>
            <FocusText
              val={e.establishment}
              placeholder='establishment'
              hasFocus={updateEstablishment === i}
              onChange={(v: string) => updateEducation({ ...e, establishment: v }, i)}
              onBlur={() => setUpdateEstablishment(undefined)} />
          </h3>
          <span style={{ fontWeight: 'bold' }} onClick={() => updateQualification === undefined && setUpdateQualification(i)}>
            <FocusText
              val={e.qualification}
              placeholder='qualification'
              hasFocus={updateQualification === i}
              onChange={(v: string) => updateEducation({ ...e, qualification: v }, i)}
              onBlur={() => setUpdateQualification(undefined)} />
          </span>
          <span style={{ marginLeft: 25 }} onClick={() => updateQualification === undefined && setUpdateYear(i)}>
            <FocusText
              val={e.year + ''}
              placeholder='year'
              hasFocus={updateYear === i}
              onChange={(v: string) => updateEducation({ ...e, year: Number(v) }, i)}
              onBlur={() => setUpdateYear(undefined)} />
          </span>
          <ul>
            {e.areas.map((a, areaIndex) => (
              <li key={areaIndex} onClick={() => updateArea === undefined && setUpdateArea({ educationIndex: i, areaIndex })}>
                <FocusText
                  val={a ?? ''}
                  placeholder='subject area'
                  hasFocus={updateArea?.educationIndex === i && updateArea?.areaIndex === areaIndex}
                  onChange={(v: string) => handleUpdateArea(e, i, areaIndex, v)}
                  onBlur={() => setUpdateArea(undefined)} />
                <button style={{ marginLeft: 15 }} onClick={() => removeSubject(i, a)}>Delete</button>
              </li>
            ))}
          </ul>
          <button onClick={() => addSubject(i)}>Add Subject Area</button>
        </CvSection>
      </div>))}
  </CvArticle>);
};