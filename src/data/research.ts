/** Research program adapted locally from the PI's existing research.md. */
export interface ResearchPublicationGroup {
  text: string;
  publicationSection: string;
}

export interface ResearchSection {
  id: string;
  title: string;
  introduction: string;
  publicationGroups: ResearchPublicationGroup[];
}

export const researchIntroduction = [
  'Our research program focuses on scaling the study of children’s language development to reflect the complexity of real-world learning environments, using large-scale data and machine learning.',
  'This approach helps us improve the ecological validity of scientific theories and develop practical tools that support language learning.',
  'We investigate the key elements that shape how children learn language: sensory input, cognitive mechanisms, and social interactions.',
];

export const researchSections: ResearchSection[] = [
  {
    id: 'sensory-input',
    title: 'Sensory input',
    introduction: 'Language development starts with the sensory experiences of children—the words they hear and the things they see. We collect and analyze data from these experiences to understand how their richness influences learning.',
    publicationGroups: [
      {
        text: 'One line of inquiry explores how children learn linguistic structures like sounds and grammar from natural speech. We focus on how they overcome variability and noise to form stable mental representations.',
        publicationSection: 'input1',
      },
      {
        text: 'We also examine how sensory input helps children map language onto conventional meanings. This involves not only recognizing visual referents like “apple” but also inferring abstract meanings for words such as “animal,” “yesterday,” or “twenty.”',
        publicationSection: 'input2',
      },
    ],
  },
  {
    id: 'cognitive-mechanisms',
    title: 'Cognitive mechanisms',
    introduction: 'While rich sensory input is crucial, children’s cognitive abilities determine how effectively this input is transformed into linguistic knowledge.',
    publicationGroups: [
      {
        text: 'We study the cognitive mechanisms children use to process sensory input, such as their ability to combine information from different modalities. Using cognitive modeling, we mathematically characterize these skills and make quantitative predictions about learning. We test these predictions both in the lab and in natural settings.',
        publicationSection: 'cognitive1',
      },
      {
        text: 'We also investigate how language is refined over months and years of development. Our methods allow us to study interactions between how knowledge is organized in a child’s long-term memory, such as their lexical network, and the characteristics of their natural learning environment.',
        publicationSection: 'cognitive2',
      },
    ],
  },
  {
    id: 'social-interactions',
    title: 'Social interactions',
    introduction: 'The transformation of sensory input into linguistic knowledge is facilitated by social interactions. We study early interactions between children and caregivers to understand how and when communicative skills emerge and how these skills support language acquisition.',
    publicationGroups: [
      {
        text: 'Automated tools enable us to analyze these interactions on a large scale as they naturally occur in children’s environments. We study how children communicate spontaneously, learning to take turns and coordinate shared meanings.',
        publicationSection: 'social1',
      },
      {
        text: 'We investigate how these communication skills influence the effectiveness of language learning. In particular, we use reinforcement learning to test the role of social feedback in the learning process.',
        publicationSection: 'social2',
      },
    ],
  },
];

export const researchClosing = 'We use machine learning to develop theories of language development that can be tested and refined in real-world settings. This ecological approach helps us assess the explanatory scope and practical relevance of our theories. It can guide the design of educational tools and therapeutic interventions grounded in theory, while practical challenges provide further opportunities to test those theories.';
