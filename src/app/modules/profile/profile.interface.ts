type ISkills =
  | 'Html'
  | 'CSS'
  | 'Tailwind Css'
  | 'JavaScript'
  | 'TypeScript'
  | 'React.js'
  | 'Next.js'
  | 'VUE.js'
  | 'Angular'
  | 'React Native'
  | 'Redux'
  | 'GraphQL'
  | 'GatsBy.js'
  | 'Node.js'
  | 'Express.js'
  | 'Java'
  | 'Python'
  | 'Django'
  | 'PHP'
  | 'Laravel'
  | '.Net'
  | 'Mongodb'
  | 'MYSQL'
  | 'PostgreSQL'
  | 'Oracle'
  | 'WordPress'
  | 'Firebase';

type IEducation =
  | 'JSC/JDC/8 PASS'
  | 'SSC/Secondary'
  | 'HSC / Higher Secondary'
  | 'Diploma'
  | 'Bachelor / Honors'
  | 'Masters'
  | 'PHD (Doctor of Philosophy)';

type IGender = 'male' | 'Female';

export type IProfile = {
  dateOfBirth: Date;
  gender: IGender;
  skills?: ISkills[];
  education?: IEducation[];
  socialMediaLinks?: [];
  profilePicture?: string;
};
