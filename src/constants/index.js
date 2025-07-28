import { min } from "three/examples/jsm/nodes/Nodes.js";
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
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  ecosystem,
  orderez,
  threejs,
  emtech,
  yebelo,
  gdsc,
  mit,
  sabertooth,
  tokentale,
  houseOfKicks,
  cn,
  campus,
  express,
  aws,
  python,
  android,
  swift
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
      title: "Software Engineer",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile App Developer",
      icon: mobile,
    },
    {
      title: "Full Stack Developer",
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Express JS",
      icon: express,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "AWS",
      icon: aws,
    }, 
    {
      name: "Android",
      icon: android,
    },  
    {
      name: "Swift",
      icon: swift,
    },
    // {
    //   name: "Flutter",
    //   icon: android,
    // },
    // {
    //   name: "Java",
    //   icon: android,
    // },
    {
      name: "Docker",
      icon: docker,
    },
    // {
    //   name: "Kubernetes",
    //   icon: android,
    // }
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "EmTech Care Labs",
      icon: emtech,
      iconBg: "#383E56",
      date: "Feb 2023 - April 2023",
      points: [
        "Developed and deployed full-stack applications using JavaScript, AWS and other technologies",
        "Pioneered the construction of a critical system, constantly learning many new things needed for the project's success",
        "Crafted robust features, agilely fixed bugs, amassing over 10,000 delighted users through technical mastery and prioritizing user experience",
      ],
    },
    {
      title: "Associate Software Engineer",
      company_name: "Yebelo Technology",
      icon: yebelo,
      iconBg: "#383E56",
      date: "Feb 2023 - April 2023",
      points: [
        "Developed and deployed full-stack applications using JavaScript, AWS and other technologies",
        "Pioneered the construction of a critical system, constantly learning many new things needed for the project's success",
        "Crafted robust features, agilely fixed bugs, amassing over 10,000 delighted users through technical mastery and prioritizing user experience",
      ],
    },
    {
      title: "Research Assistant",
      company_name: "MIT ADT University",
      icon: gdsc,
      iconBg: "#FFFFFF",
      date: "September 2022 - May 2023",
      points: [
        "Researched on the current advancements in underwater image processing and identified gaps",
        "Developed a AI-based (CNN) underwater image enhancement pipeline in Python achieving a 65\% reduction in blurriness and haziness metrics by potentially incorporating techniques like Dark Channel Prior (DCP)",
        "Implemented YOLOv8 for fish detection in enhanced images, resulting in an 86\% accuracy improvement, due to improved visibility"
      ],
    },
    {
      title: "Tech Team Head",
      company_name: "Google Developer Students",
      icon: mit,
      iconBg: "#383E56",
      date: "September 2021 - July 2022",
      points: [
        "Led a team of 15 members for the development of a highly interactive GDSC university chapter website",
        "Implemented a comprehensive Unit Testing suite for the website, fixing 10+ bugs, ensuring reduction in post-deployment bugs",
        "Collaborating various notable influencers across the nation for information sharing",
      ],
    },
    {
      title: "Mobile Application Developer",
      company_name: "Sabertooth Technologies",
      icon: sabertooth,
      iconBg: "#E6DEDD",
      date: "November 2020 - January 2021",
      points: [
        "Led the development of a MVC mobile app for a drugstore, reducing the billing time from 7 minutes to just 5 seconds",
        "Leveraged Jira for efficient backlog management and sprint planning within Agile methodologies"
      ],
    },
  ];
  
  const testimonials = [];
  
  const projects = [
    {
      name: "Cloud Native Monitoring",
      description:
        "Developed a full-stack high-performance Django Kubernetes monitoring app, containerized with Docker and AWS ECR integration. Automated AWS EKS deployments via Python, cutting 40% manual efforts.",
      tags: [
        {
          name: "Django",
          color: "blue-text-gradient",
        },
        {
          name: "Kubernetes",
          color: "green-text-gradient",
        },
        {
          name: "Docker",
          color: "pink-text-gradient",
        },
      ],
      image: cn,
      source_code_link: "",
    },
    {
      name: "House Of Kicks",
      description:
        "Developed House of Kicks MERN stack e-commerce platform on AWS, with engaging features adding an aspect of culture for sneakers. Integrated payment gateway using PayPal. Built Recharts dashboards optimizing stock management.",
      tags: [
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
        {
          name: "AWS",
          color: "green-text-gradient",
        },
        {
          name: "ReactJS",
          color: "pink-text-gradient",
        },
      ],
      image: houseOfKicks,
      source_code_link: "https://github.com/hrigvedk/house_of_kicks",
    },
    {
      name: "Campus Connect",
      description:
        "Developed Campus Connect, a Java desktop app to address Boston student housing crisis. Utilized Object-Oriented Design, enhancing database scalability. Robust Java skills facilitated seamless broker-applicant communication.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Swing",
          color: "green-text-gradient",
        }
      ],
      image: campus,
      source_code_link: "https://github.com/aed5100/final-project-campus-connect",
    },
    {
      name: "TokenTale",
      description:
        "Developed decentralized ReactJS social media platform with faster IPFS content retrieval and user control. Implemented one-tap Metamask login via JavaScript. Led Solidity NFT verification and ownership, validated through blockchain deployment.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "Blockchain",
          color: "pink-text-gradient",
        },
      ],
      image: tokentale,
      source_code_link: "https://github.com/hrigved-dev/TokenTale",
    },
    {
      name: "CarbonFit",
      description:
        "Developed CarbonFit Flutter app to calculate and reduce personal carbon footprint. Implemented NodeJS/Express, Flask servers, and Pytorch chatbot. Integrated web scraping with BeautifulSoup. Offered comprehensive carbon tracking, mitigation, and offsetting solution.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJS",
          color: "green-text-gradient",
        },
        {
          name: "Flask",
          color: "pink-text-gradient",
        },
      ],
      image: ecosystem,
      source_code_link: "https://github.com/hrigved-dev/CarbonFit",
    },
    {
      name: "OrderEZ",
      description:
        "Developed OrderEZ, an Android app to streamline group ordering at restaurants, with real-time updates for changing orders. Facilitated advance ordering for late arrivals ensuring timely service. Implemented user-friendly interface for order management, enhancing efficiency for customers and staff.",
      tags: [
        {
          name: "Android",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "MaterialUI",
          color: "pink-text-gradient",
        },
      ],
      image: orderez,
      source_code_link: "https://github.com/hrigved-dev/OrderEZ",
    }
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };
