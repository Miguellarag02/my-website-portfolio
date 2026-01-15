import { useMediaQuery } from "react-responsive";
import { STATES } from "./HeroRoutes.js"

export const AboutMe = {
  description: 'Software Engineer with a background in Electronics, Robotics, and Mechatronics, specialized in the design and development of complex systems. I work across low-level software, systems architecture, and interactive visualization, with a strong interest in projects where rigorous engineering meets thoughtful design.'
}

export function useResponsiveFlags() {
  const isSmall = useMediaQuery({ maxWidth: 480 });
  const isMobile = useMediaQuery({ minWidth: 481, maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const isUltraWide = useMediaQuery({ minWidth: 1920 });

  return { isSmall, isMobile, isTablet, isUltraWide };
}

export const calculateSizes = (isSmall, isMobile, isTablet, isUltraWide) => {
  return {
    deskScale:        isSmall ? 0.80                    : isMobile ? 0.80                     : isUltraWide ? 1.4 : 1.20,
    deskPos:          isSmall ? [-0.3, -2.1, 3.9]       : isMobile ? [-0.2, -1.1, 3.9]        : isUltraWide ? [0.0, -3, 3.9]        : [0.0, -2.5, 3.9],
    laptopCameraPos:  isSmall ? [1, 0.27, 4.77]     : isMobile ? [1, 1.03, 4.75]       : isTablet ? [1.9, 0.96, 5.5]         : isUltraWide ? [2.37, 1.10, 5.80]      : [1.97, 1.02, 5.44],
    laptopCameraRot:  isSmall ? [0.155, -0.965, -0.195] : isMobile ? [0.155, -0.965, -0.195]  : isTablet ? [0.155, -0.965, -0.195]  : isUltraWide ? [0.155, -0.965, -0.195] : [0.155, -0.965, -0.195],
    monitorCameraPos: isSmall ? [-0.95, 0.3, 5.0]       : isMobile ? [-0.9, 1.1, 5.0]         : isTablet ? [-1.06, 0.96, 5.9]       : isUltraWide ? [-1.31, 1.15, 6.48]     : [-1.16, 0.96, 6.08],
    monitorCameraRot: isSmall ? [0.39, -0.38, 0.00]     : isMobile ? [0.39, -0.38, 0.00]      : isTablet ? [0.39, -0.38, 0.00]      : isUltraWide ? [0.39, -0.38, 0.00]     : [0.39, -0.38, 0.00]
  };
};

export const calculateCameraPositions = (stateSections, isSmall, isMobile, isTablet, isUltraWide) => {
  const sizes = calculateSizes(isSmall, isMobile, isTablet, isUltraWide)
  return {
    pos: stateSections == STATES.PROJECTS ? sizes.laptopCameraPos 
       : stateSections == STATES.ABOUT ? sizes.monitorCameraPos 
       : stateSections == STATES.WORK ? sizes.laptopCameraPos 
       : [0, 0, 20],
    rot: stateSections == STATES.PROJECTS ? sizes.laptopCameraRot 
       : stateSections == STATES.ABOUT ? sizes.monitorCameraRot 
       : stateSections == STATES.WORK ? sizes.laptopCameraRot 
       : [0, 0, 0]
  };
};

export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
];

export const partnerReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  }
];

