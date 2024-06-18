import { useEffect, useState } from 'react';
import './App.css';
import { SummaryEditor } from './components/summary/SummaryEditor';
import { KeySkills } from './components/skills/KeySkills';
import { WorkExperience } from './components/experience/WorkExperience';
import { EducationTraining } from './components/education/EducationTraining';
import { Experience } from './model/Experience';
import { Summary, SummaryItem } from './model/Summary';
import { Skills } from './model/KeySkills';
import { Education } from './model/Education';
import { CV } from './model/CV';
import { PersistToolbar } from './components/persist-menu/PersistToolbar';

function App() {
  const [summary, setSummary] = useState<Summary>({
    items: [
      { name: 'Home Location', value: 'Lymm, Cheshire' },
      { name: 'Telephone (mobile)', value: '+44 7780602687' },
    ],
    summary: 'experienced developer',
  });
  const [keySkills, setSkills] = useState<Skills>({
    excellent: ['Outlook'],
    good: ['Windows'],
    average: ['Communication', 'Time keeping'],
  });
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      title: 'MOD Army Digital Service Contract',
      organisation: 'Monitor IS Enterprise Technologists',
      location: 'Andover (remote)',
      startDate: new Date(2021, 5, 1),
      endDate: new Date(2024, 4, 1),
      description: 'Brian worked on two projects both of which related to Army training courses.',
    },
  ]);

  const addSkill = (level: 'excellent' | 'good' | 'average', name: string) => {
    setSkills({
      ...keySkills,
      [level]: [...keySkills[level], name],
    });
  };
  const removeSkill = (level: 'excellent' | 'good' | 'average', name: string) => {
    setSkills({
      ...keySkills,
      [level]: [...keySkills[level].filter(x => x !== name)],
    });
  };
  const addExperience = () => {
    if (!experiences) {
      return;
    }
    setExperiences([
      ...experiences,
      {
        startDate: new Date(),
        endDate: new Date(),
      },
    ]);
  };
  const updateExperience = (item: Experience, index: number) => {
    if (!experiences) {
      return;
    }
    const e = [...experiences];
    e[index] = item;
    setExperiences(e);
  };

  const addItem = (name: string) => {
    if (summary.items.find(x => x.name === name)) {
      return;
    }
    setSummary({
      ...summary,
      items: [...summary.items, { name, value: '' }],
    });
  };
  const deleteItem = (name: string) => {
    setSummary({
      ...summary,
      items: summary.items.filter(x => x.name !== name),
    });
  };
  const updateItem = (item: SummaryItem, val: string) => {
    setSummary({
      ...summary,
      items: summary.items.map((i) => {
        if (i.name === item.name) {
          return { ...item, value: val };
        }
        else {
          return i;
        }
      }),
    });
  };
  const updateSummaryText = (val: string) => {
    setSummary({
      ...summary,
      summary: val,
    });
  };

  const [educations, setEducations] = useState<Education[]>([
    {
      establishment: 'Best University',
      qualification: 'Software Engineering BEng',
      year: 2020,
      areas: ['Programming', 'Mathematics', 'Software Architecture'],
    },
  ]);
  const addEducation = () => {
    if (educations) {
      const defaultEd = {
        establishment: 'establishment',
        qualification: 'qualification',
        year: new Date().getFullYear(),
        areas: ['subject 1'],
      } as Education;
      setEducations([...educations, defaultEd]);
    }
  };
  const removeEducation = (i: number) => {
    if (educations) {
      const copy = [...educations.filter(x => x !== educations[i])];
      setEducations(copy);
    }
  };
  const updateEducation = (val: Education, i: number) => {
    if (educations) {
      const copy = [...educations];
      copy[i] = val;
      setEducations(copy);
    }
  };
  const addEducationSubject = (i: number) => {
    if (educations) {
      const copy = [...educations];
      const update = copy[i];
      update.areas.push(null);
      setEducations(copy);
    }
  };
  const removeEducationSubject = (i: number, val: string | null) => {
    if (educations) {
      const copy = [...educations];
      const update = copy[i];
      update.areas = update.areas.filter(x => x !== val);
      setEducations(copy);
    }
  };
  useEffect(() => {
    const cvData = window.localStorage.getItem('cv');
    if (cvData) {
      setCvJsonData(cvData);
    }
  }, []);

  function handleSave() {
    window.localStorage.setItem('cv', JSON.stringify({
      summary,
      keySkills,
      experiences,
      educations,
    } as CV));
  }

  const setCvJsonData = (cvData: string) => {
    const saved = JSON.parse(cvData) as CV;
    if (saved?.summary) {
      setSummary(saved.summary);
    }
    if (saved?.keySkills) {
      setSkills(saved.keySkills);
    }
    if (saved?.experiences) {
      const experiences = saved.experiences.map((e, i) => ({
        ...e,
        startDate: new Date(e.startDate),
        endDate: new Date(e.endDate),
      }));
      setExperiences(experiences);
    }

    if (saved?.educations) {
      setEducations(saved.educations);
    }
  };

  return (<>
    <div className="Container">
      <h1>Brian Herbert</h1>
      <SummaryEditor
        summary={summary}
        updateSummaryText={updateSummaryText}
        updateItem={updateItem}
        deleteItem={deleteItem}
        addItem={addItem} />
      <KeySkills
        keySkills={keySkills}
        addSkill={addSkill}
        removeSkill={removeSkill} />
      <WorkExperience
        experiences={experiences}
        addExperience={addExperience}
        updateExperience={updateExperience}
      />
      <EducationTraining
        educations={educations}
        addEducation={addEducation}
        removeEducation={removeEducation}
        updateEducation={updateEducation}
        addSubject={addEducationSubject}
        removeSubject={removeEducationSubject}
      />
    </div>
    <PersistToolbar setCvJsonData={setCvJsonData} handleSave={handleSave} />
  </>
  );
}

export default App;
