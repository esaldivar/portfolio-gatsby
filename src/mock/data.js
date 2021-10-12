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
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'portAboutPic (1).jpeg',
  paragraphOne: `I'm Eric, a software engineer that loves to solve problems and create elegant solutions in a collaborative environment.`,
  paragraphTwo:
    'I utilize Javascript technologies such as React, Redux, Node and Express. I love working with relational and non-relational databases. I know each technology has a tradeoff and I work with the tech that suits the need of the work.',
  paragraphThree:
    'Beyond this I enjoy working in an Agile/Scrum environment, I have an eye for design, I love to whiteboard and draw my own wireframes. I have attached some of my most recent work below. I would love to hear from you!',
  resume: 'https://drive.google.com/file/d/1GDyGFJDf584RToQ3A3ZubEHcwAImdb83/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'rediqless.png',
    title: `RediQLess`,
    info: `One part Redis, one part GraphQL, this is RediQLess - a caching tool for APIs. Utilizing GraphQL’s efficient and elegant querying language and Redis’ lightweight caching, we've leveraged these two features to generate a cache of API results. Built for developers, by developers, to facilitate lightweight and performant applications.`,
    info2: '',
    url: 'https://www.rediqless.com/',
    img1: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
    img2: 'https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg',
    img3: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg',
    repo: 'https://github.com/oslabs-beta/rediQLess', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ps.png',
    title: `Pierre's Store`,
    info: 'A web application that simulates a e-commerce website based off of the video game Stardew Valley.  The store sells seeds, fruit trees, etc. using a relational database (postgreSQL).  The front end is built with React through Typescript and styled using Sass.  The project was made solo and it also has a testing suite using jest that is part of its continuous integration on github.  It runs the yaml scripts to use the test files that must pass before pulling to the main branch is authorized.',
    info2: '',
    url: 'https://serene-gorge-35395.herokuapp.com/',
    img1: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
    img2: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
    img3: 'https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg',
    repo: 'https://github.com/esaldivar/PierresStore', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'loop.png',
    title: `'N the Loop`,
    info: 'A web application that uses the mapbox API and PredictHQ to take a geolocation input and find concerts within a date range. The application uses React, Express, MongoDB, Express sessions for local storage of cookies, and testing. The testing used Jest, enzyme, supertest, and cypress. This was a team project using the SCRUM method that held daily standups and sprint discussions. Click source code to view the repository and view the README for a more detailed view of the code and thought process.',
    info2: '',
    url: '',
    img1: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
    img2: 'https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg',
    img3: 'https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg',
    repo: 'https://github.com/UggBoots/scratch-concert-finder', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'locals.png',
    title: 'Locals Only',
    info: 'An application on the web that allows a user to support local businesses wherever they are. The application uses front end technologies such as React, MaterialUI, and the Google Maps API. The backend uses express, PostreSQL, and bcrypt. This was a team project using the SCRUM method that held daily standups and sprint discussions. Click source code to view the repository and view the README for a more detailed view of the code and thought process.',
    info2: '',
    url: '',
    img1: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
    img2: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg',
    img3: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg',
    repo: 'https://github.com/GoblinShark2021/Locals-Only', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'meals.png',
    title: 'Meal Hacks',
    info: 'A web app that generates a recipe filtered by ingredients that the client inputs. The techstack for this project was built using React(hooks, routers, materialUI), webpack, express, passport.js, MongoDB, and an API call to the recipe database. I used escalidraw to wireframe the frontend and functionality. I also used apply to create a folder/file structure. This was my first solo project. Click source code to view the repository and view the README for a more detailed view of the code and thought process.',
    info2: '',
    url: '',
    img1: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
    img2: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
    img3: 'https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg',
    repo: 'https://github.com/esaldivar/meal-hacks', // if no repo, the button will not show up
  },
];

// CONTACT DATA
// export const contactData = {
//   cta: '',
//   btn: '',
//   email: 'eric@gmail.com',
// };

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
    {
      id: nanoid(),
      name: '',
      url: 'https://anchor.fm/javaunscripted',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
