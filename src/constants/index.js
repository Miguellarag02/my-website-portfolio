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
  arduino:      {name: "Arduino",     src: "/assets/arduino.svg"},
};

export const DEFAULT_UI_LANG = "en";

export const PROFILE_LINKS = {
  cv: "/pdf/Miguel_Angel_Lara_Embedded_Software_CV_Strategic.pdf",
  email: "mailto:miguelangellarag@gmail.com",
  github: "https://github.com/Miguellarag02",
  linkedin: "https://www.linkedin.com/in/miguellara02",
};

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
        desc: "Este proyecto consistio en el diseno e implementacion de un sistema completo de adquisicion de datos para un sensor optico, capaz de configurar, capturar y almacenar informacion en tiempo real con un alto nivel de fiabilidad. La solucion se desarrollo sobre FPGA con VHDL y se completo con software de apoyo para el control del sistema y el procesado eficiente de los datos.\nEl trabajo no se limito a la implementacion: tambien incluyo la integracion de hardware y software, la puesta a punto del flujo de adquisicion y la validacion del comportamiento del sensor frente a los requisitos definidos. Esto permitio caracterizar el sistema de forma rigurosa y reducir incertidumbres en un entorno tecnico especialmente sensible.\nSe trata de un proyecto con claro enfoque de ingenieria aplicada, realizado en colaboracion con Alter Technology TUV Nord dentro de una linea de investigacion orientada al desarrollo de una plataforma modular para caracterizacion de sensores de imagen.",
        href: "/pdf/TFG_Lara_Guarino.pdf",
        checkLinkTxt: "Ver documento (Espanol)",
        extraInformation: "/pdf/TFG_Lara_Guarino_power_point.pdf",
        video: "/video/TFG_Miguellara02.mp4",
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
        desc: "Este portfolio web es un proyecto personal concebido no solo como escaparate, sino como una demostracion practica de como entiendo el desarrollo de software: combinar criterio tecnico, diseno intencional y una experiencia de usuario cuidada. Esta construido con React, TypeScript, Vite y Tailwind CSS, con especial atencion al rendimiento, la claridad estructural y la fluidez de las interacciones.\nLa aplicacion incorpora escenas 3D, transiciones, contenido bilingue y una navegacion no convencional basada en una mesa interactiva, lo que me permitio trabajar tanto la parte visual como la organizacion del codigo, la mantenibilidad y la coherencia global del producto.\nEs un proyecto que representa bien mi perfil porque une desarrollo frontend moderno, gusto por el detalle y capacidad para convertir una idea personal en una solucion tecnica solida, diferencial y bien rematada.",
        href: "https://github.com/Miguellarag02/my-website-portfolio#",
        checkLinkTxt: "Ver repositorio",
        extraInformation: "/pdf/TFG_Lara_Guarino_power_point.pdf",
        video: "/video/my_own_website.mp4",
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
      {
        title: "Seguidor solar con Arduino - Primer premio en Tecnoingenia 2019",
        desc: "Este proyecto fue presentado en Tecnoingenia 2019, donde obtuvo el primer premio de la cuarta categoria. Consistio en el diseno y construccion de un mini panel solar capaz de orientarse automaticamente hacia la posicion con mayor aprovechamiento de luz.\nEl sistema integraba cuatro sensores fotosensibles distribuidos alrededor del panel, dos servomotores y una placa Arduino como unidad de control. A partir de la diferencia de luz detectada por los sensores, el Arduino calculaba la orientacion mas favorable y accionaba los servos para ajustar la inclinacion y el giro del panel.\nFue uno de mis primeros proyectos completos de electronica y control, y me permitio trabajar de forma practica la lectura de sensores, el control de actuadores, la integracion hardware-software y la construccion de un prototipo funcional orientado a mejorar la eficiencia energetica.",
        href: "https://www.uco.es/servicios/actualidad/vida-academica/item/133727-entregados-los-premios-del-iii-concurso-de-ideas-tecno-ingenia-2019",
        checkLinkTxt: "Mas información",
        extraInformation: "",
        video: "/video/tecnoingenia.mp4",
        logo: "/assets/project-logo1.png",
        logoStyle: {
          backgroundColor: "#182A1F",
          border: "0.2px solid #1E3A2A",
          boxShadow: "0px 0px 60px 0px #37A56B4D",
        },
        spotlight: "/assets/spotlight3.png",
        tags: [
          { id: 1, name: ICONS.arduino.name, path: ICONS.arduino.src }
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
          "Disene e implemente un sistema de adquisicion de datos para sensores opticos basado en FPGA, combinando VHDL, C y PetaLinux para cubrir desde el control embebido hasta la captura fiable de informacion en tiempo real. Desarrolle tambien la gestion de interrupciones DMA a nivel de kernel, mejorando la eficiencia del flujo de datos, la capacidad de respuesta del sistema y la estabilidad del comportamiento en operacion.\nEl trabajo incluyo integracion hardware-software, ajuste del pipeline de adquisicion, caracterizacion del sensor y validacion de extremo a extremo frente a requisitos tecnicos. Esta etapa me dio una base muy solida en sistemas embebidos, software cercano al hardware y entornos donde el rigor tecnico es imprescindible para obtener resultados fiables.",
        icon: "/assets/university.png",
      },
      {
        id: 2,
        name: "Bertrandt Group",
        pos: "Ingeniero de Software en practicas",
        duration: "May 2024 - Oct 2024",
        title:
          "Trabaje en la mejora de la plataforma de robotica autonoma Philobot con C++ y ROS, integrando modelos YOLO mediante TensorFlow y PyTorch para deteccion de objetos en tiempo real. Despliegue pipelines de inferencia orientados a mejorar el reconocimiento, reducir la latencia de respuesta y mantener la coherencia entre software, percepcion y comportamiento del sistema.\nEsta etapa me permitio consolidar una forma de trabajo muy practica: iteracion rapida, analisis tecnico, resolucion de problemas reales y colaboracion con otros perfiles dentro de un entorno Agile/Scrum. Fue una experiencia muy util para reforzar tanto la base de desarrollo como la orientacion a producto y rendimiento.",
        icon: "/assets/bertrandt.svg",
      },
      {
        id: 3,
        name: "Bertrandt Group",
        pos: "Ingeniero de Software",
        duration: "Oct 2024 - Jul 2025",
        title:
          "Investigue interfaces humano-maquina adaptativas para el programa europeo FCAS dentro del proyecto EPIIC, contribuyendo a mejorar la fiabilidad de integracion entre sistemas modulares en un contexto internacional y tecnicamente muy exigente. Esta experiencia me acerco a un entorno de ingenieria donde interoperabilidad, consistencia funcional y coordinacion entre organizaciones tienen un peso real en el resultado final.\nDe forma paralela, desarrolle APIs backend en Python y aplicaciones de escritorio en Java para proyectos de Airbus, optimizando flujos de datos, reduciendo sobrecarga de procesamiento y mejorando la integracion entre componentes. Tambien participe en workshops internacionales, reforzando mi capacidad para trabajar con equipos multidisciplinares y moverme con soltura en entornos aeroespaciales y de alta criticidad.",
        icon: "/assets/bertrandt.svg",
      },
      {
        id: 4,
        name: "Bertrandt Group",
        pos: "Ingeniero de Requisitos y Arquitectura de Software",
        duration: "Jul 2025 - Presente",
        title:
          "Defino la arquitectura de software y las especificaciones funcionales de un sistema radar de defensa desarrollado por Indra, dentro de un entorno donde la criticidad del producto exige rigor, trazabilidad y consistencia tecnica en todo el ciclo de vida. Mi trabajo combina vision de sistema con detalle de ingenieria, asegurando que requisitos, arquitectura, interfaces y decisiones de diseno permanezcan alineados.\nTambien diseno procesos de verificacion y validacion acordes a los estandares del sector y colaboro directamente con cliente para mantener coherencia entre necesidades operativas, implementacion y evidencia de cumplimiento. Es una experiencia especialmente valiosa por su cercania a software de mision critica y por el nivel de exigencia que impone el sector defensa en terminos de calidad, claridad y responsabilidad tecnica.",
        icon: "/assets/bertrandt.svg",
      },
    ],
    myAbilities: [
      {
        id: 1,
        title: "Software",
        desc: "Mi base esta en el desarrollo de software con foco en estructura, calidad tecnica y sentido de sistema. Trabajo sobre todo con Python, Java, C++ y MATLAB, y me siento comodo construyendo soluciones apoyadas en arquitectura, APIs, bases de datos, modelado UML y criterios claros de mantenibilidad.\nNo entiendo el software como codigo aislado, sino como parte de un sistema que debe responder a requisitos reales y sostenerse en el tiempo. Por eso presto mucha atencion a la claridad del diseno, la trazabilidad, la verificacion y la validacion, especialmente en entornos donde el margen de error es bajo.\nBuena parte de mi experiencia ha estado ligada a defensa y aeroespacio, sectores en los que la robustez, la consistencia tecnica y la disciplina de ingenieria importan tanto como la implementacion en si.",
        icons: [ICONS.python, ICONS.java, ICONS.cpp, ICONS.matlab, ICONS.mysql],
      },
      {
        id: 2,
        title: "Herramientas",
        desc: "A lo largo de distintos proyectos he consolidado una forma de trabajo apoyada en herramientas de ingenieria, colaboracion y control tecnico. Uso Git en el dia a dia para versionado, Jira para organizacion y seguimiento, y VS Code como entorno habitual de desarrollo.\nTambien he trabajado con IBM DOORS para gestionar requisitos, cambios y trazabilidad, algo especialmente relevante en entornos de defensa y aeroespacio donde cada decision necesita justificacion tecnica y evidencia de cumplimiento. Esta forma de trabajar me dio una vision mas completa de como conectar necesidades de sistema, implementacion y validacion.\nMe manejo con soltura en sistemas Linux y Windows, incluyendo entornos WSL, y utilizo herramientas como MATLAB y Wireshark, cuando son requeridas, para tareas de analisis, desarrollo, integracion y validacion tecnica.",
        icons: [ICONS.git, ICONS.docker, ICONS.ubuntu],
      },
      {
        id: 3,
        title: "Firmware",
        desc: "Mi interes por los sistemas de bajo nivel me llevo de forma natural al desarrollo firmware y embebido, trabajando con C y VHDL sobre plataformas FPGA y SoC como Zynq. Esa base me permitio entender con profundidad la relacion entre hardware y software, y desenvolverme con soltura en sistemas donde rendimiento, temporizacion y fiabilidad son factores reales de diseno.\nEl trabajo con PetaLinux y kernel Linux me dio visibilidad del ciclo completo: arranque, integracion hardware, gestion de datos, capas de software y validacion del comportamiento final. Esto refuerza un perfil que no se queda solo en la aplicacion, sino que entiende bien lo que ocurre por debajo.\nMe atraen especialmente los entornos donde esa cercania al hardware se traduce en sistemas tecnicamente exigentes y con impacto directo en la fiabilidad global del producto.",
        icons: [ICONS.vivado, ICONS.csharp, ICONS.zynq],
      },
      {
        id: 4,
        title: "Habilidades blandas",
        desc: "En el trabajo valoro tanto la parte tecnica como la forma en la que se construyen las cosas en equipo. Me considero una persona curiosa, proactiva y facil de integrar, comoda compartiendo ideas, haciendo preguntas y explicando temas tecnicos con claridad cuando el contexto lo requiere.\nHe trabajado en entornos internacionales y multidisciplinares, incluyendo colaboraciones vinculadas al programa FCAS, donde coordinarse bien entre perfiles, disciplinas y organizaciones resulta tan importante como acertar en la solucion tecnica. Esa experiencia me ayudo a desarrollar criterio, capacidad de adaptacion y una comunicacion profesional clara.\nMe siento comodo en contextos exigentes, con interlocucion diversa y alto nivel de responsabilidad, manteniendo orden, foco y compromiso con la calidad incluso cuando el proyecto aprieta.",
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
        desc: "This project focused on the design and implementation of a complete data acquisition system for an optical sensor, capable of configuring, capturing, and storing real-time information with a strong emphasis on reliability. The solution was built around FPGA development with VHDL and complemented with supporting software for system control and efficient data processing.\nThe work went beyond implementation alone: it also involved hardware-software integration, tuning of the acquisition flow, and validation of the sensor behavior against defined requirements. This made it possible to characterize the system rigorously and reduce uncertainty in a technically sensitive environment.\nIt was developed as a research-oriented engineering project in collaboration with Alter Technology TUV Nord, within an initiative focused on building a modular platform for image sensor characterization.",
        href: "/pdf/TFG_Lara_Guarino.pdf",
        checkLinkTxt: "Check document (Spanish)",
        extraInformation: "/pdf/TFG_Lara_Guarino_power_point.pdf",
        video: "/video/TFG_Miguellara02.mp4",
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
        desc: "This website portfolio is a personal project designed not just as a showcase, but as a practical demonstration of how I approach software development: combining technical rigor, intentional design, and a carefully built user experience. It is developed with React, TypeScript, Vite, and Tailwind CSS, with strong attention to performance, clean structure, and fluid interaction design.\nThe application includes 3D scenes, transitions, bilingual content, and a non-traditional navigation model based on an interactive desk, which allowed me to work on both visual impact and maintainable code architecture at the same time.\nIt represents my profile well because it brings together modern frontend engineering, attention to detail, and the ability to turn a personal concept into a polished, technically solid product.",
        href: "https://github.com/Miguellarag02/my-website-portfolio#",
        checkLinkTxt: "Check my repository",
        video: "/video/my_own_website.mp4",
        extraInformation: "/pdf/TFG_Lara_Guarino_power_point.pdf",
        logo: "/assets/project-logo2.png",
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
      {
        title: "Arduino solar tracker - First prize at Tecnoingenia 2019",
        desc: "This project was presented at Tecnoingenia 2019, where it won first prize in the fourth category. It consisted of designing and building a small solar panel able to automatically orient itself toward the position where it could capture the greatest amount of light.\nThe system combined four photosensitive sensors placed around the panel, two servomotors, and an Arduino board as the control unit. Based on the light differences detected by the sensors, the Arduino determined the most favorable orientation and drove the servos to adjust the panel tilt and rotation.\nIt was one of my first complete electronics and control projects, and it gave me practical experience with sensor reading, actuator control, hardware-software integration, and the development of a functional prototype focused on improving energy efficiency.",
        href: "https://www.uco.es/servicios/actualidad/vida-academica/item/133727-entregados-los-premios-del-iii-concurso-de-ideas-tecno-ingenia-2019",
        checkLinkTxt: "More information",
        video: "/video/tecnoingenia.mp4",
        extraInformation: "",
        logo: "/assets/project-logo1.png",
        logoStyle: {
          backgroundColor: "#182A1F",
          border: "0.2px solid #1E3A2A",
          boxShadow: "0px 0px 60px 0px #37A56B4D",
        },
        spotlight: "/assets/spotlight3.png",
        tags: [
          { id: 1, name: ICONS.arduino.name, path: ICONS.arduino.src }
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
          "Designed and implemented an FPGA-based data acquisition system for optical sensors, combining VHDL, C, and PetaLinux to cover everything from embedded control to reliable real-time capture. I also developed DMA-driven interrupt handling at kernel level, improving data-flow efficiency, responsiveness, and operational stability.\nThe work included hardware-software integration, acquisition-pipeline tuning, sensor characterization, and end-to-end validation against technical requirements. This stage gave me a strong foundation in embedded systems, low-level software, and engineering environments where rigor is essential to achieve reliable results.",
        icon: "/assets/university.png",
      },
      {
        id: 2,
        name: "Bertrandt Group",
        pos: "Software Engineer Intern",
        duration: "May 2024 - Oct 2024",
        title:
          "Worked on improving the Philobot autonomous robotics platform with C++ and ROS, integrating YOLO models through TensorFlow and PyTorch for real-time object detection. I deployed inference pipelines aimed at improving recognition performance, reducing response latency, and keeping software behavior aligned with operational needs.\nThis stage helped me consolidate a practical engineering mindset centered on iteration, technical analysis, real problem solving, and collaboration with other profiles inside an Agile/Scrum environment. It was a valuable step in strengthening both my development base and my performance-oriented approach.",
        icon: "/assets/bertrandt.svg",
      },
      {
        id: 3,
        name: "Bertrandt Group",
        pos: "Software Engineer",
        duration: "Oct 2024 - Jul 2025",
        title:
          "Researched adaptive Human-Machine Interfaces for the European FCAS program within the EPIIC project, contributing to improved integration reliability across modular systems in an international and technically demanding environment. This experience exposed me to an engineering context where interoperability, functional consistency, and coordination across organizations have a direct impact on outcomes.\nIn parallel, I built backend APIs in Python and desktop applications in Java for Airbus-related projects, optimizing data flows, reducing processing overhead, and improving integration between components. I also took part in international workshops, strengthening my ability to operate effectively in multidisciplinary aerospace and critical-system environments.",
        icon: "/assets/bertrandt.svg",
      },
      {
        id: 4,
        name: "Bertrandt Group",
        pos: "Software Requirements & Architecture Engineer",
        duration: "Jul 2025 - Present",
        title:
          "Define software architecture and functional specifications for a defense radar system developed by Indra, in an environment where product criticality demands rigor, traceability, and technical consistency throughout the full lifecycle. My role combines system-level thinking with engineering detail, ensuring that requirements, architecture, interfaces, and design decisions remain aligned.\nI also design verification and validation processes aligned with sector standards and collaborate directly with the client to maintain consistency between operational needs, implementation, and compliance evidence. It is especially valuable experience because of its proximity to mission-critical software and the level of discipline required in the defense sector.",
        icon: "/assets/bertrandt.svg",
      },
    ],
    myAbilities: [
      {
        id: 1,
        title: "Software",
        desc: "My foundation is software development with a strong focus on structure, technical quality, and system-level thinking. I mainly work with Python, Java, C++, and MATLAB, and I am comfortable building solutions supported by software architecture, APIs, databases, UML modeling, and clear maintainability criteria.\nI do not see software as isolated code, but as part of a wider system that must respond to real requirements and remain sustainable over time. That is why I pay close attention to design clarity, traceability, verification, and validation, especially in environments where the margin for error is low.\nA significant part of my experience has been connected to defense and aerospace, where robustness, technical consistency, and engineering discipline matter just as much as implementation itself.",
        icons: [ICONS.python, ICONS.java, ICONS.cpp, ICONS.matlab, ICONS.mysql],
      },
      {
        id: 2,
        title: "Tools",
        desc: "Over time, I have built a working style supported by engineering, collaboration, and technical-control tools. I use Git daily for version control, Jira for planning and follow-up, and VS Code as my usual development environment.\nI have also worked with IBM DOORS to manage requirements, changes, and traceability, which is especially relevant in defense and aerospace environments where decisions require technical justification and compliance evidence. This gave me a broader view of how system needs, implementation, and validation are connected.\nI am comfortable working across Linux and Windows systems, including WSL environments, and I use tools such as MATLAB and Wireshark, when they are required, for analysis, development, integration, and technical validation tasks.",
        icons: [ICONS.git, ICONS.docker, ICONS.ubuntu],
      },
      {
        id: 3,
        title: "Firmware",
        desc: "My interest in low-level systems naturally led me into firmware and embedded development, working with C and VHDL on FPGA and SoC platforms such as Zynq. That background gave me a solid understanding of how hardware and software interact in systems where timing, performance, and reliability are real design constraints.\nWorking with PetaLinux and the Linux kernel gave me visibility across the full lifecycle: boot, hardware integration, data handling, software layers, and validation of final behavior. It reinforced a profile that does not stop at the application layer, but understands what is happening underneath.\nI am especially drawn to environments where proximity to hardware directly affects the overall reliability and quality of the final product.",
        icons: [ICONS.vivado, ICONS.csharp, ICONS.zynq],
      },
      {
        id: 4,
        title: "Soft Skills",
        desc: "Beyond technical skills, I place strong value on how work gets built within a team. I see myself as a curious, proactive person who integrates easily, shares ideas openly, asks the right questions, and explains technical topics clearly when needed.\nI have worked in multidisciplinary and international environments, including collaborations linked to the FCAS program, where coordination across teams, disciplines, and organizations matters as much as the solution itself. That experience helped me strengthen judgment, adaptability, and clear professional communication.\nI am comfortable in demanding contexts with diverse stakeholders and high levels of responsibility, maintaining structure, focus, and commitment to quality even under pressure.",
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
      downloadCv: "Descargar CV",
      linkedin: "LinkedIn",
      github: "GitHub",
      deskHintBadge: "Consejo",
      deskHint: "Para acceder a las diferentes secciones, puedes hacer click sobre los elementos de la mesa.",
      closeDeskHintAria: "Cerrar aviso sobre la mesa interactiva",
      hoverWork: "Experiencia",
      hoverAbout: "Sobre mi",
      hoverProjects: "Proyectos",
      hoverGames: "Juegos",
    },
    about: {
      hobbiesTitle: "Hobbies",
      aboutTitle: "Sobre mi",
      abilitiesTitle: "Habilidades",
      profileAlt: "Foto de perfil",
    },
    work: {
      title: "Mi experiencia laboral",
      logoAlt: "logo",
      downloadCvTitle: "CV estrategico",
      downloadCvDesc: "Descarga una version mas detallada de mi perfil, experiencia y foco profesional.",
      downloadCvCta: "Descargar CV",
    },
    projects: {
      title: "Mis proyectos",
      logoAlt: "logo",
      linkArrowAlt: "flecha",
      previousAlt: "anterior",
      nextAlt: "siguiente",
    },
    navbar: {
      backendLabel: "Portfolio online",
      toggleMenuAria: "Alternar menu",
      languageHint: "Puedes cambiar el idioma aqui.",
      languageHintMobile: "Puedes cambiar el idioma desde aqui.",
      closeHintAria: "Cerrar aviso de idioma",
    },
    contact: {
      heading: "Hablemos",
      subheading: "Si buscas a alguien con buena base tecnica, ganas de aprender rapido y capacidad para aportar desde fases tempranas, estare encantado de hablar contigo.",
      availabilityBadge: "Disponible para nuevas oportunidades",
      introTitle: "Aprendo rapido y disfruto de los proyectos exigentes",
      introBody: "Me gusta trabajar en proyectos donde pueda seguir creciendo mientras aporto valor real, especialmente si combinan software, sistemas y contexto tecnico exigente, como defensa, aeroespacio o entornos embebidos.",
      contactEmailLabel: "Correo directo",
      contactEmailValue: "miguelangellarag@gmail.com",
      contactFocusLabel: "Enfoque",
      contactFocusValue: "Software, sistemas criticos, requisitos y arquitectura",
      contactLocationLabel: "Ubicacion",
      contactLocationValue: "Sevilla, Espana",
      fullName: "Nombre completo",
      email: "Correo",
      message: "Tu mensaje",
      namePlaceholder: "Miguel Angel Lara",
      emailPlaceholder: "miguelangellarag@gmail.com",
      messagePlaceholder: "Hola Miguel Angel, creo que tu perfil encaja en una posicion relacionada con software, sistemas o arquitectura...",
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
      terms: "Contacto directo",
      privacy: "CV disponible",
      rights: "@ 2025 Miguel Angel. Todos los derechos reservados.",
      linkedinAria: "Abrir perfil de LinkedIn",
      githubAria: "Abrir perfil de GitHub",
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
    video: {
      noVideo: "No hay un video disponible para este proyecto.",
      cannotShowVideo: "No se pudo mostrar el video.",
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
      downloadCv: "Download CV",
      linkedin: "LinkedIn",
      github: "GitHub",
      deskHintBadge: "Tip",
      deskHint: "To access the different sections, you can click on the items on the desk.",
      closeDeskHintAria: "Close desk interaction notice",
      hoverWork: "Work",
      hoverAbout: "About me",
      hoverProjects: "Projects",
      hoverGames: "Games",
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
      downloadCvTitle: "Strategic CV",
      downloadCvDesc: "Download a more detailed version of my profile, experience, and professional focus.",
      downloadCvCta: "Download CV",
    },
    projects: {
      title: "My projects",
      logoAlt: "logo",
      linkArrowAlt: "arrow",
      previousAlt: "previous",
      nextAlt: "next",
    },
    navbar: {
      backendLabel: "Portfolio online",
      toggleMenuAria: "Toggle menu",
      languageHint: "You can change the language here.",
      languageHintMobile: "You can change the language from here.",
      closeHintAria: "Close language notice",
    },
    contact: {
      heading: "Let's talk",
      subheading: "If you are looking for someone with solid technical foundations, the ability to learn quickly, and the mindset to contribute early, I would be glad to talk.",
      availabilityBadge: "Open to new opportunities",
      introTitle: "I learn fast and genuinely enjoy demanding projects",
      introBody: "I am especially interested in work where I can keep growing while contributing real value, particularly when software, systems, and technical complexity come together in areas such as defense, aerospace, or embedded environments.",
      contactEmailLabel: "Direct email",
      contactEmailValue: "miguelangellarag@gmail.com",
      contactFocusLabel: "Focus",
      contactFocusValue: "Software, critical systems, requirements, and architecture",
      contactLocationLabel: "Location",
      contactLocationValue: "Seville, Spain",
      fullName: "Full name",
      email: "Email",
      message: "Your message",
      namePlaceholder: "Miguel Angel Lara",
      emailPlaceholder: "miguelangellarag@gmail.com",
      messagePlaceholder: "Hi Miguel Angel, I think your profile could be a good fit for a role related to software, systems, or architecture...",
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
      terms: "Direct contact",
      privacy: "CV available",
      rights: "@ 2025 Miguel Angel. All rights reserved.",
      linkedinAria: "Open LinkedIn profile",
      githubAria: "Open GitHub profile",
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
    video: {
      noVideo: "No video available for this project.",
      cannotShowVideo: "Could not display the video.",
      openInTab: "Open in a new tab",
    },
  },
};

export const getUITextsByLang = (lang) => UI_TEXTS_BY_LANG[lang] ?? UI_TEXTS_BY_LANG[DEFAULT_UI_LANG];
export const UI_TEXTS = getUITextsByLang(DEFAULT_UI_LANG);
