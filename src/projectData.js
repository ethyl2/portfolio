import ReactGitHubUserCardApp from './images/ReactGitHubUserCardApp.png';
import RestaurantPassport from './images/RestaurantPassport.png';
import FeltFood from './images/FeltFood.png';
import BusinessCardOrganizer from './images/BusinessCardOrganizer.png';
import RefugeeStories from './images/RefugeeStories.png';
import Pomodoro from './images/Pomodoro.png';
import DJDJEntertainment from './images/DJDJEntertainment.png';
import KatnissToDo from './images/KatnissToDo.png';

const projectData = [
    
    {
        'title': 'Restaurant Passport',
        'repo': 'https://github.com/Restaurant-passport-2/FE',
        'deployed': 'https://restaurant-passport-2.netlify.com/',
        'description': 'This app allows users to keep track of all the restaurants that they like/want to visit. It also gives recommendations and picks a place for the users to go to if they can\'t decide. Built with a team at Lambda School, using React, React-Router, and the Yelp API.',
        'imageSrc': RestaurantPassport
    },

    {
        'title': 'Refugee Stories',
        'repo': 'https://github.com/Buid-Week-Refugee-Stories/front-end',
        'deployed': 'https://refugees-stories-kbh.netlify.com/',
        'description': 'This app allows people to share stories and experiences of refugees to increase awareness, understanding, and support. I helped to create the front end of the application, using React.',
        'imageSrc': RefugeeStories
    },

    {
        'title': 'Business Card Organizer',
        'repo': 'https://github.com/Build-Week-Business-Card-Organizer-2/Backend',
        'deployed': 'https://business-card-organizer.netlify.com/',
        'description': 'This app is designed to help users share and collect business cards. I helped create the backend of the application, using Node.js, Express, Postgresql, and Heroku.',
        'imageSrc': BusinessCardOrganizer
    },

    {
        'title': 'DJDJ Entertainment Business Website',
        'repo': 'https://github.com/ethyl2/djdj',
        'deployed': 'https://djdj.netlify.com/',
        'description': 'Uses React with react-router-dom to create a SPA that incorporates multiple aspects of a DJ\'s business.',
        'imageSrc': DJDJEntertainment
    },

    {
        'title': 'GitHubUser',
        'repo': 'https://github.com/ethyl2/React-Github-User-Card',
        'deployed': 'https://github-user.now.sh/',
        'description': 'This project is built with React and uses axios to access data from GitHub\'s API to populate a page with info about a GitHub user. The GitHub calendar for the user is also displayed. Entering a username reloads the page with information for that user.',
        'imageSrc': ReactGitHubUserCardApp
    },

    {
        'title': 'Katniss Everdeen\'s Todo App',
        'repo': 'https://github.com/ethyl2/reducer-todo',
        'deployed': 'http://katniss-todo.surge.sh/',
        'description': 'This project uses the reducer pattern for state management, using the useReducer() hook. The theme is from The Hunger Games by Suzanne Collins',
        'imageSrc': KatnissToDo
    },

    {
        'title': 'Felt Food Marketing Page',
        'repo': 'https://github.com/ethyl2/felt-food',
        'deployed': 'https://felt-foods.surge.sh/',
        'description': 'An example of a functional marketing page built with vanilla HTML, CSS and JavaScript.',
        'imageSrc': FeltFood
    },

    { 
        'title': 'Pomodoro Timer',
        'repo': 'https://github.com/ethyl2/pomodoro-clock',
        'deployed': 'https://pomodoro-tomato.netlify.com/',
        'description': 'Timer app that helps users be more productive by splitting work time into sessions with breaks inbetween. Built with React.',
        'imageSrc': Pomodoro
    }




]

export default projectData;
