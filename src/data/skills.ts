import {
    SiAdobephotoshop, SiAstro,
    SiAuth0,
    SiBabel,
    SiBootstrap,
    SiChakraui,
    SiCss3,
    SiDart,
    SiDocker,
    SiFastapi,
    SiFigma,
    SiFirebase,
    SiFlutter,
    SiFramer,
    SiGit,
    SiGithub,
    SiGitlab,
    SiHtml5,
    SiJavascript,
    SiJira,
    SiJupyter,
    SiKotlin,
    SiKubernetes,
    SiMui,
    SiNextdotjs,
    SiNextui,
    SiNodedotjs,
    SiNotion,
    SiNpm,
    SiObsidian,
    SiPhp,
    SiPostgresql,
    SiPython,
    SiReact,
    SiRedux,
    SiSass,
    SiShadcnui,
    SiSketch,
    SiSupabase,
    SiSymfony,
    SiTailwindcss,
    SiTrello,
    SiTypescript,
    SiWebpack,
    SiWordpress
} from "react-icons/si";
import {GiPolarBear} from "react-icons/gi";
import {TbApi, TbSql} from "react-icons/tb";
import {LiaOpencart} from "react-icons/lia";

type Skill = {
    label: string;
    type: 'languages' | 'frameworks' | 'databases' | 'tools';
};

const skills: Skill[] = [
    //languages
    {label: 'Java', type: 'languages'},
    {label: 'Kotlin', type: 'languages'},
    {label: 'Dart', type: 'languages'},
    {label: 'Python', type: 'languages'},
    {label: 'Javascript', type: 'languages'},
    {label: 'Typescript', type: 'languages'},


    //frameworks
    {label: 'Flutter', type: 'frameworks'},
    {label: 'Jetpack Compose', type: 'frameworks'},
    {label: 'Spring boot', type: 'frameworks'},
    {label: 'NodeJS', type: 'frameworks'},

    //databases
    {label: 'SQL', type: 'databases'},
    {label: 'MongoDb', type: 'databases'},
    {label: 'Firebase', type: 'databases'},

    //tools
    {label: 'Git', type: 'tools'},
    {label: 'Swagger', type: 'tools'},
    {label: 'Postman', type: 'tools'},
];

export default skills;

export const techStack = [
    {tech: 'Programming Languages:', skills: ["Java", "Kotlin", "Dart", "Python", "Javascript", "Typescript"]},
    {tech: 'Frontend Frameworks and Libraries:', skills: ["NextJs", "React"]},
    {tech: 'UI Libraries and Frameworks:', skills: ['Flutter', 'Provider', 'GetX']},
    {tech: 'CSS Frameworks:', skills: ['React', 'Redux', 'Material-UI']},
    {tech: 'Backend Frameworks:', skills: ['React', 'Redux', 'Material-UI']},
    {tech: 'Databases and BaaS:', skills: ['Django', 'Flask']},
    {tech: 'Authentication:', skills: ['MySQL', 'PostgreSQL', 'SQLite']},
    {tech: 'Development and DevOps Tools:\n', skills: ['Mongoose']},
    {tech: 'CMS:', skills: ['Firestore', 'Authentication', 'Storage']},
    {tech: 'VDesign Tools:', skills: ['Git', 'GitHub', 'Bitbucket']},
]

export const techStackCategiries = {
    'Programming Languages:': ['Java', 'Kotlin', 'Dart', 'Python', 'JavaScript', 'TypeScript'],
    'Frontend Frameworks and Libraries:': [
        'Next.js',
        'AstroJS',
        'React',
        'Flutter',
        'Zustand',
    ],
    'UI Libraries and Frameworks:': [
        'Next UI',
        'Shadcn-UI',
        'Framer Motion',
    ],
    'Markup and Styling:': ['HTML', 'CSS'],
    'CSS Frameworks:': ['Bootstrap', 'Tailwind CSS'],
    'Backend Frameworks:': ['FastAPI', 'Node.js'],
    'Databases and BaaS:': ['MySQL', 'PostgreSQL', 'Supabase', 'Firebase'],
    'Authentication:': ['Next-Auth', 'Supabase', `Clerk`],
    'Development and DevOps Tools:': [
        'Git',
        'GitHub',
        'GitLab',
        'npm',
        'Docker',
    ],
    'CMS:': [],
    'Design Tools:': ['Figma',],
    'Project Management:': ['Notion', 'Obsidian'],
}
export const techStackIcons = [
    {label: 'HTML', icon: SiHtml5},
    {label: 'CSS', icon: SiCss3},
    {label: 'SASS', icon: SiSass},
    {label: 'Bootstrap', icon: SiBootstrap},
    {label: 'Tailwind CSS', icon: SiTailwindcss},
    {label: 'JavaScript', icon: SiJavascript},
    {label: 'TypeScript', icon: SiTypescript},
    {label: 'React', icon: SiReact},
    {label: 'Redux', icon: SiRedux},
    {label: 'Zustand', icon: GiPolarBear},
    {label: 'Next.js', icon: SiNextdotjs},
    {label: 'Next UI', icon: SiNextui},
    {label: 'Chakra UI', icon: SiChakraui},
    {label: 'Material UI', icon: SiMui},
    {label: 'Shadcn-UI', icon: SiShadcnui},
    {label: 'Framer Motion', icon: SiFramer},
    {label: 'Git', icon: SiGit},
    {label: 'GitHub', icon: SiGithub},
    {label: 'GitLab', icon: SiGitlab},
    {label: 'npm', icon: SiNpm},
    {label: 'Babel', icon: SiBabel},
    {label: 'Webpack', icon: SiWebpack},
    {label: 'Docker', icon: SiDocker},
    {label: 'Kubernetes', icon: SiKubernetes},
    {label: 'Node.js', icon: SiNodedotjs},
    {label: 'API', icon: TbApi},
    {label: 'Firebase', icon: SiFirebase},
    {label: 'Supabase', icon: SiSupabase},
    {label: 'Next-Auth', icon: SiAuth0},
    {label: 'PHP', icon: SiPhp},
    {label: 'Symfony', icon: SiSymfony},
    {label: 'MySQL', icon: TbSql},
    {label: 'PostgreSQL', icon: SiPostgresql},
    {label: 'WordPress', icon: SiWordpress},
    {label: 'Opencart', icon: LiaOpencart},
    {label: 'Figma', icon: SiFigma},
    {label: 'Sketch', icon: SiSketch},
    {label: 'Adobe Photoshop', icon: SiAdobephotoshop},
    {label: 'Jira', icon: SiJira},
    {label: 'Trello', icon: SiTrello},
    {label: 'Notion', icon: SiNotion},
    {label: 'Obsidian', icon: SiObsidian},
    {label: 'FastAPI', icon: SiFastapi},
    {label: 'Jupyter', icon: SiJupyter},
    {label: 'Kotlin', icon: SiKotlin},
    {label: 'Dart', icon: SiDart},
    {label: 'Flutter', icon: SiFlutter},
    {label: 'Python', icon: SiPython},
    {label: 'AstroJS', icon: SiAstro},
]