export interface Person {
  name: string;
  role: string;
  photo?: string;
  url?: string;
  year?: string;
}

// Current supervision and completed PhDs/postdocs follow the live PI CV,
// checked on 21 November 2026 (Mentorship, pages 4–5). The displayed
// alumni list is limited to PhD and postdoctoral researchers. The documented
// visiting PhD is included with the concise role requested by the PI.
export const peopleSource = 'https://cocodev1.gitlab.io/website/members/';
export const supervisionSource = 'https://afourtassi.github.io/assets/files/cv.pdf';

export const principalInvestigator: Person = {
  name: 'Abdellah Fourtassi',
  role: 'Associate Professor, HDR in Computer Science, Aix-Marseille University',
  photo: '/assets/images/profile.png',
  url: '/people/abdellah-fourtassi/',
};

export const currentMembers: Person[] = [
  {
    name: 'Giulia Rambelli',
    photo: '/assets/people/giulia-rambelli.jpg',
    role: 'ILCB postdoctoral fellow',
    year: '2026–present',
  },
  {
    name: 'Monica Barbir',
    role: 'Marie Skłodowska-Curie postdoctoral fellow',
    photo: '/assets/people/Monica.jpeg',
    year: '2024–present',
  },
  {
    name: 'Marianne Schweitzer',
    role: 'PhD researcher',
    year: '2025–present',
  },
  {
    name: 'Youcef Brahimi',
    role: 'PhD researcher',
    year: '2025–present',
  },
  {
    name: 'Mathias Vigouroux',
    photo: '/assets/people/mathias-vigouroux.jpg',
    role: 'PhD researcher',
    year: '2025–present',
  },
  {
    name: 'Jing Liu',
    role: 'PhD researcher',
    photo: '/assets/people/jing.jpg',
    year: '2024–present',
  },
];

export const alumni: Person[] = [
  { name: 'Dhia Elhak Goumri', role: 'PhD researcher', photo: '/assets/people/dhia.png', year: '2022–2026' },
  { name: 'Abhishek Agrawal', role: 'PhD researcher', photo: '/assets/people/abhishek.png', year: '2022–2025' },
  { name: 'Kübra Bodur', role: 'PhD researcher', photo: '/assets/people/bodur.jpeg', year: '2022–2025' },
  { name: 'Mitja Nikolaus', role: 'PhD researcher', photo: '/assets/people/mitja-nikolaus.png', year: '2020–2023' },
  { name: 'Chiara Mazzocconi', role: 'Postdoctoral researcher', photo: '/assets/people/chiara-mazzocconi.png', year: '2020–2023' },
  { name: 'Judith Kalinowski', role: 'Visiting PhD', photo: '/assets/people/judith-kalinowski.jpg', year: '2023' },
  { name: 'Franck Dary', role: 'PhD researcher', year: '2018–2022' },
  { name: 'Francesco Cabiddu', role: 'Visiting PhD', photo: '/assets/people/francesco-cabiddu.jpg', year: '2022' },
];
