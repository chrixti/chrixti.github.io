import img1 from "../assets/projectplaceholder.png";
import divhacks from "../assets/divhacksweb.png";

const items = [
    {
        id: 1,
        image: img1,
        title: 'Sonar Chess',
        category: 'React.js, Howler.js, Web Speech API, Python Flask, PyTorch, ARIA',
        description: 'Sonar Chess is an accessible digital chess game for players with low vision and blindness. It uses distinct audio cues for piece movements. Text-to-Speech (TTS) technology is used to provide real-time move announcements and players can use voice commands to interact with the game. For those with partial vision, a high-contrast visual mode is available to enhnace the visibility of the chess board and pieces. The game includes an adaptive AI chess bot with varying difficulty levels.',
        link: '',
        comingSoon: true
    },
    {
        id: 2,
        image: img1,
        title: 'ReproBot',
        category: 'Open AI, Hugging Face, Python Flask, React.js, NLTK',
        description: "ReproBot Health Companion Bot, an AI chatbot that won Yale Hacks 2024's ActualFood Challenge, translates everyday language describing health concerns into precise medical information for healthcare providers. By ensuring clear and accurate communication, it helps identify potential health issues based on user-described symptoms, aiding healthcare professionals in making accurate diagnoses and improving overall patient care.",
        link: 'https://github.com/reiyi-lai/yhacks-repro-health',
        comingSoon: false
    },
    {
        id: 3,
        image: img1,
        title: 'Composting 101',
        category: 'Python Flask, Jinja2, SQLite, SQLAlchemy, HTML, CSS, JavaScript',
        description: "Composting 101 is a full-stack website final project for my university UI design course that is designed to teach users about composting and assess their knowledge through an interactive quiz.",
        link: 'https://github.com/chrixti/uidesignfinal',
        comingSoon: false
    },
    {
        id: 4,
        image: divhacks,
        title: 'Columbia DivHacks Website 2023',
        category: 'HTML, CSS, Javascript',
        description: "I contributed to the development of the website for Columbia University's 2023 annual diversity hackathon, Divhacks, primarily focusing on designing and programming the hackathon tracks section for a smooth and captivating user experience.",
        link: 'http://columbiadivhacks.com/',
        comingSoon: false
    }
];

export default items;
/*
   {
        id: 2,
        image: img1,
        title: 'Project Name',
        category: 'Technical Skill(s) Used',
        description: 'Project Description'
    },

    {
        id: 3,
        image: img1,
        title: 'Project Name',
        category: 'Technical Skill(s) Used',
        description: 'Project Description'
    },

    {
        id: 4,
        image: img1,
        title: 'Project Name',
        category: 'Technical Skill(s) Used',
        description: 'Project Description'
    },

    {
        id: 5,
        image: img1,
        title: 'Project Name',
        category: 'Technical Skill(s) Used',
        description: 'Project Description'
    },
    
    {
        id: 5,
        image: img1,
        title: 'Project Name',
        category: 'Technical Skill(s) Used',
        description: 'Project Description'
    }
*/