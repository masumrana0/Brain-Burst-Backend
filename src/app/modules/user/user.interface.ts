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

type IAsianNationality =
  | 'Afghan'
  | 'Armenian'
  | 'Azerbaijani'
  | 'Bahraini'
  | 'Bangladeshi'
  | 'Bhutanese'
  | 'Bruneian'
  | 'Cambodian'
  | 'Chinese'
  | 'Cypriot'
  | 'Georgian'
  | 'Indian'
  | 'Indonesian'
  | 'Iranian'
  | 'Iraqi'
  | 'Israeli'
  | 'Japanese'
  | 'Jordanian'
  | 'Kazakhstani'
  | 'Kuwaiti'
  | 'Kyrgyzstani'
  | 'Laotian'
  | 'Lebanese'
  | 'Malaysian'
  | 'Maldivian'
  | 'Mongolian'
  | 'Burmese'
  | 'Nepali'
  | 'North Korean'
  | 'Omani'
  | 'Pakistani'
  | 'Palestinian'
  | 'Filipino'
  | 'Qatari'
  | 'Saudi Arabian'
  | 'Singaporean'
  | 'South Korean'
  | 'Sri Lankan'
  | 'Syrian'
  | 'Taiwanese'
  | 'Tajikistani'
  | 'Thai'
  | 'Timorese'
  | 'Turkish'
  | 'Turkmenistani'
  | 'Emirati'
  | 'Uzbekistani'
  | 'Vietnamese'
  | 'Yemeni';

type IGender = 'male' | 'Female';

export type IName = {
  firstName: string;
  lastName?: string;
};

export type IUser = {
  userName?: string;
  name: IName;
  email: string;
  gender: IGender;
  dateOfBirth: Date;
  nationality: IAsianNationality;
  skills?: ISkills[];
  education?: IEducation[];
  socialMediaLinks?: [];
  profilePicture?: string;
};