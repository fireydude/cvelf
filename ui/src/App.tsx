import { useEffect, useState } from 'react';
import './App.css';
import { SummaryEditor } from './components/summary/SummaryEditor';
import { CV, CvContext, Experience, ISummaryItem, cv } from './CvContext';
import { KeySkills } from './components/skills/KeySkills';
import { WorkExperience } from './components/experience/WorkExperience';
import { EducationTraining } from './components/education/EducationTraining';

function App() {
  const [data, setData] = useState(cv.data);
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

  cv.addSkill = (level: 'excellent' | 'good' | 'average', name: string) => {
    setData({
      ...data,
      keySkills: {
        ...data.keySkills,
        [level]: [...data.keySkills[level], name],
      },
    });
  };
  cv.removeSkill = (level: 'excellent' | 'good' | 'average', name: string) => {
    setData({
      ...data,
      keySkills: {
        ...data.keySkills,
        [level]: [...data.keySkills[level].filter(x => x !== name)],
      },
    });
  };
  cv.addExperience = () => {
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
  cv.updateExperience = (item: Experience, index: number) => {
    if (!experiences) {
      return;
    }
    const e = [...experiences];
    e[index] = item;
    setExperiences(e);
  };

  cv.addItem = (name: string) => {
    if (data.summary.items.find(x => x.name === name)) {
      return;
    }
    setData({
      ...data,
      summary: {
        ...data.summary,
        items: [...data.summary.items, { name, value: '' }],
      },
    });
  };
  cv.deleteItem = (name: string) => {
    setData({
      ...data,
      summary: {
        ...data.summary,
        items: data.summary.items.filter(x => x.name !== name),
      },
    });
  };
  cv.updateItem = (item: ISummaryItem, val: string) => {
    setData({
      ...data,
      summary: {
        ...data.summary,
        items: data.summary.items.map((i) => {
          if (i.name === item.name) {
            return { ...item, value: val };
          }
          else {
            return i;
          }
        }),
      },
    });
  };
  cv.updateSummaryText = (val: string) => {
    setData({
      ...data,
      summary: { ...data.summary, summary: val },
    });
  };

  useEffect(() => {
    const cvData = window.localStorage.getItem('cv');
    if (cvData) {
      setCvJsonData(cvData);
    }
  }, []);

  function handleSave() {
    window.localStorage.setItem('cv', JSON.stringify(data));
  }

  function setCvJsonData(cvData: string) {
    setData((cv: CV) => {
      const saved = JSON.parse(cvData) as CV;
      let d = { ...cv } as CV;
      if (saved?.summary) {
        d.summary = saved.summary;
      }
      if (saved?.keySkills) {
        d.keySkills = saved.keySkills;
      }
      if (saved?.experiences) {
        d.experiences = [];
        for (const e of saved.experiences) {
          d.experiences.push({
            ...e,
            startDate: new Date(e.startDate),
            endDate: new Date(e.endDate),
          });
        }
        setExperiences(d.experiences);
      }
      if (saved?.educations) {
        d.educations = saved.educations;
      }
      return d;
    });
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
      <CvContext.Provider value={{ ...cv, data }}>
        <h1>Brian Herbert</h1>
        <SummaryEditor />
        <KeySkills />
        <WorkExperience
          experiences={experiences}
          addExperience={cv.addExperience}
          updateExperience={cv.updateExperience}
        />
        <EducationTraining />
      </CvContext.Provider>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleBackup}>Backup</button>
      <label htmlFor="restore" style={{ border: 'solid 1px', borderRadius: 2, background: "#eee", padding: 2, fontSize: 13 }}>Restore</label>
      <input id='restore' style={{ visibility: "hidden" }} type={"file"} onChange={handleRestore} />
    </div>
  );
}

export default App;
