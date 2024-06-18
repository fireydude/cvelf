import { useEffect, useState } from 'react';
import './App.css';
import { SummaryEditor } from './components/summary/SummaryEditor';
// import { CvContext, cv } from './CvContext';
import { KeySkills } from './components/skills/KeySkills';
import { WorkExperience } from './components/experience/WorkExperience';
import { EducationTraining } from './components/education/EducationTraining';
import { Experience } from './model/Experience';
import { Summary, SummaryItem } from './model/Summary';
import { Skills } from './model/KeySkills';
import { Education } from './model/Education';

function App() {
  // const [data, setData] = useState(cv.data);
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
  const [educations, setEducations] = useState<Education[]>([
    {
      establishment: 'Best University',
      qualification: 'Software Engineering BEng',
      year: 2020,
      areas: [ 'Programming', 'Mathematics', 'Software Architecture' ],
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

  useEffect(() => {
    const cvData = window.localStorage.getItem('cv');
    if (cvData) {
      setCvJsonData(cvData);
    }
  }, []);

  function handleSave() {
    // window.localStorage.setItem('cv', JSON.stringify(data));
  }

  function setCvJsonData(cvData: string) {
    // setData((cv: CV) => {
    //   const saved = JSON.parse(cvData) as CV;
    //   let d = { ...cv } as CV;
    //   if (saved?.summary) {
    //     d.summary = saved.summary;
    //   }
    //   if (saved?.keySkills) {
    //     d.keySkills = saved.keySkills;
    //   }
    //   if (saved?.experiences) {
    //     d.experiences = [];
    //     for (const e of saved.experiences) {
    //       d.experiences.push({
    //         ...e,
    //         startDate: new Date(e.startDate),
    //         endDate: new Date(e.endDate),
    //       });
    //     }
    //     setExperiences(d.experiences);
    //   }
    //   if (saved?.educations) {
    //     d.educations = saved.educations;
    //   }
    //   return d;
    // });
  }

  function handleReset() {
    const cvData = window.localStorage.getItem('cv');
    if (cvData) {
      setCvJsonData(cvData);
    }
  }
  function handleBackup() {
    const cvData = window.localStorage.getItem('cv');
    if (!cvData) {
      return;
    }

    const link = document.createElement("a");
    const file = new Blob([cvData], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = "backup.json";
    link.click();
    URL.revokeObjectURL(link.href);
  }
  function handleRestore() {
    const fileInput = document.getElementById('restore');
    console.log('start');
    if (fileInput) {
      console.log(fileInput);
      const files = (fileInput as any).files;
      if (files?.length === 1) {
        const reader = new FileReader();
        reader.onload = fileLoadedEvent => {
          const json = fileLoadedEvent?.target?.result as string;
          window.localStorage.setItem('cv', json);
          setCvJsonData(json);
        };
        reader.onerror = error => console.error(error);
        reader.readAsText(files[0]); // you could also read images and other binaries
      }
    }
  }

  return (
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
        educations={educations} />
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleBackup}>Backup</button>
      <label htmlFor="restore" style={{ border: 'solid 1px', borderRadius: 2, background: "#eee", padding: 2, fontSize: 13 }}>Restore</label>
      <input id='restore' style={{ visibility: "hidden" }} type={"file"} onChange={handleRestore} />
    </div>
  );
}

export default App;
