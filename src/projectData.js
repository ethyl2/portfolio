import ReactGitHubUserCardApp from './images/ReactGitHubUserCardApp.png';
import RestaurantPassport from './images/RestaurantPassport.png';
// import FeltFood from './images/FeltFood.png';
import BusinessCardOrganizer from './images/BusinessCardOrganizer.png';
import RefugeeStories from './images/RefugeeStories.png';
import Pomodoro from './images/Pomodoro.png';
import DJDJEntertainment from './images/DJDJEntertainment.png';
import KatnissToDo from './images/KatnissToDo.png';
import DJHelper from './images/djhelperhome.png';

const projectData = [
  {
    title: 'DJ Helper',
    repo: 'https://github.com/Lambda-School-Labs/djhelper-fe',
    deployed: 'https://www.dj-helper.com/',
    description:
      'This app enables DJs to effectively connect with their audiences by creating event pages and getting song requests.',
    imageSrc: DJHelper,
    techStack:
      'React | React Router | Redux | SASS | Node.js | Express | Postgres | AWS',
    keyFeatures: [
      'Functioned as a web developer on a remote, cross-functional team of 5 web developers, 5 data scientists, and 1 UX designer.',
      'Initiated the idea for the app and currently act as a stakeholder for this project.',
      'Built functionality for user onboarding and event creation/modification/deletion.',
    ],
  },

  {
    title: 'Restaurant Passport',
    repo: 'https://github.com/Restaurant-passport-2/FE',
    deployed: 'https://restaurant-passport-2.netlify.com/',
    description:
      "This app allows users to keep track of all the restaurants that they like/want to visit. It also gives recommendations and picks a place for the users to go to if they can't decide. Built with a team at Lambda School, using React, React-Router, and the Yelp API.",
    imageSrc: RestaurantPassport,
    techStack: 'React | React Router | Redux | Node.js | Express | Postgres',
    keyFeatures: [
      'Functioned as a React developer on a remote team of 5 web developers.',
      'Designed and collaborated to create the pages for onboarding and restaurant collections.',
      'Built functionality to get restaurant recommendations by querying the back end’s Yelp API integration.',
    ],
  },

  {
    title: 'Refugee Stories',
    repo: 'https://github.com/Buid-Week-Refugee-Stories/front-end',
    deployed: 'https://refugees-stories-kbh.netlify.com/',
    description:
      'This app allows people to share stories and experiences of refugees to increase awareness, understanding, and support.',
    imageSrc: RefugeeStories,
    techStack:
      'React | React Router | GSAP | Redux | Node.js | Express | SQLite',
    keyFeatures: [
      'Functioned as a React developer on a remote team of 4 web developers.',
      'Designed and collaborated to create the pages for onboarding and administrator story approval/rejection.',
      'Built functionality to add/modify/delete stories and experiences.',
    ],
  },

  {
    title: 'Business Card Organizer',
    repo: 'https://github.com/Build-Week-Business-Card-Organizer-2/Backend',
    deployed:
      'https://documenter.getpostman.com/view/10064604/SWTEbbdc?version=latest',
    description:
      'This app enables users to easily share and collect business cards. I helped create the backend of the application, using Node.js, Express, Postgresql, and Heroku.',
    imageSrc: BusinessCardOrganizer,
    techStack: 'React | React Router | Redux | Node.js | Express | Postgres',
    keyFeatures: [
      'Functioned as a Node.js developer on a remote team of 6 web developers.',
      'Collaborated to create the back end for user onboarding and database storage of business cards.',
      'Helped the front end team to implement QR Code generation and cloud image storage.',
    ],
  },

  {
    title: 'DJDJ Entertainment Business Website',
    repo: 'https://github.com/ethyl2/djdj',
    deployed: 'https://djdj.netlify.com/',
    description:
      "Uses React with react-router-dom to create a SPA that incorporates multiple aspects of a DJ's business.",
    imageSrc: DJDJEntertainment,
    techStack: 'React | React Router | SASS',
    keyFeatures: [
      'Created the layout and design.',
      'Edited and updated the text from the old website for use in this site.',
      'Built the new site using React and React Router.',
    ],
  },

  {
    title: 'GitHubUser',
    repo: 'https://github.com/ethyl2/React-Github-User-Card',
    deployed: 'https://github-user.now.sh/',
    description:
      "This project is built with React and uses axios to access data from GitHub's API to populate a page with info about a GitHub user. The GitHub calendar for the user is also displayed. Entering a username reloads the page with information for that user.",
    imageSrc: ReactGitHubUserCardApp,
    techStack: 'React | CSS',
    keyFeatures: [
      "Utilized axios to request data about from GitHub's API data for specific users.",
      'Created the layout and design.',
      'Utilized the github-calendar library to display GitHub contributions graph for a user.',
    ],
  },

  {
    title: "Katniss Everdeen's Todo App",
    repo: 'https://github.com/ethyl2/reducer-todo',
    deployed: 'http://katniss-todo.surge.sh/',
    description:
      'This project is a to-do application, with a fun/humorous touch. It features content from the point of view of the main character from the Hunger Games book series.',
    imageSrc: KatnissToDo,
    techStack: 'React | CSS',
    keyFeatures: [
      'Created the layout and design.',
      'Implemented the reducer pattern for state management, using the useReducer() hook.',
      'Utilized CSS transforms to add animation.',
    ],
  },

  {
    title: 'Pomodoro Timer',
    repo: 'https://github.com/ethyl2/pomodoro-clock',
    deployed: 'https://pomodoro-tomato.netlify.com/',
    description:
      'Timer app that helps users be more productive by splitting work time into sessions with breaks in-between. Built with React.',
    imageSrc: Pomodoro,
    techStack: 'React | CSS',
    keyFeatures: [
      'Wrote text to briefly explain the Pomodoro technique.',
      'Created the layout and design.',
      'Coded the project using React class components.',
    ],
  },
];

export default projectData;

/*
{
    title: 'Felt Food Marketing Page',
    repo: 'https://github.com/ethyl2/felt-food',
    deployed: 'https://felt-foods.surge.sh/',
    description:
      'An example of a functional marketing page built with vanilla HTML, CSS and JavaScript.',
    imageSrc: FeltFood,
  },
  */
