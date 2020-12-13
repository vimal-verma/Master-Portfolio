const greeting = {
    title: "Hi, I'm Vimal Kumar",
    logo_name: "Vimal",
    logo_img_show: true, // if true than show image(logo) in home page instant of text(logo)
    logo_img: "https://raw.githubusercontent.com/vimalverma558/vimalverma558.github.io/96a035cf0f8d5a42f43c1460d10776a02014e4cf/src/assets/img/vimal.svg",
    full_name: "Vimal Kumar",
    email: "email id",
    subTitle:
    "I'm a student pursuing Bachelors's in Computer Science 🎓 from IIIT Ranchi 🏛️. I'm a passionate learner who's always willing to learn and work across technologies and domains 💡. I love to explore new technologies and leverage 🌟. Apart from that I also love to guide and mentor newbies 👨🏻‍💻. I'm currently into Web Development 🕸️ and working on my MERN Website",
    Programming: false,  // if true, Show 'Programming' section in home page, if false than not show
    developer: true,  // if true, Show 'Full Stack Development' section in home page, if false than not show
    designer: true,  // if true, Show 'designer' section in home page, if false than not show
    cloud_infra_architecture:true,  // if true, Show 'cloud_infra_architecture' section in home page, if false than not show
    data_Science: false,  // if true, Show 'data_Science' section in home page, if false than not show
    ml_ai: false,  // if true, Show 'ml_ai' section in home page, if false than not show
    Robotic: false,  // if true, Show 'Robotic' section in home page, if false than not show
    gamedev: false,  // if true, Show 'gamedev' section in home page, if false than not show
};

const BlogData = {
    // this show your dev.to blog in your Portfolio blog
    show_Blog: true,  // if true it Show your DEV.to article in Blog Section, if false than Blog Section convert to skill Section.
    devto_username: "vimal",
    Blog_Bio : [
        // this is visible in '/blog' section if show_Blog: true, else show in skill section
        "I write article on dev.to",
        "You can follow me dev.to for Update",
        "I write about git, JavaScript, Open Source and more.."
    ]
};


const socialMedia = [
    // https://logo.letskhabar.com/ all logo list
    // you can use by changing tool name
    {
        icon: "linkedin",
        img: "https://logo.letskhabar.com/img?tool=linkedin",
        link: "https://www.linkedin.com/in/vimalverma558"
    },
    {
        icon: "twitter",
        img: "https://logo.letskhabar.com/img?tool=twitter",
        link: "https://twitter.com/vimalverma558"
    },
    {
        icon: "github",
        img: "https://logo.letskhabar.com/img?tool=github",
        link: "https://github.com/vimalverma558"
    },
    {
        icon: "devto",
        img: "https://logo.letskhabar.com/img?tool=dev",
        link: "https://dev.to/vimal"
    },
    {
        icon: "instagram",
        img: "https://logo.letskhabar.com/img?tool=instagram",
        link: "https://instagram.com/vimalverma558"
    },
    {
        icon: "facebook",
        img: "https://logo.letskhabar.com/img?tool=facebook0",
        link: "https://facebook.com/vimalverma558"
    },
    {
        icon: "mail",
        img: "https://logo.letskhabar.com/img?tool=mail",
        link: "mailto:kumarvimal558@gmail.com"
    }

];

const ProgrammingSkill = [
    // https://logo.letskhabar.com/ all logo list
    // you can use by changing tool name
    {
        icon: "c-programming",
        img: "https://logo.letskhabar.com/img?tool=c-programming"
    },
    {
        icon: "java",
        img: "https://logo.letskhabar.com/img?tool=java"
    },
    {
        icon: "python",
        img: "https://logo.letskhabar.com/img?tool=python"
    },

];

const DevSkill = [
    // https://logo.letskhabar.com/ all logo list
    // you can use by changing tool name
    {
        icon: "html",
        img: "https://logo.letskhabar.com/img?tool=html"
    },
    {
        icon: "css",
        img: "https://logo.letskhabar.com/img?tool=css3"
    },
    {
        icon: "js",
        img: "https://logo.letskhabar.com/img?tool=javascript"
    },
    {
        icon: "react",
        img: "https://logo.letskhabar.com/img?tool=react"
    },
    {
        icon: "node",
        img: "https://logo.letskhabar.com/img?tool=node"
    },
    {
        icon: "mongodb",
        img: "https://logo.letskhabar.com/img?tool=mongodb"
    },
    {
        icon: "firebase",
        img: "https://logo.letskhabar.com/img?tool=firebase"
    },
    {
        icon: "yarn",
        img: "https://logo.letskhabar.com/img?tool=yarn"
    },
    {
        icon: "npm",
        img: "https://logo.letskhabar.com/img?tool=npm"
    },
    {
        icon: "flutter",
        img: "https://logo.letskhabar.com/img?tool=flutter"
    },
    {
        icon: "git",
        img: "https://logo.letskhabar.com/img?tool=git"
    },
    {
        icon: "wordpress",
        img: "https://logo.letskhabar.com/img?tool=wordpress"
    },

];

