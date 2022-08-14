export const FINISH = '/finish';
export const QUIZ = '/quiz';

export interface IMainArrays {
  id: string;
  name: string;
}

export const NUMBER_OF_QUESTIONS: IMainArrays[] = [
  { id: '10', name: '10' },
  { id: '15', name: '15' },
  { id: '20', name: '20' },
];
export const CATEGORIES: IMainArrays[] = [
  { id: '21', name: 'Sports' },
  { id: '22', name: 'Geography' },
  { id: '23', name: 'History' },
];
