import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate Full-Stack Developer with a knack for crafting robust and scalable web applications. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences. Building bridges between ideas and reality through code and creativity.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Full-Stack Developer with a strong passion for building efficient, scalable, and user-friendly web applications. With 3 years of professional experience, I have honed my skills in front-end technologies like React and vue.js, as well as back-end technologies like Node.js, MySQL, C#, and MongoDB along with the frameworks like ASP.NET. My journey in Web Development began during my postgraduate studies at Humber College, Canada, where I gained comprehensive knowledge in full-stack web development. I thrive in collaborative environments, enjoy tackling complex problems, and take pride in delivering high-quality solutions that meet and exceed client expectations. Beyond coding, I actively explore new technologies, contribute to open-source projects, and continuously strive to expand my skill set. Outside of work, I stay active and engaged in the tech community, always eager to learn and grow.`;

export const EDUCATION = [
  {
    year: "Jan. 2023 - Dec. 2023",
    degree: "Post Graduate Certificate",
    college: "Humber College",
    course: `Web Development`,
    technologies: ["JavaScript", "React.js", "Node.js", "MongoDB", "ASP.NET MVC", "Cypress"],
  },
  {
    year: "Aug. 2016 - Oct. 2020",
    degree: "B.Tech",
    college: "Maharaja Agrasen Institute of Technology",
    course: `Electronics and Communication Engineering`,
    technologies: ["Java", "Python", "OOPs", "Computer Networking", "OS"],
  },
];

export const EXPERIENCES = [
  {
    year: "April 2024 - Present",
    role: "Associate Business Analyst",
    company: "Infosys Ltd.",
    description: `Led the development of key ASP.NET features across 4+ KMART Australia web apps, improving system performance and client satisfaction. Optimized AWS RDS Aurora databases, increasing application speed and reliability by 20%. Implemented AWS SNS and SQS notifications for Lambda functions, streamlining workflows by 30%.`,
    technologies: ["C#", "ASP.NET", "React.js", "Node.js", "MongoDB", "MySQL", "Snowflake", "AWS"],
  },
  {
    year: "Oct. 2023 - Dec. 2023",
    role: "Software Developer Intern",
    company: "RadicalX",
    description: `Enhanced platform features, boosting system performance and driving a 10% rise in user engagement through a refreshed UI. Spearheaded the launch of RadicalX Missions and the subscription page, resulting in a 20% growth in user adoption and subscriptions.`,
    technologies: ["HTML", "CSS", "Vue.js", "MongoDB", "React.js", "Node.js", "JavaScript"],
  },
  {
    year: "Feb. 2021 - Dec. 2022",
    role: "Application Development Associate",
    company: "Accenture",
    description: `Overhauled two critical .NET applications, enhancing functionality and aligning features with evolving business needs. Automated report generation, reducing manual effort by 75% and cutting report creation time from 1 hour to 15 minutes. 
                  Built a Console application (CLR) to streamline component-level repairs, saving engineers 10 hours monthly in end-user wait time. Resolved a critical production bug, saving 100 hours of business time monthly. Optimized SQL queries and developed efficient stored procedures, boosting data retrieval speed by 20%. 
                  Led the migration of the INRIS application to Azure Cloud, improving scalability, performance, and cutting costs by 15%. Identified and fixed 95% of issues during SIT and UAT, achieving a post-launch defect rate of under 2%. Fixed a critical SSIS Package bug, safeguarding business data and preventing a potential revenue loss of €1.5M.`,
    technologies: ["Python", "ASP.NET", "C#", "MySQL", "SSIS", "Postman", "PuTTy", "Azure"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project4,
    description:
      "Built a responsive E-commerce website clone using Node.js, Express, Pug, and MongoDB, supporting over 100 concurrent users and enhancing user experience and scalability.",
    technologies: ["HTML", "CSS", "Pug", "Node.js", "MongoDB", "Express.js"],
  },
  {
    title: "Furry Friend Finder",
    image: project1,
    description:
      "Engineered a web platform connecting over 500 pet enthusiasts, leveraging React, Vue.js, Node.js, Express.js, and MongoDB with JWT authentication to ensure secure user access.",
    technologies: ["React.js", "Vue.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "New Aggregrator",
    image: project3,
    description:
      "Created a live news website utilizing REST APIs and Node.js, aggregating and displaying 200+ news articles daily..",
    technologies: ["HTML", "CSS", "Node.js", "Rest APIs"],
  },
  {
    title: "Programming language Learning App",
    image: project2,
    description:
      "Constructed a web-based learning platform for programming languages using HTML, CSS, and JavaScript,with over 100 active users, enhancing engagement and educational value.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+91-8076288289 ",
  email: "shubhmish1997@gmail.com",
};
