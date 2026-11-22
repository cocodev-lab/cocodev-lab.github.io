/**
 * Professional profile checked against the live PI homepage and CV on
 * 21 November 2026. Primary source: https://afourtassi.github.io/assets/files/cv.pdf
 * (Academic Appointments & Roles / Education / Funding, p. 1; Mentorship,
 * pp. 4–5; Teaching / Service / Outreach, p. 5).
 * The public CV remains the complete downloadable record.
 * Source inconsistencies in other directories were not used to override the CV.
 */
export interface ProfessionalEntry {
  title: string;
  period: string;
  detail?: string;
  url?: string;
}

export const profile = {
  name: 'Abdellah Fourtassi',
  title: 'Associate Professor in Computer Science · HDR',
  university: 'Aix-Marseille University',
  email: 'abdellah.fourtassi@lis-lab.fr',
  cv: '/assets/files/abdellah-fourtassi-cv.pdf',
  scholar: 'https://scholar.google.fr/citations?user=d4LZM90AAAAJ&hl=en',
  bluesky: 'https://bsky.app/profile/fourtassi.bsky.social',
  linkedin: 'https://www.linkedin.com/in/abdellah-fourtassi-9430b0ba/',
};

export const currentAppointments: ProfessionalEntry[] = [
  { period: '2025–present', title: 'Associate Professor (Maître de Conférences, HDR) in Computer Science', detail: 'Aix-Marseille University' },
  { period: '2019–present', title: 'Founder and Director, CoCoDev research group', detail: 'Computational Communicative Development, Aix-Marseille University' },
  { period: '2024–present', title: 'Deputy Director for Research, ILCB', detail: 'Institute of Language, Communication and the Brain', url: 'https://www.ilcb.fr/' },
  { period: '2025–present', title: 'Co-lead, NLP & Cognition national working group', detail: 'CNRS GDR TAL' },
];

export const previousAppointments: ProfessionalEntry[] = [
  { period: '2019–2025', title: 'Assistant Professor (Maître de Conférences) in Computer Science', detail: 'Aix-Marseille University' },
  { period: '2021–2022', title: 'Visiting Researcher, INRIA Paris', detail: 'Délégation Recherche' },
  { period: '2020–2021', title: 'Co-Director, Master in Cognitive Science (MASCO)', detail: 'Aix-Marseille University' },
  { period: '2016–2019', title: 'Postdoctoral Research Fellow, Department of Psychology', detail: 'Stanford University' },
];

export const education: ProfessionalEntry[] = [
  { period: '2024', title: 'Habilitation à diriger des recherches (HDR)', detail: 'NLP for the Ecological Study of Language Acquisition.', url: 'https://osf.io/preprints/psyarxiv/6hevx_v1' },
  { period: '2015', title: 'PhD in Cognitive Science', detail: 'École Normale Supérieure, Paris · summa cum laude' },
  { period: '2012', title: 'Master’s in Cognitive Science (CogMaster)', detail: 'EHESS, Paris' },
  { period: '2012', title: 'Science and Engineering Diploma', detail: 'École Polytechnique, Paris' },
  { period: '2006–2008', title: 'CPGE/MP*, Mathematics and Physics', detail: 'Lycée Moulay Youssef, Rabat' },
];

export const currentTeaching: ProfessionalEntry[] = [
  { period: '2025–present', title: 'Building Minds: The Programming Tools', detail: 'Master in Cognitive Science (MASCO)' },
  { period: '2024–present', title: 'Machine Learning for Cognitive Science', detail: 'MASCO and Master in Computer Science, with T. Schatz' },
  { period: '2025–present', title: 'Data Science', detail: 'L1 Computer Science' },
];

export const otherTeaching: ProfessionalEntry[] = [
  { period: '2025, 2026', title: 'ILCB Summer School', detail: 'Week-long courses on deep learning and language development', url: 'https://www.ilcb.fr/' },
  { period: '2023', title: 'When NLP Meets Cognitive Science', detail: 'ETAL National Summer School on Natural Language Processing' },
  { period: '2022–2023', title: 'Introduction to Machine Learning', detail: 'L3 Computer Science' },
  { period: '2020–2023', title: 'Introduction to Natural Language Processing', detail: 'M1 Computer Science' },
  { period: '2022', title: 'Probability Theory for Computer Science', detail: 'M1 Computer Science' },
  { period: '2020–2022', title: 'Theories in Cognitive Science', detail: 'Master in Cognitive Science (MASCO)' },
];

export const funding: ProfessionalEntry[] = [
  { period: '2026–2030', title: 'GLAD — Grounded Language Development: A Unified Framework for Learnability Studies', detail: 'ANR PRME · Principal Investigator · €380,000' },
  { period: '2022–2025', title: 'MACoMiC — Mastering the Art of Conversation in Middle Childhood', detail: 'ANR JCJC · Principal Investigator · €287,000' },
  { period: '2025–2028', title: 'What Makes Social Interaction a Powerful Learning Tool', detail: 'Leverhulme Trust · International Co-PI · £290,000; PI: G. Vigliocco, UCL' },
];

