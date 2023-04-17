export const teacherArrays = [
    {
        id: 'koglin', 
        firstName: 'Troy', 
        lastName: 'Koglin', 
        sentralClass: ['12PHY01', '11PHY01', '10STY01', '10SCIASPA', '12INV02'],
        // activeClass: ['12PHY', '11PHY', '10STM', '10SCIASP', '12INV'],
        title: 'Mr',
        email: 'troy.koglin1@det.nsw.edu.au',
        active: true,
    },
    {
        id: 'crnogorcevic',
        firstName: 'Esen',
        lastName: 'Crnogorcevic',
        sentralClass: ['11CHE01', '10SCIASPB', '10PYY01', '9PYY01', '7SCI3'],
        title: 'Mrs',
        email: 'esen.crnogorcevic1@det.nsw.edu.au',
        active: true,

    },
    {
        id: 'smart',
        firstName: 'Glen',
        lastName: 'Smart',
        sentralClass: ['12MST01', '12MST02', '11MST01', '11MST03'],
        title: 'Mr',
        email: 'glen.smart@det.nsw.edu.au',
        active: true,

    },
    {
        id: 'ralstonBryce',
        firstName: 'Nathan',
        lastName: 'Ralston-Bryce',
        sentralClass: ['12INV01', '9SCIA2', '8SCI8', '8SCI7', '7SCI4'],
        title: 'Mr',
        email: 'nathan.ralstonbryce@det.nsw.edu.au',
        active: true,

    },
    {
        id: 'dyer',
        firstName: 'Paul',
        lastName: 'Dyer',
        sentralClass: ['12BIO01', '10SCIA3', '7SCI6', 'SS3SCI', 'SSSCI2'],
        title: 'Mr',
        email: 'paul.dyer@det.nsw.edu.au',
        active: false,

    },
    {
        id: 'howell',
        firstName: 'Rowena',
        lastName: 'Howell',
        sentralClass: ['12BIO02', '12BIO03', '11BIO01', '11BIO02'],
        title: 'Mrs',
        email: 'rowena.howell@det.nsw.edu.au',
        active: false,

    },
    {
        id: 'hanson',
        firstName: 'Alana',
        lastName: 'Hanson',
        sentralClass: ['11INV02', '9SCIB3', '9SCIA5', '8SCI2', '8SCI6', '8MST01'],
        title: 'Mrs',
        email: 'alana.hanson@det.nsw.edu.au',
        active: false,

    },
    {
        id: 'berry',
        firstName: 'John',
        lastName: 'Berry',
        sentralClass: ['10BHY01', '10STX01', '9STX01', '9SCIA1', '8SCI9', '8SCI5'],
        title: 'Mr',
        email: 'john.berry@det.nsw.edu.au',
        active: false,

    },
    {
        id: 'delves',
        firstName: 'Kieran',
        lastName: 'Delves',
        sentralClass: ['10SCIB1', '10SCIA2', '9SCIB1', '7SCI8', '7SCI7', '7SCI5'],
        title: 'Mr',
        email: 'kieran.delves@det.nsw.edu.au',
        active: false,

    },
    {
        id: 'michael',
        firstName: 'Aaron',
        lastName: 'Michael',
        sentralClass: ['11BIO03', '10SCIA1', '10SCIB3', '8SCI1', '8SCI4'],
        title: 'Mr',
        email: 'aaron.michael@det.nsw.edu.au',
        active: false,

    },
    {
        id: 'donovan',
        firstName: 'Sam',
        lastName: 'Donovan',
        sentralClass: ['12CHE01', '9SCIA4', '9SCIB3', '8MST03', '7SCI1', '7SCI2'],
        title: 'Mr',
        email: 'samuel.donovan@det.nsw.edu.au',
        active: false,

    },
    {
        id: 'woollett',
        firstName: 'Terese',
        lastName: 'Woollett',
        sentralClass: ['12EES01', '11INV01', '9SCIA3', '9SCIB2', '8SCI3'],
        title: 'Mrs',
        email: 'terese.woollett@det.nsw.edu.au',
        active: false,

    },
];

export const contentArrays = [
    {
       id: 'LITable',
       title: 'Learning Intentions'
    },
    {
        id: 'assInfo',
        title: 'Assessment Information'
    },
    {
        id: 'subjectInfo',
        title: 'Subject Information'
    }
];


