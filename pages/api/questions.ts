type Question = {
  id: number;
  type: 'single' | 'multiple';
  text: {
    en: string;
    [key: string]: string;
  };
  answers: {
    id: number;
    emoji: string;
    text: {
      en: string;
      [key: string]: string;
    };
  }[];
};

// @ts-ignore
import questions from '../../store/questions.yml';

export default function handler(req, res) {
  res.status(200).json(questions as Question[])
}