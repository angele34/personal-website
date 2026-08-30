export type Course = {
  code: string;
  name: string;
};

export type CourseYear = {
  year: string; // e.g. "2024-2025"
  groups: Course[][]; // each inner array is a row/group that shares one color; sizes can vary freely
};

export const courseHistory: CourseYear[] = [
  {
    year: '2024-2025',
    groups: [
      [
        { code: 'CCICOMP', name: 'Introduction to Computing' },
        { code: 'CCPROG1', name: 'Logic Formulation and Introductory Programming' },
        { code: 'MTH101A', name: 'Foundation Course in Mathematics' },
      ],
      [
        { code: 'CSMATH1', name: 'Differential Calculus' },
        { code: 'CCPROG2', name: 'Programming with Structured Data Types' },
        { code: 'CCDSTRU', name: 'Discrete Structures' },
      ],
      [
        { code: 'CSMATH2', name: 'Linear Algebra' },
        { code: 'CCPROG3', name: 'Object Oriented Programming' },
        { code: 'CCDSALG', name: 'Data Structures and Algorithms' },
      ],
      [
        { code: 'STT101A', name: 'Foundation Course in Statistics' },
      ],
    ],
  },
  {
    year: '2025-2026',
    groups: [
      [
        { code: 'CSADPRG', name: 'Advanced Programming and Theory of Programming Languages' },
        { code: 'CCINFOM', name: 'Information Management' },
        { code: 'CSINTSY', name: 'Introduction to Intelligent Systems' },
        { code: 'CSALGCM', name: 'Algorithms and Complexity' },
      ],
      [
        { code: 'CSARCH1', name: 'Introduction to Computer Organization and Architecture 1' },
        { code: 'CCAPDEV', name: 'Web Application Development' },
        { code: 'ST-MATH', name: 'Integral Calculus' },
        { code: 'STALGCM', name: 'Advanced Algorithms and Complexities' },
      ],
      [
        { code: 'CSMODEL', name: 'Statistical Modelling and Simulation' },
        { code: 'CSSWENG', name: 'Software Engineering' },
        { code: 'CSNETWK', name: 'Introduction to Computer Networks' },
        { code: 'STHCIUX', name: 'Human Computer Interactions' },
      ],
    ],
  },
  {
    year: '2026-2027',
    groups: [
      [
        { code: 'STSWENG', name: 'Advanced Software Engineering' },
        { code: 'STADVDB', name: 'Advanced Database Systems' },
        { code: 'CSARCH2', name: 'Introduction to Computer Organization and Architecture 2' },
        { code: 'LBYARCH', name: 'Laboratory for Computer Organization and Architecture' },
      ],
      [
        { code: 'EMPATHY', name: 'Emphatic Computing in Human-System Interaction' },
        { code: 'ITSECUR', name: 'Introduction to Security' },
      ],
    ]
    },
];

export type Org = {
  name: string;
  role?: string;
};

export const campusOrgs: Org[] = [
  { name: 'La Salle Computer Society', role: 'Junior Officer' },
  { name: 'DLSU Google Developer Student Clubs', role: 'Project Management Developer' },
  { name: 'DLSU College of Computer Studies CATCH2T28', role: 'Research and Development Executive' },
  { name: 'DLSU Badminton Society' },
  { name: 'DLSU Society of Manufacturing Engineers' },
];

export const outsideOrgs: Org[] = [
  { name: 'Quantum Computing Society PH', role: 'Web Development Product Engineer' },
];