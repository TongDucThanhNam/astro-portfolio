import {Tooltip} from '@nextui-org/tooltip'
import {
    SiAdobephotoshop,
    SiAuth0,
    SiBabel,
    SiBootstrap,
    SiChakraui,
    SiCss3,
    SiDocker,
    SiFigma,
    SiFirebase,
    SiFramer,
    SiGit,
    SiGithub,
    SiGitlab,
    SiHtml5,
    SiJavascript,
    SiJira,
    SiKubernetes,
    SiMui,
    SiNextdotjs,
    SiNextui,
    SiNodedotjs,
    SiNpm,
    SiPhp,
    SiPostgresql,
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
    SiWordpress,
} from 'react-icons/si'
import {GiPolarBear} from "react-icons/gi";
import {TbApi, TbSql} from "react-icons/tb";
import {LiaOpencart} from "react-icons/lia";
import {Button} from '@nextui-org/react';

const siteConfig = {
    techStackCategiries: {
        'Programming Languages:': ['JavaScript', 'TypeScript', 'PHP'],
        'Frontend Frameworks and Libraries:': [
            'Next.js',
            'React',
            'Redux',
            'Zustand',
        ],
        'UI Libraries and Frameworks:': [
            'Next UI',
            'Chakra UI',
            'Shadcn-UI',
            'Material UI',
            'Framer Motion',
        ],
        'Markup and Styling:': ['HTML', 'CSS', 'SASS'],
        'CSS Frameworks:': ['Bootstrap', 'Tailwind CSS'],
        'Backend Frameworks:': ['Symfony', 'Node.js'],
        'Databases and BaaS:': ['MySQL', 'PostgreSQL', 'Supabase', 'Firebase'],
        'Authentication:': ['Next-Auth', 'Supabase'],
        'Development and DevOps Tools:': [
            'Git',
            'GitHub',
            'GitLab',
            'npm',
            'Babel',
            'Webpack',
            'Docker',
            'Kubernetes',
        ],
        'CMS:': ['WordPress', 'Opencart'],
        'Design Tools:': ['Figma', 'Sketch', 'Adobe Photoshop'],
        'Project Management:': ['Jira', 'Trello'],
    },
    techStackIcons: [
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
    ]
}


export const Skills = () => (
    <div
        className="relative col-span-12 row-span-2 md:col-span-9 shadow-xl flex flex-col rounded-xl border-2 bg-beige p-5 sm:p-7">
        <h2>Tech Stack</h2>
        {Object.entries(siteConfig.techStackCategiries).map(
            ([categoryName, categoryItems]) => (
                <div
                    key={categoryName}
                    className="grid sm:grid-cols-2 grid-cols-1 gap-2 items-center border-b-1 border-dashed border-stone-400 last:border-b-0 py-2"
                >
                    <h3 className={'text-xl font-medium fontMono'}>
                        {categoryName}
                    </h3>
                    <ul className="flex gap-2 flex-wrap">
                        {siteConfig.techStackIcons
                            .filter((item) => categoryItems.includes(item.label))
                            .map((item, index) => (
                                <Tooltip
                                    key={index}
                                    content={item.label}
                                >
                                    <Button
                                        isIconOnly={true}
                                    >
                                        <item.icon size="20"/>
                                    </Button>

                                </Tooltip>
                            ))}
                    </ul>
                </div>
            )
        )}
    </div>
)