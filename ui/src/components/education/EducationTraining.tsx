import { Education } from "../../model/Education";

interface IEducationTraining {
  educations: Education[];
  addEducation: () => void;
  addSubject: (educationIndex: number) => void;
  removeSubject: (educationIndex: number, val: string | null) => void;
}

export const EducationTraining: React.FC<IEducationTraining> = (props) => {
  const { educations, addEducation, addSubject, removeSubject } = props;

  return (<article>
    <h2>Education and Training</h2>
    {educations && educations.map((e, i) => (<section key={i}>
      <h3>{e.establishment ?? 'establishment'}</h3>
      <span style={{ fontWeight: 'bold' }}>{e.qualification ?? 'qualification'}</span>
      <span style={{ marginLeft: 25 }} >{e.year}</span>
      <ul>
        {e.areas.map((a, areaIndex) => (
          <li key={areaIndex}>
            {a ?? 'subject'}
            <button style={{ marginLeft: 15 }} onClick={() => removeSubject(i, a)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addSubject(i)}>Add Subject Area</button>
    </section>))}
    <div style={{ marginTop: 50, marginLeft: 20 }}>
      <button onClick={() => addEducation()}>
        Add Experience
      </button>
    </div>
  </article>);
};