const DesignSkill = [
    // https://logo.letskhabar.com/ all logo list
    // you can use by changing tool name
    {
        icon: "figma",
        img: "https://logo.letskhabar.com/img?tool=figma"
    },
    {
        icon: "adobe-xd",
        img: "https://logo.letskhabar.com/img?tool=adobe-xd"
    },
    {
        icon: "adobe-illustrator",
        img: "https://logo.letskhabar.com/img?tool=adobe-illustrator"
    },
    {
        icon: "adobe-photoshop",
        img: "https://logo.letskhabar.com/img?tool=adobe-photoshop"
    },
    {
        icon: "adobe-premiere-pro",
        img: "https://logo.letskhabar.com/img?tool=adobe-premiere-pro"
    }

];
const cloud_infra_architecture_Skill = [
    // https://logo.letskhabar.com/ all logo list
    // you can use by changing tool name
    {
        icon: "gcp",
        img: "https://logo.letskhabar.com/img?tool=google_cloud"
    },
    {
        icon: "aws",
        img: "https://logo.letskhabar.com/img?tool=amazon-web-services"
    },
    {
        icon: "azure",
        img: "https://logo.letskhabar.com/img?tool=azure"
    },
    {
        icon: "travis",
        img: "https://logo.letskhabar.com/img?tool=travis"
    },
    {
        icon: "github",
        img: "https://logo.letskhabar.com/img?tool=github"
    },

];
const data_Science_Skill = [
    // https://logo.letskhabar.com/ all logo list
    // you can use by changing tool name
    {
        icon: "python",
        img: "https://logo.letskhabar.com/img?tool=python"
    },
    {
        icon: "kaggle",
        img: "https://logo.letskhabar.com/img?tool=kaggle"
    },
    {
        icon: "tensorflow",
        img: "https://logo.letskhabar.com/img?tool=tensorflow"
    },
    {
        icon: "jupyter",
        img: "https://logo.letskhabar.com/img?tool=jupyter"
    }

];
const Ml_ai_Skill = [
    // https://logo.letskhabar.com/ all logo list
    // you can use by changing tool name
    {
        icon: "python",
        img: "https://logo.letskhabar.com/img?tool=python"
    },
    {
        icon: "tensorflow",
        img: "https://logo.letskhabar.com/img?tool=tensorflow"
    },
    {
        icon: "arduino",
        img: "https://logo.letskhabar.com/img?tool=arduino"
    }

];

const RoboticSkill = [
    // https://logo.letskhabar.com/ all logo list
    // you can use by changing tool name
    {
        icon: "tensorflow",
        img: "https://logo.letskhabar.com/img?tool=tensorflow"
    },
    {
        icon: "arduino",
        img: "https://logo.letskhabar.com/img?tool=arduino"
    },
    {
        icon: "python",
        img: "https://logo.letskhabar.com/img?tool=python"
    },

];

const Gamedev_Skill = [
    // https://logo.letskhabar.com/ all logo list
    // you can use by changing tool name
    {
        icon: "unity",
        img: "https://logo.letskhabar.com/img?tool=unity"
    },
    {
        icon: "c-programming",
        img: "https://logo.letskhabar.com/img?tool=c-programming"
    },
    {
        icon: "c-sharp",
        img: "https://logo.letskhabar.com/img?tool=c-sharp-logo"
    }

];


