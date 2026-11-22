/** Seminar metadata retained from the existing site; descriptions copied from
 * https://cocodev1.gitlab.io/website/seminars/ on 21 November 2026.
 * Source TBA placeholders are intentionally omitted. Source wording is
 * preserved; historical logistics, Zoom links, and meeting credentials are excluded.
 */
export interface Seminar {
  date: string;
  title: string;
  speaker: string;
  affiliation: string;
  url: string | null;
  video: string | null;
  description?: string;
}

export const seminarCalendar = "https://calendar.google.com/calendar/u/0?cid=MnRwN280ZXQzbXJtb2F0NTEzaHAxdHQ4YW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ";

export const seminars: Seminar[] = [
  {
    "date": "June 27, 2024",
    "title": "Interactive Language Learning by Trials and Demonstrations",
    "speaker": "Ziqiao Ma",
    "affiliation": "University of Michigan",
    "url": "https://mars-tin.github.io/",
    "video": null,
    "description": "Humans are efficient language learners and inherently social creatures. Our language development is largely shaped by our social interactions, for example, the demonstration and feedback from caregivers. Contrary to human language learning, recent advancements in large language models have primarily adopted a non-interactive training paradigm, and refined pre-trained models through feedback afterward. In this work, we aim to examine how corrective feedback from interactions influences neural language acquisition from the ground up through systematically controlled experiments, assessing whether it contributes to learning efficiency in language models. We introduce a trial-and-demonstration (TnD) learning framework that incorporates three components: student trials, teacher demonstrations, and a reward conditioned on language competence at various developmental stages. Our experiments reveal that the TnD approach accelerates word acquisition for student models of equal and smaller numbers of parameters, and we highlight the significance of both trials and demonstrations. We further show that the teacher's choices of words influence students' word-specific learning efficiency, and a practice-makes-perfect effect is evident by a strong correlation between the frequency of words in trials and their respective learning curves. Our findings suggest that interactive language learning, with teacher demonstrations and student trials, can facilitate efficient word learning in language models."
  },
  {
    "date": "February 22, 2024",
    "title": "Do children and language models follow similar learning stages?",
    "speaker": "Linnea Evanson",
    "affiliation": "Ecole Normale Supérieure",
    "url": "https://fr.linkedin.com/in/linnea-evanson",
    "video": null,
    "description": "During language acquisition, children follow a typical sequence of learning stages, whereby they first learn to categorize phonemes before they develop their lexicon and eventually master increasingly complex syntactic structures. However, the computational principles that lead to this learning trajectory remain largely unknown. To investigate this, we here compare the learning trajectories of deep language models to those of children. Specifically, we test whether, during its training, GPT-2 exhibits stages of language acquisition comparable to those observed in children aged between 18 months and 6 years. For this, we train 48 GPT-2 models from scratch and evaluate their syntactic and semantic abilities at each training step, using 96 probes curated from the BLiMP, Zorro and BIG-Bench benchmarks. We then compare these evaluations with the behavior of 54 children during language production. Our analyses reveal three main findings. First, similarly to children, the language models tend to learn linguistic skills in a systematic order. Second, this learning scheme is parallel: the language tasks that are learned last improve from the very first training steps. Third, some - but not all - learning stages are shared between children and these language models. Overall, these results shed new light on the principles of language acquisition, and highlight important divergences in how humans and modern algorithms learn to process natural language."
  },
  {
    "date": "February 01, 2024",
    "title": "Human Question-Asking Strategies in Referential Visual Search",
    "speaker": "Alberto Testoni",
    "affiliation": "University of Amsterdam",
    "url": "https://albertotestoni.github.io/",
    "video": null,
    "description": "In recent years, a multitude of datasets of human–human conversations has been released for the main purpose of training conversational agents based on data-hungry artificial neural networks. Datasets of this sort represent a useful and underexplored source to validate, complement, and enhance cognitive studies on human behavior and language use. We present a method that leverages the recent development of powerful computational models to obtain the fine-grained annotation required to apply metrics and techniques from Cognitive Science to large datasets. Previous work in Cognitive Science has investigated the question-asking strategies of human participants by employing different variants of the so-called 20-question-game setting and proposing several evaluation methods. In my talk, I focus on GuessWhat, a task proposed within the Computer Vision and Natural Language Processing communities that is similar in structure to the 20-question-game setting. Crucially, the GuessWhat dataset contains tens of thousands of dialogues based on real-world images, making it a suitable setting to investigate the question-asking strategies of human players on a large scale and in a natural setting. Our results demonstrate the effectiveness of computational tools to automatically code how the hypothesis space changes throughout the dialogue in complex visual scenes. On the one hand, we confirm findings from previous work on smaller and more controlled settings. On the other hand, our analyses allow us to highlight the presence of “uninformative” questions (in terms of Expected Information Gain) at specific rounds of the dialogue. We hypothesize that these questions fulfill pragmatic constraints that human players exploit to solve visual tasks in complex scenes successfully. Our work illustrates a method that brings together efforts and findings from different disciplines to gain a better understanding of human question-asking strategies on large-scale datasets, while at the same time posing new questions about the development of conversational systems."
  },
  {
    "date": "June 21, 2023",
    "title": "Interactive Robot Learning",
    "speaker": "Mohamed Chetouani",
    "affiliation": "Sorbonne Universite, ISIR-UPMC",
    "url": "https://www.isir.upmc.fr/personnel/chetouani/",
    "video": null,
    "description": "In this talk, we focus on main methods and models enabling humans to teach embodied social agents such as social robots, using natural interaction. Humans guide the learning process of such agents by providing various teaching signals, which could take the form of feedback, demonstrations and instructions. This overview describes how human teaching strategies are incorporated within machine learning models. We detail the approaches by providing definitions, technical descriptions, examples and discussions on limitations. We also address natural human biases during teaching. We then present applications such as interactive task learning, robot behavior learning and socially assistive robotics. Finally, we discuss research opportunities and challenges of interactive robot learning"
  },
  {
    "date": "May 31, 2023",
    "title": "Social contingency facilitates infants’ vocabulary growth above and beyond word input",
    "speaker": "Elena Luchkina",
    "affiliation": "Northwestern university",
    "url": "https://www.elenaluchkina.com/",
    "video": null,
    "description": "We investigated the role of socially contingent interactions between infants and their parents in shaping infants’ language development. We hypothesized that infants who experience more socially contingent interactions would have larger vocabularies than infants who experience fewer such interactions. This hypothesis was motivated by our theoretical proposal that socially contingent interactions reveal the communicative and referential nature of words and qualitatively change their informational value for infants (Luchkina & Xu, 2022). We tested our hypothesis by annotating longitudinal video corpus of naturalistic parent-infant interactions when infants were 9 and 12 months to predict their vocabulary size and 12 and 18 months respectively. Our results show that infants’ experience with social contingency significantly predicts infants’ vocabulary and these predictive relations are separable from the effects of language input (types, tokens, MLU) and from the effects of infants’ attention to language input within socially contingent interactions."
  },
  {
    "date": "May 10, 2023",
    "title": "Automated Coding of Young Children’s Eye Movements",
    "speaker": "Yotam Erel",
    "affiliation": "Tel-Aviv University",
    "url": "https://yoterel.github.io/",
    "video": null,
    "description": "Technological advances in psychological research have enabled large-scale studies of human behavior and streamlined pipelines for automatic processing of data. However, studies of infants and children have not fully reaped these benefits, because the behaviors of interest, such as gaze duration and direction, even when collected online, still have to be extracted from video through a laborious process of manual annotation. Recent advances in computer vision raise the possibility of automated annotation of this video data. In this paper, we built on a system for automatic gaze annotation in young children, iCatcher (Erel et al., 2022), by engineering improvements, and then training and testing the system (hereafter, iCatcher+) on three datasets with substantial video and participant variability (214 videos collected in United States lab and field sites, 143 videos collected in Senegal field sites, and 265 videos collected via webcams in homes; participants aged 4 months-3.5 years). When trained on each of these datasets, iCatcher+ performed with near human-level accuracy on held-out videos on distinguishing “LEFT” versus “RIGHT”, and “ON” versus “OFF” looking behavior, across all datasets. This high performance was achieved at the level of individual frames, experimental trials, and study videos, held across participant demographics (e.g., age, race/ethnicity), participant behavior (e.g., movement, head position) and video characteristics (e.g., luminance), and generalized to a fourth, entirely held-out online dataset."
  },
  {
    "date": "May 03, 2023",
    "title": "Syntactic typology for self-repair and self-reformulation phenomena treatment: Perspectives on syntax acquisition",
    "speaker": "Luisa Fernanda ACOSTA CORDOBA",
    "affiliation": "Ecole Normale Supérieure de Lyon",
    "url": "http://www.icar.cnrs.fr/membre/lacosta/",
    "video": null,
    "description": "In this talk, I will first present the main results of a syntactic study on self-repair and self-refomulation on adult spoken French and Spanish. These two phenomena, which have different epistemic trajectories, have converged in few works: while reformulation is mainly treated in continental European linguistic studies, repair has been developed in Anglo-Saxon conversationalist approaches. Adopting a syntactic perspective, our work offers a typology that allows us to compare the frequency of both phenomena in a corpus entirely segmented into syntactic units. We have also been able to confirm and complement the description of existing tendencies described in other languages for the realization of self-repair. In the second part, we will try to show how these new observations on discursive production in interaction can help language acquisition studies."
  },
  {
    "date": "March 22, 2023",
    "title": "The role of social interaction in learning",
    "speaker": "Sara De Felice",
    "affiliation": "Institute of Cognitive Neuroscience, UCL",
    "url": "https://www.ucl.ac.uk/icn/institute-cognitive-neuroscience",
    "video": null,
    "description": "What is the role of social interaction in learning? In this talk I will present evidence showing how social interaction represent not only an important factor to consider when investigating human learning in ecologically valid settings, but also a catalyst for acquisition of new knowledge. We designed a paradigm where participants learned a series of unknown facts in different (social) learning contexts. First, I will show results from a series of experiments conducted online (N=179), including data from people with Autistic Spectrum Condition. Second, I will present a large functional Near Infra-Red Spectroscopy (fNIRS) hyperscanning study, where 27 dyads (N=54) learned in conversation with their partner, alternating roles between teacher and student, while audio, video, head-movement, physiology and brain data was collected. I will discuss results showing that brain-to-brain coherence could predict learning, and that the student-teacher brain coherence and learning relationship was modulated by social cues (joint attention and mutual eye-gaze). I will argue for a multimodal investigation of human social interaction, using a two-person neuroscience approach that links brain activity to behaviour."
  },
  {
    "date": "February 22, 2023",
    "title": "Robots for learning (Cancelled)",
    "speaker": "Wafa Johal",
    "affiliation": "University of Melbourne",
    "url": "https://wafa.johal.org/",
    "video": null,
    "description": "While robots for learning is an applied topic of Human-Robot Interaction (HRI), the context of learner-robot interaction is one of the most challenging and interesting for HRI research. Indeed the research in robots for learning often requires us to work with challenging populations (e.g., children, people with disabilities), it also requires challenging technical integration, and has very clear performance outcomes (i.e., learning gains). In some settings it even requires us to address robot-group interaction, autonomous decision making, joint attention, affective computing. Aiming to go beyond individual interfaces or projects, this talk will describe emreging research on the guidelines and principles for the design of learner-robot interaction."
  },
  {
    "date": "February 08, 2023",
    "title": "Language and culture internalization for human-like autotelic AI",
    "speaker": "Cédric Colas",
    "affiliation": "Massachusetts Institute of Technology",
    "url": "https://ccolas.github.io/about",
    "video": null,
    "description": "Building autonomous agents able to grow open-ended repertoires of skills across their lives is a fundamental goal of artificial intelligence (AI). A promising developmental approach recommends the design of intrinsically motivated agents that learn new skills by generating and pursuing their own goals—autotelic agents. But despite recent progress, existing algorithms still show serious limitations in terms of goal diversity, exploration, generalization or skill composition. This Perspective calls for the immersion of autotelic agents into rich socio-cultural worlds, an immensely important attribute of our environment that shapes human cognition but is mostly omitted in modern AI. Inspired by the seminal work of Vygotsky, we propose Vygotskian autotelic agents—agents able to internalize their interactions with others and turn them into cognitive tools. We focus on language and show how its structure and informational content may support the development of new cognitive functions in artificial agents as it does in humans. We justify the approach by uncovering several examples of new artificial cognitive functions emerging from interactions between language and embodiment in recent works at the intersection of deep reinforcement learning and natural language processing. Looking forward, we highlight future opportunities and challenges for Vygotskian autotelic AI research, including the use of language models as cultural models supporting artificial cognitive development."
  },
  {
    "date": "November 30, 2022",
    "title": "Coherence Models for Dialogue",
    "speaker": "Alessandra Cervone",
    "affiliation": "Amazon Alexa AI",
    "url": "https://alecervi.github.io/",
    "video": "https://drive.google.com/file/d/1jKtsTsMsbi_AuMoGhX6IQTrHmfjPH4Wh/view?usp=sharing",
    "description": "Coherence is an indispensable property of human communication, required for a meaningful discourse both in text and dialogue. However, notwithstanding recent progress, dialogue coherence still represents an unsolved challenge for current conversational AI technology. In this talk, we discuss approaches to modelling dialogue coherence relying on two key levels of human discourse: intentional and thematic. We propose to model intentional information using Dialogue Acts (DA) theory (Bunt, 2009); to model thematic information we rely on open-domain entities approaches (Barzilay and Lapata, 2008). Our work shows that these two aspects play a fundamental role in modelling dialogue coherence, both independently and combined"
  },
  {
    "date": "November 23, 2022",
    "title": "Marking questions with facial signals",
    "speaker": "Naomi Nota",
    "affiliation": "Max Planck Institute for Psycholinguistics",
    "url": "https://www.naominota.nl/",
    "video": "https://drive.google.com/file/d/1MgLXxXar8mc7om6brzzaCZ3hDU4JJ7hN/view?usp=sharing",
    "description": "Human communication critically rests on inferring the speaker’s communicative intent. In conversation, the most natural environment of language use, this has to happen extremely quickly, due to the fast-paced nature of verbal turn transitions. It is therefore essential to quickly understand the intended message to be able to plan and issue a timely response. Since human face-to-face communication is inherently multimodal, one hypothesis is that visual bodily signals accompanying spoken utterances may facilitate fast intent recognition. During this talk, I will present results from research that aimed to study the contribution of conversational facial signals to question identification using an experimental paradigm with VR. These results suggest that facial signals indeed form a critical part of multimodal face-to-face conversational interaction."
  },
  {
    "date": "November 16, 2022",
    "title": "CLASSIC-Utterance-Boundary: A Chunking-Based Model of Early Naturalistic Word Segmentation",
    "speaker": "Francesco Cabiddu",
    "affiliation": "Cardiff University",
    "url": "https://www.cardiff.ac.uk/people/research-students/view/1703911-",
    "video": "https://drive.google.com/file/d/1A-MOEUd9ppoeEfOyda0y2paHSj0SABlv/view?usp=sharing",
    "description": "Word segmentation is a crucial step in children’s vocabulary learning. While computational models of word segmentation can capture infants’ performance in small-scale artificial tasks, the examination of early word segmentation in naturalistic settings has been limited by the lack of measures that can relate models’ performance to developmental data. In this work, we extended CLASSIC (Jones et al., 2021) - a corpus-trained chunking model that can simulate several memory, phonological and vocabulary learning phenomena - to allow it to perform word segmentation using utterance boundary information (CLASSIC-UB). Further, we compared our model to children on a wide range of new measures, capitalizing on the link between word segmentation and vocabulary learning abilities. We show that the combination of chunking and utterance-boundary information used by CLASSIC-UB allows a better prediction of English-learning children's output vocabulary than other models."
  },
  {
    "date": "November 02, 2022",
    "title": "How Structural Equation Modeling can help us answer new research questions in Corpus Linguistics",
    "speaker": "Tove Larsson",
    "affiliation": "Northern Arizona University",
    "url": "https://tovelarssoncl.wordpress.com/",
    "video": "https://drive.google.com/file/d/1D5MI4A98TaJW0hTKnd6VxiBiIXWOTfel/view?usp=sharing",
    "description": "Despite recent advancements in statistical techniques used in corpus linguistics, there are still questions pertaining to the multivariate nature of language that our current methods cannot accommodate. In an effort to expand our analytic repertoire, this talk seeks to introduce Structural Equation Modeling (SEM) and discuss its great potential for corpus linguistic analysis. SEM is a powerful analytical framework that encompasses a large set of statistical techniques (e.g., path analysis, confirmatory factor analysis) (e.g., Hancock & Schoonen, 2015, Larsson, Plonsky, & Hancock, 2021). These models are commonly used in other social and behavioral sciences (including neighboring fields such as SLA) to investigate theories involving causal effects of one or more independent variables on one or more dependent variables. In this talk, I will, in an accessible and non-technical manner, (i) introduce measured variable path analysis and (ii) present a worked example. To be clear, my intent is not to introduce techniques that add unnecessary complexity to already sophisticated models (see the discussion of minimally sufficient statistical methods in Egbert, Larsson, & Biber, 2020), but rather to introduce tools that allow us to answer research questions that are beyond reach given current statistical methods."
  },
  {
    "date": "July 25, 2022",
    "title": "Prediction as a mechanism supporting language learning",
    "speaker": "Naomi Havron",
    "affiliation": "University of Haifa",
    "url": "https://hellraisen.wixsite.com/naomihavron",
    "video": "https://drive.google.com/file/d/12DvNlqJG07k5fdv6MVhiNSyJjmbU7wxh/view?usp=sharing",
    "description": "Young children can exploit the syntactic context of a novel word to narrow down its probable meaning (syntactic bootstrapping). I propose that syntactic bootstrapping relates to a larger cognitive model: predictive processing. According to this model, we perceive and make sense of the world by constantly predicting what will happen next in a probabilistic fashion. I will outline evidence that prediction operates within language acquisition and show how this framework helps us understand the way lexical knowledge refines syntactic predictions, and how syntactic knowledge refines predictions about novel words’ meanings. I end by discussing some challenges of applying the predictive processing framework to syntactic bootstrapping and propose new avenues to investigate in future work."
  },
  {
    "date": "July 18, 2022",
    "title": "The interplay between language and conceptual development (Cancelled)",
    "speaker": "Teodora Gliga",
    "affiliation": "University of East Anglia",
    "url": "https://research-portal.uea.ac.uk/en/persons/teodora-gliga",
    "video": null,
    "description": "Being able to notice similarities to group objects into categories is one of the earliest developing human abilities. In this talk, I will raise the possibility that perceptual category learning may only occur in optimal conditions created by particular experimental designs, in the lab. In contrast, I will suggest that category learning 'in the real world' requires some sort of supervision, most commonly taking the form of labeling the entities to be categorised. I will discuss how a new study of infants with reduced access to language early in life (i.e. deaf infants born to hearing families) may help us understand to what extent language input is critical for early conceptual development"
  },
  {
    "date": "July 11, 2022",
    "title": "Individual differences in mindreading in middle childhood and early adolescence",
    "speaker": "Rory T. Devine",
    "affiliation": "University of Birmingham",
    "url": "https://www.rorytdevine.org/",
    "video": "https://drive.google.com/file/d/1iAesmmMRgQfN_Dm2FjCK2NRkVdb_UTEu/view?usp=sharing",
    "description": "The ability to tune into others’ thoughts, feelings and desires, called ‘theory of mind’ or ‘mindreading’, has intrigued scholars since the early 1980s. Continued curiosity about theory of mind reflects, in part, growing evidence that its development extends across middle childhood and adolescence and that there are early-emerging and stable individual differences in children’s mindreading, which are purported to explain variation in children’s social lives. The aim of this talk is to shed light on the nature of individual differences in mindreading among school-aged children. Drawing on data from more than 1000 children aged between 7 and 13 years, I will examine whether machine learning can be used to capture individual differences in children’s ability to read others’ minds. I will investigate whether individual differences in children’s theory of mind test performance are socially meaningful by examining links with peer- and teacher-rated social adjustment. Finally, I will consider whether difficulties with mindreading in middle childhood and early adolescence cross-cut traditional domains of youth mental health."
  },
  {
    "date": "July 04, 2022",
    "title": "The interplay between linguistic prosody and body movements in language acquisition",
    "speaker": "Núria Esteve Gibert",
    "affiliation": "Open University of Catalonia",
    "url": "https://nuriaestevegibert.weebly.com/",
    "video": "https://drive.google.com/file/d/1lrmQUj3TwdJyIn-bXX25ZJPyt9Ylu1y9/view?usp=sharing",
    "description": "Speakers combine speech with gestures to communicate with each other. This talk will focus on one aspect of speech, linguistic prosody, that joins forces with body movements to express and comprehend linguistic meaning. The interplay between prosody and body movements is particularly intriguing in language development, because the infants' and children's use of these strategies seems to preceed, and even boostrap, the emergene of other linguistic abilities. I will present evidence that young infants perceive the temporal interconnectedness between prosodic and gesture cues before entering the lexical stage, and that they use this sensitivity to process the pragmatic intent of basic speech acts, I will also show that later in development body gestures precede, and entrain, the emergence of prosodic abilities for pragmatic purposes, and that children with neurodevelopmental disorders may benefit from these multimodal cues to overcome their linguistic and pragmatic deficits."
  },
  {
    "date": "June 20, 2022",
    "title": "Real crosslinguistic research: Focussing on the similarities, not the differences",
    "speaker": "Ben Ambridge",
    "affiliation": "University of Manchester",
    "url": "https://personalpages.manchester.ac.uk/staff/ben.ambridge/",
    "video": "https://drive.google.com/file/d/1dOxbFxflfeJ9DarLjuBEbu69nPVqxFaq/view?usp=sharing",
    "description": "Most accounts of child language acquisition fail because they are designed to explain findings from only a single language (most often, of course, English). Studies that do include more than one language often focus on differences rather than similarities (English children do this because English is like this; Lithuanian children do that because Lithuanian is like that), and thus fail to significantly advance our understanding of the mechanisms and processes that allow children to learn any language. In this talk I will outline three research projects that involve what I am provocatively calling real crosslinguistic research – running more-or-less the same study across different languages, focussing on the similarities, not the differences. First, I will summarize several studies of inflectional noun and verb morphology, primarily across Polish, Finnish and Estonian, but with some brief excursions into Lithuanian and Japanese. Across all of these languages, children’s errors pattern according to word-form frequency and (where studied) phonological neighbourhood density. Second, I will summarize almost-identical adult grammaticality judgment studies of passives in English, Indonesian, Mandarin, Balinese and Hebrew. Across all five languages, the relative acceptability of passives (but not other constructions with similar word order) is predicted by verb semantics, specifically the extent to which the passive subject is affected/changed by the action. Third, I will summarize almost-identical adult and child grammaticality judgment studies of causatives across English, Hebrew, Hindi, Japanese and K’iche’ Mayan. The relative acceptability of more- vs less-transparent causative forms (e.g., He broke the stick vs He made the stick break) is again predicted by verb semantics; here, the extent to which the caused and causing event merge into one. I will end by arguing that these finding are best explained by an exemplar model of language acquisition, and by presenting some findings from simple computational models that instantiate many of the assumptions of such an approach."
  },
  {
    "date": "May 30, 2022",
    "title": "Mutual understanding from a multimodal and interactional perspective",
    "speaker": "Marlou Rasenberg",
    "affiliation": "Radboud University",
    "url": "https://www.mpi.nl/people/rasenberg-marlou",
    "video": "https://drive.google.com/file/d/1FrOiUrEh4tHPEg7ZBKgnaz8MLjlLE2zY/view?usp=sharing",
    "description": "How do people establish mutual understanding in social interactions? In this talk I present evidence showing this is a multimodal, collaborative process. Whenever recipients experience problems with hearing or understanding, senders and recipients work together to solve the trouble in the most cost-efficient way possible, minimizing the joint multimodal effort for the dyad as whole. I present examples of how people use speech and co-speech gestures in such other-initiated sequences, and how this involves (different forms of) cross-participant alignment."
  },
  {
    "date": "May 16, 2022",
    "title": "How universal are the acoustic properties of infant-directed speech (IDS)? Insights from a large-scale meta-analysis & an acoustic analysis of Danish IDS",
    "speaker": "Christopher Cox",
    "affiliation": "Aarhus University",
    "url": "https://chriscox.netlify.app/",
    "video": "https://drive.google.com/file/d/1rLObSRU2vE6eEjh4rcyuZasVsgHHrlxa/view?usp=sharing",
    "description": "When speaking with infants, adults often produce speech that differs systematically from that directed to other adults. The acoustic properties of this speech style have been widely documented, and some clear patterns have emerged across languages. However, is IDS truly a universal phenomenon, and what function could it serve during infant development?"
  },
  {
    "date": "May 09, 2022",
    "title": "Learning topoi in L1 acquisition",
    "speaker": "Ellen Breitholtz",
    "affiliation": "University of Gothenburg",
    "url": "https://www.gu.se/en/about/find-staff/ellenbreitholtz",
    "video": null,
    "description": "Children's acquisition of language requires their learning of not just words/concepts and linguistic structure but how these interact in dialogue with knowledge about the world, our interlocutors, the shared environment, and social norms. We are interested in how children acquire the rhetorical resources that they need in dialogue, and how these support further learning and interaction. On our account, these topoi are the underpinning warrants for incomplete enthymematic arguments conveyed in dialogue. We illustrate our account with examples from dialogues with children that demonstrate the topoi which they have learned -- particularly in cases where these topoi are unexpected from the adult language user's perspective."
  },
  {
    "date": "May 02, 2022",
    "title": "In search of an early mother-infant dyadic coordination",
    "speaker": "Marianne Jover",
    "affiliation": "Aix-Marseille University",
    "url": "https://www.researchgate.net/profile/Marianne-Jover",
    "video": "https://drive.google.com/file/d/1WeG7bxEe_5ioPCOTC-LOuxqsTvMf88nP/view?usp=sharing",
    "description": "I will present a work in progress which focus on motor analysis of dyadic interaction. The purpose of this project was to examine the early mother-infant dyadic interaction and to trace the contribution of motor activity during the first months after birth. We expected advanced recording and analysis methods (mocap and time-series analysis) to provide a relevant way of analyzing the early temporal organization of the interaction at the motor level and its changes in the course of the first semester after birth. Using a motion capture system, we recorded a mother and her infant’s motor activity during interactive sequences when the child was 1 months, 2 months, 3 months, and 6 months. We explored with this pilot, the bodily coordination between a mother and her child from the first to the sixth month and the time lags of infant bursts/drops of activity relative to those of her mother and vice versa."
  },
  {
    "date": "April 25, 2022",
    "title": "Motor-vocal coordination in early language development.",
    "speaker": "Eva Murillo",
    "affiliation": "Universidad Autónoma de Madrid",
    "url": "https://www.researchgate.net/profile/Eva-Murillo",
    "video": "https://drive.google.com/file/d/15VMVRNFFU2f255zVXV89KHD1cX-aejNE/view?usp=sharing",
    "description": "The tightly coupling between gestures and speech seen in adult language, is already observed between the communicative gestures and the first words produced by children during early language development. The use of communicative behaviors combining gestures, vocalizations, and social use of gaze at the end of the first year of life is a good predictor of lexical development during the second year. In fact, there is growing evidence suggesting that children coordinate gestures and vocal elements even before they start producing their first words, and that this synchrony is related to subsequent lexical development. Considering this, the questions that arises is how vocal and motor components relate to each other in the transition from canonical babbling and rhythmic hand movements combinations to the early gesture-verbal productions. In this talk I will present some results from our current project focused onthe production of multimodal behaviors including rhythmic movements, object use, and vocal elements, and its relationship with the early deictic gestures production."
  },
  {
    "date": "April 11, 2022",
    "title": "Communicative pressure on caregivers scaffolds children's language learning",
    "speaker": "Dan Yurovsky",
    "affiliation": "Carnegie Mellon University",
    "url": "https://danyurovsky.com",
    "video": "https://drive.google.com/file/d/1lxQKitCAnXhOma_O8mtI5abk8_FhhrzP/view?usp=sharing",
    "description": "By the time toddlers are able to run down the street, they are already producing over a thousand words of their native language. How do they get so much learning done in so little time? A key piece of the puzzle is that children do not learn language on their own, but in interactions with caregivers motivated to communicate with them. Using a combination of corpus analyses, experimental data, and computational models, I will argue that this communicative pressure both structures the input children learn from, and magnifies the power of children's developing capacities."
  },
  {
    "date": "March 28, 2022",
    "title": "Predicting individual differences in language learning across populations",
    "speaker": "Patrick Wong",
    "affiliation": "The Chinese University of Hong Kong",
    "url": "http://brain.cuhk.edu.hk/",
    "video": "https://drive.google.com/file/d/1H7Y1oRwGfHLmgKv-Jf6MuG_0uLFKoq2Z/view?usp=sharing",
    "description": "Children’s rank-order language developmental stability provides an opportunity to predict future language development with data collected in earlier years of life. In our research, we capitalize on this opportunity to evaluate hypotheses concerning language development across different typical and atypical populations. Direct biological measurements from young children as well as their health and family information are used to construct predictive models for individual-child predictions. These models provide the basis to address different questions about neural processing and language. For example, in typically developing children, we ask whether cortical and subcortical development interacts with native and non-native speech processing in infancy, and whether this interaction provides a basis for prediction of future development. In children who are hearing impaired, we examine whether brain regions that are most resilient to reduced auditory/spoken language input, measured via MRI before cochlear implantation (CI), enable a compensatory pathway to support better language development after CI. In both typical and atypical populations, we are in the process of testing whether individual-child predictions can inform the design and prescription of different types of early intervention and enhancement strategies in order to optimize language development for all children"
  },
  {
    "date": "March 14, 2022",
    "title": "Dyslexia in children across languages",
    "speaker": "FatimaEzzahra Benmarrakchi",
    "affiliation": "UM6P - School of Collective Intelligence",
    "url": "https://sites.google.com/view/fzbenmarrakchi/home?authuser=0",
    "video": "https://drive.google.com/file/d/1yxsWOzebIpgwhPFz9hcu-23oGBNo5kcN/view?usp=sharing",
    "description": "If you are dyslexic while reading English, are you dyslexic while reading Arabic? Dyslexia is one of the most common specific learning disabilities, it is a neurological and language-based learning disability manifested by the difficulty in learning to read, despite conventional instruction, adequate intelligence and sociocultural opportunity. Besides, the characteristics of the Language and cultural factors play important roles in the difficulties associated with this learning disability. In the first part of this talk, I will explore the manifestation of dyslexia across different language orthographies (e.g, Arabic, French, English). In the second part of this talk, I will present the reading and writing experiences of Moroccan children with dyslexia (Arabic native speakers)."
  },
  {
    "date": "February 28, 2022",
    "title": "Extending the language architecture: Evidence from multimodal language use, processing and acquisition",
    "speaker": "Asli Ozyurek",
    "affiliation": "Donders Institute for Brain, Cognition and Behavior",
    "url": "https://www.mpi.nl/people/ozyurek-asli",
    "video": "https://drive.google.com/file/d/1yzf3A3yWiEdItLiv5O_sIRL_YFkdy06U/view?usp=sharing",
    "description": "One of the unique aspects of human language is that in face-to-face communication it is universally multimodal (e.g., Holler and Levinson, 2019; Perniss, 2018). All hearing and deaf communities around the world use vocal and/or visual modalities (e.g., hands, body, face) with different affordances for semiotic and linguistic expression (e.g., Goldin-Meadow and Brentani, 2015; Vigliocco et al., 2014; Özyürek and Woll, 2019). What is crucial is that visual articulators in both cospeech gesture and sign, unlike in speech, have unique affordances for visible, dynamic, iconic (i.e. motivated from meaning mappings), indexical (e.g., pointing) and simultaneous expressions which are recruited frequently in both adult and child language. However such representational formats have been considered in traditional linguistics as being “external” to the main architecture of language system- as they do not fit in the so-called fundamental arbitrary, discrete, categorical and sequential design features of language (mostly characteristics of speech or text). I will however argue for and show evidence that both spoken languages and sign languages combine and integrate visible modality-specific expressions with arbitrary, categorical and sequential expressions in their structures. Furthermore they modulate language use, (neuro-cognitive) language processing and acquisition suggesting that they are an integral part of a unified multimodal language. (e.g., Özyürek, 2014; 2021; Ortega et al., 2017) In this light, I will argue that proposals for the independence and parallelism of form and meaning as constituting the fundamental architecture of language need to be reconsidered.I will end my talk with discussion on how a multimodal view of language (but not unimodal one based on speech or text only) is needed to explain the dynamic, adaptive and flexible aspects of our language system and how it can optimally bridge the human biological, cognitive and learning constraints to the interactive, culturally varying communicative requirements of face-to-face context."
  },
  {
    "date": "February 21, 2022",
    "title": "A holistic measure of inter-annotation agreement with continuous data",
    "speaker": "Rachid Riad",
    "affiliation": "École Normale Supérieure - Inria - Inserm",
    "url": "https://github.com/bootphon/pygamma-agreement/",
    "video": null,
    "description": "Inter-rater reliability/agreement measures the degree of agreement among raters to describe, code or assess the same phenomenon. Most coefficients (ex: α, κ) measuring these agreements in psychology and natural sciences focus on the categorization of events. Yet, the annotations of speech and especially conversational spontaneous speech represent a complex continuous phenomenon to annotate. There is not only categorization but also the localization of events that is asked from annotators, referred to as unitizing. In this presentation, we will describe the gamma agreement γ introduced by Mathet et al. 2015 and our work to extend this measure with the python package 'pygamma-agreement'. We illustrate the use of this measure with corpora coming from (1) daylong recordings to study language acquisition, and (2) interviews at the hospital to study speech pathologies."
  },
  {
    "date": "December 17, 2021",
    "title": "Acquiring grammar interactively: from natal crying to 2 words",
    "speaker": "Jonathan Ginzburg",
    "affiliation": "Université de Paris",
    "url": "https://sites.google.com/site/jonathanginzburgswebsite/",
    "video": "https://www.youtube.com/watch?v=nLZgO25Fxm8"
  },
  {
    "date": "December 10, 2021",
    "title": "Pros and cons of zoom-based conversational research and unmoderated online studies",
    "speaker": "Open discussion",
    "affiliation": "",
    "url": null,
    "video": null
  },
  {
    "date": "December 03, 2021",
    "title": "Evaluation of computational models of language development using cumulative empirical data",
    "speaker": "Okko Räsänen",
    "affiliation": "Tampere University",
    "url": "https://webpages.tuni.fi/specog/index.html",
    "video": null,
    "description": "Computational models of child language development are algorithms that try to mimic infant language learning. Traditionally, such models have been focusing on individual language capabilities, such as phonetic category learning or word segmentation. However, recent advances in machine learning are enabling increasingly powerful models — models that can gradually start to address multiple aspects of language learning within a single learning architecture. Having this type of integrated models of language development would have significant impact on child language research, as it is still unclear how different bits and pieces of empirical findings, earlier capability-specific models, and high-level theories of language learning can be put together to obtain the big picture of the language learning process. However, in order to develop more accurate, holistic, and hence impactful models of infant language learning, we also need evaluation practices that compare model behavior to robust empirical data from infants across a range of language capabilities. Moreover, we need practices that can compare developmental trajectories of infants to learning trajectories of models, when these models are trained with increasing amounts of language input. In this talk, we will describe our recent work in attempting to address these needs. More specifically, we will introduce the idea of comparing models to large-scale and cumulative empirical data from infants, as quantified by meta-analyses conducted across a large number of individual behavioral studies, and as applicable to a range of language phenomena in parallel. We will present a basic conceptual framework for meta-analytic evaluation of computational models, and discuss the advantages, challenges, and limitations of the approach as a basis for future discussion and work in this direction."
  },
  {
    "date": "November 26, 2021",
    "title": "Testing sound symbolism in human and non-human primates",
    "speaker": "Konstantina Margiotoudi",
    "affiliation": "Aix-Marseille Uinversity",
    "url": "https://www.researchgate.net/profile/Konstantina-Margiotoudi",
    "video": "https://www.youtube.com/watch?v=s_ms4-X8wuw",
    "description": "As opposed to the classic Saussurean view on the arbitrariness of the linguistic sign, iconicity is a pervasive feature of human language. Iconicity in vocal communication is known as sound symbolism – the intrinsic relationship between meaningless speech sounds and visual shapes. The most popular demonstration of sound symbolism is the 'maluma-takete' effect, in which a 'round' sounding pseudoword such as 'maluma' fits better to describe a curved visual shape, whereas a 'sharp’ sounding pseudoword, such as 'takete', fits better to describe a spiky abstract shape. Although sound symbolic effects have been reported across cultures and early in human development, it remains unclear whether this effect is an ability unique to humans or if it is present in other primate species. Here we tested the classic “maluma-takete” effect in a group of touch-screen trained chimpanzees and gorillas, but also in a touch-screen trained and language-competent bonobo. The results revealed no significant sound symbolic matching performance neither under an implicit nor an explicit task. Based on these findings, we suggest that the 'maluma-takete' mapping is plausibly an ability unique to humans. These results might be explained by neurobiological differences found between human and nonhuman great apes that are relevant to the mechanism supporting the 'maluma-takete' mapping."
  },
  {
    "date": "November 19, 2021",
    "title": "Computational study of active and interactive word learning",
    "speaker": "Lieke Gelderloos",
    "affiliation": "Tilburg University",
    "url": "https://lgelderloos.github.io/",
    "video": null,
    "description": "Models of cross-situational word learning typically characterize the learner as a passive observer. However, a language learning child can actively participate in verbal and non-verbal communication. We present a computational model that learns to map words to objects in images through word comprehension and production. The productive and receptive parts of the model can operate independently, but can also feed into each other. This introspective quality enables the model to learn through self-supervision, and also to estimate its own word knowledge, select optimal input, and thereby alter its own learning trajectory. The modular set-up is also suitable for testing effects of communicative feedback. In this talk, I will cover our findings regarding active selection of input, and present preliminary results on tests with communicative feedback."
  },
  {
    "date": "November 12, 2021",
    "title": "BabyBERTa: Learning More Grammar With Small-Scale Child-Directed Language",
    "speaker": "Philip Huebner",
    "affiliation": "University of Illinos, Urbana-Champaign",
    "url": "https://psychology.illinois.edu/directory/profile/huebner3",
    "video": "https://www.youtube.com/watch?v=quAlxbkN9Hg",
    "description": "Transformer-based language models have taken the NLP world by storm. However, their potential for addressing important questions in language acquisition research has been largely ignored. In this work, we examined the grammatical knowledge of RoBERTa (Liu et al., 2019) when trained on a 5M word corpus of language acquisition data to simulate the input available to children between the ages 1 and 6. Using the behavioral probing paradigm, we found that a smaller version of RoBERTa-base that never predicts unmasked tokens, which we term BabyBERTa, acquires grammatical knowledge comparable to that of pre-trained RoBERTa-base - and does so with approximately 15X fewer parameters and 6,000X fewer words. We discuss implications for building more efficient models and the learnability of grammar from input available to children. Lastly, to support research on this front, we release our novel grammar test suite that is compatible with the small vocabulary of child-directed input."
  },
  {
    "date": "November 05, 2021",
    "title": "Production practice is more effective than comprehension for second language learning",
    "speaker": "Elise Hopman",
    "affiliation": "University of Wisconsin-Madison",
    "url": "http://lcnl.wisc.edu/elise-hopman/",
    "video": "https://www.youtube.com/watch?v=l_c8B5SIUVk",
    "description": "Whereas most classroom-based language instruction traditionally emphasizes comprehension-based learning, memory research suggests that language production activities may provide a stronger learning experience than comprehension practice, due to the meaningfully different task demands involved in producing versus comprehending language. Using both artificial and natural language learning experiments with adults, I show that production exercises are more effective than comprehension exercises for learning the vocabulary and grammar of a foreign language. I will discuss these findings in the broader context of research implying that production and production-like activities might play a privileged role during learning more generally."
  },
  {
    "date": "October 29, 2021",
    "title": "Perceptual development in infants and unsupervised representation learning in machines",
    "speaker": "Thomas Schatz",
    "affiliation": "Aix-Marseille University",
    "url": "https://thomas.schatz.cogserver.net/",
    "video": null,
    "description": "I will present my work at the interface between cognitive science and artificial intelligence, with a focus on ongoing research projects that I would like to develop at AMU. Through case studies involving early phonetic learning, probabilistic generative models, high-level auditory perception, spiking reservoir neural nets and auditory memory, I will argue that recent developments in unsupervised representation learning in machines open new avenues for understanding human perceptual development and, conversely, that the study of human perceptual development can inspire new developments in unsupervised representation learning in machines."
  },
  {
    "date": "October 22, 2021",
    "title": "Smiles and Laughs in Human-Agent Interaction",
    "speaker": "Kevin El Haddad",
    "affiliation": "University of Mons",
    "url": "https://dblp.org/pid/166/6544.html",
    "video": null,
    "description": "Smiles and laughs (S&L) are among the most frequent and informative non-verbal expressions used in our daily interactions. Their incorporation into machine's communication skills is therefore a must in order to improve human-agent interaction (HAI) applications quality (among other aspects), whether it is on the detection/perception side or on the generation/production side.This presentation will focus on our efforts aiming at providing a better understanding of S&L conversational dynamics as well as implementing them in HAI modules. We will present our contributions and ongoing work in synthesis, recognition and prediction technologies as well as resources we propose to the community with the hope that this same community will help us improve them through collaboration or other contributions. I strongly believe that, with the limited resources available in the scientific communities, the more people get involved, the more we can accelerate the integration of S&L, and by extension nonverbal expressions in general, in HAI applications. So I look forward to meeting you during this talk"
  },
  {
    "date": "October 08, 2021",
    "title": "Language development as a joint process: Why the simultaneous learning of Form, Content, and Use is more a help than a hindrance",
    "speaker": "Abdellah Fourtassi",
    "affiliation": "Aix-Marseille University & INRIA Paris",
    "url": "https://sites.google.com/site/fourtassi/",
    "video": "https://www.youtube.com/watch?v=5vdvSA1nGno",
    "description": "To acquire language, children need to learn form (e.g., phonology), content (e.g., word meaning), and use (e.g., finding the right words to convey a communicative intent). Research in language development has traditionally studied these dimensions separately. Indeed, one could imagine that children first acquire the form, then associate form with content, and only then, learn how to use form and content adequately in a communicative context. The reality of the situation is that children have to deal with aspects of form, content and use simultaneously and experimental studies suggest that the timeline of acquisition of these dimensions largely overlap, indicating that children learn them in parallel, not one at a time. While this fact makes language acquisition seem even harder than we previously thought, here I argue that the joint learning of form, content, and use may be more a help than a hindrance: These dimensions are interdependent in many ways and can therefore constrain/disambiguate each other. I will illustrate this idea based on my previous and current research combining both experimental and computational modeling."
  },
  {
    "date": "September 24, 2021",
    "title": "Computational modeling as a tool to study cognitive development and evolution",
    "speaker": "Manuel Bohn",
    "affiliation": "Max Planck Institute for Evolutionary Anthropology",
    "url": "https://manuelbohn.github.io/",
    "video": null,
    "description": "In this talk, I will present a series of studies on information integration during word learning in young children. We were interested in how children balance different (sometimes conflicting) information sources when making pragmatic inferences in context. An integral part of this work is the use of computational cognitive models as a tool to formalise theories about information integration and developmental change. Based on this work, I will present some ideas (and data) for how the same modeling framework could be used to study a) the communicative abilities of great apes and b) individual differences in children’s cognitive development."
  },
  {
    "date": "September 10, 2021",
    "title": "Linguistic alignment in parent-child verbal communication and gesture",
    "speaker": "Ruthe Foushee",
    "affiliation": "University of Chicago",
    "url": "https://ruthefoushee.com/",
    "video": null
  },
  {
    "date": "July 02, 2021",
    "title": "How looking at tasks can tell us more about language development",
    "speaker": "Christina Bergmann",
    "affiliation": "Max Planck Institute for Psycholinguistics",
    "url": "https://sites.google.com/site/chbergma/",
    "video": null,
    "description": "Work that focuses on how we measure children's knowledge may seem a hurdle towards discovery. In this talk, I will argue that inspecting the methods we use can tell us a great deal about the underlying mechanisms that generate measurable behavior, and highlight how these insights are key for theory building and computational modelling."
  },
  {
    "date": "June 18, 2021",
    "title": "Exploring language development in autistic and TD children",
    "speaker": "Riccardo Fusaroli",
    "affiliation": "Aarhus University",
    "url": "https://fusaroli.weebly.com/",
    "video": "https://www.youtube.com/watch?v=HxhyliErtDo",
    "description": "Language development is traditionally explored in terms of individual differences and/or linguistic environment. In this talk I will present a more comprehensive framework, where children actively engage and potentially the linguistic environment, and analogously adult speakers adapt to and engage the child production. I will also present initial investigations on a longitudinal corpus involving 32 autistic and 35 typically developing children followed for over 2 years between 2 and 5 years of age. The focus will be to predict language development relying on individual differences (e.g. verbal IQ, socialization skills), linguistic environment (amount of language, lexical richness, syntactic complexity) and conversational dynamics (linguistic alignment)."
  },
  {
    "date": "June 11, 2021",
    "title": "Linking Language evolution, language acquisition, and language diversity",
    "speaker": "Limor Raviv",
    "affiliation": "Max Planck Institute for Psycholinguistics",
    "url": "https://www.limorravivevolang.com/",
    "video": "https://www.youtube.com/watch?v=d8TEesMGMHU",
    "description": "What are the social, environmental, and cognitive pressures that shape the evolution of language in our species? Why are there so many different languages in the world? And how did this astonishing linguistic diversity come about?These are some of the most interesting questions in the fields of cognitive science and linguistics, and represent the range of topics discussed in my research so far. My work focuses on linking core aspects of language acquisition, language evolution, and language diversity using a range of novel behavioral paradigms and computational models. My goal is to shed light on the communicative pressures and cognitive constraints (e.g., memory limitations, efficiency) that shape social interaction and language use in our species, and to identify the social, environmental, and cross-cultural factors (e.g., population size) that lead to language diversity and to cross-linguistic variation. In this talk, I will provide an overview of my research in the past six years (including methods and results from selected projects), as well as present future directions and ongoing work."
  },
  {
    "date": "May 21, 2021",
    "title": "The transition from prelinguistic communication to word use in typically hearing and deaf infants",
    "speaker": "Danielle Matthews",
    "affiliation": "University of Sheffield",
    "url": "https://www.sheffield.ac.uk/psychology/people/academic/danielle-matthews",
    "video": "https://www.youtube.com/watch?v=5Ojoz0K22s0",
    "description": "Around the end of the first year infants make the transition from prelinguistic communication (babble, gesture, eye contact) to word use. I will present a series of studies that have 1) measured individual differences that predict this transition 2) tested experimentally if it is possible to promote learning and 3) compared deaf and hearing infants. Together these studies reveal the important role of the social environment in learning to talk."
  },
  {
    "date": "May 07, 2021",
    "title": "Linking Social Language Acquisition with Artificial Intelligence",
    "speaker": "Sho Tsuji",
    "affiliation": "University of Tokyo",
    "url": "https://sites.google.com/site/tsujish/home",
    "video": "https://www.youtube.com/watch?v=dkRs1d7zTD8",
    "description": "Theories and data on language acquisition suggest a range of cues are used, ranging from information on structure found in the linguistic signal itself, to information gleaned from the environmental context or through social interaction. We propose a blueprint for computational models of the early language learner (SCALa, for Socio-Computational Architecture of Language Acquisition) that makes explicit the connection between the kinds of information available to the social learner and the computational mechanisms required to extract language-relevant information and learn from it. SCALa integrates a range of views on language acquisition, further allowing us to make precise recommendations for future large-scale empirical research"
  },
  {
    "date": "April 23, 2021",
    "title": "Human becoming in and through social interaction",
    "speaker": "Dimitris Bolis",
    "affiliation": "Max Planck Institute of Psychiatry",
    "url": null,
    "video": "https://www.youtube.com/watch?v=bD3qoVvXWRs",
    "description": "Human becoming in and through social interaction"
  }
];
