import { useMediaQuery } from "react-responsive";
import { STATES } from "./HeroRoutes.js"

export const ICONS = { 
  python:       {name: "Python",      src: "/assets/python.svg"},
  java:         {name: "Java",        src: "/assets/java.svg"},
  vivado:       {name: "Vivado",      src: "/assets/vivado.png"},
  cpp:          {name: "C++",         src: "/assets/c-plusplus.svg"},
  csharp:       {name: "C#",          src: "/assets/c-sharp.svg"},
  docker:       {name: "Docker",      src: "/assets/docker-icon.svg"},
  git:          {name: "Git",         src: "/assets/git-icon.svg"},
  matlab:       {name: "Matlab",      src: "/assets/matlab.jpg"},
  react:        {name: "React",       src: "/assets/react.svg"},
  mysql:        {name: "MySQL",       src: "/assets/mysql.svg"},
  agile:        {name: "Agile",       src: "/assets/agile.png"},
  partners:     {name: "Partners",    src: "/assets/partners.png"},
  proactivity:  {name: "Proactivity", src: "/assets/proactivity.png"},
  ubuntu:       {name: "Ubuntu",      src: "/assets/ubuntu.png"},
  zynq:         {name: "Zynq",        src: "/assets/zynq.jpg"},
  vite:         {name: "Vite",        src: "/assets/vitejs.svg"},
  tailwindcss:  {name: "TailwindCSS", src: "/assets/tailwindcss.png"},
  typescript:   {name: "TypeScript",  src: "/assets/typescript.png"},
};

export const DEFAULT_UI_LANG = "es";

