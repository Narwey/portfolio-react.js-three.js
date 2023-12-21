import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  haven,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  blog1,
  ecomarket,
  arkx,
  fsac,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "FullStack Developer",
    company_name: "ARK-x Factory",
    icon: arkx,
    iconBg: "#383E56",
    date: "june 2023 - december 2023",
    points: [
      "Developing and maintaining robust web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), focusing on both front-end and back-end development to deliver full-stack solutions",
      "Working collaboratively in a team environment using Agile methodologies, ensuring efficient project management and timely delivery of software components.",
      "Optimizing user experience by implementing adaptive layouts and ensuring seamless performance across various devices and browsers.",
      "Engaging in thorough code reviews to enhance code quality, sharing insights and best practices, and fostering a culture of continuous learning and improvement among the development team.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "EcoMarket",
    icon: fsac,
    iconBg: "#E6DEDD",
    date: "march 2023 - mai 2023",
    points: [
      "Developing and maintaining web applications using Laravel and blade templating engine, focusing on front-end development to deliver full-stack solutions",
      "Collaborating with teams using the agile methodology, ensuring efficient project management and timely delivery of software components.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Your exceptional performance as a trainee, marked by hard work and dedication, has been highly valued. Your strong work ethic and commitment to excellence make you an invaluable team member. Keep up the great work!",
    name: "Soufiane korchi",
    designation: "Tech leader",
    company: "ARKX Factory",
    image: "./images/soufiane.jpg",
  },
  {
    testimonial:
      "Outstanding collaboration, demonstrating professionalism and expertise. Your understanding of our needs ensured smooth, successful project execution. Highly recommended for your exceptional skills.",
    name: "Salma hajar",
    designation: "Headhunter IT",
    company: "ARKX Factory",
    image: "./images/salma.jpg",
  },
  {
    testimonial:
      "As a team leader, your insightful guidance was invaluable, fostering a highly productive and collaborative environment. Your expertise, dedication, and strategic vision were crucial in driving our team's remarkable success.",
    name: "Kaoutar elkhammar",
    designation: "Trainer",
    company: "ARKX Factory",
    image: "./images/kaoutar.jpg",
  },
];

const projects = [
  {
    name: "EcoMarket",
    description:
      "EcoMarket is a web application for buying eco-friendly and sustainable products. It provides a user-friendly platform for environmentally conscious consumers to find and purchase green products, focusing on sustainability and ethical sourcing.",
    tags: [
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: ecomarket,
    source_code_link: "https://https://github.com/Narwey/EcoMarket-Projet",
  },
  {
    name: "HandMade Haven",
    description:
      "Handmade Haven is a web application built with the MERN stack, offering a marketplace for unique handmade products. It connects artisans with buyers, featuring a user-friendly design and secure transactions, emphasizing the charm of handcrafted items.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "white-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
    ],
    image: haven,
    source_code_link:
      "https://github.com/Narwey/ARKx-E-commerce-Web-App/tree/Anouar",
  },
  {
    name: "Blog App",
    description:
      "The blog app is a platform for sharing articles and stories. It allows easy content publishing and management, with features for community engagement through social sharing, enhancing interaction between writers and readers.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
    ],
    image: blog1,
    source_code_link: "https://github.com/Narwey/Blog-App",
  },
];

export { services, technologies, experiences, testimonials, projects };
