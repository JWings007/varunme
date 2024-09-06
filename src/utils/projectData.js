import soundspace from "../assets/images/soundspace.png";
import hms from "../assets/images/hms.png";
import movied from "../assets/images/movied.png";

const projects = [
  {
    id: "soundspace",
    image: soundspace,
    name: "SoundSpace.",
    techs: [
      "react-original",
      "mongodb-plain",
      "nodejs-plain",
      "express-original",
      "tailwindcss-original",
      "postman-plain",
    ],
    brief: {
      heading: "A playlist sharing social media platform, because we care!!",
      desc: "Developed SoundSpace, a dynamic social media platform focused on playlist sharing, allowing users to create, share, and discover music playlists within their network. Leveraging the MERN stack (MongoDB, Express.js, React, Node.js), the app enables seamless playlist creation and interaction. Integrated Spotify API to allow users to transfer liked playlists directly to their Spotify account, enhancing the overall user experience by bridging social music discovery with personalized streaming.",
    },
    dProcess: [
      {
        listHead: "Website Design",
        listDesc:
          "The initial concenpt and idea of the website is brainstromed with pen and paper. I used design tools like Figma, and Adobe Illustrator to design the various pages of the website.",
      },
      {
        listHead: "Environment Setup",
        listDesc:
          "Configured MERN stack: Node.js, Express.js, MongoDB, React and implemented version control with Git.",
      },
      {
        listHead: "Frontend Design",
        listDesc:
          "Developed responsive UI using React and integrated playlist creation, sharing, and social features using Javascript.",
      },
      {
        listHead: "Backend Development",
        listDesc:
          "Designed database schema for users, playlists, and songs. Built RESTful APIs for authentication, playlist management, and Spotify integration.",
      },
    ],

    ongoing: {
      ongoingHead:
        "Almost 80% of the website is developed, little away from final thought.",
      ongoingDesc:
        "SoundSpace enables users to create and share playlists within their network. Remaining features include Spotify playlist merging and live post updates, which are in progress.",
    },
    github: "https://github.com/JWings007/SoundSpace",
    liveStatus: false,
    link: "",
  },

  {
    id: "movied",
    image: movied,
    name: "Movied",
    techs: [
      "react-original",
      "css3-plain",
      "postman-plain",
      "javascript-plain",
    ],
    brief: {
      heading: "A movie discovery platform tailored to your preferences!",
      desc: "Movied is a React-based movie discovery platform that provides information about movies and TV shows. Using the TMDB API, the app allows users to explore and get details similar to IMDb. The app delivers a dynamic user experience with a focus on accessing extensive movie and TV show data.",
    },
    dProcess: [
      {
        listHead: "Conceptualization",
        listDesc:
          "Defined the core features of the application and created wireframes and mockups using Figma to plan the user interface and user experience.",
      },
      {
        listHead: "Environment Setup",
        listDesc:
          "Set up the development environment with React and Tailwind CSS. Implemented version control with Git.",
      },
      {
        listHead: "Frontend Development",
        listDesc:
          "Developed the user interface using React, incorporating responsive design and features to display movie and TV show information.",
      },
      {
        listHead: "API Integration",
        listDesc:
          "Integrated the TMDB API to fetch and display movie and TV show details. Ensured smooth interaction between the front end and the API.",
      },
    ],
    ongoing: {
      ongoingHead:
        "Currently, TMDB servers are down in India, affecting functionality.",
      ongoingDesc:
        "The Movied website is mostly complete, but due to TMDB servers being down in India, the app is currently unable to retrieve movie and TV show data. This issue is impacting the app's functionality until TMDB servers are operational again.",
    },
    github: "https://github.com/JWings007/Movied",
    liveStatus: true,
    link: "https://movied-indol.vercel.app/",
  },

  {
    id: "hms",
    image: hms,
    name: "HMS Egg Distributors",
    techs: [
      "react-original",
      "mongodb-plain",
      "nodejs-plain",
      "express-original",
      "tailwindcss-original",
      "postman-plain",
    ],
    brief: {
      heading: "Efficiently manage and display daily egg prices!",
      desc: "HMS Egg Distributors is a full-stack web application designed to provide up-to-date information on daily egg prices. Built using the MERN stack (MongoDB, Express.js, React, Node.js), the app enables users to view current prices for various types of eggs and contact the distributor through multiple channels. While the website does not support direct ordering, it offers an intuitive interface for price updates and contact information.",
    },
    dProcess: [
      {
        listHead: "Website Design",
        listDesc:
          "Conceptualized and designed the website layout and user interface using Figma and Adobe Illustrator. Created a clean and user-friendly design to present egg prices and contact details.",
      },
      {
        listHead: "Environment Setup",
        listDesc:
          "Configured the full-stack environment with Node.js, Express.js, MongoDB, and React. Set up version control with Git.",
      },
      {
        listHead: "Frontend Development",
        listDesc:
          "Developed the front end using React and Tailwind CSS to create a responsive and visually appealing interface for displaying egg prices and contact options.",
      },
      {
        listHead: "Backend Development",
        listDesc:
          "Implemented backend services using Node.js and Express.js. Designed the database schema in MongoDB for managing egg prices and contact information. Built RESTful APIs for fetching and updating price data.",
      },
    ],
    ongoing: {
      ongoingHead:
        "The site is fully operational with ongoing maintenance and updates.",
      ongoingDesc:
        "HMS Egg Distributors is fully functional, with daily updates to egg prices. Ongoing work involves maintaining the site and ensuring the accuracy of price information.",
    },
    github: "https://github.com/JWings007/HMS",
    liveStatus: true,
    link: "https://www.hmsegg.com/",
  },
];

export default projects;
