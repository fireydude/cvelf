import { useContext } from "react";
import { CvContext } from "../../CvContext";

export const EducationTraining: React.FC = () => {
  var cvContext = useContext(CvContext);
  var educations = cvContext.data.educations;
  return (<article>
    <h2>Education and Training</h2>
    {educations && educations.map((e, i) => (<section key={i}>
      <h3>{e.establishment}</h3>
      <span style={{ fontWeight: 'bold' }}>{e.qualification}</span>
      <span style={{ marginLeft: 25 }} >{e.year}</span>
      <ul>
        {e.areas.map((a, areaIndex) => (<li key={areaIndex}>{a}</li>))}
      </ul>
    </section>))}
  </article>);
};