import { useMediaQuery } from "react-responsive";
import { STATES } from "./HeroRoutes.js"

export function useResponsiveFlags() {
  const isSmall = useMediaQuery({ maxWidth: 480 });
  const isMobile = useMediaQuery({ minWidth: 481, maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const isUltraWide = useMediaQuery({ minWidth: 1920 });

  return { isSmall, isMobile, isTablet, isUltraWide };
}

export const calculateSizes = (isSmall, isMobile, isTablet, isUltraWide) => {
  return {
    deskScale: isSmall ? 0.60 : isMobile ? 0.80 : isUltraWide ? 1.4 : 1.20,
    deskPos: isSmall ? [-0.3, -2.1, 3.9] : isMobile ? [-0.2, -1.1, 3.9] : isUltraWide ? [0.0, -3, 3.9] : [0.0, -2.5, 3.9],
    laptopCameraPos:  isSmall ? [-0.25, -0.30, 4.97]  : isMobile ? [0.76, 0.92, 4.88]     : isTablet ? [1.76, 0.92, 5.58]    : isUltraWide ? [2.37, 1.10, 5.80]    : [1.97, 1.02, 5.44],
    laptopCameraRot:  isSmall ? [0.155, -0.965, -0.195] : isMobile ? [0.155, -0.965, -0.195] : isTablet ? [0.155, -0.965, -0.195] : isUltraWide ? [0.155, -0.965, -0.195] : [0.155, -0.965, -0.195],
    monitorCameraPos: isSmall ? [-0.25, -0.30, 4.97]  : isMobile ? [0.4, 1.10, 5.223]     : isTablet ? [1.15, 0.90, 6.00]    : isUltraWide ? [2.10, 1.27, 6.00]    : [-1.16, 0.96, 6.08],
    monitorCameraRot: isSmall ? [-0.10, -0.92, -0.40] : isMobile ? [-0.10, -0.92, -0.40]  : isTablet ? [-0.10, -0.92, -0.40] : isUltraWide ? [-0.09, -0.92, -0.40] : [0.39, -0.38, 0.00]
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
    title: 'Podcastr - AI Podcast Platform',
    desc: 'Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.',
    subdesc:
      'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.',
    href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
    texture: '/textures/project/project1.mp4',
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
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
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
      'Enhanced the Philobot autonomous robotics platform using C++ and ROS, integrating YOLO models via TensorFlow and PyTorch for real-time object detection. Deployed inference pipelines that improved recognition performance and reduced response latency by approximately 40%. Worked within an Agile/Scrum environment, contributing to sprint planning and iterative development.',
    icon: '/assets/bertrandt.svg',
  },
  {
    id: 3,
    name: 'Bertrandt Group',
    pos: 'Software Engineer',
    duration: 'Oct 2024 - Jul 2025',
    title:
      'Developed adaptive Human-Machine Interfaces (HMI) for the European FCAS program (EPIIC Project), improving integration reliability across multi-module systems. Built backend APIs in Python and desktop applications in Java for Airbus projects, optimizing data flow and reducing processing overhead by approximately 30%. Actively participated in international workshops, enhancing cross-functional collaboration.',
    icon: '/assets/bertrandt.svg',
  },
  {
    id: 4,
    name: 'Bertrandt Group',
    pos: 'Software Requirements & Architecture Engineer',
    duration: 'Jul 2025 - Present',
    title:
      'Defined software architecture and functional specifications for a defense radar system developed by Indra. Designed verification and validation processes aligned with industry standards, improving traceability and compliance accuracy by 25%. Collaborated directly with clients to ensure system lifecycle consistency and technical alignment.',
    icon: '/assets/bertrandt.svg',
  },
];
