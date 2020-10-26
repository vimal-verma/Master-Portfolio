const greeting = {
    title: "Your Name",
    logo_name: "Name",
    subTitle:
    "I'm a student pursuing {Course} in {department} from {university}. I'm a passionate learner who's always willing to learn and work across technologies and domains. I love to explore new technologies and leverage. Apart from that I also love to guide and mentor newbies. I'm currently into Web Development and working on my MERN Website"
};
const socialMedia = [
    // fontawesome is fontawesome Class Name of Icon
    // Don't Forget to add "fa-3x" in fontawesome to increase Size of icons
    {
        icon: "facebook",
        fontawesome: "fab fa-facebook-square  fa-3x",
        link: "Your facebook link"
    },
    {
        icon: "twitter",
        fontawesome: "fab fa-twitter fa-3x",
        link: "Your twitter link"
    },
    {
        icon: "instagram",
        fontawesome: "fab fa-instagram fa-3x",
        link: "Your instagram link"
    },
    {
        icon: "github",
        fontawesome: "fab fa-github fa-3x",
        link: "Your github link"
    },
    {
        icon: "gitlab",
        fontawesome: "fab fa-gitlab fa-3x",
        link: "Your gitlab link"
    },
    {
        icon: "devto",
        fontawesome: "fab fa-dev fa-3x",
        link: "Your devto link"
    },
    {
        icon: "linkedin",
        fontawesome: "fab fa-linkedin fa-3x",
        link: "Your linkedin link"
    },
    {
        icon: "mailto",
        fontawesome: "far fa-envelope fa-3x",
        link: "mailto:Your mail"
    }

];

const Skill = {
    Html: true,
    css: true,
    js: true,
    node: false
}
const projects = [
    {
        id: "1",
        name: "project 1",
        Description: "this is Description",
        Code_Link: "this is code link",
        Live_link: "this is Live link",
        tool_used: "html,css,js",
        img: "https://master-portfolio.js.org/src/assets/img/mplogo.png"
    },
    {
        id: "2",
        name: "project 2",
        Description: "this is Description",
        Code_Link: "this is code link",
        Live_link: "this is Live link",
        tool_used: "html,css,js",
        img: "https://master-portfolio.js.org/src/assets/img/mplogo.png"
    },
    {
        id: "3",
        name: "project 3",
        Description: "this is Description",
        Code_Link: "this is code link",
        Live_link: "this is Live link",
        tool_used: "html,css,js",
        img: "https://master-portfolio.js.org/src/assets/img/mplogo.png"
    }
];
const certificate = [
    {
        id: "1",
        name: "certificate 1",
        Description: "this is Description",
        Link: "this is code link",
        img: "https://master-portfolio.js.org/src/assets/img/mplogo.png"
    },
    {
        id: "2",
        name: "certificate 2",
        Description: "this is Description",
        Link: "this is code link",
        img: "https://master-portfolio.js.org/src/assets/img/mplogo.png"
    },
    {
        id: "3",
        name: "certificate 3",
        Description: "this is Description",
        Link: "this is code link",
        img: "https://master-portfolio.js.org/src/assets/img/mplogo.png"
    }
];

const DevBio = [
    'Building resposive website front end using React-Redux',
    'Developing mobile applications using Flutter',
    'Creating application backend in Node & Express'
];

const DesignBio = [
    'Designing attractive user interface for mobile and web applications',
    'Customizing logo designs',
    'Editing video'
]


const AboutBio =[
    ' I’m currently learning Full Stack Development.',
    ' I’m currently working with Node.js, Express.js, React, Mongodb, Javascript, Flutter, etc',
    ' I’m a student pursuing {course} in {department} from {university}',
    ' Fun fact: \'Equal is Not Always Equal in Javascript\'',
    ' I am From {City}',
    ' I am available on almost every social media. You can message me'
];
const EducationBio =[
    ' I’m currently learning Full Stack Development.',
    ' I’m currently working with Node.js, Express.js, React, Mongodb, Javascript, Flutter, etc',
    ' I’m a student pursuing {course} in {department} from {university}',
    ' Fun fact: \'Equal is Not Always Equal in Javascript\'',
];
const ProjectsBio =[
    ' I’m currently learning Full Stack Development.',
    ' I’m currently working with Node.js, Express.js, React, Mongodb, Javascript, Flutter, etc'
];
const ContactBio =[
    'I\'m a student pursuing {course} in {department} from {university}',
    ' I am From {City}',
    ' I am available on almost every social media. You can message me'

];


export {
    greeting,
    socialMedia,
    Skill,
    projects,
    certificate,
    AboutBio,
    EducationBio,
    ProjectsBio,
    ContactBio,
    DevBio,
    DesignBio
};