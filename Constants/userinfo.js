//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import {
    faGithubAlt,
    faLinkedinIn,
    faMediumM,
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube,
    faBehance,
} from '@fortawesome/free-brands-svg-icons';

export const userinfo = {
    logoText: 'Md. Ishrak Ahsan', //This text is visible on your navbar and footer like your logo.
    contact: {
        email: 'ishrak26@gmail.com', //It is always a good idea to mention your email on your website. Good platform to communicate.
        phone: '1826071969', //Phone number is optional, if you dont want it, consider leaving it blank .
        countrycode: '+880', //It is advisable to add the country code incase you mention your contact number.
    },
    socials: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        {
            type: 'github',
            link: 'https://github.com/ishrak26',
            icon: faGithubAlt,
        },
        {
            type: 'linkedin',
            link: 'https://www.linkedin.com/in/ishrak26/',
            icon: faLinkedinIn,
        },
        {
            type: 'facebook',
            link: 'https://www.facebook.com/ishrak26',
            icon: faFacebook,
        },
        {
            type: 'x',
            link: 'https://x.com/ahsan_ishrak',
            icon: faTwitter,
        },
        {
            type: 'instagram',
            link: 'https://www.instagram.com/ahsan_ishrak/',
            icon: faInstagram,
        },
        {
            type: 'youtube',
            link: 'https://www.youtube.com/@ishrak26',
            icon: faYoutube,
        },
        // { type: 'behance', link: '', icon: faBehance },
        // { type: 'medium', link: '', icon: faMediumM },
    ],
    greeting: {
        //this text goes on your landing page
        title: 'Hey there, I am Md. Ishrak Ahsan',
        subtitle:
            'I am a final-year Computer Science and Engineering (CSE) student at Bangladesh University of Engineering and Technology (BUET). My interests lie in algorithms, programming, development of software systems and machine learning. Whenever I am in the field of technology, it is because I love solving problems – may it be creating the next best software app or entering an algorithm challengers. Now that I am about to graduate, I am looking forward to discovering new challenges and taking part in the development of interesting projects in the field.',
    },
    capabilities: [
        //this text goes on your home page in table format.
        //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
        //For aesthetics, it is advisable for you to keep similar number of skills in each category
        {
            category: 'Programming Languages', // eg.frontend, backend, devops etc
            skills: [
                'C/C++',
                'Java',
                'Python',
                'R',
                'HTML/CSS',
                'JavaScript',
                'SQL',
                'Shell',
                '8086 Assembly',
            ], //eg. react, html, python etc.
        },
        {
            category: 'Frontend Development',
            skills: [
                'React',
                'Next.js',
                'Tailwind CSS',
                'HTML/CSS',
                'JavaScript',
            ],
        },
        {
            category: 'Backend Development',
            skills: ['Node.js', 'Express', 'PostgreSQL', 'OracleDB', 'SQL'],
        },
        {
            category: 'Machine Learning & Data Science',
            skills: ['TensorFlow', 'Scikit-learn', 'Numpy', 'Pandas'],
        },
        {
            category: 'Tools',
            skills: ['Git', 'Latex', 'VS Code', 'IntelliJ IDEA', 'NS-3'],
        },
    ],
    about: {
        //this text goes at the bottom of your home page.
        // TODO
        content:
            "'Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked. But it’s not like this compulsive need like my need to be praised.' Whatever the situation or conflict might be, it can almost always be traced back to this need. His conference room characters, fun runs, and copious amounts of office parties are all aimed at his need to be praised.",
        resume: '/', //link your resume here. it can be drive link or any other link
    },
    education: {
        visible: true, //set this to false if you want to omit this section
        educationList: [
            {
                time: 'Feb 2020 - ', //timespan
                title: 'B.Sc. in Computer Science and Engineering (CSE)', //eg. BTech in Compuster Engineering
                organization:
                    'Bangladesh University of Engineering and Technology, Dhaka, Bangladesh', //eg. VJTI, Mumbai
                description: 'CGPA: 3.97 / 4.00', //eg. secured a cgpa of 9.25 in all sems appeared in so far
            },
            {
                time: 'July 2017 - July 2019',
                title: 'Higher Secondary Certificate (HSC)',
                organization: 'Notre Dame College, Dhaka, Bangladesh',
                description: 'GPA: 5.00 / 5.00',
            },
            {
                time: 'January 2009 - May 2017',
                title: 'Secondary School Certificate (SSC)',
                organization:
                    'St. Joseph Higher Secondary School, Dhaka, Bangladesh',
                description: 'GPA: 5.00 / 5.00',
            },
        ],
    },
    experience: {
        visible: false, //set this to false if you want to omit this section
        experienceList: [
            {
                company: 'Dunder Mifflin', //company name eg.Microsoft
                companylogo:
                    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*', //companylogo
                position: 'Regional Manager', //post you held eg.Senior SDE
                time: 'March 2020 - May 2020', //timespan
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum', //eg. spearheaded the graphics team in designing SASS product UIs
            },
            {
                company: 'Dunder Mifflin',
                companylogo:
                    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Regional Manager',
                time: 'March 2020 - May 2020',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum',
            },
            {
                company: 'Dunder Mifflin',
                companylogo:
                    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Regional Manager',
                time: 'March 2020 - May 2020',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum',
            },
        ],
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: false,
    },
};

export const headings = {
    //you can customise all the headings here.
    workHomePage: 'Work',
    workMainPage: 'Projects',
    capabilities: 'Capabilities',
    about: 'About Me',
    education: 'Education',
    experience: 'Experiences',
    blogs: 'I write!',
    contact: 'Contact Me',
};

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'My work',
    workCTA: 'View All',
    capabCTA: 'Get in Touch',
    educationCTA: 'About Me',
    resumeCTA: 'Resume',
    submitBTN: 'Submit',
};