export const SCISubjectInfoArray = [
    {   //10SciASP
        activeClass: "10SCIASP",
        activeSentralClasses: ["10SCIASPA", "10SCIASPB"],
        numberOfTopics: 6,
        topicInfo: [
            {
                topicNumber: 1,
                topicName: "Student Research Project",
                topicDuration: "7 weeks",
                topicDescription: "Student Research Project (SRP)",
                topicOutcomes: ["SC5-4WS", "SC5-5WS", "SC5-6WS", "SC5-7WS", "SC5-8WS", "SC5-9WS"],
                topicContent: ["SC5-4WS", "SC5-5WS", "SC5-6WS", "SC5-7WS", "SC5-8WS", "SC5-9WS"],
                topicSkills: ["SC5-4WS", "SC5-5WS", "SC5-6WS", "SC5-7WS", "SC5-8WS", "SC5-9WS"],
                LIs: [
                    {id: 0  , fullID: "10.1.1",  completed: false, LINumber: '1',  LIString: 'Develops questions or hypotheses to be investigated scientifically, using the IF-THEN-BECAUSE format'},
                    {id: 1  , fullID: "10.1.2",  completed: false, LINumber: '2',  LIString: 'Designs a valid, accurate and reliable experimental method'},
                    {id: 2  , fullID: "10.1.3",  completed: false, LINumber: '3',  LIString: 'Identifies independent, dependent and control variables'},
                    {id: 3  , fullID: "10.1.3a", completed: false, LINumber: '3a', LIString: 'Identifies experimental and control groups'},
                    {id: 4  , fullID: "10.1.4",  completed: false, LINumber: '4',  LIString: 'Conducts experiments while abiding by safety procedures (including the use of risk assessment matrices)'},
                    {id: 5  , fullID: "10.1.5",  completed: false, LINumber: '5',  LIString: 'Collects and records data accurately and reliably'},
                    {id: 6  , fullID: "10.1.5a", completed: false, LINumber: '5a', LIString: 'Identifies potential sources of error in data (including random and systematic)'},
                    {id: 7  , fullID: "10.1.5b", completed: false, LINumber: '5b', LIString: 'Expresses data using appropriate numbers of decimal places and significant figures'},
                    {id: 8  , fullID: "10.1.6",  completed: false, LINumber: '6',  LIString: 'Interprets data by constructing a table and/or graph and using a line of best fit'},
                    {id: 9  , fullID: "10.1.6a", completed: false, LINumber: '6a', LIString: 'Distinguish between continuous and discrete data'},
                    {id: 10 , fullID: "10.1.6b", completed: false, LINumber: '6b', LIString: 'Identifies potential outliers in data'},
                    {id: 11 , fullID: "10.1.7",  completed: false, LINumber: '7',  LIString: 'Evaluates the validity, accuracy and reliability of first-hand data'},
                    {id: 12 , fullID: "10.1.8",  completed: false, LINumber: '8',  LIString: 'Identifies solutions to improve the validity, accuracy and reliability of first-hand data'},
                    {id: 13 , fullID: "10.1.9",  completed: false, LINumber: '9',  LIString: 'Analyses the validity of second-hand sources used using the WWWD framework'},
                    {id: 14 , fullID: "10.1.10", completed: false, LINumber: '10', LIString: 'Communicates their findings in a complete scientific report. (Including: Abstract, Question, Aim, Hypothesis, Introduction, Method, Results, Discussion, Conclusion, Appendix, and References)'},
                ],
            },
            {
                topicNumber: 2,
                topicName: "Human-Earth Interactions",
                topicDuration: "5 weeks",
                topicDescription: "Conserving and maintaining the quality and sustainability of the environment requires scientific understanding of interactions within, the cycling of matter and the flow of energy through ecosystems",
                topicOutcomes: ["SC5-13ES", "SC5-15LW"],
                topicContent: ["SC5-ES3a", "SC5-ES3c", "SC5-ES3d", "SC5-LW2a", "SC5-LW2b", "SC5-LW2c", "SC5-LW2d", "SC5-LW2e", "SC5-LW2f"],
                topicSkills: ["SC5-4WS", "SC5-5WS", "SC5-6WS", "SC5-7WS", "SC5-8WS", "SC5-9WS"],
                LIs: [
                    {id: 0  , topicActive: true, fullID: "10.2.1",  year: 10,	topic:	2, topicName: 'Human-Earth Interactions', completed: false, LINumber:	"1	",	LIString: "recall that ecosystems consist of communities of interdependent organisms and abiotic components of the environment	"	}	,
                    {id: 1  , topicActive: true, fullID: "10.2.2",  year: 10,	topic:	2, topicName: 'Human-Earth Interactions', completed: false, LINumber:	"2	",	LIString: "describe how energy flows through ecosystems, including input and output through food webs	"	}	,
                    {id: 2  , topicActive: true, fullID: "10.2.3",  year: 10,	topic:	2, topicName: 'Human-Earth Interactions', completed: false, LINumber:	"3	",	LIString: "analyse how changes in some biotic and abiotic components of an ecosystem affect populations and/or communities	"	}	,
                    {id: 3  , topicActive: true, fullID: "10.2.4",  year: 10,	topic:	2, topicName: 'Human-Earth Interactions', completed: false, LINumber:	"4	",	LIString: "outline using examples how matter is cycled through ecosystems such as nitrogen	"	}	,
                    {id: 4  , topicActive: true, fullID: "10.2.5",  year: 10,	topic:	2, topicName: 'Human-Earth Interactions', completed: false, LINumber:	"5	",	LIString: "outline how global systems rely on interactions involving the biosphere, lithosphere, hydrosphere and atmosphere, including the carbon cycle	"	}	,
                    {id: 5  , topicActive: true, fullID: "10.2.6",  year: 10,	topic:	2, topicName: 'Human-Earth Interactions', completed: false, LINumber:	"6	",	LIString: "evaluate scientific evidence of how human activity has led to the greenhouse effect	"	}	,
                    {id: 6  , topicActive: true, fullID: "10.2.7",  year: 10,	topic:	2, topicName: 'Human-Earth Interactions', completed: false, LINumber:	"7	",	LIString: "evaluate scientific evidence of how human activity has led to the ozone layer depletion	"	}	,
                    {id: 7  , topicActive: true, fullID: "10.2.8",  year: 10,	topic:	2, topicName: 'Human-Earth Interactions', completed: false, LINumber:	"8	",	LIString: "evaluate scientific evidence of how human activity has led to the change of sea levels	"	}	,
                    {id: 8  , topicActive: true, fullID: "10.2.9",  year: 10,	topic:	2, topicName: 'Human-Earth Interactions', completed: false, LINumber:	"9	",	LIString: "evaluate scientific evidence of how human activity has led to the long-term effects of waste management	"	}	,
                    {id: 9  , topicActive: true, fullID: "10.2.10", year: 10,	topic:	2, topicName: 'Human-Earth Interactions', completed: false, LINumber:	"10	",	LIString: "evaluate scientific evidence of how human activity has led to the loss of biodiversity	"	}	,
                    {id: 10	, topicActive: true, fullID: "10.2.11", year: 10,	topic:	2, topicName: 'Human-Earth Interactions', completed: false, LINumber:	"11	",	LIString: "discuss the reasons different groups in society may use or weight criteria differently to evaluate claims, explanations or predictions in making decisions about contemporary issues involving interactions of the Earth's spheres  	"	}	,
                    {id: 11	, topicActive: true, fullID: "10.2.12", year: 10,	topic:	2, topicName: 'Human-Earth Interactions', completed: false, LINumber:	"12	",	LIString: "assess ways that Aboriginal and Torres Strait Islander Peoples' cultural practices and knowledge of the environment contribute to the conservation and management of sustainable ecosystems	"	}	,
                    {id: 12	, topicActive: true, fullID: "10.2.13", year: 10,	topic:	2, topicName: 'Human-Earth Interactions', completed: false, LINumber:	"13	",	LIString: "evaluate some examples in ecosystems, of strategies used to balance conserving, protecting and maintaining the quality and sustainability of the environment with human activities and needs	"	}	,
                    {id: 13	, topicActive: true, fullID: "10.2.14", year: 10,	topic:	2, topicName: 'Human-Earth Interactions', completed: false, LINumber:	"14	",	LIString: "discuss the development and implications of international agreements relating to biodiversity and climate change, e.g. the original 1987 Montreal Protocol, 1992 United Nations Conference on Environment and Development, 1997 Kyoto Protocol and the 2009 United Nations Climate Change Conference	"	}	,
                    {id: 14	, topicActive: true, fullID: "10.2.15", year: 10,	topic:	2, topicName: 'Human-Earth Interactions', completed: false, LINumber:	"15	",	LIString: "discuss technological developments that have extended the ability of scientists to collect information about, and monitor events in, the natural world 	"	}	,
                    {id: 15	, topicActive: true, fullID: "10.2.16", year: 10,	topic:	2, topicName: 'Human-Earth Interactions', completed: false, LINumber:	"16	",	LIString: "research evidence relating global warming to changes in weather patterns, including El Niño and La Niña	"	}	,
                    {id: 16	, topicActive: true, fullID: "10.2.17", year: 10,	topic:	2, topicName: 'Human-Earth Interactions', completed: false, LINumber:	"17	",	LIString: "investigate how models can be used to predict the changes in populations due to environmental changes, e.g. the impact of fire or flooding, introduction of a disease or predator  	"	}	,
                    {id: 17	, topicActive: true, fullID: "10.2.18", year: 10,	topic:	2, topicName: 'Human-Earth Interactions', completed: false, LINumber:	"18	",	LIString: "discuss the strengths and limitations of using models to make predictions about changes in biological systems  	"	}	,
                ]
            },
            {
                topicNumber: 3,
                topicName: "Genetics and Biotechnology",
                topicDuration: "7 weeks",
                topicDescription: "Students discover the importance of DNA for containing the genetic material passed down through generations. They will also advocate for a biotechnology significant to society in the future.",
                topicOutcomes: [ "SC5-15LW" ],
                topicContent: [ "SC5-LW3a", "SC5-LW3b", "SC5-LW3c", "SC5-LW3d", "SC5-LW3e", "SC5-LW3f"],
                topicSkills: ["SC5-4WS", "SC5-5WS", "SC5-6WS", "SC5-7WS", "SC5-8WS", "SC5-9WS" ],
                LIs: [
                    {id: 0  , topicActive: false, fullID: "10.3.1",  year: 10, topic: 3, topicName: 'Genetics and Biotechnology', completed: false, LINumber: '1',  LIString: 'x'},
                ]
            },
            {
                topicNumber: 4,
                topicName: "Motion",
                topicDuration: "7 weeks",
                topicDescription: "Mechanics is the study of the relationship between motion, forces and energy. It is a large field and its study is essential to the understanding of physics. Without an understanding of motion first, we could not develop our understanding of the various types of waves nor the forces that hold the universe together.",
                topicOutcomes: [ "SC5-10PW" ],
                topicContent: [ "SC5-PW2a", "SC5-PW2b", "SC5-PW2c", "SC5-PW2d",],
                topicSkills: ["SC5-4WS", "SC5-5WS", "SC5-6WS", "SC5-7WS", "SC5-8WS", "SC5-9WS" ],
                LIs: [
                    {id: 0  , topicActive: false, fullID: "10.4.1",  year: 10, topic: 4, topicName: 'Motion', completed: false, LINumber: '1',  LIString: 'x'},
                ]
            },
            {
                topicNumber: 5,
                topicName: "Chemistry",
                topicDuration: "7 weeks",
                topicDescription: "Students develop an understanding of the different types of chemical reactions. By completing this topic students have fundamental knowledge of chemistry principles preparing them for HSC chemistry.",
                topicOutcomes: [ "SC5-17CW" ],
                topicContent: ["SC5-CW3a","SC5-CW3b", "SC5-CW3c", "SC5-CW3d", "SC5-CW3e", "SC5-CW3f", "SC5-CW3g", "SC5-CW4a", "SC5-CW4b", "SC5-CW4c", "SC5-CW4d", "SC5-CW4e" ],
                topicSkills: ["SC5-4WS", "SC5-5WS", "SC5-6WS", "SC5-7WS", "SC5-8WS", "SC5-9WS" ],
                LIs: [
                    {id: 0  , topicActive: false, fullID: "10.5.1",  year: 10, topic: 5, topicName: 'Chemistry', completed: false, LINumber: '1',  LIString: 'x'},
                ]
            },
            {
                topicNumber: 6,
                topicName: "Evolution",
                topicDuration: "7 weeks",
                topicDescription: "Evolution introduces students to Darwin's theory of evolution, explaining the processes by which evolution occurs and exploring evidence for evolution. Students apply their knowledge of evolutionary processes to current and future changes in organisms.",
                topicOutcomes: [ "SC5-14LW", "SC5-15LW" ],
                topicContent: [ "SC5-LW4a", "SC5-LW4b", "SC5-LW4c", "SC5-LW4d" ],
                topicSkills: ["SC5-4WS", "SC5-5WS", "SC5-6WS", "SC5-7WS", "SC5-8WS", "SC5-9WS" ],
                LIs: [
                    {id: 0  , topicActive: false, fullID: "10.6.1",  year: 10, topic: 6, topicName: 'Evolution', completed: false, LINumber: '1',  LIString: 'x'},
                ]
            },
        ],
        assessmentTasks: [
            {
                taskNumber: 1,
                taskName: 'Student Research Project',
                taskDescription: 'asd',
                taskWeighting: '30%',
                successCriteria: [],
                taskOutcomes: ["SC5-4WS", "SC5-5WS", "SC5-6WS", "SC5-7WS", "SC5-8WS", "SC5-9WS"],
                date: "Late Term 1",
            },
            {
                taskNumber: 2,
                taskName: 'Assessment Portfolio',
                taskDescription: 'The Assessment Portfolio is a collection of small, informal tasks, completed in class during normal lessons. The classroom teacher will collect and compile the results from these informal tasks (generally one per topic). These results, moderated by teacher discretion and observation throughout the year, form the basis of the Assessment Portfolio mark.',
                taskWeighting: '30%',
                successCriteria: [],
                taskOutcomes: ["SC5-13ES", "SC5-15LW", "SC5-10PW", "SC5-17CW", "SC5-14LW", "SC5-4WS", "SC5-5WS", "SC5-6WS", "SC5-7WS", "SC5-8WS", "SC5-9WS"],
                date: "N/A (Entire Year)",
            },
            {
                taskNumber: 3,
                taskName: 'Yearly Exam',
                taskDescription: 'asd',
                taskWeighting: '40%',
                successCriteria: [],
                taskOutcomes: ["SC5-13ES", "SC5-15LW", "SC5-10PW", "SC5-17CW", "SC5-14LW", "SC5-4WS", "SC5-5WS", "SC5-6WS", "SC5-7WS", "SC5-8WS", "SC5-9WS"],
                date: "Early Term 4",
            },
        ],
    },
]

