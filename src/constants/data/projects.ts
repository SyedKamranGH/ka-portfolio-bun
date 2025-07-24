import type { ProjectDetail, ProjectData } from "../../types";

export const PROJECTS: ProjectData = {
  personal: [
    {
      id: 1,
      name: "Blockchain-Based Property Platform",
      summary:
        "A blockchain-powered real estate platform using Next.js and TypeScript, enabling secure property transactions.",
      image: "https://example.com/blockchain-property-screenshot.jpg",
      skills: [
        { name: "Next.js", icon: "▲" },
        { name: "TypeScript", icon: "🔷" },
        { name: "Recharts", icon: "📊" },
        { name: "React Query", icon: "🔄" },
        { name: "Zustand", icon: "🐻" },
      ],
      githubUrl: "https://github.com/syed-kamran-ahmad/blockchain-property",
      liveUrl: "https://blockchain-property-demo.vercel.app",
    },
    {
      id: 2,
      name: "AI Models and LLM Agents Integration Platform",
      summary:
        "Cross-platform mobile app using React Native and Expo with AI services integration from GCP, AWS, and Hugging Face.",
      image: "https://example.com/ai-llm-screenshot.jpg",
      skills: [
        { name: "React Native", icon: "📱" },
        { name: "Expo", icon: "⚡" },
        { name: "Redux", icon: "🔄" },
        { name: "Zustand", icon: "🐻" },
        { name: "OpenAI API", icon: "🤖" },
      ],
      githubUrl: "https://github.com/syed-kamran-ahmad/ai-llm-platform",
      demoUrl: "https://ai-llm-demo.netlify.app",
    },
    {
      id: 3,
      name: "Cosmic JS Tour Diary",
      summary:
        "Tour Diary application using React and Redux, facilitating seamless CRUD operations for tour management.",
      image: "https://example.com/cosmic-js-screenshot.jpg",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "Redux", icon: "🔄" },
        { name: "Cosmic JS", icon: "🌌" },
      ],
      githubUrl: "https://github.com/syed-kamran-ahmad/cosmic-js-diary",
    },
  ],
  company: [
    {
      id: "comp-1",
      name: "Seafarers SaaS System",
      summary:
        "Enterprise SaaS system with Google OAuth integration, AWS Cognito synchronization, and Atomic Design Pattern implementation.",
      image: "https://example.com/seafarers-screenshot.jpg",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "AWS Cognito", icon: "☁️" },
        { name: "Prismic API", icon: "📝" },
        { name: "HubSpot", icon: "🎯" },
        { name: "Yup", icon: "✅" },
      ],
      liveUrl: "https://seafarers-saas.company.com",
    },
    {
      id: "comp-2",
      name: "Real-time AI Video Generation System",
      summary:
        "AI-powered video generation system with advanced machine learning algorithms, developed using Next.js and TypeScript.",
      image: "https://example.com/ai-video-screenshot.jpg",
      skills: [
        { name: "Next.js", icon: "▲" },
        { name: "TypeScript", icon: "🔷" },
        { name: "AI/ML", icon: "🤖" },
        { name: "Video Processing", icon: "🎬" },
      ],
      demoUrl: "https://ai-video-demo.company.com",
    },
    {
      id: "comp-3",
      name: "Enterprise eCommerce Platform (Salesforce Commerce Cloud)",
      summary:
        "Enterprise-grade headless eCommerce solution integrated with Salesforce Commerce APIs and microservices architecture.",
      image: "https://example.com/ecommerce-screenshot.jpg",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "Redux", icon: "🔄" },
        { name: "Node.js", icon: "🟢" },
        { name: "Microservices", icon: "🔗" },
        { name: "Kubernetes", icon: "⚙️" },
      ],
    },
    {
      id: "comp-4",
      name: "Laboratory Information System",
      summary:
        "HIPAA-compliant healthcare system with HL7 message processing, Mirth channels, and secure patient data management.",
      image: "https://example.com/lis-screenshot.jpg",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "HL7", icon: "🏥" },
        { name: "Mirth", icon: "🔄" },
        { name: "HIPAA", icon: "🔒" },
        { name: "SQL", icon: "📊" },
      ],
    },
  ],
};

