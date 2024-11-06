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
    {tech: 'Frontend Frameworks and Libraries:', skills: ["NextJs","React"]},
    {tech: 'UI Libraries and Frameworks:', skills: ['Flutter', 'Provider', 'GetX']},
    {tech: 'CSS Frameworks:', skills: ['React', 'Redux', 'Material-UI']},
    {tech: 'Backend Frameworks:', skills: ['React', 'Redux', 'Material-UI']},
    {tech: 'Databases and BaaS:', skills: ['Django', 'Flask']},
    {tech: 'Authentication:', skills: ['MySQL', 'PostgreSQL', 'SQLite']},
    {tech: 'Development and DevOps Tools:\n', skills: ['Mongoose']},
    {tech: 'CMS:', skills: ['Firestore', 'Authentication', 'Storage']},
    {tech: 'VDesign Tools:', skills: ['Git', 'GitHub', 'Bitbucket']},
]