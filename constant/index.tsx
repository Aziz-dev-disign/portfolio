import { ExperienceItemsProps } from "@/components/ExperienceItems";
import { ProjectsItemsProps } from "@/components/ProjectItems";

export const Social_Icons = [
  {
    link: "https://github.com/Aziz-dev-disign",
    image: "/Github.svg",
    alt: "Github",
  },
  {
    link: "https://gitlab.com/keurdo",
    image: "/gitlab.svg",
    alt: "Gitlab",
  },
  {
    link: "https://discord.com/channels/@abdoulaziz",
    image: "/discord.svg",
    alt: "discord",
  },
  {
    link: "https://www.linkedin.com/in/bande-abdoul-aziz-5691b7185/",
    image: "/LinkedIn.svg",
    alt: "LinkedIn",
  },
];

export const projectItems: ProjectsItemsProps[] = [
  {
    title: "Yenga",
    subTitle:
      "Yenga makes it easy to top up your airtime with all operators. With your Mobile Money account, you can top up any operator without having to go anywhere. Yenga is mobile top-up between operators without having to go anywhere and is available 24/7.",
    link: "https://yenga.app/",
    imgSrc: "/Yenga.png",
  },
  {
    title: "Yalendar",
    subTitle:
      "Quick and easy online appointment booking. Offer the best online appointment booking experience to your customers or prospects. Try Yalendar for free and start sharing your availability now.",
    link: "https://yalendar.com/",
    imgSrc: "/yalendar.jpeg",
  },
  {
    title: "SankMoney",
    subTitle:
      "African Mobile Money. Sank Money is the African solution for Mobile Money.",
    link: "https://sankmoney.com/",
    imgSrc: "/sankmoney.jpg",
  },
  {
    title: "Ikoddi",
    subTitle:
      "Ikoddi allows you to send messages, communication airtime and internet packages to groups of people. Ikoddi allows you to send airtime, internet packages and messages to your employees, customers, partners... 24/7.",
    link: "https://ikoddi.com/",
    imgSrc: "/ikoddi2.png",
  },
  {
    title: "JDWS",
    subTitle:
      "Justice and Dignity for the Women of Sahel (JDWS) is an international non-governmental organization. Its main objective is to fight against Gender-Based Violence (GBV) and to promote women's rights. JDWS contributes to breaking the silence and lifting taboos to better inform about gender-based violence, assist women and girls in the Sahel, and loudly denounce inequality and social justice.",
    link: "https://jdws.org/",
    imgSrc: "/jdws.jpeg",
  },
  {
    title: "EIN",
    subTitle:
      "The International School of Digital Education is a pioneering institution dedicated to excellence in digital education. At a time when digital technology is playing an increasingly important role in economic and social development, our centre is positioning itself as a crossroads for learning, innovation and opportunities for the people of Burkina Faso..",
    link: "https://ein-bf.com/",
    imgSrc: "/ein.jpg",
  },
];

export const experiencesItems: ExperienceItemsProps[] = [
  {
    profileRole: "Project Manager",
    startDate: "JANUARY 2024",
    endDate: "Present",
    companyName: "KREEZUS",
    workType: "Full time",
    tasks: ["Project Planning", "Communication and Coordination", "Risk Management", "Monitoring and Control", "Change Management", "Deliverables and Documentation"],
    skills: [],
  },
  {
    profileRole: "Software Engineer",
    startDate: "JANUARY 2023",
    endDate: "DECEMBER 2023",
    companyName: "KREEZUS",
    workType: "Full time",
    tasks: ["Mobile application development", "Web application development", "Project management", "CI/CD deployment management", "Database system administration"],
    skills: ["Flutter", "React", "NestJS", "Typescript", "Docker", "Firebase"],
  },
  {
    profileRole: "Software Engineer",
    startDate: "JANUARY 2022",
    endDate: "DECEMBER 2022",
    workType: "Full time",
    companyName: "KREEZUS",
    tasks: ["Mobile application development", "Web application development", "Project management", "CI/CD deployment management", "Database system administration"],
    skills: ["Flutter", "React", "NestJS", "Typescript", "Docker"],
  },
  {
    profileRole: "Software Engineer",
    startDate: "JUNE 2021",
    endDate: "DECEMBER 2021",
    workType: "Internship",
    companyName: "KREEZUS",
    tasks: ["Mobile application development", "Web application development", "Project management", "CI/CD deployment management", "Database system administration"],
    skills: ["NestJS", "React", "JavaScript", "Typescript"],
  },
  {
    profileRole: "Software Engineer",
    startDate: "OCTOBER 2020",
    endDate: "FEBRUARY 2021",
    workType: "Internship",
    companyName: "SOCIETE GENERALE DU BURKINA FASO",
    tasks: ["Mobile application development", "Web application development", "Project management",],
    skills: ["React", "JavaScript", "Typescript", "Axios"],
  },
];