export const personalProjects: ProjectDetail[] = [
  {
    id: "proj-1",
    name: "Blockchain-Based Property Platform",
    summary:
      "Blockchain-powered real estate platform with secure property transactions",
    description:
      "Built a comprehensive blockchain-powered real estate platform using Next.js and TypeScript, enabling secure property transactions with dynamic dashboards, property image galleries, and responsive design across devices.",
    skills: [
      "Next.js",
      "TypeScript",
      "Vite",
      "Recharts",
      "React Query",
      "Zustand",
      "React-Slick",
      "Yup",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Vite",
      "Recharts",
      "React Query",
      "Zustand",
      "Slick-Carousel",
    ],
    githubUrl: "https://github.com/syed-kamran-ahmad/blockchain-property",
    liveUrl: "https://blockchain-property-demo.vercel.app",
    type: "personal",
    featured: true,
  },
  {
    id: "proj-2",
    name: "AI Models and LLM Agents Integration Platform",
    summary:
      "Cross-platform mobile app with AI services integration and native modules",
    description:
      "Built a cross-platform mobile app using React Native and Expo, with native modules for platform-specific functionalities like camera access and image processing. Integrated cloud-based AI services from GCP, AWS, and Hugging Face with custom servers for processing.",
    skills: [
      "React Native",
      "Expo",
      "Redux",
      "Zustand",
      "React-Navigation",
      "Axios",
      "OpenAI API",
    ],
    technologies: [
      "React Native",
      "Expo",
      "Redux/Zustand",
      "React Navigation",
      "GCP",
      "AWS",
      "Hugging Face",
    ],
    githubUrl: "https://github.com/syed-kamran-ahmad/ai-llm-platform",
    type: "personal",
    featured: true,
  },
  {
    id: "proj-3",
    name: "Cosmic JS Tour Diary",
    summary:
      "Tour management application with comprehensive timeline and CRUD operations",
    description:
      "Built a Tour Diary application using React and Redux, facilitating seamless CRUD operations for tour management. Leveraged Cosmic JS API to maintain a comprehensive timeline between tours, improving data management efficiency.",
    skills: ["React", "Redux", "Cosmic JS API", "CRUD Operations"],
    technologies: ["React", "Redux", "Cosmic JS", "JavaScript", "CSS3"],
    githubUrl: "https://github.com/syed-kamran-ahmad/cosmic-js-diary",
    liveUrl: "https://cosmic-tour-diary.netlify.app",
    type: "personal",
  },
  {
    id: "proj-4",
    name: "NiNA: Interfacing NiHA With NAO Robot",
    summary:
      "Advanced robotics thesis project with cognitive computing platform",
    description:
      "Implemented the Nature-inspired Humanoid Cognitive Computing Platform (NiHA) using the Quantum Bio-Inspired Cognitive Agent (QuBIC) enabling social interactions on NAO Robot. Applied 2D object detection using YOLO v3 and employed Point Cloud Library for 3D mapping.",
    skills: [
      "Python",
      "Computer Vision",
      "YOLO v3",
      "Point Cloud Library",
      "NAO Robot",
      "OpenCV",
    ],
    technologies: [
      "Python",
      "NAO Robot",
      "QuBIC",
      "YOLO v3",
      "Point Cloud Library",
      "OpenCV",
      "COCO Dataset",
    ],
    githubUrl: "https://github.com/syed-kamran-ahmad/nina-nao-robot",
    type: "personal",
  },
];

export const companyProjects: ProjectDetail[] = [
  {
    id: "comp-proj-1",
    name: "Seafarers SaaS System",
    summary:
      "Enterprise SaaS system with advanced authentication and design patterns",
    description:
      "Implemented synchronization of Google OAuth login with AWS Cognito, enhancing user account security. Implemented Atomic Design Pattern in React to enhance reusability and maintainability by developing reusable components such as atoms, molecules, and organisms.",
    skills: [
      "React",
      "AWS Cognito",
      "Google OAuth",
      "Prismic API",
      "HubSpot",
      "Yup",
      "Atomic Design",
    ],
    technologies: [
      "React",
      "AWS Cognito",
      "Google OAuth",
      "Prismic",
      "HubSpot",
      "Yup Validation",
    ],
    type: "company",
    featured: true,
  },
  {
    id: "comp-proj-2",
    name: "Real-time AI Video Generation System",
    summary:
      "AI-powered video generation system with machine learning algorithms",
    description:
      "Led a team of developers in the design and implementation of an AI-powered video generation system, delivering the project ahead of schedule. Spearheaded the integration of advanced machine learning algorithms, resulting in increased video processing speed and improved output quality.",
    skills: [
      "Next.js",
      "TypeScript",
      "AI/ML",
      "Team Leadership",
      "Video Processing",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Machine Learning",
      "Video Processing APIs",
    ],
    type: "company",
    featured: true,
  },
  {
    id: "comp-proj-3",
    name: "Enterprise eCommerce Platform (Salesforce Commerce Cloud)",
    summary:
      "Large-scale headless eCommerce solution with microservices architecture",
    description:
      "Integrated Salesforce Commerce APIs to build an enterprise-grade headless eCommerce solution. Developed React and Redux-based UI components, implemented microservices architecture using Node.js and Java-based APIs, and orchestrated CI/CD pipelines using Kubernetes.",
    skills: [
      "React",
      "Redux",
      "Node.js",
      "Java",
      "Salesforce Commerce",
      "Microservices",
      "Kubernetes",
    ],
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "Java",
      "Salesforce Commerce Cloud",
      "Kubernetes",
      "CI/CD",
    ],
    type: "company",
  },
  {
    id: "comp-proj-4",
    name: "Laboratory Information System Support",
    summary: "HIPAA-compliant healthcare system with HL7 message processing",
    description:
      "Maintained HIPAA compliance, ensuring the confidentiality and security of patient data across all operations. Developed and formatted HL7 messages, designed and implemented Mirth channels for secure interfacing and reporting, increasing data transmission efficiency.",
    skills: ["React", "HL7", "Mirth", "HIPAA Compliance", "Healthcare", "SQL"],
    technologies: [
      "React",
      "HL7",
      "Mirth Connect",
      "HIPAA",
      "SQL",
      "Healthcare Systems",
    ],
    type: "company",
  },
];
