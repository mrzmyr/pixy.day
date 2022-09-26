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

const q = {
  id: 1,
  text: {
    en: 'Do you like the new update?',
    de: 'Magst du das neue Update?',
  },
  type: 'single',
  answers: [
    { 
      id: 1, 
      text: {
        en: 'I love it',
        de: 'Ich liebe es',
      }, 
      emoji: '😍'
    },
    { 
      id: 2, 
      text: {
        en: 'Its ok',
        de: 'Ist ok',
      }, 
      emoji: '👍' 
    },
    {
      id: 3,
      text: {
        en: `I'm experiencing some issues`,
        de: 'Es gibt ein paar Fehler',
      },
      emoji: '😕',
    },
    { 
      id: 4, 
      text: {
        en: 'Not really',
        de: 'Nicht wirklich',
      }, 
      emoji: '👎' 
    },
  ],
}

export default function handler(req, res) {
  res.status(200).json([q] as Question[])
}