export const CONTENT_BY_LANG = {
  es: {
    aboutMe: {
      description:
        "Soy Ingeniero de Software con formacion en Electronica, Robotica y Mecatronica, y me siento comodo moviendome entre software, sistemas y desarrollo de bajo nivel. Me adapto rapido a nuevas tecnologias y entornos, y disfruto aprendiendo a traves de proyectos exigentes. Esa forma de trabajar me ha permitido aportar valor desde fases tempranas y desenvolverme con soltura en equipos y contextos muy distintos.",
    },
    navLinks: [
      { id: 1, name: "Inicio", href: "#home" },
      { id: 2, name: "Sobre mi", href: "#about" },
      { id: 3, name: "Experiencia", href: "#work" },
      { id: 4, name: "Proyectos", href: "#projects" },
      { id: 5, name: "Contacto", href: "#contact" },
      { id: 6, name: "Juegos", href: "/games" },
    ],
    partnerReviews: [
      {
        id: 1,
        name: "Emily Johnson",
        position: "Directora de Marketing en GreenLeaf",
        img: "assets/review1.png",
        review:
          "Trabajar con Adrian fue una experiencia fantastica. Transformo nuestra web anticuada en una plataforma moderna y facil de usar. Su atencion al detalle y compromiso con la calidad son sobresalientes. Lo recomiendo totalmente para cualquier proyecto web.",
      },
    ],
    myProjects: [
      {
        title: "Diseno e implementacion de un sistema de adquisicion de datos para un sensor optico",
        desc: "Este trabajo aborda el diseno e implementacion de un sistema completo de adquisicion de datos para sensores opticos, pensado para configurar, capturar y almacenar informacion en tiempo real de forma fiable. La solucion se desarrollo con lenguaje de descripcion hardware para responder a las exigencias del entorno.\nAdemas, inclui una aplicacion de apoyo para facilitar el control del sistema y el procesamiento eficiente de los datos por parte del usuario. Con ello fue posible caracterizar el sensor y comprobar su comportamiento frente a los requisitos establecidos.\nEste Trabajo Fin de Grado se realizo dentro de un proyecto de investigacion en colaboracion con Alter Technology TUV Nord, orientado al desarrollo de una plataforma modular para la caracterizacion de sensores de imagen.",
        href: "/pdf/TFG_Lara_Guarino.pdf",
        checkLinkTxt: "Ver documento (Espanol)",
        extraInformation: "/pdf/TFG_Lara_Guarino_power_point.pdf",
        logo: "/assets/project-logo1.png",
        logoStyle: {
          backgroundColor: "#2A1816",
          border: "0.2px solid #36201D",
          boxShadow: "0px 0px 60px 0px #AA3C304D",
        },
        spotlight: "/assets/spotlight1.png",
        tags: [
          { id: 1, name: ICONS.vivado.name, path: ICONS.vivado.src },
          { id: 2, name: ICONS.csharp.name, path: ICONS.csharp.src },
          { id: 3, name: ICONS.git.name, path: ICONS.git.src },
          { id: 4, name: ICONS.matlab.name, path: ICONS.matlab.src },
          { id: 5, name: ICONS.zynq.name, path: ICONS.zynq.src },
        ],
      },
      {
        title: "Mi propio portfolio web",
        desc: "Este portfolio web es un proyecto personal que desarrolle con mucho cuidado y atencion al detalle. Esta construido como una aplicacion moderna e interactiva con React, TypeScript, Vite y Tailwind CSS, poniendo el foco en el rendimiento, una arquitectura clara y animaciones fluidas.\nMas alla de servir como escaparate de proyectos y habilidades, tambien refleja mi manera de entender el desarrollo frontend: unir criterio tecnico, diseno y experiencia de usuario en un mismo producto. Es un proyecto que disfrute de principio a fin y que representa bien como me gusta transformar ideas en soluciones solidas y bien rematadas.",
        href: "https://github.com/Miguellarag02/my-website-portfolio#",
        checkLinkTxt: "Ver repositorio",
        extraInformation: "/pdf/TFG_Lara_Guarino_power_point.pdf",
        logo: "/assets/project-logo1.png",
        logoStyle: {
          backgroundColor: "#13202F",
          border: "0.2px solid #17293E",
          boxShadow: "0px 0px 60px 0px #2F6DB54D",
        },
        spotlight: "/assets/spotlight2.png",
        tags: [
          { id: 1, name: ICONS.vite.name, path: ICONS.vite.src },
          { id: 2, name: ICONS.react.name, path: ICONS.react.src },
          { id: 3, name: ICONS.typescript.name, path: ICONS.typescript.src },
          { id: 4, name: ICONS.tailwindcss.name, path: ICONS.tailwindcss.src },
        ],
      },
    ],
    workExperiences: [
      {
        id: 1,
        name: "University of Seville",
        pos: "Investigador en el Departamento de Electronica",
        duration: "Sept 2023 - Abr 2024",
        title:
          "Disene e implemente un sistema de adquisicion para sensores opticos basado en FPGA, usando VHDL, C y PetaLinux para el control embebido. Tambien desarrolle la gestion de interrupciones DMA a nivel de kernel, lo que permitio capturar y procesar datos en tiempo real de forma fiable. Valide el sistema de extremo a extremo, reduciendo latencia y mejorando la consistencia de la senal.",
        icon: "/assets/university.png",
      },
      {
        id: 2,
        name: "Bertrandt Group",
        pos: "Ingeniero de Software en practicas",
        duration: "May 2024 - Oct 2024",
        title:
          "Mejore la plataforma de robotica autonoma Philobot con C++ y ROS, integrando modelos YOLO mediante TensorFlow y PyTorch para deteccion de objetos en tiempo real. Despliegue pipelines de inferencia que mejoraron el reconocimiento y redujeron la latencia de respuesta. Trabaje en un entorno Agile/Scrum, participando en la planificacion de sprints y en un desarrollo claramente iterativo.",
        icon: "/assets/bertrandt.svg",
      },
      {
        id: 3,
        name: "Bertrandt Group",
        pos: "Ingeniero de Software",
        duration: "Oct 2024 - Jul 2025",
        title:
          "Investigue interfaces humano-maquina (HMI) adaptativas para el programa europeo FCAS, dentro del proyecto EPIIC, mejorando la fiabilidad de integracion entre sistemas modulares. Tambien desarrolle APIs backend en Python y aplicaciones de escritorio en Java para proyectos de Airbus, optimizando el flujo de datos y reduciendo la sobrecarga de procesamiento. Participe ademas en workshops internacionales, reforzando la colaboracion entre equipos y disciplinas.",
        icon: "/assets/bertrandt.svg",
      },
      {
        id: 4,
        name: "Bertrandt Group",
        pos: "Ingeniero de Requisitos y Arquitectura de Software",
        duration: "Jul 2025 - Presente",
        title:
          "Defini la arquitectura de software y las especificaciones funcionales de un sistema radar de defensa desarrollado por Indra. Disene procesos de verificacion y validacion alineados con los estandares de la industria, mejorando la trazabilidad del desarrollo. Ademas, colabore directamente con cliente para mantener la consistencia tecnica a lo largo de todo el ciclo de vida del sistema.",
        icon: "/assets/bertrandt.svg",
      },
    ],
    myAbilities: [
      {
        id: 1,
        title: "Software",
        desc: "Mi base esta en el desarrollo de software con foco en estructura, claridad y calidad tecnica. Trabajo sobre todo con Python, Java, C++ y MATLAB, y me siento comodo construyendo soluciones apoyadas en arquitectura, APIs, bases de datos y modelado UML.\nNo me centro solo en que el codigo funcione: me importa que responda a una necesidad real, que sea mantenible y que encaje bien en el sistema. Por eso suelo trabajar guiado por requisitos, con especial atencion a la verificacion, la validacion y la trazabilidad.",
        icons: [ICONS.python, ICONS.java, ICONS.cpp, ICONS.matlab, ICONS.mysql],
      },
      {
        id: 2,
        title: "Herramientas",
        desc: "A lo largo de distintos proyectos he ido consolidando una forma de trabajo apoyada en herramientas de ingenieria y colaboracion. Uso Git en el dia a dia para control de versiones, Jira para organizar tareas y Wireshark cuando necesito bajar al detalle de una comunicacion o un protocolo.\nEn entornos mas exigentes tambien he trabajado con IBM DOORS para gestionar requisitos, versiones y trazabilidad, lo que me dio una vision mas completa de como se conectan diseno, implementacion y verificacion en proyectos industriales. A esto se suman herramientas que utilizo con frecuencia como Vivado, Linux/WSL y MATLAB.",
        icons: [ICONS.git, ICONS.docker, ICONS.ubuntu],
      },
      {
        id: 3,
        title: "Firmware",
        desc: "Mi interes por los sistemas de bajo nivel me llevo de forma natural al desarrollo firmware y embebido, trabajando con C y VHDL. He tenido experiencia practica con plataformas FPGA y SoC como Zynq, lo que me dio una base solida para entender la relacion entre hardware y software.\nEl trabajo con PetaLinux y kernel Linux me permitio ver el ciclo completo: desde el arranque y la integracion hardware hasta las capas de software de mas alto nivel. Esa experiencia reforzo mi interes por construir sistemas robustos, eficientes y cercanos al hardware.",
        icons: [ICONS.vivado, ICONS.csharp, ICONS.zynq],
      },
      {
        id: 4,
        title: "Habilidades blandas",
        desc: "En el trabajo valoro tanto la parte tecnica como la forma en la que se construyen las cosas en equipo. Me considero una persona curiosa, proactiva y facil de integrar, comoda compartiendo ideas, haciendo preguntas y explicando temas tecnicos con claridad.\nSuelo moverme bien en entornos Agile y en equipos multidisciplinares o internacionales. Me gusta aprender de forma continua, mantener el orden incluso cuando el ritmo aprieta y abordar los problemas paso a paso, sin perder de vista la colaboracion ni la calidad.",
        icons: [ICONS.partners, ICONS.proactivity, ICONS.agile],
      },
    ],
    myHobbies: [
      {
        id: 1,
        name: "Proyectos personales",
        desc: "Me gusta tener pequenos proyectos personales en marcha para explorar ideas, probar tecnologias y aprender construyendo desde cero. Son un espacio donde puedo experimentar con libertad, aplicar lo que voy aprendiendo y, muchas veces, descubrir enfoques o habilidades que despues traslado a mi trabajo profesional.",
        img: "https://i.pinimg.com/736x/64/25/d9/6425d9533e83434d24d667db3dbe79bf.jpg",
      },
      {
        id: 2,
        name: "Deporte y actividad fisica",
        desc: "Practico con regularidad actividades como senderismo, calistenia y running. Me ayudan a mantener disciplina, foco y equilibrio mental, y noto claramente como la actividad fisica mejora tanto mi bienestar como mi productividad y creatividad cuando vuelvo al trabajo.",
        img: "https://i.pinimg.com/736x/82/0f/a7/820fa7d61221505a529323b7d54e0ad4.jpg",
      },
      {
        id: 3,
        name: "Viajes y cultura",
        desc: "Me gusta viajar para descubrir lugares y culturas distintas, salir de mi zona de confort y ganar perspectiva. Conocer otras formas de vida amplia mi manera de ver el mundo y enriquece tanto mi crecimiento personal como mi desarrollo profesional.",
        img: "https://i.pinimg.com/736x/78/cc/5e/78cc5e7dcbff23c68229bdda00a999a8.jpg",
      },
    ],
    myGames: [
      { id: 1, name: "Catan", href: "/catan", background: "assets/catan_background.gif" },
      { id: 2, name: "Risk", href: "/risk", background: "assets/risk_background.gif" },
    ],
  },
  en: {
    aboutMe: {
      description:
        "Software Engineer with a background in Electronics, Robotics, and Mechatronics, comfortable working across software, systems, and low-level development. I adapt quickly to new technologies and environments, and I genuinely enjoy learning and growing through challenging projects. This mindset has helped me contribute effectively and become productive early in the teams and projects I have worked on.",
    },
    navLinks: [
      { id: 1, name: "Home", href: "#home" },
      { id: 2, name: "About", href: "#about" },
      { id: 3, name: "Work", href: "#work" },
      { id: 4, name: "Projects", href: "#projects" },
      { id: 5, name: "Contact", href: "#contact" },
      { id: 6, name: "Games", href: "/games" },
    ],
    partnerReviews: [
      {
        id: 1,
        name: "Emily Johnson",
        position: "Marketing Director at GreenLeaf",
        img: "assets/review1.png",
        review:
          "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
      },
    ],
    myProjects: [
      {
        title: "Design and implementation of a data acquisition system for an optical sensor",
        desc: "Given the complexity of handling real-time data presented by optical sensors, this work develops the design and implementation of a complete acquisition system that allows for the configuration, extraction, and storage of the information generated in a file. This system will be developed using Hardware Description Language.\nAdditionally, an application is incorporated to allow efficient control and processing of the data by the user. This enables the characterization of the sensor and ensures it meets the environmental requirements.\nFinally, it is important to mention that this Final Degree Project has been carried out within the context of a research project in collaboration with the company Alter Technology TUV Nord. The objective of this project is the development of a modular platform for the characterization of image sensors.",
        href: "/pdf/TFG_Lara_Guarino.pdf",
        checkLinkTxt: "Check document (Spanish)",
        extraInformation: "/pdf/TFG_Lara_Guarino_power_point.pdf",
        logo: "/assets/project-logo1.png",
        logoStyle: {
          backgroundColor: "#2A1816",
          border: "0.2px solid #36201D",
          boxShadow: "0px 0px 60px 0px #AA3C304D",
        },
        spotlight: "/assets/spotlight1.png",
        tags: [
          { id: 1, name: ICONS.vivado.name, path: ICONS.vivado.src },
          { id: 2, name: ICONS.csharp.name, path: ICONS.csharp.src },
          { id: 3, name: ICONS.git.name, path: ICONS.git.src },
          { id: 4, name: ICONS.matlab.name, path: ICONS.matlab.src },
          { id: 5, name: ICONS.zynq.name, path: ICONS.zynq.src },
        ],
      },
      {
        title: "My own website portfolio",
        desc: "This website is a personal portfolio project that I developed with great enthusiasm and attention to detail. It is built as a modern, interactive web application using React, TypeScript, Vite, and Tailwind CSS, with a strong focus on performance, clean architecture, and smooth animations.\nBeyond showcasing my projects and skills, this portfolio represents my personal approach to frontend development, combining technical rigor with thoughtful design and user experience. It is a project I was genuinely excited to design, build, and deploy, and it reflects how I enjoy turning ideas into polished, functional products.",
        href: "https://github.com/Miguellarag02/my-website-portfolio#",
        checkLinkTxt: "Check my repository",
        extraInformation: "/pdf/TFG_Lara_Guarino_power_point.pdf",
        logo: "/assets/project-logo1.png",
        logoStyle: {
          backgroundColor: "#13202F",
          border: "0.2px solid #17293E",
          boxShadow: "0px 0px 60px 0px #2F6DB54D",
        },
        spotlight: "/assets/spotlight2.png",
        tags: [
          { id: 1, name: ICONS.vite.name, path: ICONS.vite.src },
          { id: 2, name: ICONS.react.name, path: ICONS.react.src },
          { id: 3, name: ICONS.typescript.name, path: ICONS.typescript.src },
          { id: 4, name: ICONS.tailwindcss.name, path: ICONS.tailwindcss.src },
        ],
      },
    ],
    workExperiences: [
      {
        id: 1,
        name: "University of Seville",
        pos: "Researcher in Electronics Department",
        duration: "Sept 2023 - Apr 2024",
        title:
          "Designed and implemented an FPGA-based optical sensor acquisition system using VHDL, C, and Petalinux for embedded control. Developed DMA-driven interrupt handling at kernel level, enabling reliable real-time data capture and processing. Validated the system end-to-end, reducing latency and improving signal consistency.",
        icon: "/assets/university.png",
      },
      {
        id: 2,
        name: "Bertrandt Group",
        pos: "Software Engineer Intern",
        duration: "May 2024 - Oct 2024",
        title:
          "Enhanced the Philobot autonomous robotics platform using C++ and ROS, integrating YOLO models via TensorFlow and PyTorch for real-time object detection. Deployed inference pipelines that improved recognition performance and reduced response latency. Worked within an Agile/Scrum environment, contributing to sprint planning and iterative development.",
        icon: "/assets/bertrandt.svg",
      },
      {
        id: 3,
        name: "Bertrandt Group",
        pos: "Software Engineer",
        duration: "Oct 2024 - Jul 2025",
        title:
          "Research adaptive Human-Machine Interfaces (HMI) for the European FCAS program (EPIIC Project), improving integration reliability across multi-module systems. Built backend APIs in Python and desktop applications in Java for Airbus projects, optimizing data flow and reducing processing overhead. Actively participated in international workshops, enhancing cross-functional collaboration.",
        icon: "/assets/bertrandt.svg",
      },
      {
        id: 4,
        name: "Bertrandt Group",
        pos: "Software Requirements & Architecture Engineer",
        duration: "Jul 2025 - Present",
        title:
          "Defined software architecture and functional specifications for a defense radar system developed by Indra. Designed verification and validation processes aligned with industry standards, improving traceability. Collaborated directly with clients to ensure system lifecycle consistency and technical alignment.",
        icon: "/assets/bertrandt.svg",
      },
    ],
    myAbilities: [
      {
        id: 1,
        title: "Software",
        desc: "I have worked on software projects where I could combine hands-on development with a strong focus on structure and quality. I mainly use Python, Java, C++, and MATLAB, and I enjoy designing clean solutions supported by software architecture, APIs, databases, and UML models.\nWhat matters most to me is building software that makes sense beyond code, so I usually work in a requirements-driven way. This naturally leads to verification and validation, where I ensure the implementation truly matches the original requirements and is properly tested and traceable.",
        icons: [ICONS.python, ICONS.java, ICONS.cpp, ICONS.matlab, ICONS.mysql],
      },
      {
        id: 2,
        title: "Tools",
        desc: "Over time, I have become comfortable with a range of engineering tools that support development and collaboration. I use Git daily for version control, Jira to organize and track work, and Wireshark when I need to understand what is happening at protocol level.\nIn more structured environments, I have used IBM DOORS to manage requirements, versions, and traceability, which helped me understand how design, implementation, and verification fit together in real industrial projects. I also work regularly with Vivado, Linux/WSL, and MATLAB.",
        icons: [ICONS.git, ICONS.docker, ICONS.ubuntu],
      },
      {
        id: 3,
        title: "Firmware",
        desc: "My interest in low-level systems led me into firmware and embedded development, where I have worked with C and VHDL. I have had hands-on experience with FPGA and SoC platforms such as Zynq, which gave me a solid understanding of how hardware and software interact.\nWorking with PetaLinux and the Linux kernel helped me see the full picture, from boot and hardware integration to higher-level software components, and reinforced my interest in building reliable systems close to the hardware.",
        icons: [ICONS.vivado, ICONS.csharp, ICONS.zynq],
      },
      {
        id: 4,
        title: "Soft Skills",
        desc: "Beyond technical skills, I see myself as a curious and proactive person who enjoys working with others. I feel comfortable in Agile teams, sharing ideas, asking questions, and communicating technical topics clearly.\nI like learning continuously, solving problems step by step, and staying organized even in fast-paced environments. Adapting to multidisciplinary and international teams comes naturally to me, and I value collaboration as much as technical excellence.",
        icons: [ICONS.partners, ICONS.proactivity, ICONS.agile],
      },
    ],
    myHobbies: [
      {
        id: 1,
        name: "Personal Projects",
        desc: "I enjoy having small personal projects on the go, where I can explore new ideas, experiment with technologies, and learn by building things from scratch. These projects let me apply what I learn in a low-pressure environment and often lead to discoveries and skills I can bring back to my professional work.",
        img: "https://i.pinimg.com/736x/64/25/d9/6425d9533e83434d24d667db3dbe79bf.jpg",
      },
      {
        id: 2,
        name: "Sports & physical activity",
        desc: "I regularly practice activities such as hiking, calisthenics, and running, which help me stay disciplined, focused, and mentally balanced. Physical activity improves my well-being and also boosts productivity and creativity when I return to work.",
        img: "https://i.pinimg.com/736x/82/0f/a7/820fa7d61221505a529323b7d54e0ad4.jpg",
      },
      {
        id: 3,
        name: "Traveling & culture",
        desc: "I enjoy traveling as a way to discover new places and cultures, step out of my comfort zone, and gain new perspectives. Experiencing different ways of life broadens my horizons and enriches my personal and professional growth.",
        img: "https://i.pinimg.com/736x/78/cc/5e/78cc5e7dcbff23c68229bdda00a999a8.jpg",
      },
    ],
    myGames: [
      { id: 1, name: "Catan", href: "/catan", background: "assets/catan_background.gif" },
      { id: 2, name: "Risk", href: "/risk", background: "assets/risk_background.gif" },
    ],
  },
};

