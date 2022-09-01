import ReactGitHubUserCardApp from './images/ReactGitHubUserCardApp.png';
import RestaurantPassport from './images/RestaurantPassport.png';
import BusinessCardOrganizer from './images/BusinessCardOrganizer.png';
import RefugeeStories from './images/RefugeeStories.png';
import Pomodoro from './images/Pomodoro.png';
import DJDJEntertainment from './images/DJDJEntertainment.png';
import KatnissToDo from './images/KatnissToDo.png';
import DJHelper from './images/djhelperhome.png';
import GOFLiteBrite from './images/GOFLiteBrite.png';
import JillyJonka from './images/JillyJonka.png';
import RiddlesInTheDark from './images/riddles-in-the-dark.png';
import FavoriteRecipes from './images/favorite-recipes.png';

const projectData = [
  {
    title: 'DJ Helper',
    repo: 'https://github.com/Lambda-School-Labs/djhelper-fe',
   
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
      "This app allows users to keep track of all the restaurants that they like/want to visit. It also gives recommendations and picks a place for the users to go to if they can't decide.",
    imageSrc: RestaurantPassport,
    techStack: 'React | React Router | Redux | Node.js | Express | Postgres',
    keyFeatures: [
      'Functioned as a React developer on a remote team of 5 web developers.',
      'Designed and collaborated to create the pages for onboarding and restaurant collections.',
      'Built functionality to get restaurant recommendations by querying the back end\'s Yelp API integration.',
    ],
  },

  {
    title: "Conway's Game of Life: Lite Brite Style",
    repo: 'https://github.com/ethyl2/gameOfLifeLiteBrite',
    deployed: 'https://litebrite-game-of-life.netlify.app/',
    description:
      "Implementation of Conway's Game of Life, with colors that change according to cells' age",
    imageSrc: GOFLiteBrite,
    techStack: 'React | CSS',
    keyFeatures: [
      "Created the design, inspired by one of my childhood's favorite toys, LiteBrite.",
      'Wrote and implemented an algorithm that calculates the number of alive neighbors for each cell to determine the next generation.',
    ],
  },

  {
    title: "riddles in the dark",
    repo: 'https://github.com/ethyl2/riddles',
    deployed: 'https://ethyl2.github.io/riddles/',
    description:
      'An web app that challenges your skills at finding & solving riddles, with a fun spooky theme.',
    imageSrc: RiddlesInTheDark,
    techStack: 'HTML | Canvas API | CSS | TailwindCss | Javascript',
    keyFeatures: [
      'Created the concept details and design.',
      'Coded the functionality to find riddles, answer them, and get feedback.',
      'Collaborated with other programmers from around the world to create and improve this project as part of Hacktoberfest 2021.',
    ],
  },

  {
    title: "Favorite Recipes",
    repo: 'https://github.com/ethyl2/recipes',
    deployed: 'https://recipes-heathernuffer.vercel.app/',
    description:
      'I was continually frustrated with a lot of recipe pages on the Internet. That motivated me to make a recipe website that is easy to use, with no annoying features found in other websites, such as ads and lengthy, unnecessary text before getting to the actual recipe.',
    imageSrc: FavoriteRecipes,
    techStack: 'HTML  | TailwindCss | Vue.js | NuxtJS',
    keyFeatures: [
      'Created the concept details and design, and edited the recipes.',
      'Coded the functionality to dynamically create recipe pages as more recipes are added to the recipe file.',
      'Added a form page for users to submit their favorite recipes to include in the site.',
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
      'This app enables users to easily share and collect business cards.',
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
    title: 'Pomodoro Timer',
    repo: 'https://github.com/ethyl2/pomodoro-clock',
    deployed: 'https://pomodoro-tomato.netlify.com/',
    description:
      'Timer app that helps users be more productive by splitting work time into sessions with breaks in-between. Built with React.',
    imageSrc: Pomodoro,
    techStack: 'React | CSS',
    keyFeatures: [
      'Wrote text to succinctly explain the Pomodoro technique.',
      'Created the layout and design.',
      'Coded the project using React class components.',
    ],
  },

  {
    title: "Jilly Jonka's Candy Factory",
    repo: 'https://github.com/dantebui/CSBW-1-Frontend',
    deployed: 'https://jillyjonkascandyfactory.netlify.app/',
    description:
      'MUD (Multi-User Dungeon) Game where users explore a candy factory and create new candy sensations',
    imageSrc: JillyJonka,
    techStack: 'React | CSS | Python | Django',
    keyFeatures: [
      'Functioned as a React and Python developer on a remote team of 4 developers.',
      'Created the concept details and design.',
      'Coded the functionality to collect ingredients and create candy.',
      'Collaborated to connect the Django back end to the React front end.',
    ],
  },

  {
    title: "Katniss Everdeen's Todo App",
    repo: 'https://github.com/ethyl2/reducer-todo',
    deployed: 'http://katniss-todo.surge.sh/',
    description:
      'This project is a to-do list application, with a fun/humorous touch. It features content from the point of view of the main character from the Hunger Games book series.',
    imageSrc: KatnissToDo,
    techStack: 'React | CSS',
    keyFeatures: [
      'Created the layout and design.',
      'Implemented the reducer pattern for state management, using the useReducer() hook.',
      'Utilized CSS transforms to add animation.',
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

];

export default projectData;
