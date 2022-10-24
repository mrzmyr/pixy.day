import NextCors from 'nextjs-cors';
import questions from '../../store/questions';

export default async function handler(req, res) {
  await NextCors(req, res, {
    methods: ['GET'],
    origin: '*',
  });

  res.status(200).json(questions)
}