// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Rob Brunett",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "Product manager with a diverse product history. Experience includes Director, Product Management for Snap One, where I currently manage the SunBrite Outdoor TV business unit. A customer centric viewpoint helps me to discover, develop, and deploy revenue driving products that enrich users lives.  Additionally, I am earning a certificate in full stack development from UNC Chapel Hill, where I am developing skills in HTML, CSS, JavaScript, jQuery, Bootstrap, APIs,React.js, agile frameworks, and scrum methodologies. Excited to combine 8 years of Product Management experience with new technical skills to drive successful outcomes for a diverse and passionate team.",
  id: "Photo"
  };
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name: "MongoDB",
    // svg: '',
    faClass: "fas fa-database",
  },
  {
    name: "Bootstrap",
    // svg: '',
    faClass: "fab fa-bootstrap",
  },
  {
    name: "React",
    // svg: '',
    faClass: "fab fa-react",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Adventure Finder",
    skills: ["HTML, CSS, JS"],
    url: "https://naomi969.github.io/kayak-launch/",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Secure Password Generator",
    skills: ["JS"],
    url: "https://brunett82.github.io/Password_Generator/",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Code Quiz",
    skills: ["HTML, CSS, JS"],
    url: "https://brunett82.github.io/code_quiz/",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Weather Dashboard",
    skills: ["JS, JQuery, Moment"],
    url: "https://brunett82.github.io/weather_dashboard/",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
/*const section4Title = "Miscellaneous";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Miscellaneous 1",
    url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Miscellaneous 2",
    url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "Miscellaneous 3",
    url: "https://github.com/kaustubhai",
  },
];*/
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  copyright: "Kaustubh Mishra",
  contactUrl: "https://formspree.io/f/mqkwgdyg",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/brunett82",
  //facebook: "https://facebook.com",
  // twitter: "https://twitter.com",
  //instagram: "https://instagram.com",
  linkedin: "https://www.linkedin.com/in/rob-brunett-mba-b745b2a/",
  //resume: "https://novoresume.com/",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  //miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
 // section4Title,
  section5Title,
};
