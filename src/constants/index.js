export const STATES = {
        IDLE: 'IDLE',
        LAPTOP: 'LAPTOP',
        MONITOR: 'MONITOR',
    }

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

export const calculateSizes = (isSmall, isMobile, isTablet, isUltraWide) => {
  return {
    deskScale: isSmall ? 0.60 : isMobile ? 0.80 : isUltraWide ? 1.4 : 1.20,
    deskPosition: isSmall ? [-0.3, -2.1, 3.9] : isMobile ? [-0.2, -1.1, 3.9] : isUltraWide ? [0.0, -3, 3.9] : [0.0, -2.5, 3.9],
  };
};

export const calculateCameraPositions = (stateSections) => {
  return {
    pos: stateSections == STATES.LAPTOP ? [1.8, 1.2, 5.6] : [0, 0, 20],
    rot: stateSections == STATES.LAPTOP ? [-0.1, -0.95, -0.39] : [0, 0, 0]
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  }
];
