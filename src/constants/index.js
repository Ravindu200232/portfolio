import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  java,
  html,
  css,
  reactjs,
  ubuntu,
  tailwind,
  postgresql,
  git,
  otu,
  rhhs,
  wonderland,
  mackenziehealth,
  privcurity,
  staples,
  google,
  whmis,
  aws,
  python,
  cplusplus,
  typescript,
  sunnifyimage,
  knifethrowimage,
  pythonanalysis,
  password_generator,
  // wordsearch,
  powershell,
  cisco,
  connectwise,
  virtualbox,
  kalilinux,
  wireshark,
  nmap,
  metasploit,
  johntheripper,
  hydra,
  aircrackng,
  photoshop,
  premiere,
  cinema4d,
  blender,
  connectwisecert,
  awsdbcert,
  financialflowimage,
  enterpriseapitester,
  github,
  mongodb,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "extracurricular",
    title: "Certifications",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: fullstack,
  },
  {
    title: "Systems Infrastructure",
    icon: backend,
  },
  {
    title: "Cloud Automation",
    icon: mobile,
  },
  {
    title: "Workflows",
    icon: web,
  },
];

const education = [
  {
    title: "BSc (Hons) in Information Technology - Software Engineering",
    company_name:
      "Sri Lanka Institute of Information Technology (SLIIT), Malabe",
    icon: "/sliit.png", // Add your icon/image
    iconBg: "#fff",
    date: "2022 - 2026",
    points: [
      "Specializing in Software Engineering",
      "CGPA: 3.21 (Currently in Year 3)",
    ],
  },
  {
    title: "React Master and MERN Stack Development",
    company_name: "Epic Learn",
    icon: "/sky.png", // Add your icon/image
    iconBg: "#fff",
    date: "2024 - 2025 (Ongoing)",
    points: [
      "Comprehensive training in React and the MERN Stack (MongoDB, Express, React, Node)",
      "Hands-on projects including authentication, API development, and deployment",
    ],
  },
  {
    title: "Next.js Mastery Course",
    company_name: "EVOTECH EDUCATION (Online)",
    icon: "/evo.png", // Add your icon/image
    iconBg: "#fff",
    date: "2024/01/03 – 6 Months",
    points: [
      "Built production-grade web apps using Next.js",
      "Topics covered: SSR, SSG, Dynamic Routing, API Routes, Middleware, Deployment",
    ],
  },
  {
    title: "Full Stack Web Development Program",
    company_name: "SKYREK",
    icon: "/sky.png", // Add your icon/image
    iconBg: "#fff",
    date: "2024 - 2025",
    points: [
      "End-to-end training on frontend and backend development with DevOps fundamentals",
    ],
  },
  {
    title: "Java Programming Master Course",
    company_name: "Java Learn",
    icon: "/evo.png",
    iconBg: "#fff",
    date: "2024",
    points: [
      "Learned object-oriented programming, JavaFX, JDBC, and multithreading",
      "Built several mini-projects and console-based applications",
    ],
  },

  {
    title: "Advanced Level (Commerce Stream)",
    company_name: "Anuradhapura Central College",
    icon: otu, // Add your icon/image
    iconBg: "#fff",
    date: "2021",
    points: [
      "Subjects: Accountancy, Economics, Business Studies, General English",
    ],
  },
  {
    title: "Ordinary Level",
    company_name: "Anuradhapura Central College",
    icon: otu,
    iconBg: "#fff",
    date: "2015",
    points: [
      "7 A Grades including Business Studies & Accounting, Mathematics, and Science",
    ],
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "Powershell",
    icon: powershell,
  },
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostGreSQL",
    icon: postgresql,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const itTools = [
  {
    name: "Powershell",
    icon: powershell,
  },
  {
    name: "Cisco",
    icon: cisco,
  },
];

const cybersecurityTools = [];

const designTools = [
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Premiere",
    icon: premiere,
  },
  {
    name: "Cinema 4D",
    icon: cinema4d,
  },
  {
    name: "Blender",
    icon: blender,
  },
];

const experiences = [
  {
    title: "",
    company_name: "",
    icon: wonderland,
    iconBg: "",
    date: "",
    points: [],
  },
];

const extracurricular = [
  {
    title: "Java Programming Master Course",
    type: "Professional Certificate",
    icon: "/evo.png", // Replace with actual icon
    iconBg: "#F89820",
    date: "Issued: 2024",
    points: [
      "Core Java, OOP, JavaFX, JDBC, Multithreading, File I/O, Console Applications",
    ],
    credential: "https://example.com/java-certificate-link", // Replace with actual certificate link
  },
  {
    title: "React Master & Next.js Developer Certificate",
    type: "Professional Certificate",
    icon: "/evo.png",
    iconBg: "#61DBFB",
    date: "Issued: 2024 – 2025",
    points: [
      "React.js, Component Lifecycle, Hooks, Next.js Framework, Dynamic Routing, SSR, SSG",
    ],
    credential: "https://example.com/react-nextjs-certificate-link", // Replace with actual certificate link
  },
  {
    title: "MERN Stack Mastery",
    type: "Professional Certificate",
    icon: "/sky.png", // Replace with actual icon
    iconBg: "#3E3E3E",
    date: "Issued: 2024",
    points: [
      "MongoDB, Express.js, React.js, Node.js, JWT Authentication, REST APIs",
    ],
    credential: "https://example.com/mern-certificate-link", // Replace with actual certificate link
  },
  {
    title: "Next.js Mastery - EVOTECH EDUCATION",
    type: "Proof of Completion",
    icon: "/sky.png",
    iconBg: "#000000",
    date: "Started: Jan 3, 2025 – 6 Month Duration",
    points: [
      "Next.js Routing, SSR/SSG, API Routes, Dynamic Rendering, Middleware, Deployment",
    ],
    credential: "https://example.com/evotech-nextjs-certificate-link", // Replace with actual certificate link
  },
];