export const SCISyllabusArray =
[
    //MISC
    {
        outcome: "N/A",
        description: "",
    },
    // VALUES AND ATTITUDES
    {
        outcome: "SC4-1VA",
        description: "appreciates the importance of science in their lives and the role of scientific inquiry in increasing understanding of the world around them",
    },
    {
        outcome: "SC4-2VA",
        description: "shows a willingness to engage in finding solutions to science-related personal, social and global issues, including shaping sustainable futures",
    },
    {
        outcome: "SC4-3VA",
        description: "demonstrates confidence in making reasoned, evidence-based decisions about the current and future use and influence of science and technology, including ethical considerations",
    },
    {
        outcome: "SC5-1VA",
        description: "appreciates the importance of science in their lives and the role of scientific inquiry in increasing understanding of the world around them",
    },
    {
        outcome: "SC5-2VA",
        description: "shows a willingness to engage in finding solutions to science-related personal, social and global issues, including shaping sustainable futures",
    },
    {
        outcome: "SC5-3VA",
        description: "demonstrates confidence in making reasoned, evidence-based decisions about the current and future use and influence of science and technology, including ethical considerations",
    },

    //WORKING SCIENTIFICALLY SKILLS
    {
        outcome: "SC4-WS",
        description: "Develop knowledge, understanding of and skills in applying the processes of Working Scientifically",
        type: "skills",
    },
    {
        outcome: "SC5-WS",
        description: "Develop knowledge, understanding of and skills in applying the processes of Working Scientifically",
        type: "skills",
    },
    {
        outcome: "SC4-4WS",
        description: "Identifies questions and problems that can be tested or researched and makes predictions based on scientific knowledge",
        type: 'skills',
    },
    {
        outcome: "SC4-5WS",
        description: "Collaboratively and individually produces a plan to investigate questions and problems",
        type: 'skills',

    },
    {
        outcome: "SC4-6WS",
        description: "Follows a sequence of instructions to safely undertake a range of investigation types, collaboratively and individually",
        type: 'skills',

    },
    {
        outcome: "SC4-7WS",
        description: "Processes and analyses data from a first-hand investigation and secondary sources to identify trends, patterns and relationships, and draw conclusions",
        type: 'skills',

    },
    {
        outcome: "SC4-8WS",
        description: "Selects and uses appropriate strategies, understanding and skills to produce creative and plausible solutions to identified problems",
        type: 'skills',

    },
    {
        outcome: "SC4-9WS",
        description: "Presents science ideas, findings and information to a given audience using appropriate scientific language, text types and representations",
        type: 'skills',

    },
    {
        outcome: "SC5-4WS",
        description: "Develops questions or hypotheses to be investigated scientifically",
        type: 'skills',

    },
    {
        outcome: "SC5-5WS",
        description: "Produces a plan to investigate identified questions, hypotheses or problems, individually and collaboratively",
        type: 'skills',

    },
    {
        outcome: "SC5-6WS",
        description: "Undertakes first-hand investigations to collect valid and reliable data and information, individually and collaboratively",
        type: 'skills',

    },
    {
        outcome: "SC5-7WS",
        description: "Processes, analyses and evaluates data from first-hand investigations and secondary sources to develop evidence-based arguments and conclusions",
        type: 'skills',

    },
    {
        outcome: "SC5-8WS",
        description: "Applies scientific understanding and critical thinking skills to suggest possible solutions to identified problems",
        type: 'skills',

    },
    {
        outcome: "SC5-9WS",
        description: "Presents science ideas and evidence for a particular purpose and to a specific audience, using appropriate scientific language, conventions and representations",
        type: 'skills',

    },

    //KNOWLEDGE AND UNDERSTANDING 
    //OUTCOMES
    {
        outcome: "SC4-10PW",
        description: "Describes the action of unbalanced forces in everyday situations",
        type: "outcome",
    },
    {
        outcome: "SC4-11PW",
        description: "Discusses how scientific understanding and technological developments have contributed to finding solutions to problems involving energy transfers and transformations",
        type: "outcome",
    },
    {
        outcome: "SC4-12ES",
        description: "Describes the dynamic nature of models, theories and laws in developing scientific understanding of the Earth and solar system",
        type: "outcome",
    },
    {
        outcome: "SC4-13ES",
        description: "Explains how advances in scientific understanding of processes that occur within and on the Earth, influence the choices people make about resource use and management",
        type: "outcome",
    },
    {
        outcome: "SC4-14LW",
        description: "Relates the structure and function of living things to their classification, survival and reproduction",
        type: "outcome",
    },
    {
        outcome: "SC4-15LW",
        description: "Explains how new biological evidence changes people's understanding of the world",
        type: "outcome",
    },
    {
        outcome: "SC4-16CW",
        description: "Describes the observed properties and behaviour of matter, using scientific models and theories about the motion and arrangement of particles",
        type: "outcome",
    },
    {
        outcome: "SC4-17CW",
        description: "Explains how scientific understanding of, and discoveries about the properties of elements, compounds and mixtures relate to their uses in everyday life",
        type: "outcome",
    },
    {
        outcome: "SC5-10PW",
        description: "Applies models, theories and laws to explain situations involving energy, force and motion",
        type: "outcome",
    },
    {
        outcome: "SC5-11PW",
        description: "Explains how scientific understanding about energy conservation, transfers and transformations is applied in systems",
        type: "outcome",
    },
    {
        outcome: "SC5-12ES",
        description: "Describes changing ideas about the structure of the Earth and the universe to illustrate how models, theories and laws are refined over time by the scientific community",
        type: "outcome",
    },
    {
        outcome: "SC5-13ES",
        description: "Explains how scientific knowledge about global patterns of geological activity and interactions involving global systems can be used to inform decisions related to contemporary issues",
        type: "outcome",
    },
    {
        outcome: "SC5-14LW",
        description: "Analyses interactions between components and processes within biological systems",
        type: "outcome",
    },
    {
        outcome: "SC5-15LW",
        description: "Explains how biological understanding has advanced through scientific discoveries, technological developments and the needs of society",
        type: "outcome",
    },
    {
        outcome: "SC5-16CW",
        description: "Explains how models, theories and laws about matter have been refined as new scientific evidence becomes available",
        type: "outcome",
    },
    {
        outcome: "SC5-17CW",
        description: "Discusses the importance of chemical reactions in the production of a range of substances, and the influence of society on the development of new materials",
        type: "outcome",
    },
    
    //KNOWLEDGE AND UNDERSTANDING
    //CONTENT
    {
        outcome: "SC4-PW1",
        description: "Change to an object's motion is caused by unbalanced forces acting on the object",
    },
    {
        outcome: "SC4-PW1a" ,
        description:  "identify changes that take place when particular forces are acting",
    },
    {   
        outcome: "SC4-PW1b" ,
        description:  "predict the effect of unbalanced forces acting in everyday situations",
    },
    {
        outcome: "SC4-PW1c" ,
        description:  "describe some examples of technological developments that have contributed to finding solutions to reduce the impact of forces in everyday life, eg car safety equipment and footwear design",
    },
    {   
        outcome: "SC4-PW1d" ,
        description:  "analyse some everyday common situations where friction operates to oppose motion and produce heat",
    },
    {   
        outcome: "SC4-PW1e" ,
        description:  "investigate factors that influence the size and effect of frictional forces",
    },
    {
        outcome: "SC4-PW2" ,
        description: "The action of forces that act at a distance may be observed and related to everyday situations",
    },
    {
        outcome: "SC4-PW2a" ,
        description:  "use the term 'field' in describing forces acting at a distance",
    },
    {
        outcome: "SC4-PW2b" ,
        description:  "identify ways in which objects acquire electrostatic charge",
    },
    {
        outcome: "SC4-PW2c" ,
        description:  "describe the behaviour of charged objects when they are brought close to each other",
    },
    {
        outcome: "SC4-PW2d" ,
        description:  "investigate everyday situations where the effects of electrostatic forces can be observed, eg lightning strikes during severe weather and dust storms",
    },
    {
        outcome: "SC4-PW2e" ,
        description:  "identify that the Earth's gravity pulls objects towards the centre of the Earth",
    },
    {
        outcome: "SC4-PW2f" ,
        description:  "describe everyday situations where gravity acts as an unbalanced force",
    },
    {
        outcome: "SC4-PW2g" ,
        description:  "distinguish between the terms 'mass' and 'weight'",
    },
    {
        outcome: "SC4-PW2h" ,
        description:  "describe the behaviour of magnetic poles when they are brought close together",
    },
    {
        outcome: "SC4-PW2i" ,
        description:  "investigate how magnets and electromagnets are used in some everyday devices or technologies used in everyday life",
    },

    {    outcome: "SC4-PW3",
        description: "Energy appears in different forms including movement (kinetic energy), heat and potential energy, and causes change within systems",
    },
    {   
        outcome: "SC4-PW3a",
        description: "identify objects that possess energy because of their motion (kinetic) or because of other properties (potential)",
    },
    {   
        outcome: "SC4-PW3b",
        description: "describe the transfer of heat energy by conduction, convection and radiation, including situations in which each occurs",
    },
    {   
        outcome: "SC4-PW3c",
        description: "relate electricity with energy transfer in a simple circuit",
    },
    {   
        outcome: "SC4-PW3d",
        description: "construct and draw circuits containing a number of components to show a transfer of electric",
    },
    {   
        outcome: "SC4-PW3e",
        description: "investigate some everyday energy transformations that cause change within systems, including motion, electricity, heat, sound and light",
    },
    {    
        outcome: "SC4-PW4 ",
        description: "Science and technology contribute to finding solutions to a range of contemporary issues; these solutions may impact on other areas of society and involve ethical considerations",
    },
    {   
        outcome: "SC4-PW4a",
        description: "identify that most energy conversions are inefficient and lead to the production of heat energy, eg in light bulbs",
    },
    {   
        outcome: "SC4-PW4b",
        description: "research ways in which scientific knowledge and technological developments have led to finding a solution to a contemporary issue, eg improvements in devices to increase the efficiency of energy transfers or conversions",
    },
    {   
        outcome: "SC4-PW4c",
        description: "discuss the implications for society and the environment of some solutions to increase the efficiency of energy conversions by reducing the production of heat energy",
    },


    {    
        outcome: "SC4-ES1 ",
        description: "Sedimentary, igneous and metamorphic rocks contain minerals and are formed by processes that occur within Earth over a variety of timescales",
    },
    {   
        outcome: "SC4-ES1a",
        description: "describe the structure of the Earth in terms of core, mantle, crust and lithosphere",
    },
    {   
        outcome: "SC4-ES1b",
        description: "relate the formation of a range of landforms to physical and chemical weathering, erosion and deposition",
    },
    {   
        outcome: "SC4-ES1c",
        description: "outline the origins of and relationships between sedimentary, igneous and metamorphic rocks",
    },
    {   
        outcome: "SC4-ES1d",
        description: "identify that sedimentary, igneous and metamorphic rocks contain minerals",
    },
    {   
        outcome: "SC4-ES1e",
        description: "classify a variety of common rocks and minerals into groups according to their observable properties",
    },
    {   
        outcome: "SC4-ES1f",
        description: "describe the conditions under which fossils form",
    },
    {   
        outcome: "SC4-ES1g",
        description: "outline how geological history can be interpreted in a sequence of horizontal sedimentary layers, in which the oldest are at the base and the youngest at the top",
    },
    {   
        outcome: "SC4-ES1h",
        description: "describe examples to show how people use understanding and skills from across the disciplines of science in occupations related to the exploration, mining or processing of minerals in Australia",
    },


    {    
        outcome: "SC4-ES2 ",
        description: "Scientific knowledge changes as new evidence becomes available. Some technological developments and scientific discoveries have significantly changed people's understanding of the solar system.",
    },
    {   
        outcome: "SC4-ES2a",
        description: "explain that predictable phenomena on the Earth, including day and night, seasons and eclipses are caused by the relative positions of the sun, the Earth and the moon",
    },
    {   
        outcome: "SC4-ES2b",
        description: "demonstrate, using examples, how ideas by people from different cultures have contributed to the current understanding of the solar system",
    },
    {   
        outcome: "SC4-ES2c",
        description: "compare historical and current models of the solar system to show how models are modified or rejected as a result of new scientific evidence",
    },
    {   
        outcome: "SC4-ES2d",
        description: "describe some examples of how technological advances have led to discoveries and increased scientific understanding of the solar system",
    },


    {    
        outcome: "SC4-ES3 ",
        description: "Scientific knowledge influences the choices people make in regard to the use and management of the Earth's resources",
    },
    {   
        outcome: "SC4-ES3a",
        description: "classify a range of the Earth's resources as renewable or non-renewable",
    },
    {   
        outcome: "SC4-ES3b",
        description: "outline features of some non-renewable resources, including metal ores and fossil fuels",
    },
    {   
        outcome: "SC4-ES3c",
        description: "describe uses of a variety of natural and made resources extracted from the biosphere, atmosphere, lithosphere and hydrosphere",
    },
    {   
        outcome: "SC4-ES3d",
        description: "investigate some strategies used by people to conserve and manage non-renewable resources, eg recycling and the alternative use of natural and made resources",
    },
    {   
        outcome: "SC4-ES3e",
        description: "discuss different viewpoints people may use to weight criteria in making decisions about the use of a major non-renewable resource found in Austral",
    },
    {   
        outcome: "SC4-ES3f",
        description: "outline the choices that need to be made when considering whether to use scientific and technological advances to obtain a resource from Earth's spheres",
    },


    {    
        outcome: "SC4-ES4 ",
        description: "Science understanding influences the development of practices in areas of human activity such as industry, agriculture and marine and terrestrial resource management",
    },
    {   
        outcome: "SC4-ES4a",
        description: "identify that water is an important resource that cycles through the environment",
    },
    {   
        outcome: "SC4-ES4b",
        description: "explain the water cycle in terms of the physical processes involved",
    },
    {   
        outcome: "SC4-ES4c",
        description: "demonstrate how scientific knowledge of the water cycle has influenced the development of household, industrial and agricultural water management practices",
    },
    {   
        outcome: "SC4-ES4d",
        description: "research how Aboriginal and Torres Strait Islander Peoples' knowledge is being used in decisions to care for country and place, eg terrestrial and aquatic resource management",
    },


    {    
        outcome: "SC4-LW1 ",
        description: "There are differences within and between groups of organisms; classification helps organise this diversity",
    },
    {   
        outcome: "SC4-LW1a",
        description: "identify reasons for classifying living things",
    },
    {   
        outcome: "SC4-LW1b",
        description: "classify a variety of living things based on similarities and differences in structural features",
    },
    {   
        outcome: "SC4-LW1c",
        description: "use simple keys to identify a range of plants and animals",
    },
    {   
        outcome: "SC4-LW1d",
        description: "identify some examples of groups of micro-organisms",
    },
    {   
        outcome: "SC4-LW1e",
        description: "outline the structural features used to group living things, including plants, animals, fungi and bacteria",
    },
    {   
        outcome: "SC4-LW1f",
        description: "explain how the features of some Australian plants and animals are adaptations for survival and reproduction in their environment",
    },


    {    
        outcome: "SC4-LW2 ",
        description: "Cells are the basic units of living things and have specialised structures and functions",
    },
    {   
        outcome: "SC4-LW2a",
        description: "identify that living things are made of cells",
    },
    {   
        outcome: "SC4-LW2b",
        description: "identify structures within cells, including the nucleus, cytoplasm, cell membrane, cell wall and chloroplast, and describe their functions",
    },
    {   
        outcome: "SC4-LW2c",
        description: "outline the role of respiration in providing energy for the activities of cells",
    },
    {   
        outcome: "SC4-LW2d",
        description: "identify that new cells are produced by cell division",
    },
    {   
        outcome: "SC4-LW2e",
        description: "distinguish between unicellular and multicellular organisms",
    },
    {   
        outcome: "SC4-LW2f",
        description: "identify that different types of cells make up the tissues, organs and organ systems of multicellular organisms",
    },


    {    
        outcome: "SC4-LW3 ",
        description: "Multicellular organisms contain systems of organs that carry out specialised functions that enable them to survive and reproduce",
    },
    {   
        outcome: "SC4-LW3a",
        description: "identify the materials required by multicellular organisms for the processes of respiration and photosynthesis",
    },
    {   
        outcome: "SC4-LW3b",
        description: "explain that the systems in multicellular organisms work together to provide cell requirements, including gases, nutrients and water, and to remove cell wastes",
    },
    {   
        outcome: "SC4-LW3c",
        description: "outline the role of cell division in growth, repair and reproduction in multicellular organisms",
    },
    {   
        outcome: "SC4-LW3d",
        description: "describe the role of the flower, root, stem and leaf in maintaining flowering plants as functioning organisms",
    },
    {   
        outcome: "SC4-LW3e",
        description: "describe the role of the digestive, circulatory, excretory, skeletal/muscular and respiratory systems in maintaining a human as a functioning multicellular organism",
    },
    {   
        outcome: "SC4-LW3f",
        description: "outline the role of the reproductive system in humans",
    },


    {    
        outcome: "SC4-LW4 ",
        description: "Scientific knowledge changes as new evidence becomes available, and some scientific discoveries have significantly changed people's understanding of the world",
    },
    {   
        outcome: "SC4-LW4a",
        description: "research an example of how changes in scientific knowledge have contributed to finding a solution to a human health issue",
    },
    {   
        outcome: "SC4-LW4b",
        description: "recount how evidence from a scientific discovery has changed understanding and contributed to solving a real world problem, eg animal or plant disease, hygiene, food preservation, sewage treatment or biotechnology",
    },
    {   
        outcome: "SC4-LW4c",
        description: "describe, using examples, how developments in technology have contributed to finding solutions to a contemporary issue, eg organ transplantation, artificial joints/limbs, treatment for diabetes, asthma, kidney or heart disease",
    },
    {   
        outcome: "SC4-LW4d",
        description: "give examples to show that groups of people in society may use or weight criteria differently in making decisions about the application of a solution to a contemporary issue, eg organ transplantation, control and prevention of diseases and dietary deficiencies",
    },


    {   
        outcome: "SC4-LW5 ",
        description: "Science and technology contribute to finding solutions to conserving and managing sustainable ecosystem",
    },
    {   
        outcome: "SC4-LW5a",
        description: "construct and interpret food chains and food webs, including examples from Australian ecosystems",
    },
    {   
        outcome: "SC4-LW5b",
        description: "describe interactions between organisms in food chains and food webs, including producers, consumers and decomposers",
    },
    {   
        outcome: "SC4-LW5c",
        description: "describe examples of beneficial and harmful effects that micro-organisms can have on living things and the environment",
    },
    {   
        outcome: "SC4-LW5d",
        description: "predict how human activities can affect interactions in food chains and food webs, including examples from Australian land or marine ecosystems",
    },
    {   
        outcome: "SC4-LW5e",
        description: "explain, using examples, how scientific evidence and/or technological developments contribute to developing solutions to manage the impact of natural events on Australian ecosystems",
    },
    {   
        outcome: "SC4-LW5f",
        description: "describe how scientific knowledge has influenced the development of practices in agriculture, eg animal husbandry or crop cultivation to improve yields and sustainability, or the effect of plant-cloning techniques in horticulture",
    },


    {    
        outcome: "SC4-CW1 ",
        description: "The properties of the different states of matter can be explained in terms of the motion and arrangement of particles",
    },
    {   
        outcome: "SC4-CW1a",
        description: "describe the behaviour of matter in terms of particles that are continuously moving and interacting",
    },
    {   
        outcome: "SC4-CW1b",
        description: "relate an increase or decrease in the amount of heat energy possessed by particles to changes in particle movement",
    },
    {   
        outcome: "SC4-CW1c",
        description: "use a simple particle model to predict the effect of adding or removing heat on different states of matter",
    },
    {   
        outcome: "SC4-CW1d",
        description: "relate changes in the physical properties of matter to heat energy and particle movement that occur during observations of evaporation, condensation, boiling, melting and freezing",
    },
    {   
        outcome: "SC4-CW1e",
        description: "explain density in terms of a simple particle model",
    },
    {   
        outcome: "SC4-CW1f",
        description: "identify the benefits and limitations of using models to explain the properties of solids, liquids and gases",
    },


    {    
        outcome: "SC4-CW2 ",
        description: "Scientific knowledge and developments in technology have changed our understanding of the structure and properties of matter",
    },
    {   
        outcome: "SC4-CW2a",
        description: "describe the properties and uses of some common elements, including metals and non-metals",
    },
    {   
        outcome: "SC4-CW2b",
        description: "identify how our understanding of the structure and properties of elements has changed as a result of some technological devices",
    },
    {   
        outcome: "SC4-CW2c",
        description: "identify some examples of common compounds",
    },
    {   
        outcome: "SC4-CW2d",
        description: "explain why internationally recognised symbols are used for common elements",
    },
    {   
        outcome: "SC4-CW2e",
        description: "describe at a particle level the difference between elements, compounds and mixtures, including the type and arrangement of particles",
    },
    {   
        outcome: "SC4-CW2f",
        description: "investigate how people in different cultures in the past have applied their knowledge of the properties of elements and compounds to their use in everyday life, eg utensils, weapons and tools",
    },


    {    
        outcome: "SC4-CW3 ",
        description: "Mixtures, including solutions, contain a combination of pure substances that can be separated using a range of techniques",
    },
    {   
        outcome: "SC4-CW3a",
        description: "describe the importance of water as a solvent in daily life, industries and the environment",
    },
    {   
        outcome: "SC4-CW3b",
        description: "describe aqueous mixtures in terms of solute, solvent and solution",
    },
    {   
        outcome: "SC4-CW3c",
        description: "relate a range of techniques used to separate the components of some common mixtures to the physical principles involved in each process, including filtration, decantation, evaporation, crystallisation, chromatography and distillation",
    },
    {   
        outcome: "SC4-CW3d",
        description: "investigate the application of a physical separation technique used in everyday situations or industrial processes, eg water filtering, sorting waste materials, extracting pigments or oils from plants, separating blood products or cleaning up oil spills",
    },
    {   
        outcome: "SC4-CW3e",
        description: "research how people in different occupations use understanding and skills from across the disciplines of Science in carrying out separation techniques",
    },


    {    
        outcome: "SC4-CW4 ",
        description: "In a chemical change, new substances are formed, which may have specific properties related to their uses in everyday life",
    },
    {   
        outcome: "SC4-CW4a",
        description: "identify when a chemical change is taking place by observing a change in temperature, the appearance of new substances or the disappearance of an original substance",
    },
    {   
        outcome: "SC4-CW4b",
        description: "demonstrate that a chemical change involves substances reacting to form new substances",
    },
    {   
        outcome: "SC4-CW4c",
        description: "investigate some examples of chemical change that occur in everyday life, eg photosynthesis, respiration and chemical weathering",
    },
    {   
        outcome: "SC4-CW4d",
        description: "compare physical and chemical changes in terms of the arrangement of particles and reversibility of the process",
    },
    {   
        outcome: "SC4-CW4e",
        description: "propose reasons why society should support scientific research, eg in the development of new pharmaceuticals and polymers",
    },
    {   
        outcome: "SC4-CW4f",
        description: "describe, using examples, how science knowledge can develop through collaboration and connecting ideas across the disciplines of science, eg making or obtaining new substances from Earth's spheres",
    },


    {    
        outcome: "SC5-PW1 ",
        description: "Energy transfer through different mediums can be explained using wave and particle models",
    },
    {   
        outcome: "SC5-PW1a",
        description: "explain, in terms of the particle model, the processes underlying convection and conduction of heat energy",
    },
    {   
        outcome: "SC5-PW1b",
        description: "identify situations where waves transfer energy",
    },
    {   
        outcome: "SC5-PW1c",
        description: "describe, using the wave model, the features of waves including wavelength, frequency and speed",
    },
    {   
        outcome: "SC5-PW1d",
        description: "explain, using the particle model, the transmission of sound in different mediums",
    },
    {   
        outcome: "SC5-PW1e",
        description: "relate the properties of different types of radiation in the electromagnetic spectrum to their uses in everyday life, including communications technology",
    },
    {   
        outcome: "SC5-PW1f",
        description: "describe the occurrence and some applications of absorption, reflection and refraction in everyday situations",
    },


    {    
        outcome: "SC5-PW2 ",
        description: "The motion of objects can be described and predicted using the laws of physics",
    },
    {   
        outcome: "SC5-PW2a",
        description: "describe the relationship between force, mass and acceleration",
    },
    {   
        outcome: "SC5-PW2b",
        description: "explain the relationship between distance, speed and time",
    },
    {   
        outcome: "SC5-PW2c",
        description: "relate acceleration to a change in speed and/or direction as a result of a net force",
    },
    {   
        outcome: "SC5-PW2d",
        description: "analyse everyday situations involving motion in terms of Newton's laws",
    },


    {    
        outcome: "SC5-PW3 ",
        description: "Scientific understanding of current electricity has resulted in technological developments designed to improve the efficiency in generation and use of electricity",
    },
    {   
        outcome: "SC5-PW3a",
        description: "describe voltage, current and resistance in terms of energy applied, carried and dissipated",
    },
    {   
        outcome: "SC5-PW3b",
        description: "describe the relationship between voltage, resistance and current",
    },
    {   
        outcome: "SC5-PW3c",
        description: "compare the characteristics and applications of series and parallel electrical circuits",
    },
    {   
        outcome: "SC5-PW3d",
        description: "outline recent examples where scientific or technological developments have involved specialist teams from different branches of science, engineering and technology, eg low-emissions electricity generation and reduction in atmospheric pollution",
    },
    {    
        outcome: "SC5-PW4 ",
        description: "Energy conservation in a system can be explained by describing energy transfers and transformations",
    },
    {   
        outcome: "SC5-PW4a",
        description: "apply the law of conservation of energy to account for the total energy involved in energy transfers and transformations",
    },
    {   
        outcome: "SC5-PW4b",
        description: "describe how, in energy transfers and transformations, a variety of processes can occur so that usable energy is reduced and the system is not 100% efficient",
    },
    {   
        outcome: "SC5-PW4c",
        description: "discuss, using examples, how the values and needs of contemporary society can influence the focus of scientific research in the area of increasing efficiency of the use of electricity by individuals and society",
    },
    {   
        outcome: "SC5-PW4d",
        description: "discuss viewpoints and choices that need to be considered in making decisions about the use of non-renewable energy resources",
    },
    {    
        outcome: "SC5-ES1",
        description: "Scientific understanding, including models and theories, are contestable and are refined over time through a process of review by the scientific community",
    },
    {   
        outcome: "SC5-ES1a",
        description: "outline some of the major features contained in the universe, including galaxies, stars, solar systems and nebulae",
    },
    {   
        outcome: "SC5-ES1b",
        description: "describe, using examples, some technological developments that have advanced scientific understanding about the universe",
    },
    {   
        outcome: "SC5-ES1c",
        description: "use appropriate scales to describe differences in sizes of and distances between structures making up the universe",
    },
    {   
        outcome: "SC5-ES1d",
        description: "identify that all objects exert a force of gravity on all other objects in the universe",
    },
    {   
        outcome: "SC5-ES1e",
        description: "use scientific evidence to outline how the Big Bang theory can be used to explain the origin of the universe and its age",
    },
    {   
        outcome: "SC5-ES1f",
        description: "outline how scientific thinking about the origin of the universe is refined over time through a process of review by the scientific community",
    },
    {    
        outcome: "SC5-ES2",
        description: "The theory of plate tectonics explains global patterns of geological activity and continental movement",
    },
    {   
        outcome: "SC5-ES2a",
        description: "outline how the theory of plate tectonics changed ideas about the structure of the Earth and continental movement over geological time",
    },
    {   
        outcome: "SC5-ES2b",
        description: "relate movements of the Earth's plates to mantle convection currents and gravitational forces",
    },
    {   
        outcome: "SC5-ES2c",
        description: "outline how the theory of plate tectonics explains earthquakes, volcanic activity and formation of new landforms",
    },
    {   
        outcome: "SC5-ES2d",
        description: "describe how some technological developments have increased scientific understanding of global patterns in geological activity, including in the Asia-Pacific region",},


        {    outcome: "SC5-ES3 ",
        description: "People use scientific knowledge to evaluate claims, explanations or predictions in relation to interactions involving the atmosphere, biosphere, hydrosphere and lithosphere",
    },
    {   
        outcome: "SC5-ES3a",
        description: "outline how global systems rely on interactions involving the biosphere, lithosphere, hydrosphere and atmosphere, including the carbon cycle",
    },
    {   
        outcome: "SC5-ES3b",
        description: "describe some impacts of natural events, including cyclones, volcanic eruptions or earthquakes, on the Earth's spheres",
    },
    {   
        outcome: "SC5-ES3c",
        description: "evaluate scientific evidence of some current issues affecting society that are the result of human activity on global systems, eg the greenhouse effect, ozone layer depletion, effect of climate change on sea levels, long-term effects of waste management and loss of biodiversity",
    },
    {   
        outcome: "SC5-ES3d",
        description: "discuss the reasons different groups in society may use or weight criteria differently to evaluate claims, explanations or predictions in making decisions about contemporary issues involving interactions of the Earth's spheres",
    },
    {    outcome: "SC5-LW1 ",
        description: "Multicellular organisms rely on coordinated and interdependent internal systems to respond to changes in their environment",
    },
    {   
        outcome: "SC5-LW1a",
        description: "describe some examples of how multicellular organisms respond to changes in their environment",
    },
    {   
        outcome: "SC5-LW1b",
        description: "describe how the coordinated function of internal systems in multicellular organisms provides cells with requirements for life, including gases, nutrients and water, and removes cell wastes",
    },
    {   
        outcome: "SC5-LW1c",
        description: "outline some responses of the human body to infectious and non-infectious diseases",
    },
    {   
        outcome: "SC5-LW1d",
        description: "describe the role of, and interaction between, the coordination systems in maintaining humans as functioning organisms",
    },
    {   
        outcome: "SC5-LW1e",
        description: "discuss, using examples, how the values and needs of contemporary society can influence the focus of scientific research, eg the occurrence of diseases affecting animals and plants, an epidemic or pandemic disease in humans or lifestyle related non-infectious diseases in humans",
    },
    {    
        outcome: "SC5-LW2 ",
        description: "Conserving and maintaining the quality and sustainability of the environment requires scientific understanding of interactions within, the cycling of matter and the flow of energy through ecosystems",
    },
    {   
        outcome: "SC5-LW2a",
        description: "recall that ecosystems consist of communities of interdependent organisms and abiotic components of the environment",
    },
    {   
        outcome: "SC5-LW2b",
        description: "outline using examples how matter is cycled through ecosystems such as nitrogen",
    },
    {   
        outcome: "SC5-LW2c",
        description: "describe how energy flows through ecosystems, including input and output through food webs",
    },
    {   
        outcome: "SC5-LW2d",
        description: "analyse how changes in some biotic and abiotic components of an ecosystem affect populations and/or communities",
    },
    {   
        outcome: "SC5-LW2e",
        description: "assess ways that Aboriginal and Torres Strait Islander Peoples' cultural practices and knowledge of the environment contribute to the conservation and management of sustainable ecosystems",
    },
    {   
        outcome: "SC5-LW2f",
        description: "evaluate some examples in ecosystems, of strategies used to balance conserving, protecting and maintaining the quality and sustainability of the environment with human activities and needs",
    },
    {    
        outcome: "SC5-LW3 ",
        description: "Advances in scientific understanding often rely on developments in technology, and technological advances are often linked to scientific discoveries",
    },
    {   
        outcome: "SC5-LW3a",
        description: "relate the organs involved in human reproductive systems to their function",
    },
    {   
        outcome: "SC5-LW3b",
        description: "identify that during reproduction the transmission of heritable characteristics from one generation to the next involves DNA and genes",
    },
    {   
        outcome: "SC5-LW3c",
        description: "identify that genetic information is transferred as genes in the DNA of chromosomes",
    },
    {   
        outcome: "SC5-LW3d",
        description: "outline how the Watson-Crick model of DNA explains; -the exact replication of DNA -changes in genes (mutation)",
    },
    {   
        outcome: "SC5-LW3e",
        description: "describe, using examples, how developments in technology have advanced biological understanding, eg vaccines, biotechnology, stem-cell research and in-vitro fertilisation",
    },
    {   
        outcome: "SC5-LW3f",
        description: "discuss some advantages and disadvantages of the use and applications of biotechnology, including social and ethical considerations",
    },
    {    
        outcome: "SC5-LW4 ",
        description: "The theory of evolution by natural selection explains the diversity of living things and is supported by a range of scientific evidence",
    },
    {   
        outcome: "SC5-LW4a",
        description: "describe scientific evidence that present-day organisms have evolved from organisms in the past",
    },
    {   
        outcome: "SC5-LW4b",
        description: "relate the fossil record to the age of the Earth and the time over which life has been evolving",
    },
    {   
        outcome: "SC5-LW4c",
        description: "explain, using examples, how natural selection relates to changes in a population, eg in the development of resistance of bacteria to antibiotics and insects to pesticides",
    },
    {   
        outcome: "SC5-LW4d",
        description: "outline the roles of genes and environmental factors in the survival of organisms in a population",},


        {    outcome: "SC5-CW1 ",
        description: "Scientific understanding changes and is refined over time through a process of review by the scientific community",
    },
    {   
        outcome: "SC5-CW1a",
        description: "identify that all matter is made of atoms which are composed of protons, neutrons and electrons",
    },
    {   
        outcome: "SC5-CW1b",
        description: "describe the structure of atoms in terms of the nucleus, protons, neutrons and electrons",
    },
    {   
        outcome: "SC5-CW1c",
        description: "outline historical developments of the atomic theory to demonstrate how models and theories have been contested and refined over time through a process of review by the scientific community",
    },
    {   
        outcome: "SC5-CW1d",
        description: "identify that natural radioactivity arises from the decay of nuclei in atoms, releasing particles and energy",
    },
    {   
        outcome: "SC5-CW1e",
        description: "evaluate the benefits and problems associated with medical and industrial uses of nuclear energy",
    },


    {   
        outcome: "SC5-CW2 ",
        description: "The atomic structure and properties of elements are used to organise them in the Periodic Table",
    },
    {   
        outcome: "SC5-CW2a",
        description: "identify the atom as the smallest unit of an element and that it can be represented by a symbol",
    },
    {   
        outcome: "SC5-CW2b",
        description: "distinguish between the atoms of some common elements by comparing information about the numbers of protons, neutrons and electrons",
    },
    {   
        outcome: "SC5-CW2c",
        description: "describe the organisation of elements in the Periodic Table using their atomic number",
    },
    {   
        outcome: "SC5-CW2d",
        description: "relate the properties of some common elements to their position in the Periodic Table",
    },
    {   
        outcome: "SC5-CW2e",
        description: "predict, using the Periodic Table, the properties of some common elements",
    },
    {   
        outcome: "SC5-CW2f",
        description: "outline some examples to show how creativity, logical reasoning and the scientific evidence available at the time, contributed to the development of the modern Periodic Table",
    },


    {    
        outcome: "SC5-CW3 ",
        description: "Chemical reactions involve rearranging atoms to form new substances; during a chemical reaction mass is not created or destroyed",
    },
    {   
        outcome: "SC5-CW3a",
        description: "recall that all matter is composed of atoms and has mass",
    },
    {   
        outcome: "SC5-CW3b",
        description: "identify a range of compounds using their common names and chemical formulae",
    },
    {   
        outcome: "SC5-CW3c",
        description: "classify compounds into groups based on common chemical characteristics",
    },
    {   
        outcome: "SC5-CW3d",
        description: "investigate a range of types of important chemical reactions that occur in non-living systems and involve energy transfer, including; -combustion -the reaction of acids including metals and carbonates -corrosion -precipitation -neutralisation -decomposition",
    },
    {   
        outcome: "SC5-CW3e",
        description: "identify some examples of important chemical reactions that occur in living systems and involve energy transfer, including respiration and reactions involving acids such as occur during digestion",
    },
    {   
        outcome: "SC5-CW3f",
        description: "construct word equations from observations and written descriptions of a range of chemical reactions",
    },
    {   
        outcome: "SC5-CW3g",
        description: "deduce that new substances are formed during chemical reactions by rearranging atoms rather than creating or destroying them",
    },


    {    
        outcome: "SC5-CW4 ",
        description: "Different types of chemical reactions are used to produce a range of products and can occur at different rates and involve energy transfer",
    },
    {   
        outcome: "SC5-CW4a",
        description: "identify that chemical reactions involve energy transfer and can be exothermic or endothermic",
    },
    {   
        outcome: "SC5-CW4b",
        description: "compare combustion and respiration as types of chemical reactions that release energy but occur at different rates",
    },
    {   
        outcome: "SC5-CW4c",
        description: "describe the effects of factors, eg temperature and catalysts, on the rate of some common chemical reactions",
    },
    {   
        outcome: "SC5-CW4d",
        description: "analyse how social, ethical and environmental considerations can influence decisions about scientific research related to the development and production of new materials",
    },
    {   
        outcome: "SC5-CW4e",
        description: "describe examples to show where advances in science and/or emerging science and technologies significantly affect people's lives, including generating new career opportunities in areas of chemical science such as biochemistry and industrial chemistry",},



    //ADDITIONAL CONTENT
    {
        outcome: "SC4-PWAC1",
        description: "investigate characteristics of specific forces in terms of size and direction",
    },
    {
        outcome: "SC4-PWAC2",
        description: "investigate some simple machines, eg levers, pulleys, gears or inclined planes",
    },
    {
        outcome: "SC4-PWAC3",
        description: "trace the history of the development of particular devices or technologies, eg circuitry through to microcircuitry",
    },
    {
        outcome: "SC4-PWAC4",
        description: "describe the scientific principles used in some traditional technologies used and developed by Aboriginal and Torres Strait Islander Peoples",
    },
    {
        outcome: "SC4-PWAC5",
        description: "trace the history of pendulum-motion studies and its connection with timekeeping and setting standards of length",
    },
    {
        outcome: "SC4-PWAC6",
        description: "debate intergenerational implications of the use of non-renewable energy resources",
    },
    {
        outcome: "SC4-PWAC7",
        description: "research current ideas about the Earth's magnetic field and its effects",
    },
    {
        outcome: "SC4-ESAC1",
        description: "investigate examples of how scientific knowledge has developed through collaboration of experts from across the disciplines of Science, eg space exploration and resource management",
    },
    {
        outcome: "SC4-ESAC2",
        description: "describe the effect of the forces of the sun and moon on the hydrosphere",
    },
    {
        outcome: "SC4-ESAC3",
        description: "investigate the role of forces and energy in the formation of different types of rocks and minerals",
    },
    {
        outcome: "SC4-ESAC4",
        description: "describe some methods used by scientists to determine the relative age of rock layers",
    },
    {
        outcome: "SC4-ESAC5",
        description: "debate the economic and environmental impacts of mining and resource exploration",
    },
    {
        outcome: "SC4-ESAC6",
        description: "describe ways in which technology has increased the variety of made resources",},


    {
        outcome: "SC4-LWAC1",
        description: "describe how people in occupations that involve the biological sciences use understanding and skills from across the disciplines of Science",
    },
    {
        outcome: "SC4-LWAC2",
        description: "debate why society should support biological research",
    },
    {
        outcome: "SC4-LWAC3",
        description: "design and construct simple keys to identify a range of living things",
    },
    {
        outcome: "SC4-LWAC4",
        description: "classify, using a hierarchical system, a range of selected plants and animals to species level",
    },
    {
        outcome: "SC4-LWAC5",
        description: "identify, using an example of an organism or group of organisms, where the classification has changed as a result of new evidence from technological developments, scientific discoveries and/or advances in scientific understanding",
    },
    {
        outcome: "SC4-LWAC6",
        description: "research the contributions of Australian scientists to the study of human impact on environments and to local environmental management projects",
    },
    {
        outcome: "SC4-LWAC7",
        description: "discuss how the observations and understanding of the structure, function and life cycles of native plants are used by Aboriginal and Torres Strait Islander Peoples",
    },
    {
        outcome: "SC4-CWAC1",
        description: "research how a knowledge of physical properties of natural materials is used by Aboriginal and Torres Strait Islander Peoples in everyday life, eg tools, weapons, utensils, shelter, housing or bush medicine",
    },
    {
        outcome: "SC4-CWAC2",
        description: "discuss the cost and benefits to society of the development of new materials",
    },
    {
        outcome: "SC4-CWAC3",
        description: "investigate the nature of mineral crystals",
    },
    {
        outcome: "SC4-CWAC4",
        description: "outline how some historical developments have contributed to evidence that has advanced our understanding of the particle model of matter",
    },
    {
        outcome: "SC4-CWAC5",
        description: "investigate how the chemical properties of a substance will affect its use, eg flammability and ability to corrode",
    },
    {
        outcome: "SC4-CWAC6",
        description: "explain the changes in pressure of gases in terms of increases or decreases in the frequency of particle collisions",
    },
    {
        outcome: "SC5-PWAC1",
        description: "investigate quantitatively, features of waves including frequency, wavelength and speed using V=𝑓𝜆 and relate this to musical instruments",
    },
    {
        outcome: "SC5-PWAC2",
        description: "relate scattering and dispersion of light to everyday occurrences",
    },
    {
        outcome: "SC5-PWAC3",
        description: "explain the difference between speed and velocity",
    },
    {
        outcome: "SC5-PWAC4",
        description: "describe the relationships between displacement, time, velocity and acceleration, using the equations of motion",
    },
    {
        outcome: "SC5-PWAC5",
        description: "relate quantitatively, force, mass and acceleration, and apply to everyday situations",
    },
    {
        outcome: "SC5-PWAC6",
        description: "apply Newton's laws of motion to space travel",
    },
    {
        outcome: "SC5-PWAC7",
        description: "compare energy changes in interactions in sport activities",
    },
    {
        outcome: "SC5-PWAC8",
        description: "explain the relationship between resistance, voltage and current, using Ohm's Law",
    },
    {
        outcome: "SC5-PWAC9",
        description: "investigate the energy efficiency of appliances and relate this to a household energy account",
    },
    {
        outcome: "SC5-PWAC10",
        description: "research how engineers and architects employ scientific concepts and principles in designing energy-efficient devices and buildings",

    },{
        outcome: "SC5-ESAC1",
        description: "relate colours of stars to their age, size and distance from the Earth",
    },
    {
        outcome: "SC5-ESAC2",
        description: "describe evidence used to support estimates of time in the universe",
    },
    {
        outcome: "SC5-ESAC3",
        description: "describe some recent contributions made by Australian scientists in the exploration and study of the universe",
    },
    {
        outcome: "SC5-ESAC4",
        description: "discuss technological developments that have extended the ability of scientists to collect information about, and monitor events in, the natural world",
    },
    {
        outcome: "SC5-ESAC5",
        description: "research evidence relating global warming to changes in weather patterns, including El Niño and La Niña",
    },
    {
        outcome: "SC5-ESAC6",
        description: "examine the factors that drive deep ocean currents, their role in regulating climate and their effects on marine life",
    },
    {
        outcome: "SC5-ESAC7",
        description: "esearch how computer modelling has improved knowledge and predictability of phenomena, eg atmospheric pollution, ocean salinity and climate change",
    },
    {
        outcome: "SC5-ESAC8",
        description: "discuss the development and implications of international agreements relating to biodiversity and climate change, eg the original 1987 Montreal Protocol, 1992 United Nations Conference on Environment and Development, 1997 Kyoto Protocol and the 2009 United Nations Climate Change Conference",
    },
    {
        outcome: "SC5-ESAC9",
        description: "outline examples where advances in science and emerging science and technologies significantly affect people's lives, including generating new career opportunities in areas such as astrophysics, geophysics, space science and vulcanology",},


    {
        outcome: "SC5-LWAC1",
        description: "debate why any investigation relating to biological research and involving or affecting animals, must be humane, justified and ethical",
    },
    {
        outcome: "SC5-LWAC2",
        description: "describe the range of functions carried out by some endocrine (hormonal) glands in humans",
    },
    {
        outcome: "SC5-LWAC3",
        description: "investigate how models can be used to predict the changes in populations due to environmental changes, eg the impact of fire or flooding, introduction of a disease or predator",
    },
    {
        outcome: "SC5-LWAC4",
        description: "discuss the strengths and limitations of using models to make predictions about changes in biological systems",
    },
    {
        outcome: "SC5-LWAC5",
        description: "describe examples of advances in science and/or emerging science and technologies, in areas that involve biological science such as dentistry, environmental science, biomedical engineering, physiology, pharmaceuticals or nanotechnology",
    },
    {
        outcome: "SC5-LWAC6",
        description: "assess the role of the development of fast computers in the analysis of DNA sequences",
    },
    {
        outcome: "SC5-LWAC7",
        description: "research how information technology is applied in bioinformatics",
    },


    {
        outcome: "SC5-CWAC1",
        description: "use models to describe the arrangement of electrons in the energy levels of common elements",
    },
    {
        outcome: "SC5-CWAC2",
        description: "research the development of ideas about the nature of radioactivity",
    },
    {
        outcome: "SC5-CWAC3",
        description: "investigate the order of activity of a range of metals",
    },
    {
        outcome: "SC5-CWAC4",
        description: "balance a range of common chemical equations",
    },
    {
        outcome: "SC5-CWAC5",
        description: "conduct flame tests and explain the colours in terms of subatomic structure",
    },
    {
        outcome: "SC5-CWAC6",
        description: "research ways that are used to restore and prevent corrosion of submerged objects",
    },
    {
        outcome: "SC5-CWAC7",
        description: "investigate the processes involved in the production of new materials from synthetic fibres",
    },
    {
        outcome: "SC5-CWAC8",
        description: "evaluate, using scientific evidence, the claims, explanations or predictions made in the media or advertising in relation to a substance, material or product",
    },
];

// BIO, CHE, EES, INV, PHY
// STEM, BH, PY
// MS