export const editedCollections: ProfessionalEntry[] = [
  { period: '2026', title: 'Proceedings of the 1st Workshop on Computational Developmental Linguistics', detail: 'ACL · Co-editor and Program Chair', url: 'https://comp-dev-ling.github.io/' },
  { period: '2025', title: 'Neural and Behavioral Mechanisms of Social Learning', detail: 'Frontiers in Human Neuroscience · Co-edited with Laura Agee and Marie Monfils', url: 'https://www.frontiersin.org/research-topics/56307/neural-and-behavioral-mechanisms-of-social-learning' },
  { period: '2024', title: 'Language Learning, Representation, and Processing in Humans and Machines', detail: 'Computational Linguistics · Co-edited with Marianna Apidianaki and Sebastian Padó', url: 'https://direct.mit.edu/coli/issue/50/4' },
];

export const honors: ProfessionalEntry[] = [
  { period: '2019', title: 'Marie Skłodowska-Curie European Fellowship', detail: '€185,000; declined upon accepting a faculty position at Aix-Marseille University' },
  { period: '2018–2019', title: 'Stanford Data Science Seed Grant', detail: '$50,000; project conceived and led by me, with Michael C. Frank as formal PI' },
  { period: '2016–2018', title: 'Fyssen Foundation Postdoctoral Study Grant', detail: '€40,000' },
  { period: '2015–2016', title: 'France-Stanford Collaborative Award', detail: '$15,000; project conceived and led by me, with Michael C. Frank and Emmanuel Dupoux as formal PIs' },
  { period: '2014', title: 'CoNLL Best Paper Award finalist', detail: 'Fourtassi & Dupoux' },
  { period: '2013', title: 'ACL Best Student Paper Award', detail: 'Fourtassi & Dupoux · $1,000' },
];

export const talks: ProfessionalEntry[] = [
  { period: '2026', title: 'LM Playschool Workshop, EMNLP', detail: 'Invited keynote', url: 'https://lm-playschool.github.io/' },
  { period: '2026', title: 'Child Language Symposium', detail: 'Keynote: AI and the Question of Language Learnability', url: 'https://cls2026.netlify.app/' },
  { period: '2025', title: 'SIGDIAL', detail: 'Keynote: The Primary Role of Dialogue in Language Development', url: 'https://2025.sigdial.org/keynotes/' },
  { period: '2025', title: 'AI for Education workshop', detail: 'Keynote: What Children’s Learning Can Teach LLMs', url: 'https://ia-edu.lis-lab.fr/2025/index.html' },
  { period: '2024', title: 'Mila–Quebec AI Institute', detail: 'AI for the Ecological Study of Language Development', url: 'https://www.youtube.com/watch?v=s6bkscv9xBk' },
  { period: '2026–present', title: 'CIFAR Horizon Network: Learning through Conversation' },
  { period: '2025', title: 'International Congress of Infant Studies', detail: 'Expert meeting on machine learning for home audio recordings' },
  { period: '2022', title: 'Dagstuhl Workshop: Developmental Machine Learning' },
  { period: '2021', title: 'OECD Workshop: AI and the Productivity of Science' },
];

export const editorialRoles: ProfessionalEntry[] = [
  { period: '2026–present', title: 'Associate Editor, Dialogue & Discourse' },
  { period: '2023–2025', title: 'Associate Editor, Frontiers in Cognitive Neuroscience' },
  { period: '2024', title: 'Guest Editor, Computational Linguistics', detail: 'With Marianna Apidianaki and Sebastian Padó' },
  { period: '2026', title: 'Program Chair, 1st Workshop on Computational Developmental Linguistics at ACL' },
  { period: '2025; 2027 upcoming', title: 'Senior Area Chair, COLING' },
  { period: '2027, upcoming', title: 'Senior Area Chair, ACL' },
  { period: '2025–present', title: 'Area Chair, ACL Rolling Review' },
  { period: '2026', title: 'Meta-Reviewer, CogSci' },
];

export const service: ProfessionalEntry[] = [
  { period: '2026', title: 'Co-organizer, Workshop on Developmental AI', detail: 'CNRS GDR TAL and GDR Babylab, with M. Fort and T. Hueber', url: 'https://www.ultraspeech.com/devai/devai-workshop-2026/' },
  { period: '2026', title: 'Co-organizer, 1st Workshop on Computational Developmental Linguistics at ACL', url: 'https://comp-dev-ling.github.io/' },
  { period: '2026', title: 'Selection Committee, ANR–JST CREST', detail: 'France–Japan bilateral research funding' },
  { period: '2026', title: 'Co-organizer, CIVIS Europe-wide collaborative workshop', detail: 'With Marianne Jover' },
  { period: '2025', title: 'Co-organizer, national workshop on NLP & Cognition', detail: 'CNRS GDR TAL, with P. Denis and L. Prévot' },
  { period: '2025', title: 'Hiring panel, Associate Professor position in Computer Science', detail: 'Université de Lille' },
];

export const outreach: ProfessionalEntry[] = [
  { period: 'Forthcoming', title: 'What AI Tells Us About Language Development', detail: 'Chapter in the popular science book Parole de Neurones' },
  { period: '2026', title: 'Bringing the lab to the classroom', detail: 'ANR-funded Festival Explore' },
  { period: '2025', title: 'AI and Cognitive Science', detail: 'Photizo podcast interview' },
  { period: '2023', title: 'Nuit des chercheurs', detail: 'Interactive MACoMiC project stand' },
  { period: '2022', title: 'Infants learn the art of conversation before they speak', detail: 'The Conversation, with R. Bertrand and N. Nguyen', url: 'https://theconversation.com/les-bebes-apprennent-lart-de-la-conversation-avant-meme-de-savoir-parler-178658' },
];
