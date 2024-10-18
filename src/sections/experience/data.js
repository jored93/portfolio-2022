import { RiNextjsLine } from 'react-icons/ri'
import { FaJava } from 'react-icons/fa6'
import { BiLogoSpringBoot } from 'react-icons/bi'
import {
    SiGraphql,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiNodedotjs,
    SiPhp,
    SiPython,
    SiReact,
    SiAngular,
    SiSass,
    SiBootstrap,
    SiTypescript,
    SiExpress,
    SiFlask,
    SiMongoose,
    SiSocketdotio,
    SiPostgresql,
    SiMysql,
    SiPowerbi,
    SiMongodb,
    SiPrisma,
    SiGit,
    SiGithub,
    SiGitlab,
    SiDocker,
    SiAmazon,
    SiAwslambda,
    SiMeta,
    SiTrello,
    SiPostman,
    SiMicrosoftazure
} from 'react-icons/si';

export const SKILLS_DATA = [
    {
        "id": 1,
        "experience": "Backend",
        "skills": [
            { name: 'TypeScript', icon: SiTypescript, classNameColor: 'lightBlue' },
            { name: 'Node.js', icon: SiNodedotjs, classNameColor: 'greenLight' },
            { name: 'Python', icon: SiPython, classNameColor: 'blue' },
            { name: 'Flask', icon: SiFlask, classNameColor: 'black' },
            { name: 'Java', icon: FaJava, classNameColor: 'blue' },
            { name: 'SpringBoot', icon: BiLogoSpringBoot, classNameColor: 'greenLight' }
        ]
    },
    {
        "id": 2,
        "experience": "Frontend",
        "skills": [
            { name: 'CSS3', icon: SiCss3, classNameColor: 'lightBlue' },
            { name: 'JavaScript', icon: SiJavascript, classNameColor: 'yellow' },
            { name: 'React', icon: SiReact, classNameColor: 'blue' },
            { name: 'Angular', icon: SiAngular, classNameColor: 'greenLight' },
            { name: 'Bootstrap', icon: SiBootstrap, classNameColor: 'purpleDark' },
        ]
    },
    {
        "id": 3,
        "experience": "Cloud & DevOps",
        "skills": [
            { name: 'AWS', icon: SiAmazon, classNameColor: 'black' },
            { name: 'Azure', icon: SiMicrosoftazure, classNameColor: 'black' },

        ]
    }
]

export const DATA_SKILLS = [
    { name: 'HTML5', icon: SiHtml5, classNameColor: 'orange' },
    { name: 'CSS3', icon: SiCss3, classNameColor: 'lightBlue' },
    { name: 'JavaScript', icon: SiJavascript, classNameColor: 'yellow' },
    { name: 'TypeScript', icon: SiTypescript, classNameColor: 'lightBlue' },
    { name: 'Node.js', icon: SiNodedotjs, classNameColor: 'greenLight' },
    { name: 'Express.js', icon: SiExpress, classNameColor: 'black' },
    { name: 'Java', icon: FaJava, classNameColor: 'blue' },
    { name: 'SpringBoot', icon: BiLogoSpringBoot, classNameColor: 'greenLight' },
    { name: 'PHP', icon: SiPhp, classNameColor: 'purple' },
    { name: 'Python', icon: SiPython, classNameColor: 'blue' },
    { name: 'Flask', icon: SiFlask, classNameColor: 'black' },
    { name: 'Socket.io', icon: SiSocketdotio, classNameColor: 'black' },
    { name: 'Mongoose ODM', icon: SiMongoose, classNameColor: 'red' },
    { name: 'Prisma', icon: SiPrisma, classNameColor: 'black' },
    { name: 'MongoDB', icon: SiMongodb, classNameColor: 'greenDark' },
    { name: 'Postgres', icon: SiPostgresql, classNameColor: 'blue' },
    { name: 'MySQL', icon: SiMysql, classNameColor: 'blue' },
    { name: 'PowerBi', icon: SiPowerbi, classNameColor: 'yellow' },
    { name: 'Graphql', icon: SiGraphql, classNameColor: 'fucsia' },
    { name: 'React.js', icon: SiReact, classNameColor: 'lightBlue' },
    { name: 'Next.js', icon: RiNextjsLine, classNameColor: 'black' },
    { name: 'Angular.js', icon: SiAngular, classNameColor: 'lightRed' },
    { name: 'Sass', icon: SiSass, classNameColor: 'pink' },
    { name: 'Bootstrap', icon: SiBootstrap, classNameColor: 'purpleDark' },
    { name: 'Git', icon: SiGit, classNameColor: 'orange' },
    { name: 'GitHub', icon: SiGithub, classNameColor: 'black' },
    { name: 'GitLab', icon: SiGitlab, classNameColor: 'orange' },
    { name: 'Docker', icon: SiDocker, classNameColor: 'lightBlue' },
    { name: 'AWS Lambda', icon: SiAwslambda, classNameColor: 'orange' },
    { name: 'API Meta', icon: SiMeta, classNameColor: 'blue' },
    { name: 'API Trello', icon: SiTrello, classNameColor: 'lightBlue' },
    { name: 'Postman', icon: SiPostman, classNameColor: 'orange' },
]