// --------------------------------------- Project List
// import gridape from "../assets/gridape.png"
// import blog from "../assets/blog.png"
// import stayinn from "../Assets/stayinn.png"
// import dashboard from "../assets/dashboard.png"
// import moviebox from "../assets/moviebox.png"
// import quizApk from "../assets/quizApk.png"
// import gallery from "../assets/gallery.png"
// import todo from "../assets/todo.png"
import React from 'react';
import LogoImageSuperAdmin from './../Assets/super-admin.png';
import LogoImagePOS from './../Assets/pos.png';
import LogoImageEDM from './../Assets/edm.png';
import LogoImageKB from './../Assets/KB.png';


export const ProjectList = [
  {
    img: LogoImageSuperAdmin,
    // img: "../Assets/super-admin.png",
    title: "Techbar (Super Admin)",
    description: "Techbar (Super Admin) is your all-in-one control center for managing everything—from attendance and assets to tasks, documents, and assessments. It’s built to make daily operations smooth, organized, and super efficient for any growing team.",
    tech_stack: "Angular, Node js, metronic Theme, Graph Ql",
    demo_url: "https://admin18-r2.techbar.com/",
  },
 {
  img: LogoImagePOS,
  title: "Techbar (POS)",
  description: "Techbar POS is a robust Point of Sale system built with Angular and Node.js. It features a modern and user-friendly interface powered by the Metronic theme. The system includes real-time billing, customer management, inventory tracking, and multi-user support. Designed specifically for retail businesses, it ensures high efficiency, accuracy, and a seamless checkout experience.",
  tech_stack: "Angular, Node.js, Metronic Theme, Graph Ql",
  demo_url: "https://ms-repair.techbar.com/",
},
  {
    img: LogoImageEDM,
    title: "EDM (Event Distribution Management)",
    description : "Event app lets users schedule events, host friends and create event groups.",
      tech_stack: "Angular, Node.js, Ng Prime Theme , Restfull Api's",
    demo_url: "https://edm-stg.4iisolutions.com/#/",
  },
  {
    img: LogoImageKB,
    title: "Knowledge Base",
    description: "Knowledge Base is a Q&A platform like Stack Overflow, designed to help hotel staff ask questions, share answers, and collaborate efficiently.",
    tech_stack: "Angular, Node.js, Metronic Theme , Restfull Api's",
    demo_url: "https://kb-dev.techbar.com/",
  },
  {
    img: "https://i.ibb.co/QJNhM78/dashboard.png",
    title: "Upward Airline Dashboard",
    description:
      "Upward Airlines Corporate Dashboard: Web-based app for monitoring airline performance, with intuitive interface, grid layout, and key features for data analysis and decision-making by administrators and employees.",
    tech_stack: "Html, Css, JavaScript",
    github_url: "https://github.com/Benjtalkshow/Upward-Airlines-Corporate-Dashboard",
    demo_url: "https://upward-airlines-corporate-dashboard.netlify.app/",
  },
  {
    img: "https://i.ibb.co/SK9Ty7c/moviebox.png",
    title: "MovieBox",
    description: "The TMDB Movie App is an interactive movie application that retrieves movie data from The Movie Database (TMDb) API.",
    tech_stack: "Reactjs, TailwindCss",
    github_url: "https://github.com/Benjtalkshow/HNG-TaskTwo",
    demo_url: "https://hng10-task-two.netlify.app/",
  },
  {
    img: "https://i.ibb.co/fF0qrqj/quizApk.png",
    title: "Quiz Web App",
    description:
      "Ultimate Online Quiz Project for newbies, in FrontEnd development.",
    tech_stack: "Html, JavaScript, TailwindCss",
    github_url: "https://github.com/Benjtalkshow/quizapp",
    demo_url: "https://quiz-apk.netlify.app/",
  },
  {
    img: "https://i.ibb.co/fpYBvhT/gallery.png",
    title: "CakePixie Gallery",
    description:
      "This is a React project that allows users to search for images based on tags or search terms and display the results with a drag-and-drop interface. Login with default credentials;'user@example.com, 1Password'",
    tech_stack: "Reactjs, TailwindCss, firebase",
    github_url: "https://github.com/Benjtalkshow/HNG-TaskThree",
    demo_url: "https://hng-task-three-blond.vercel.app/"
  },
  {
    img: "https://i.ibb.co/mR2trfN/valutico.png",
    title: "Valutico Static Landing Page",
    description:
      "The World's Leading Business Valuation Software Valutico provides the financial services industry and valuation experts with data driven tools to perform accurate company valuations faster and more accurately than ever before.",
    tech_stack: "Html, JavaScript, TailwindCss",
    github_url: "https://github.com/Benjtalkshow/valutico",
    demo_url: "https://valutico-business-valuation.netlify.app/"
  },
  {
    img: "https://i.ibb.co/xXwW93j/todo.png", 
    title: "Todo App",
    description:
      "My Todo App is a simple to-do app built with React that allows you to manage your tasks. It provides features to add, delete, and update tasks, and utilizes local storage for persistent data storage.",
    tech_stack: "Reactjs, TailwindCss",
    github_url: "https://github.com/Benjtalkshow/todo-app",
    demo_url: "https://benjamin-todo-app.vercel.app/"
  },
];

// --------------------------------------- Skills

export const stackList = [
  {
    img: "https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png",
    name: "HTML",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
    name: "Bootstrap",
  },
  {
    img: "https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png",
    name: "CSS",
  },
  {
    img: "https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png",
    name: "JavaScript",
  },
  {
    img: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
    name: "ReactJS",
  },
    {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg",
    name: "Angular",
  },
  {
    img: "https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png",
    name: "Tailwind",
  },
  {
    img: "https://user-images.githubusercontent.com/25181517/189716855-2c69ca7a-5149-4647-936d-780610911353.png",
    name: "Firebase",
  },
  {
    img: "https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png",
    name: "Git",
  },
  {
    img: "https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/responsive.svg",
    name: "Responsive Design",
  },
  {
    img: "https://user-images.githubusercontent.com/25181517/192158957-b1256181-356c-46a3-beb9-487af08a6266.png",
    name: "Wordpress",
  },

];

