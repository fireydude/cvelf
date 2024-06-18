import { createContext } from "react";

export interface ISummaryItem {
  name: string;
  value: string;
}

export interface CV {
  summary: Summary;
  keySkills: KeySkills;
  experiences: Experience[];
  educations: Education[];
}

export interface Summary {
  items: ISummaryItem[];
  summary: string;
}

export interface KeySkills {
  excellent: string[];
  average: string[];
  good: string[];
}

export interface Experience {
  title?: string;
  organisation?: string;
  location?: string;
  startDate: Date;
  endDate: Date;
  description?: string;
}

export interface Education {
  establishment: string;
  qualification: string;
  year: number;
  areas: string[];
}

export interface CvState {
  data: CV;
  addSkill: (level: 'excellent' | 'average' | 'good', name: string) => void;
  removeSkill: (level: 'excellent' | 'average' | 'good', name: string) => void;
  addExperience: () => void;
  updateExperience: (item: Experience, index: number) => void;
  addItem: (name: string) => void;
  deleteItem: (name: string) => void;
  updateItem: (item: ISummaryItem, val: string) => void;
  updateSummaryText: (val: string) => void;
}

export const cv: CvState = {
  data: {
    summary: {
      items: [
        { name: 'Home Location', value: 'Lymm, Cheshire' },
        { name: 'Telephone (mobile)', value: '+44 7780602687' },
      ],
      summary: 'experienced developer',
    },
    keySkills: {
      excellent: ['Outlook'],
      good: ['Windows'],
      average: ['Communication', 'Time keeping'],
    },
    experiences: [
      {
        title: 'MOD Army Digital Service Contract',
        organisation: 'Monitor IS Enterprise Technologists',
        location: 'Andover (remote)',
        startDate: new Date(2021, 5, 1),
        endDate: new Date(2024, 4, 1),
        description: 'Brian worked on two projects both of which related to Army training courses.',
      },
    ],
    educations: [
      {
        establishment: 'Best University',
        qualification: 'Software Engineering BEng',
        year: 2020,
        areas: [ 'Programming', 'Mathematics', 'Software Architecture' ],
      },
    ],
  },
  addSkill: () => { },
  removeSkill: () => { },
  addExperience: () => { },
  updateExperience: () => { },
  addItem: () => { },
  deleteItem: () => { },
  updateItem: () => { },
  updateSummaryText: () => { },
};
export const CvContext = createContext(cv);