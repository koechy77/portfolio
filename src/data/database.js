import css from "../assets/tech/css.svg";
import express from "../assets/tech/express.svg";
import git from "../assets/tech/git.svg";
import github from "../assets/tech/github.svg";
import html5 from "../assets/tech/html5.svg";
import javascript from "../assets/tech/javascript.svg";
import mongodb from "../assets/tech/mongodb.svg";
import nodejs from "../assets/tech/nodejs.svg";
import postman from "../assets/tech/postman.svg";
import react from "../assets/tech/react.svg";
import redis from "../assets/tech/redis.svg";
import tailwind from "../assets/tech/tailwind.svg";
import vercel from "../assets/tech/vercel.svg";
import vite from "../assets/tech/vite.svg";
import postgresql from "../assets/tech/postgresql.svg";

const database = {
  header: {
    name: "ONYEM CHIDERA KINGSLEY",
    tagline: "Full-Stack Engineer",
    backgroundImage: null,
  },
  experiences: [
    {
      company: "SkillBoost",
      role: "Full-Stack Engineer Intern",
      years: "2026",
    },
  ],
  skills: ["React", "TailwindCSS", "DOM", "Git", "UI/UX Design", "Node.js"],
  contact: {
    email: "kingsleyonyem7@gmail.com",
    phone: "+234 816 252 2106",
    linkedin: "https://www.linkedin.com/in/chidera-onyem-449b74272/",
    github: "https://github.com/koechy77",
  },
  about: {
    title: "About Me",
    description: [
      "I'm Kingsley Onyem, a full-stack engineer and Applied Mathematics undergraduate based in Nigeria. I'm interested in more than how a screen looks; I want to understand the decisions, data, and interactions that make a product useful.",
      "Studying mathematics has trained me to break complex problems into smaller, testable parts. I bring that mindset to responsive React and Tailwind CSS interfaces, Node.js and Express APIs, and database-backed features.",
    ],
    image: `${import.meta.env.BASE_URL}media/IMG_4039.webp`,
  },
  projects: [
    {
      id: 1,
      title: "Blog Site",
      description: "A blog website built with React, Tailwind CSS, and Vite.",
      image: `${import.meta.env.BASE_URL}Screenshot (79)(1).webp`,
      github: "https://github.com/koechy77/Blogs-Site",
      demoUrl: "https://koechy77.github.io/Blogs-Site/",
      tech: [
        { name: "React", logo: react },
        { name: "TailwindCSS", logo: tailwind },
        { name: "Vite", logo: vite },
      ],
    },
    {
      id: 2,
      title: "E-commerce Site",
      description: "A frontend storefront built with React, Tailwind CSS, and Vite.",
      image: `${import.meta.env.BASE_URL}Screenshot (107).webp`,
      github: "https://github.com/koechy77/front-end-e-commerce-website/",
      demoUrl: "https://koechy77.github.io/front-end-e-commerce-website/",
      tech: [
        { name: "React", logo: react },
        { name: "TailwindCSS", logo: tailwind },
        { name: "Vite", logo: vite },
      ],
    },
  ],
};

export default database;

export const services = [
  {
    title: "Full-Stack Development",
    description:
      "Frontend and backend work using React, Node.js, Express, and MongoDB.",
  },
  {
    title: "Frontend Development",
    description:
      "Responsive React interfaces styled with Tailwind CSS.",
  },
  {
    title: "Backend Development",
    description:
      "REST API routes and database-backed features using Node.js, Express, and MongoDB.",
  },
  {
    title: "Deployment & Maintenance",
    description:
      "Deployment, bug fixes, and ongoing updates for web applications.",
  },
];

export const techStack = [
  { name: "HTML5", logo: html5 },
  { name: "CSS3", logo: css },
  { name: "JavaScript", logo: javascript },
  { name: "React", logo: react },
  { name: "TailwindCSS", logo: tailwind },
  { name: "Vite", logo: vite },
  { name: "Node.js", logo: nodejs },
  { name: "Express", logo: express },
  { name: "MongoDB", logo: mongodb },
  { name: "Git", logo: git },
  { name: "GitHub", logo: github },
  { name: "Postman", logo: postman },
  { name: "Vercel", logo: vercel },
  { name: "Redis", logo: redis },
  { name: "PostgreSQL", logo: postgresql },
];

export const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "SkillBoost LTD",
    description:
      "Built responsive web interfaces with HTML, CSS, JavaScript, Tailwind CSS, and React during my internship.",
    tech: [
      {
        name: "HTML",
        logo: html5,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
      {
        name: "Tailwind CSS",
        logo: tailwind,
      },
      {
        name: "React",
        logo: react,
      },
    ],
  },

  {
    role: "Backend Developer Intern",
    company: "SkillBoost LTD",
    description:
      "Worked on REST APIs and database-backed features with Node.js, Express, and MongoDB during my internship.",
    tech: [
      {
        name: "Node.js",
        logo: nodejs,
      },
      {
        name: "Express.js",
        logo: express,
      },
      {
        name: "MongoDB",
        logo: mongodb,
      },
    ],
  },
];
