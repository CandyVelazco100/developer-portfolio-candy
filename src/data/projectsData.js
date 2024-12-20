import qr from '../assets/svg/projects/qr.svg'
import tasks from '../assets/svg/projects/tasks.svg'
import bookapp from '../assets/svg/projects/bookapp.svg'
import weather from '../assets/svg/projects/weatherThunder.svg'
import password from '../assets/svg/projects/password.svg'
import burger from '../assets/svg/projects/burger.svg'
import music from '../assets/svg/projects/music.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'QR Generator Scanner',
        projectDesc: 'A web-based application designed for users to easily generate and scan QR codes, allowing to create and read QR codes for multiple purposes.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        demo: 'https://qr-generator-scanner-five.vercel.app/',
        image: qr
    },
    {
        id: 2,
        projectName: 'BookNest',
        projectDesc: 'UX/UI design aimed to create a seamless mobile app for eBook reading and progress tracking, with an intuitive interface that enhances the user experience and helps manage reading habits.',
        tags: ['Figma', 'Material Ui'],
        code: 'https://www.behance.net/gallery/209631573/BookNest-UIUX-Case-Study',
        demo: 'https://www.figma.com/proto/XA4MXDhkkghWcAIVE7ZqfW/BookNest?node-id=22-693&node-type=canvas&t=jGAbig2qTeJrx6ju-1&scaling=min-zoom&content-scaling=fixed&page-id=22%3A105&starting-point-node-id=96%3A1281',
        image: bookapp
    },
    {
        id: 3,
        projectName: 'Weather App',
        projectDesc: 'React-based application that provides weather information in real time using the OpenWeatherMap API',
        tags: ['HTML', 'JavaScript', 'CSS',],
        code: 'https://github.com/CandyVelazco100/weatherApp',
        demo: 'https://weather-app-beige-five.vercel.app/',
        image: weather
    },
    {
        id: 4,
        projectName: 'ToDo-App',
        projectDesc: 'A very simple task management application that allows users to add, manage, and track their daily tasks with ease.',
        tags: ['React JS', 'Vite', 'CSS'],
        code: 'https://github.com/CandyVelazco100/ToDo-App',
        demo: 'https://to-do-app-eight-woad.vercel.app/',
        image: tasks
    },
    {
        id: 5,
        projectName: 'Password Generator',
        projectDesc: 'Basic password generator with HTML, CSS and JS.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        code: 'https://github.com/CandyVelazco100/passwordGenerator',
        demo: 'https://password-generator-brown-omega.vercel.app/',
        image: password
    },
/*     {
        id: 6,
        projectName: 'Fixer',
        projectDesc: 'Uber clone',
        tags: ['Flutter'],
        code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        image: six
    }, */
    {
        id: 7,
        projectName: 'Hamburguesería El Ronald',
        projectDesc: 'Web application built from scratch that demonstrates essential web development techniques, creating a dynamic and responsive application.',
        tags: ['HTML', 'Tailwind CSS', 'JavaScript'],
        code: 'https://github.com/CandyVelazco100/HamburgueseriaElRonald',
        demo: 'https://hamburgueseria-el-ronald.vercel.app/',
        image: burger
    },
    {
        id: 8,
        projectName: 'Taylor Swift Lyrics Generator',
        projectDesc: 'A simple random lyrics/quotes of Taylor Swift generator',
        tags: ['React', 'Node JS'],
        code: 'https://github.com/CandyVelazco100/TaylorSwift-LyricsGenerator',
        demo: 'https://taylor-swift-lyrics-generator.vercel.app/',
        image: music
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/