const projects = [
  {
    name: "RoyFilm Photography Site",
    description:
      "A professional photography portfolio and booking platform for D.M. Rohitha Disanayaka in New Zealand. Built using the MERN stack and deployed as a live production site for real-world use.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Express", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "Node.js", color: "blue-text-gradient" },
    ],
    image: "./roy.png", // replace with actual image variable
    source_code_link: "https://github.com/your-repo/royfilm",
    live_project_link: "https://royfilms.co.nz", // replace with actual if different
  },
  {
    name: "Audio Shop",
    description:
      "Kv audio rental app is a web application that allows users to rent audio equipment. The app is built using the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. It provides a user-friendly interface for browsing available audio equipment, placing rental orders, and managing user accounts. The app also includes features such as order tracking and payment processing.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "express", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "node", color: "blue-text-gradient" },
    ],
    image: "/audioApp.png",
    source_code_link: "https://github.com/Ravindu200232/Audio_shop_front",
    live_project_link:
      "https://audio-shop-frontend-git-main-ravindus-projects-7aa938e5.vercel.app/",
  },
  {
    name: "Govimithuru Agriculture Shop",
    description:
      "A MERN stack-based agriculture web application for managing product listings, customer orders, and farmer communication. Built for scalability and optimized for rural connectivity.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Express", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "Node.js", color: "blue-text-gradient" },
    ],
    image: "/govimithuru.png", // replace with actual image variable
    source_code_link: "https://github.com/MasterRavi2232/Govimithuru",
    live_project_link: "https://govimithuru-frontend.vercel.app/",
  },

  {
    name: "MovieApp 🎬",
    description:
      "A modern movie listing and search app built with Next.js and styled using shadcn/ui. Features include search, filter, and detail views with clean responsive UI.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "shadcn/ui", color: "green-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
    ],
    image: "", // replace with actual image variable
    source_code_link: "https://github.com/your-repo/movieapp",
    live_project_link: "https://movieapp.vercel.app/",
  },
  {
    name: "Country App 🌍",
    description:
      "A full-stack MERN application for viewing, favoriting, and managing countries with user authentication, Google login, email verification, and session management.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Express", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "Node.js", color: "blue-text-gradient" },
    ],
    image: "/country.png", // replace with actual image variable
    source_code_link: "https://github.com/your-repo/countryapp",
    live_project_link: "https://countryapp.vercel.app/",
  },
  {
    name: "Food Order App 🍽️",
    description:
      "A complete food ordering and delivery platform using MERN stack with containerization via Docker and orchestration using Kubernetes. Features include user/restaurant registration, live tracking, payment, and admin panels.",
    tags: [
      { name: "MERN", color: "blue-text-gradient" },
      { name: "Docker", color: "green-text-gradient" },
      { name: "Kubernetes", color: "pink-text-gradient" },
      { name: "Microservices", color: "blue-text-gradient" },
    ],
    image: "/food.png", // replace with actual image variable
    source_code_link: "https://github.com/your-repo/food-order-app",
    live_project_link: "https://food-order-app.vercel.app/",
  },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Sunny for his outstanding technical proficiency and professional approach as a System Support specialist at Mackenzie Hospital. His deep knowledge of iPad systems and troubleshooting abilities were instrumental in ensuring seamless operations and user satisfaction. Sunny's proactive attitude and problem-solving skills made him a reliable asset to our team, and he consistently exceeded expectations in resolving complex issues. I have no hesitation in endorsing him for any tech-related position, as I am confident he will excel in any challenge he takes on.",
    name: "Feda Abukhadrah, BIT | SaaS | Health Tech | MDM | ABM | POS | ITIL®V4 | CompTIA A+",
    designation: "Senior Service Desk Specialist",
    company: "Px Solutions LTD.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Sunny Patel's expertise in the technological domain is truly remarkable. Proficient in programming languages like Java, Python, and C++, and highly skilled in Microsoft's suite of tools, Sunny's grasp of networking concepts is extensive. What sets him apart is his experience in handling over 1000 devices remotely and on-site, along with a successful track record in troubleshooting and deploying various software and hardware upgrades. His dedication to tackling complex challenges, grounded in a strong foundation in software design and a rich academic background in computer science, positions Sunny as a valuable asset to any tech-driven team.",
    name: "Sanjay Sharma, MBA, CISSP, CISA, PMP®",
    designation: "Senior Vice-President and Head of Cybersecurity Services",
    company: "Pathway Communications / ex-Toronto Hydro",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Sunny's proficiency in data entry was impeccable, displaying meticulous attention to detail and accuracy. His commitment to maintaining organized and error-free records significantly improved our operational efficiency. In customer service, Sunny's phone etiquette was truly commendable. He communicated with a warm and professional demeanour, leaving customers with a positive impression and ensuring their needs were met. His ability to multitask and handle multiple customers simultaneously was impressive, showcasing his excellent time management and interpersonal skills. Sunny's dedication to his role and adeptness in data entry, customer service, and managing simultaneous customer interactions made him a valuable asset to our team at Lazer Runner.",
    name: "Michelle Ilizirov",
    designation: "Manager",
    company: "Lazer Runner",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export {
  services,
  technologies,
  itTools,
  cybersecurityTools,
  designTools,
  experiences,
  extracurricular,
  projects,
  education,
  testimonials,
};
