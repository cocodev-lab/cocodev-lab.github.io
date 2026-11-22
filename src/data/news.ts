export interface NewsItem { year: string; text: string; link?: { label: string; url: string }; links?: { label: string; url: string }[]; }

// Updates retain the PI’s original first-person voice.
export const news: NewsItem[] = [
  { year: '2026', text: 'I gave a keynote at the LM Playschool Workshop (Improving Language Models through Learning from Dialogue Interaction), EMNLP 2026.', link: { label: 'Workshop webpage', url: 'https://lm-playschool.github.io/' } },
  { year: '2026', text: 'Our team has been awarded ANR funding for GLAD: Grounded Language Development: A Unified Framework for Learnability Studies. We will be recruiting a research engineer and a PhD candidate. Contact me for further information.' },
  { year: '2026', text: 'My book, Language Development with Deep Learning: From Learning Theory to Computational Experiments, is forthcoming with Cambridge University Press.', link: { label: 'Book preview', url: '/assets/files/book_preview.pdf' } },
  { year: '2026', text: 'I co-organized the Workshop on Developmental AI with M. Fort and T. Hueber, a joint event by GDR TAL and GDR Babylab (CNRS), in Grenoble in October 2026.', link: { label: 'Workshop webpage', url: 'https://www.ultraspeech.com/devai/devai-workshop-2026/' } },
  { year: '2026', text: 'I gave a keynote at the Child Language Symposium: “AI and the Question of Language Learnability.”', link: { label: 'Conference webpage', url: 'https://cls2026.netlify.app' } },
  { year: '2026', text: 'I co-organized the 1st Workshop on Computational Developmental Linguistics at ACL 2026 in San Diego.', link: { label: 'Workshop webpage', url: 'https://comp-dev-ling.github.io' } },
  { year: '2025', text: 'I gave a keynote at SIGDIAL: “The Primary Role of Dialogue in Language Development.”', link: { label: 'Conference webpage', url: 'https://2025.sigdial.org/keynotes/' } },
  { year: '2025', text: 'I gave a keynote at the AI for Education workshop: “What Children’s Learning Can Teach LLMs.”', link: { label: 'Workshop webpage', url: 'https://ia-edu.lis-lab.fr/2025/index.html' } },
  { year: '2024', text: 'The special issue “Language Learning, Representation, and Processing in Humans and Machines,” which I co-edited with Marianna Apidianaki and Sebastian Padó, was published in Computational Linguistics.', link: { label: 'Special issue', url: 'https://direct.mit.edu/coli/issue/50/4' } },
  { year: '2024', text: 'I presented “AI for the Ecological Study of Language Development” at the Mila–Quebec AI Institute workshop on NLP, cognitive science, and societal transformations.', link: { label: 'Watch the video', url: 'https://www.youtube.com/watch?v=s6bkscv9xBk' } },
];

// Separate feeds keep institutional announcements distinct from the PI’s own updates.
export const personalNews = news;

export const groupNews: NewsItem[] = [
  {
    "year": "2026",
    "text": "The CoCoDev seminars will return soon. Subscribe to the mailing list to receive announcements.",
    "link": {
      "label": "Subscribe",
      "url": "https://framalistes.org/sympa/info/cocodev"
    }
  },
  {
    "year": "2026",
    "text": "CoCoDev at EMNLP 2026: a main-conference paper by Jing Liu and Marianne Schweitzer, and two keynotes by Abdellah Fourtassi at the LM Playschool Workshop and by Mitja Nikolaus at the BabyLM Workshop.",
    "links": [
      {
        "label": "Paper",
        "url": "https://aclanthology.org/2026.emnlp-main.2489/"
      },
      {
        "label": "LM Playschool",
        "url": "https://lm-playschool.github.io/"
      },
      {
        "label": "BabyLM Workshop",
        "url": "https://babylm.github.io/Workshop_times.html"
      }
    ]
  },
  {
    "year": "2026",
    "text": "CoCoDev has been awarded funding from the French National Research Agency (ANR) for GLAD: Grounded Language Development: A Unified Framework for Learnability Studies. The project will recruit a research engineer and a PhD candidate.",
    "link": {
      "label": "Recruitment information",
      "url": "/join/"
    }
  },
  {
    "year": "2026",
    "text": "CoCoDev co-organized the Workshop on Developmental AI for Language and Cognition, held in Grenoble in October 2026.",
    "link": {
      "label": "Workshop webpage",
      "url": "https://www.ultraspeech.com/devai/devai-workshop-2026/"
    }
  },
  {
    "year": "2026",
    "text": "CoCoDev co-organized the 1st Workshop on Computational Developmental Linguistics at ACL 2026 in San Diego.",
    "link": {
      "label": "Workshop webpage",
      "url": "https://comp-dev-ling.github.io/"
    }
  }
];
