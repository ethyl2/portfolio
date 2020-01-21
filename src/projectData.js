import ReactGitHubUserCardApp from './images/ReactGitHubUserCardApp.png';
import RestaurantPassport from './images/RestaurantPassport.png';


const projectData = [
    {
        'title': 'GitHubUser',
        'repo': 'https://github.com/ethyl2/React-Github-User-Card',
        'deployed': 'https://github-user.now.sh/',
        'description': 'This project is built with React and uses axios to access data from GitHub\'s API to populate a page with info about a GitHub user. The GitHub calendar for the user is also displayed. Entering a username reloads the page with information for that user.',
        'imageSrc': ReactGitHubUserCardApp
    },

    {
        'title': 'Restaurant Passport',
        'repo': 'https://github.com/Restaurant-passport-2/FE',
        'deployed': 'https://restaurant-passport-2.netlify.com/',
        'description': 'This app allows users to keep track of all the restaurants that they like/want to visit. It also gives recommendations and picks a place for the users to go to if they can\'t decide. Built with a team at Lambda School, using React, React-Router, and the Yelp API.',
        'imageSrc': RestaurantPassport
}

]

export default projectData;