export const getContentByLang = (lang) => CONTENT_BY_LANG[lang] ?? CONTENT_BY_LANG[DEFAULT_UI_LANG];
const CONTENT = getContentByLang(DEFAULT_UI_LANG);

export const AboutMe = CONTENT.aboutMe;

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
    deskRot:          [0.39, 4.34, 0.0],
    laptopCameraPos:  isSmall ? [1, 0.27, 4.77]         : isMobile ? [1, 1.03, 4.75]          : isTablet ? [1.9, 0.96, 5.5]         : isUltraWide ? [2.37, 1.10, 5.80]      : [1.97, 1.02, 5.44],
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

export const navLinks = CONTENT.navLinks;
export const partnerReviews = CONTENT.partnerReviews;
export const myProjects = CONTENT.myProjects;
export const workExperiences = CONTENT.workExperiences;
export const myAbilities = CONTENT.myAbilities;
export const myHobbies = CONTENT.myHobbies;
export const myGames = CONTENT.myGames;

export const UI_TEXTS_BY_LANG = {
  es: {
    common: {
      close: "Cerrar",
      unknown: "Desconocido",
    },
    hero: {
      greeting: "Hola, soy Miguel Angel",
      role: "Ingeniero de Software",
      cta: "Trabajemos juntos",
    },
    about: {
      hobbiesTitle: "Fuera del trabajo",
      aboutTitle: "Sobre mi",
      abilitiesTitle: "Como puedo aportar",
      profileAlt: "Foto de perfil",
    },
    work: {
      title: "Mi experiencia laboral",
      logoAlt: "logo",
    },
    projects: {
      title: "Mis proyectos",
      logoAlt: "logo",
      linkArrowAlt: "flecha",
      previousAlt: "anterior",
      nextAlt: "siguiente",
    },
    navbar: {
      backendLabel: "Backend",
      toggleMenuAria: "Alternar menu",
    },
    contact: {
      heading: "Hablemos",
      subheading: "Si crees que puedo aportar a tu equipo o proyecto, hablemos.",
      fullName: "Nombre completo",
      email: "Correo",
      message: "Tu mensaje",
      namePlaceholder: "Miguel Angel Lara",
      emailPlaceholder: "miguelangellarag@gmail.com",
      messagePlaceholder: "Hola, quiero ofrecerte un trabajo...",
      sendMessage: "Enviar mensaje",
      sending: "Enviando...",
      messageSent: "Tu mensaje se ha enviado.",
      somethingWrong: "Algo salio mal.",
    },
    partners: {
      title: "Opiniones de mis companeros",
      starAlt: "estrella",
    },
    footer: {
      terms: "Terminos y condiciones",
      privacy: "Politica de privacidad",
      rights: "@ 2025 Miguel Angel. Todos los derechos reservados.",
    },
    games: {
      statusLabel: "Nuevo espacio en progreso",
      heading: "Juegos",
      description:
        "En esta seccion puedes encontrar los juegos que he desarrollado como hobby, entre ellos Catan o Risk.",
      welcomePrefix: "Bienvenido,",
      victories: "Victorias: 0",
      logout: "Cerrar sesion",
      memberLogin: "Acceso de usuario",
      username: "Usuario",
      password: "Contrasena",
      login: "Iniciar sesion",
      loggingIn: "Iniciando sesion...",
      play: "Jugar",
      spectate: "Espectador",
      backToHome: "Volver al inicio",
      loginSuccess: "Inicio de sesion correcto.",
      loginFailed: "Fallo al iniciar sesion. Revisa tus credenciales.",
      networkTryAgain: "Error de red. Intentalo de nuevo.",
      cannotAddPlayer: "No se pudo anadir al jugador a la partida.",
      addPlayerNetworkError: "Error de red al anadir jugador.",
      loginRequired: "Debes iniciar sesion para jugar.",
      logoutRequired: "Debes cerrar sesion para entrar como espectador.",
    },
    risk: {
      exit: "Salir",
      inProgress: "En progreso...",
    },
    catan: {
      exitGame: "Salir de la partida",
      cameraToggleAlt: "Cambiar vista de camara",
      drawerAria: "Barra de herramientas",
      bankTradeTitle: "Selecciona un recurso para intercambiar",
      buy: "Comprar",
      openSidebarAria: "Abrir barra lateral",
      closeSidebarAria: "Cerrar barra lateral",
      play: "Jugar",
      throwDice: "Tirar 🎲​🎲​",
      thief: "Ladron 🥷💰",
      next: "Siguiente ➡️",
      useCard: "Utilizar",
      cancel: "Cancelar",
      send: "Enviar",
      thiefPlayerTitle: "Selecciona al jugador al que quieres robar recursos",
      thiefStealing: "Robando...",
      thiefStolen: "Robado!",
      thiefAction: "Robar",
      accept: "Aceptar",
      inventorTitle: "Selecciona los recursos que deseas tomar",
      clear: "Limpiar",
      monopolyTitle: "Selecciona el recurso que deseas robar de todos los jugadores",
      victoryPrefix: "Victoria para el jugador",
      buildRoad: "Carretera",
      buildTown: "Poblado",
      buildCity: "Ciudad",
      buildRandomCard: "Gamblear",
    },
    pdf: {
      noPdf: "No hay un PDF disponible para este proyecto.",
      cannotShowPdf: "No se pudo mostrar el PDF.",
      openInTab: "Abrir en una pestana",
    },
  },
  en: {
    common: {
      close: "Close",
      unknown: "Unknown",
    },
    hero: {
      greeting: "Hi, I am Miguel Angel",
      role: "Software Engineer",
      cta: "Let's work together",
    },
    about: {
      hobbiesTitle: "My hobbies",
      aboutTitle: "About me",
      abilitiesTitle: "My abilities",
      profileAlt: "Profile photo",
    },
    work: {
      title: "My work experience",
      logoAlt: "logo",
    },
    projects: {
      title: "My projects",
      logoAlt: "logo",
      linkArrowAlt: "arrow",
      previousAlt: "previous",
      nextAlt: "next",
    },
    navbar: {
      backendLabel: "Backend",
      toggleMenuAria: "Toggle menu",
    },
    contact: {
      heading: "Let's talk",
      subheading: "A quick note about the value I can bring to the team",
      fullName: "Full name",
      email: "Email",
      message: "Your message",
      namePlaceholder: "Miguel Angel Lara",
      emailPlaceholder: "miguelangellarag@gmail.com",
      messagePlaceholder: "Hi, I would like to offer you a job...",
      sendMessage: "Send message",
      sending: "Sending...",
      messageSent: "Your message has been sent.",
      somethingWrong: "Something went wrong.",
    },
    partners: {
      title: "Hear from my partners",
      starAlt: "star",
    },
    footer: {
      terms: "Terms & conditions",
      privacy: "Privacy policy",
      rights: "@ 2025 Miguel Angel. All rights reserved.",
    },
    games: {
      statusLabel: "New space in progress",
      heading: "Games",
      description:
        "In this section you can find the games I have developed as a hobby, including board games like Catan and Risk.",
      welcomePrefix: "Welcome,",
      victories: "Victories: 0",
      logout: "Logout",
      memberLogin: "Member login",
      username: "Username",
      password: "Password",
      login: "Login",
      loggingIn: "Logging in...",
      play: "Play",
      spectate: "Spectate",
      backToHome: "Back to home",
      loginSuccess: "Login successful.",
      loginFailed: "Login failed. Check credentials.",
      networkTryAgain: "Network error. Try again.",
      cannotAddPlayer: "Could not add player to the game.",
      addPlayerNetworkError: "Network error while adding player.",
      loginRequired: "You must log in to play.",
      logoutRequired: "You must log out to enter as spectator.",
    },
    risk: {
      exit: "Exit",
      inProgress: "In progress...",
    },
    catan: {
      exitGame: "Exit game",
      cameraToggleAlt: "Toggle camera view",
      drawerAria: "Tool panel",
      bankTradeTitle: "Select a resource to exchange",
      buy: "Buy",
      openSidebarAria: "Open sidebar",
      closeSidebarAria: "Close sidebar",
      play: "Play",
      throwDice: "Throw 🎲​🎲​",
      thief: "Thief 🥷💰",
      next: "Next ➡️",
      useCard: "Use",
      cancel: "Cancel",
      send: "Send",
      thiefPlayerTitle: "Select the player you want to steal from",
      thiefStealing: "Stealing...",
      thiefStolen: "Stolen!",
      thiefAction: "Steal",
      accept: "Accept",
      inventorTitle: "Select the resources you want to take",
      clear: "Clear",
      monopolyTitle: "Select the resource you want to steal from all players",
      victoryPrefix: "Victory for player",
      buildRoad: "Road",
      buildTown: "Settlement",
      buildCity: "City",
      buildRandomCard: "Buy card",
    },
    pdf: {
      noPdf: "No PDF available for this project.",
      cannotShowPdf: "Could not display the PDF.",
      openInTab: "Open in a new tab",
    },
  },
};

export const getUITextsByLang = (lang) => UI_TEXTS_BY_LANG[lang] ?? UI_TEXTS_BY_LANG[DEFAULT_UI_LANG];
export const UI_TEXTS = getUITextsByLang(DEFAULT_UI_LANG);
