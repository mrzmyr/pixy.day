import NextCors from 'nextjs-cors';
// @ts-ignore
import questions from '../../store/questions.yml';

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

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET'],
    origin: '*',
 });
  
  res.status(200).json(questions as Question[])
}