const projects = [
    {
        id: "1",
        name: "Master-Portfolio",
        Description: "A clean, beautiful, responsive and 100% customizable portfolio template for Developers!",
        Code_Link: "https://github.com/vimalverma558/master-portfolio",
        Live_link: "https://master-portfolio.js.org/",
        tool_used: "React,Js,Css",
        img: "https://master-portfolio.js.org/src/assets/img/mplogo.png"
    },
    {
        id: "2",
        name: "SvgHero",
        Description: "Javascript package for hero effect in SVG",
        Code_Link: "https://github.com/vimalverma558/svghero",
        Live_link: "https://svghero.netlify.app/example/",
        tool_used: "Js,css,Html",
        img: "https://dev-to-uploads.s3.amazonaws.com/i/za2fmp2khp1tn450c8yv.gif"
    },
    {
        id: "3",
        name: "Dev Tool Logo",
        Description: "Collection of logo of Dev tool",
        Code_Link: "https://logo.letskhabar.com/",
        Live_link: "https://logo.letskhabar.com/",
        tool_used: "js,Css,Svg",
        img: "https://raw.githubusercontent.com/vimalverma558/vimalverma558.github.io/V4/src/assets/img/project4.png"
    },
    {
        id: "4",
        name: "Bob",
        Description: "A Flutter App",
        Code_Link: "https://github.com/vimalverma558/bob",
        Live_link: "https://github.com/vimalverma558/bob",
        tool_used: "Flutter, Dart",
        img: "https://raw.githubusercontent.com/vimalverma558/vimalverma558.github.io/V4/src/assets/img/project1.png"
    },
    {
        id: "5",
        name: "Letskhabar",
        Description: "A Blog website",
        Code_Link: "https://github.com/letskhabar/",
        Live_link: "https://letskhabar.com/",
        tool_used: "Html, Css, Js",
        img: "https://raw.githubusercontent.com/vimalverma558/vimalverma558.github.io/V4/src/assets/img/project2.png"
    },
    {
        id: "6",
        name: "IIITian Network Os",
        Description: "Community of Open Source Contributor",
        Code_Link: "https://github.com/IIITians-Network",
        Live_link: "https://os.iiitiansnetwork.com/",
        tool_used: "html,css,js",
        img: "https://raw.githubusercontent.com/vimalverma558/vimalverma558.github.io/V4/src/assets/img/project3.jpg"
    }

];
const certificate = [
    {
        id: "1",
        name: "HTML, CSS, and Javascript for Web Developers",
        Description: "Coursera Certificate by Johns Hopkins University",
        Link: "https://coursera.org/share/cb71721932bd9e74f6a1ef594e133e7b",
        img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~D995CPDYASSD/CERTIFICATE_LANDING_PAGE~D995CPDYASSD.jpeg"
    },
    {
        id: "2",
        name: "Building Web Applications in PHP",
        Description: "Coursera Certificate by University of Michigan",
        Link: "https://coursera.org/share/e9c217aa494551e684171291f6f42aa8",
        img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~7LPAH93ZUU7C/CERTIFICATE_LANDING_PAGE~7LPAH93ZUU7C.jpeg"
    },
    {
        id: "3",
        name: "Developing Applications with Google Cloud Platform",
        Description: "Coursera Certificate by Google Cloud",
        Link: "https://coursera.org/share/6b5b58f33199b53dbeabeaaa7d034f9f",
        img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~MMAKYMCM55ZR/CERTIFICATE_LANDING_PAGE~MMAKYMCM55ZR.jpeg"
    },
    {
        id: "4",
        name: "Flutter & Dart - The Complete Guide [2020 Edition]",
        Description: "Udemy Certificate",
        Link: "http://ude.my/UC-ac85ddaa-0f5f-4e65-8d7f-984174528118",
        img: "https://udemy-certificate.s3.amazonaws.com/image/UC-ac85ddaa-0f5f-4e65-8d7f-984174528118.jpg?v=1590305763000"
    },
    {
        id: "5",
        name: "Learn Photo Editing with Photoshop 2020",
        Description: "Udemy Certificate",
        Link: "http://ude.my/UC-e7be0e95-a79c-4ee6-b170-a05521e15d28",
        img: "https://udemy-certificate.s3.amazonaws.com/image/UC-e7be0e95-a79c-4ee6-b170-a05521e15d28.jpg?v=1589177666000"
    },
    {
        id: "7",
        name: "Cloud Development",
        Description: "qwiklabs badges",
        Link: "https://www.qwiklabs.com/public_profiles/9ab111ea-4fc3-49fd-83b1-60998dfc18d8/badges/226548",
        img: "https://cdn.qwiklabs.com/fII8%2FxfzHangA5YENIOXHD40ba6g2NjozlcjV9GoM0c%3D"
    },
    {
        id: "8",
        name: "Compute & Networking",
        Description: "qwiklabs badges",
        Link: "https://www.qwiklabs.com/public_profiles/9ab111ea-4fc3-49fd-83b1-60998dfc18d8/badges/247406",
        img: "https://cdn.qwiklabs.com/oCcxeQDI9gFvkmo%2BzoxLIKgrXXFGjhnbeIYTos0v%2BkE%3D"
    },
    {
        id: "9",
        name: "Websites & Web Apps",
        Description: "qwiklabs badges",
        Link: "https://www.qwiklabs.com/public_profiles/9ab111ea-4fc3-49fd-83b1-60998dfc18d8/badges/237894",
        img: "https://cdn.qwiklabs.com/XF3BXGB8XfaPoZhf%2BzV26xGLcoq%2BXKOifctlKce9Vw8%3D"
    },
    {
        id: "6",
        name: "OK Google: Build Interactive Apps with Google Assistant",
        Description: "qwiklabs badges",
        Link: "https://www.qwiklabs.com/public_profiles/9ab111ea-4fc3-49fd-83b1-60998dfc18d8/badges/149347",
        img: "https://cdn.qwiklabs.com/tyPrLsnWKnYA0qSucXMBxuY8wowtQZMiaOV%2FUASfyss%3D"
    },
];

