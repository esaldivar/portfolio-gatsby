import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Eric Saldivar Portfolio Website', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Eric Saldivar',
  subtitle: 'Welcome to my website',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'portAboutPic (1).jpeg',
  paragraphOne: `I'm Eric, a software engineer that loves to solve problems and create elegant solutions in a collaborative environment.`,
  paragraphTwo:
    'I utilize Javascript technologies such as React, Redux, Node and Express. I love working with relational and non-relational databases. I know each technology has a tradeoff and I work with the tech that suits the need of the work.',
  paragraphThree:
    'Beyond this I enjoy working in an Agile/Scrum environment, I have an eye for design, I love to whiteboard and draw my own wireframes. I have attached some of my most recent work below. I would love to hear from you!',
  resume:
    'https://docs.google.com/document/d/1ug59fBcVNBB4uQoaedOorONRn2aJV6N2WWwKpc2_2oU/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'loop.png',
    title: `'N the Loop`,
    info: 'A web application that uses the mapbox API and PredictHQ to take a geolocation input and find concerts within a date range. The application uses React, Express, MongoDB, Express sessions for local storage of cookies, and testing. The testing used Jest, enzyme, supertest, and cypress. This was a team project using the SCRUM method that held daily standups and sprint discussions. Please click the Github icon to view the repository and view the README for a more detailed view of the code and thought process.',
    info2: '',
    url: '',
    repo: 'https://github.com/UggBoots/scratch-concert-finder', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'locals.png',
    title: 'Locals Only',
    info: 'An application on the web that allows a user to support local businesses wherever they are. The application uses front end technologies such as React, MaterialUI, and the Google Maps API. The backend uses express, PostreSQL, and bcrypt. This was a team project using the SCRUM method that held daily standups and sprint discussions. Please click the Github icon to view the repository and view the README for a more detailed view of the code and thought process.',
    info2: '',
    url: '',
    repo: 'https://github.com/GoblinShark2021/Locals-Only', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'meals.png',
    title: 'Meal Hacks',
    info: 'A web app that generates a recipe filtered by ingredients that the client inputs. The techstack for this project was built using React(hooks, routers, materialUI), webpack, express, passport.js, MongoDB, and an API call to the recipe database. I used escalidraw to wireframe the frontend and functionality. I also used apply to create a folder/file structure. This was my first solo project. Please click the Github icon to view the repository and view the README for a more detailed view of my code and thought process.',
    info2: '',
    url: '',
    repo: 'https://github.com/esaldivar/meal-hacks', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'esaldivar1214@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/print_HelloEric',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/esaldivar1214/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/esaldivar',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