export const myProjects = [
  {
    title: 'Design and implementation of a data acquisition system for an optical sensor',
    desc: 'Given the complexity of handling real-time data presented by optical sensors, this work develops the design and implementation of a complete acquisition system that allows for the configuration, extraction, and storage of the information generated in a file. This system will be developed using Hardware Description Language.\nAdditionally, an application is incorporated to allow efficient control and processing of the data by the user. This enables the characterization of the sensor and ensures it meets the environmental requirements. \nFinally, it is important to mention that this Final Degree Project has been carried out within the context of a research project in collaboration with the company Alter Technology TÜV Nord. The objective of this project is the development of a modular platform for the characterization of image sensors.',
    href: '/pdf/TFG_Lara_Guarino.pdf',
    checkLinkTxt: 'Check document (Spanish)',
    extraInformation: '/pdf/TFG_Lara_Guarino_power_point.pdf',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Xilinx_Vivado.js',
        path: '/assets/vivado.png',
      },
      {
        id: 2,
        name: 'C#',
        path: 'assets/c-sharp.svg',
      },
      {
        id: 3,
        name: 'Gitlab',
        path: '/assets/gitlab-icon.svg',
      },
      {
        id: 4,
        name: 'Matlab',
        path: '/assets/matlab.jpg',
      },
    ],
  },
  {
    title: 'My own website portfolio',
    desc: 'This website is a personal portfolio project that I developed with great enthusiasm and attention to detail. It is built as a modern, interactive web application using React, TypeScript, Vite, and Tailwind CSS, with a strong focus on performance, clean architecture, and smooth animations.\nBeyond showcasing my projects and skills, this portfolio represents my personal approach to frontend development, combining technical rigor with thoughtful design and user experience. It is a project I was genuinely excited to design, build, and deploy, and it reflects how I enjoy turning ideas into polished, functional products.',
    href: 'https://github.com/Miguellarag02/my-website-portfolio#',
    checkLinkTxt: 'Check my repository',
    extraInformation: '/pdf/TFG_Lara_Guarino_power_point.pdf',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Vite',
        path: '/assets/vitejs.svg',
      },
      {
        id: 2,
        name: 'React',
        path: 'assets/react.svg',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Tailwindcss',
        path: '/assets/tailwindcss.png',
      },
    ],
  }
];

export const workExperiences = [
    {
    id: 1,
    name: 'University of Seville',
    pos: 'Researcher in Electronics Department',
    duration: 'Sept 2023 - Apr 2024',
    title:
      'Designed and implemented an FPGA-based optical sensor acquisition system using VHDL, C, and Petalinux for embedded control. Developed DMA-driven interrupt handling at kernel level, enabling reliable real-time data capture and processing. Validated the system end-to-end, reducing latency and improving signal consistency.',
    icon: '/assets/university.png',
  },
    {
    id: 2,
    name: 'Bertrandt Group',
    pos: 'Software Engineer Intern',
    duration: 'May 2024 - Oct 2024',
    title:
      'Enhanced the Philobot autonomous robotics platform using C++ and ROS, integrating YOLO models via TensorFlow and PyTorch for real-time object detection. Deployed inference pipelines that improved recognition performance and reduced response latency. Worked within an Agile/Scrum environment, contributing to sprint planning and iterative development.',
    icon: '/assets/bertrandt.svg',
  },
  {
    id: 3,
    name: 'Bertrandt Group',
    pos: 'Software Engineer',
    duration: 'Oct 2024 - Jul 2025',
    title:
      'Developed adaptive Human-Machine Interfaces (HMI) for the European FCAS program (EPIIC Project), improving integration reliability across multi-module systems. Built backend APIs in Python and desktop applications in Java for Airbus projects, optimizing data flow and reducing processing overhead. Actively participated in international workshops, enhancing cross-functional collaboration.',
    icon: '/assets/bertrandt.svg',
  },
  {
    id: 4,
    name: 'Bertrandt Group',
    pos: 'Software Requirements & Architecture Engineer',
    duration: 'Jul 2025 - Present',
    title:
      'Defined software architecture and functional specifications for a defense radar system developed by Indra. Designed verification and validation processes aligned with industry standards, improving traceability. Collaborated directly with clients to ensure system lifecycle consistency and technical alignment.',
    icon: '/assets/bertrandt.svg',
  },
];

export const myAbilities = [
  {
    id: 1,
    title: 'Título 1',
    desc: 'Descripción 1'
  },
  {
    id: 2,
    title: 'Título 2',
    desc: 'Descripción 2'
  },
  {
    id: 3,
    title: 'Título 3',
    desc: 'Descripción 3'
  },
  {
    id: 4,
    title: 'Título 4',
    desc: 'Descripción 4'
  },
]