const ProgrammingBio = [
    "You can Remove this section in name.js",
    "i know c java and python",
    'you can edit this text from name.js',
    "you can change below skill icons from name.js"
];

const DevBio = [
    "Building responsive website front end using React-Redux",
    'Developing mobile applications using Flutter',
    'Creating application backend in Node & Express'
];

const DesignBio = [
    'Designing attractive user interface for mobile and web applications',
    'Customizing logo designs',
    'Editing video'
]


const AboutBio =[
    ' I\'m a student pursuing Bachelors\'s in Computer Science 🎓 from IIIT Ranchi 🏛️',
    ' I’m currently learning Full Stack Development.',
    ' I’m currently working with Node.js, Express.js, React, Mongodb, Javascript, Flutter, etc',
    ' Fun fact: \'Equal is Not Always Equal in Javascript\'',
    ' I am From Makhdumpur, Jehanabad (Bihar)',
    ' I am available on almost every social media. You can message me'
];
const EducationBio =[
    ' 10th Passed from High School Makhdumpur in 2015.',
    ' 12th Passed from Gaya Evening College, Gaya in 2017.',
    ' Currently pursuing B.Tech in Computer Science 🎓 from IIIT Ranchi.',
];
const ProjectsBio =[
    ' I’m currently learning Full Stack Development.',
    ' I’m currently working with Node.js, Express.js, React, Mongodb, Javascript, Flutter, etc',
    ' I also write some Open Source Package ',
    ' example- SvgHero & Prime-num, Check on Github'
];
const ContactBio =[
    ' I\'m a student pursuing Bachelors\'s in Computer Science 🎓 from IIIT Ranchi ⚡🏛️',
    ' I am From Makhdumpur, Jehanabad (Bihar)',
    ' I am available on almost every social media. You can message me'

];

const cloud_infra_architecture_Bio = [
    "You can Remove this section in name.js",
    "Experience working on multiple cloud platforms",
    'Hosting and maintaining websites on virtual machine instances along with integration of databases',
];

const data_Science_Bio = [
    "You can Remove this section in name.js",
    "Developing highly scalable production ready models for various deeplearning and statistical use cases",
    "you can change below skill icons"
];

const Ml_ai_Bio = [
    "You can Remove this section in name.js",
    "Complex quantitative modelling",
    "you can change below skill icons"
];

const RoboticBio = [
    "You can Remove this section in name.js",
    "Complex Robotic modelling",
    'you can edit this text from name.js',
    "you can change below skill icons from name.js"
];

const Gamedev_Bio = [
    "You can Remove this section in name.js",
    'you can edit this text from name.js',
    "you can change below skill icons from name.js"
];

export {
    greeting,
    socialMedia,
    DevSkill,
    DesignSkill,
    projects,
    certificate,
    AboutBio,
    EducationBio,
    ProjectsBio,
    ContactBio,
    DevBio,
    DesignBio,
    BlogData,
    ProgrammingSkill,
    RoboticSkill,
    cloud_infra_architecture_Skill,
    data_Science_Skill,
    Ml_ai_Skill,
    Gamedev_Skill,
    cloud_infra_architecture_Bio,
    data_Science_Bio,
    Ml_ai_Bio,
    Gamedev_Bio,
    ProgrammingBio,
    RoboticBio
};