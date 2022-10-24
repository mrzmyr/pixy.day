type Question = {
  id: string;
  type: 'single' | 'multiple';
  text: {
    en: string;
    [key: string]: string;
  };
  appVersion: string;
  answers: {
    id: number;
    emoji: string;
    text: {
      en: string;
      [key: string]: string;
    };
  }[];
};

const questions: Question[] = [
  {
    "id": "q2",
    "text": {
      "en": "Did you know? You can now vote on features in the settings.",
      "de": "Schon gewusst? Du kannst jetzt in den Einstellungen über neue Funktionen abstimmen."
    },
    appVersion: '>= 1.0.0',
    "type": "single",
    "answers": [
      {
        "id": 1,
        "text": {
          "en": "Awesome! Will do right now.",
          "de": "Klasse, mach ich sofort!"
        },
        "emoji": "🤩"
      },
      {
        "id": 2,
        "text": {
          "en": "I will take a look.",
          "de": "Ich schau mal."
        },
        "emoji": "🥸"
      },
      {
        "id": 3,
        "text": {
          "en": "Already voted!",
          "de": "Hab ich schon"
        },
        "emoji": "😋"
      },
      {
        "id": 4,
        "text": {
          "en": "Not interested.",
          "de": "Interessiert mich nicht."
        },
        "emoji": "🙂"
      }
    ]
  },
  {
    "id": "q3",
    "text": {
      "en": "We listened: You can choose your color scheme in the settings now.",
      "de": "Wir hören dich: Du kannst nun dein Farbschema in den Einstellungen ändern."
    },
    "type": "single",
    appVersion: ">= 1.44.0",
    "answers": [
      {
        "id": 1,
        "text": {
          "en": "Awesome! Will do right now.",
          "de": "Klasse, mach ich sofort!"
        },
        "emoji": "🤩"
      },
      {
        "id": 2,
        "text": {
          "en": "I will take a look.",
          "de": "Ich schau mal."
        },
        "emoji": "🥸"
      },
      {
        "id": 3,
        "text": {
          "en": "Already did it!",
          "de": "Hab ich schon"
        },
        "emoji": "😋"
      },
      {
        "id": 4,
        "text": {
          "en": "Not interested.",
          "de": "Interessiert mich nicht."
        },
        "emoji": "🙂"
      }
    ]
  },
  {
    "id": "q4",
    "text": {
      "en": "We listened: You can choose your color scheme in the settings now.",
      "de": "Wir hören dich: Du kannst nun dein Farbschema in den Einstellungen ändern."
    },
    "type": "single",
    "appVersion": ">= 1.46.1",
    "answers": [
      {
        "id": 1,
        "text": {
          "en": "Awesome! Will do right now.",
          "de": "Klasse, mach ich sofort!"
        },
        "emoji": "🤩"
      },
      {
        "id": 2,
        "text": {
          "en": "I will take a look.",
          "de": "Ich schau mal."
        },
        "emoji": "🥸"
      },
      {
        "id": 3,
        "text": {
          "en": "Already did it!",
          "de": "Hab ich schon"
        },
        "emoji": "😋"
      },
      {
        "id": 4,
        "text": {
          "en": "Not interested.",
          "de": "Interessiert mich nicht."
        },
        "emoji": "🙂"
      }
    ]
  },
  {
    "id": "q5",
    "text": {
      "en": "Would you be interested in sharing your mood with your partner/friend?",
      "de": "Wärst du daran interessiert, deine Stimmung mit Partner*in/Freund*in zu teilen?"
    },
    "type": "single",
    "appVersion": ">= 1.46.1",
    "answers": [
      {
        "id": 1,
        "text": {
          "en": "Yes with my partner.",
          "de": "Ja mit Partner*in"
        },
        "emoji": "❤️"
      },
      {
        "id": 2,
        "text": {
          "en": "Yes with friends",
          "de": "Ja mit Freund*innen"
        },
        "emoji": "🤝"
      },
      {
        "id": 3,
        "text": {
          "en": "Yes with other than firends/partner",
          "de": "Ja, anderen als Freund*innen/Partner*innen"
        },
        "emoji": "🤗"
      },
      {
        "id": 4,
        "text": {
          "en": "No, I would not share my mood.",
          "de": "Nein, ich würde meine Stimmung nicht teilen."
        },
        "emoji": "👎"
      }
    ]
  }
]

export default questions;