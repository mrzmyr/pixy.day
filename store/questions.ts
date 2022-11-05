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
    "id": "q6",
    "text": {
      "en": "Would it be helpful for you to track 'emotions' in a dedicated step?",
      "de": "Wäre es hilfreich für dich, Emotionen in einem eigenen Schritt zu erfassen?"
    },
    "type": "single",
    "appVersion": ">= 1.46.1",
    "answers": [
      {
        "id": 1,
        "text": {
          "en": "Yes",
          "de": "Ja"
        },
        "emoji": "👍"
      },
      {
        "id": 2,
        "text": {
          "en": "No",
          "de": "Nein"
        },
        "emoji": "👎"
      },
      {
        "id": 3,
        "text": {
          "en": "Not sure",
          "de": "Nicht sicher"
        },
        "emoji": "🤔"
      }
    ]
  },
  {
    "id": "q7",
    "text": {
      "en": "Would it be beneficial, if you could optionally disable the 'tags' step?",
      "de": "Wäre es hilfreich, den Schritt 'Tags' optional deaktivieren zu können?"
    },
    "type": "single",
    "appVersion": ">= 1.46.1",
    "answers": [
      {
        "id": 1,
        "text": {
          "en": "Yes",
          "de": "Ja"
        },
        "emoji": "👍"
      },
      {
        "id": 2,
        "text": {
          "en": "No",
          "de": "Nein"
        },
        "emoji": "👎"
      },
      {
        "id": 3,
        "text": {
          "en": "Not sure",
          "de": "Nicht sicher"
        },
        "emoji": "🤔"
      },
      {
        "id": 4,
        "text": {
          "en": "I want to see less questions",
          "de": "Ich möchte weniger Fragen sehen"
        },
        "emoji": "🙈"
      }
    ]
  },
  {
    "id": "q8",
    "text": {
      "en": "Would it be beneficial, if you could optionally disable the 'write about your day' step?",
      "de": "Wäre es hilfreich, den Schritt 'Schreibe über deinen Tag' optional deaktivieren zu können?"
    },
    "type": "single",
    "appVersion": ">= 1.46.1",
    "answers": [
      {
        "id": 1,
        "text": {
          "en": "Yes",
          "de": "Ja"
        },
        "emoji": "👍"
      },
      {
        "id": 2,
        "text": {
          "en": "No",
          "de": "Nein"
        },
        "emoji": "👎"
      },
      {
        "id": 3,
        "text": {
          "en": "Not sure",
          "de": "Nicht sicher"
        },
        "emoji": "🤔"
      },
    ]
  },
  {
    "id": "q10",
    "text": {
      "en": "Would you be interested in tracking your sleep along with your mood?",
      "de": "Wärst du daran interessiert, deine Schlafqualität mit deiner Stimmung zu erfassen?"
    },
    "type": "single",
    "appVersion": ">= 1.47.0",
    "answers": [
      {
        "id": 1,
        "text": {
          "en": "Yes",
          "de": "Ja"
        },
        "emoji": "👍"
      },
      {
        "id": 2,
        "text": {
          "en": "No",
          "de": "Nein"
        },
        "emoji": "👎"
      },
      {
        "id": 3,
        "text": {
          "en": "Not sure",
          "de": "Nicht sicher"
        },
        "emoji": "🤔"
      },
      {
        "id": 4,
        "text": {
          "en": "I want to see less questions",
          "de": "Ich möchte weniger Fragen sehen"
        },
        "emoji": "🙈"
      }
    ]
  },
  {
    "id": "q11",
    "text": {
      "en": "Would you be interested in a online backup funtionalitiy?",
      "de": "Wärst du daran interessiert, eine Online-Backup-Funktionalität zu nutzen?"
    },
    "type": "single",
    "appVersion": ">= 1.47.0",
    "answers": [
      {
        "id": 1,
        "text": {
          "en": "Yes",
          "de": "Ja"
        },
        "emoji": "👍"
      },
      {
        "id": 2,
        "text": {
          "en": "No",
          "de": "Nein"
        },
        "emoji": "👎"
      },
      {
        "id": 3,
        "text": {
          "en": "Not sure",
          "de": "Nicht sicher"
        },
        "emoji": "🤔"
      }
    ]
  },
  {
    "id": "q12",
    "text": {
      "en": "Do you want weekly notifications about your statistics?",
      "de": "Möchtest du wöchentliche Benachrichtigungen über deine Statistiken erhalten?"
    },
    "type": "single",
    "appVersion": ">= 1.47.0",
    "answers": [
      {
        "id": 1,
        "text": {
          "en": "Yes",
          "de": "Ja"
        },
        "emoji": "👍"
      },
      {
        "id": 2,
        "text": {
          "en": "No",
          "de": "Nein"
        },
        "emoji": "👎"
      },
      {
        "id": 3,
        "text": {
          "en": "Not sure",
          "de": "Nicht sicher"
        },
        "emoji": "🤔"
      },
      {
        "id": 4,
        "text": {
          "en": "I want to see less questions",
          "de": "Ich möchte weniger Fragen sehen"
        },
        "emoji": "🙈"
      }
    ]
  }
]

export default questions;