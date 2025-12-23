export type ExperienceItem = {
    role: string;
    company: string;
    start: string;
    end?: string;
    location?: string;
    bullets: string[];
    tech?: string[];
};

export type Project = {
    title: string;
    company: string;
    period: string;
    summary: string;
    contributions: string[];
    outcome?: string;
    tech?: string[];
    year?: string;
    links?: Record<string, string>[];
};

export type Education = {
    degree: string;
    institution: string;
    start: string;
    end: string;
    gpa: string;
    description: string;
    location: string;
    achievements: string[];
};

export type ResumeData = {
    name: string;
    title: string;
    location: string;
    phone: string;
    email: string;
    socials: {
        github?: string;
        linkedin?: string;
    };
    technicalExpertize: string[];
    engineeringValues: string[];
    contactUsDesc: string;
    linkedin: string;
    summary: string;
    education: Education[];
    skills: string[];
    experience: ExperienceItem[];
    projects: Project[];
    achievements: string[];
    openSourceProjects?: Project[];
};

export const resumeData: ResumeData = {
    name: "Shakir Ullah",
    title: "🚀 Senior Software Engineer | Full-Stack JavaScript Developer | React, Node.js, TypeScript",
    location: "Lahore, Punjab, Pakistan",
    phone: "+92 333 6861392",
    email: "shakir201650@gmail.com",
    socials: {
        github: "https://github.com/Shakir-Afridi",
        linkedin: "https://www.linkedin.com/in/shakir-ullah-201650",
    },
    contactUsDesc:
        "We’d love to hear from you. Whether you have a question about services, pricing, or anything else — our team is ready to answer all your questions.",
    linkedin: "https://www.linkedin.com/in/shakir-ullah-201650/",
    summary:
        "With over 7 years of hands-on experience in software engineering, I specialize in designing, developing, and scaling modern web applications that are performance-optimized, user-centric, and maintainable. My core stack includes ReactJS, Node.js, and TypeScript, with experience across the full product lifecycle. \n\nI’ve worked on enterprise-scale systems, customer-facing platforms, and internal tools, delivering high-quality solutions that improve business efficiency and user engagement.",
    technicalExpertize: [
        "Frontend: React.js, Redux, Angular, HTML5, CSS3, SCSS, Tailwind",
        "Backend: Node.js, Express.js, REST APIs, GraphQL",
        "Languages: JavaScript (ES6+), TypeScript",
        "Tools & DevOps: Git, CI/CD, AWS, Jira, Agile/Scrum",
    ],
    engineeringValues: [
        " Clean, maintainable, and well-documented code",
        "Focus on scalability and performance",
        "Collaborative mindset and strong communication",
        "Continuous learning and improvement",
    ],
    education: [
        {
            degree: "Bachelor of Computer Science",
            institution: "NAMAL University, Mianwali, Punjab",
            start: "2014-09-15",
            end: "2018-05-25",
            gpa: "4.0/4.0",
            location: "Mianwali, Pubjab, Pakistan",
            description:
                "Focused on developing strong technical and analytical skills through hands-on projects, research, and collaborative learning.",
            achievements: [
                "Dean’s Honor Award",
                "Member of Namal Society for Social Impact",
            ],
        },
    ],
    skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Redux",
        "Material UI",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "REST APIs",
        "AWS",
        "Git",
        "Jest",
        "CI/CD",
    ],
    experience: [
        {
            role: "Senior Software Engineer – React",
            company: "RAKBANK",
            start: "2024-07-22",
            end: "Present",
            location: "Dubai, United Arab Emirates",
            bullets: [
                "Led development of scalable front-end components using React.js, Next.js, Redux, and Material UI, improving page load time by 20%.",
                "Implemented reusable design patterns and optimised architecture, reducing maintenance overhead by 30%.",
                "Collaborated with cross-functional teams to deliver digital banking solutions serving 100K+ users.",
                "Facilitated peer code reviews across a team of 10+ engineers.",
            ],
            tech: ["React.js", "Next.js", "TypeScript", "Material UI"],
        },
        {
            role: "Senior Software Engineer – JavaScript",
            company: "Digitify",
            start: "2022-03-01",
            end: "Present",
            location: "Lahore, Pakistan",
            bullets: [
                "Engineered high-performance responsive UI features with React.js, TypeScript, Redux, and Material UI, improving load speed by 30%.",
                "Developed and maintained RESTful APIs and middleware services in Node.js, reducing data transfer latency by 25%.",
                "Conducted unit testing with Jest, achieving 85%+ test coverage.",
            ],
            tech: ["React.js", "TypeScript", "Node.js", "Material UI"],
        },
        {
            role: "Full Stack Developer (JavaScript)",
            company: "Digitify",
            start: "2020-11-25",
            end: "2022-02-28",
            location: "Lahore, Pakistan",
            bullets: [
                "Delivered end-to-end features with React.js and Node.js, reducing feature rollout time by 25%.",
                "Integrated third-party services and authentication mechanisms, reliably managing 10K+ requests daily.",
            ],
            tech: ["React.js", "Node.js", "TypeScript"],
        },
        {
            role: "Associate Consultant",
            company: "Speridian Technologies",
            start: "2018-07-01",
            end: "2020-09-20",
            location: "Lahore, Pakistan",
            bullets: [
                "Developed client-side applications and complex business logic for enterprise-scale software.",
                "Collaborated across the full software development lifecycle (SDLC).",
            ],
            tech: ["React.js", "Express.js"],
        },
    ],
    openSourceProjects: [
        {
            title: "React Form DTO",
            company: "Independent Project",
            period: "11-2025 - Present",
            summary:
                "Schema-First Form Builder for React & MUI. Led the design and development of React Form DTO, an open-source, schema-driven form infrastructure enabling teams to build scalable and maintainable forms from declarative DTOs. The project addresses form complexity in enterprise applications by shifting UI development from imperative JSX to configuration-driven architectures. Established a composable, extensible system aligned with Material UI v7 and modern React patterns, emphasizing accessibility, responsiveness, and strong typing. Delivered a robust imperative API to support real-world workflows such as multi-step forms, admin tools, and dynamic UI generation.",
            tech: [
                "React.js",
                "TypeScript",
                "MUI",
                "Storybook",
                "Vite",
                "VitePress",
            ],
            links: [
                {
                    name: "GitHub",
                    link: "https://github.com/Shakir-Afridi/react-form-dto",
                },
                {
                    name: "Documentation",
                    link: "https://shakir-afridi.github.io/react-form-dto/docs/",
                },
                {
                    name: "Storybook",
                    link: "https://shakir-afridi.github.io/react-form-dto/storybook",
                },
                {
                    name: "NPM",
                    link: "https://www.npmjs.com/package/react-form-dto",
                },
            ],
            contributions: [
                "Architected a DTO-first form generation system enabling declarative, configuration-based UI rendering",
                "Built composable Form, Section, and Field abstractions supporting large-scale enterprise forms.",
                "Integrated Material UI v7 with a responsive 12-column grid system for consistent layouts.",
                "Designed imperative form APIs (getValues, validateAll, validateField) for advanced workflows.",
                "Implemented conditional rendering, custom validation rules, and extensible field renderers.",
                "Ensured strong TypeScript typing for safety, scalability, and developer productivity.",
                "Authored comprehensive documentation and Storybook demos for adoption and onboarding",
            ],
            outcome:
                "Delivered a developer-centric, schema-driven form solution that drastically reduces boilerplate, improves consistency, and accelerates form development in React applications. React Form DTO provides teams with a scalable foundation for building dynamic, accessible forms while retaining full control over layout, validation, and UI customization. The project continues to evolve through active usage, iteration, and community feedback.",
        },
        {
            title: "Headless React UI Kit",
            company: "Independent Project",
            period: "09-2025 - Present",
            summary:
                "Designed and developed Headless React UI Kit — a lightweight, accessible collection of unstyled UI primitives for React applications. The library emphasizes behavior over presentation, empowering teams to build fully accessible interfaces while retaining complete control over styling through their own design systems. Built with accessibility and composability in mind, Headless React UI Kit provides a robust foundation for crafting custom UI components using ARIA roles, keyboard navigation, and focus management. Its headless architecture ensures seamless integration with any styling solution, including CSS modules, Tailwind, or styled-components.",
            tech: ["React.js", "TypeScript", "Storybook", "Vite", "VitePress"],
            links: [
                {
                    name: "GitHub",
                    link: "https://github.com/Shakir-Afridi/react-headless-ui-kit",
                },
                {
                    name: "Documentation",
                    link: "https://shakir-afridi.github.io/react-headless-ui-kit/docs/",
                },
                {
                    name: "Storybook",
                    link: "https://shakir-afridi.github.io/react-headless-ui-kit/storybook",
                },
                {
                    name: "NPM",
                    link: "https://www.npmjs.com/package/react-headless-ui-kit",
                },
            ],
            contributions: [
                "Engineered a suite of headless components and hooks that abstract complex UI behavior while remaining style-agnostic.",
                "Implemented accessibility best practices across all primitives, including ARIA roles, keyboard support, and focus management.",
                "Designed the library to be composable and lightweight, enabling flexible integration into any React environment with minimal dependencies.",
                "Authored developer-friendly documentation using VitePress and Storybook, featuring live demos and usage guides for each component.",
                "Published the package to npm with semantic versioning and CI/CD workflows for automated releases and changelog generation.",
                "Promoted the library through social media and developer communities, encouraging feedback and contributions from the React ecosystem.",
            ],
            outcome:
                "Delivered a modern, developer-centric UI foundation that simplifies accessible component development while supporting full design system customization. The project has been embraced by the open-source community and continues to evolve through active feedback and collaboration.",
        },
        {
            title: "React Hookstack",
            company: "Independent Project",
            period: "09-2025 - 10-2025",
            summary:
                "Designed and developed react-hookstack, a lightweight and powerful collection of reusable React hooks aimed at simplifying state management, event handling, and UI logic across modern React applications. The library provides a composable, framework-agnostic API that integrates seamlessly into any React setup, including Vite, CRA, and Next.js. Built with developer experience in mind, react-hookstack abstracts common patterns into intuitive hooks—empowering teams to write cleaner, more maintainable code while reducing boilerplate and cognitive overhead.",
            tech: ["React.js", "TypeScript", "Storybook", "Vite", "VitePress"],
            links: [
                {
                    name: "GitHub",
                    link: "github.com/Shakir-Afridi/react-handyhooks",
                },
                {
                    name: "Documentation",
                    link: "https://shakir-afridi.github.io/react-handyhooks/docs/",
                },
                {
                    name: "Storybook",
                    link: "https://shakir-afridi.github.io/react-handyhooks/storybook",
                },
                {
                    name: "NPM",
                    link: "https://www.npmjs.com/package/react-hookstack",
                },
            ],
            contributions: [
                "Architected a modular hook system using TypeScript, enabling strong typing and IDE support for better DX.",
                "Implemented reusable utilities for stack-based state, event throttling/debouncing, and UI logic abstraction.",
                "Designed the library to be composable and framework-agnostic, ensuring compatibility across diverse React environments.",
                "Authored comprehensive documentation using VitePress and Storybook, including live examples and usage guides.",
                "Published the package to npm with semantic versioning and CI/CD integration for automated releases.",
                "Promoted the library through social media and developer communities to encourage adoption and gather feedback.",
            ],
            outcome:
                "Delivered a robust, developer-friendly hook library that streamlines common React patterns and encourages clean, reusable architecture. The project has been well-received by the open-source community and continues to evolve through community feedback and contributions.",
        },
        {
            title: "React Performify",
            company: "Independent Project",
            period: "09-2025 - 10-2025",
            summary:
                "Designed and developed React Performify, a lightweight performance toolkit for React applications that empowers developers to measure, optimize, and visualize component performance using clean, composable hooks. The library aims to make performance management as intuitive and accessible as state management—without sacrificing flexibility or developer experience. React Performify abstracts common performance patterns into reusable utilities, helping teams identify bottlenecks, monitor render behavior, and apply optimizations with minimal overhead.",
            tech: ["React.js", "TypeScript", "Storybook", "Vite", "VitePress"],
            links: [
                {
                    name: "GitHub",
                    link: "https://github.com/Shakir-Afridi/react-performify",
                },
                {
                    name: "Documentation",
                    link: "https://shakir-afridi.github.io/react-performify/docs/",
                },
                {
                    name: "Storybook",
                    link: "https://shakir-afridi.github.io/react-performify/storybook",
                },
                {
                    name: "NPM",
                    link: "https://www.npmjs.com/package/react-performify",
                },
            ],
            contributions: [
                "Engineered a suite of performance-focused hooks using TypeScript, including render tracking, memoization helpers, and visualization tools.",
                "Designed the API to be composable and framework-agnostic, ensuring seamless integration with Vite, CRA, Next.js, and other React setups.",
                "Built smart utilities that abstract common React logic into reusable patterns, reducing boilerplate and improving maintainability.",
                "Authored documentation and live examples using VitePress and Storybook to demonstrate real-world use cases.",
                "Published the package to npm with semantic versioning and CI/CD support for automated releases.",
                "Promoted the toolkit through developer communities and social media to gather feedback and encourage adoption.",
            ],
            outcome:
                "Delivered a developer-friendly performance toolkit that simplifies profiling and optimization workflows in React. React Performify helps teams build faster, more efficient UIs while maintaining clean, readable codebases.",
        },
    ],
    projects: [
        {
            title: "CLM - Customer Lifecycle Management (Onboarding Platform)",
            company: "RAKBANK",
            period: "09/2024 – Present",
            year: "2024",
            summary:
                "CLM (Customer Lifecycle Management) is a digital onboarding platform built for one of the UAE’s leading banks to streamline the manual onboarding process of individuals and entities. The application ensures regulatory compliance, data integrity, and seamless internal workflows across departments. \n I’m responsible for building and maintaining key features in the CLM platform using React.js, leveraging a custom design system built with Material UI and following the Atomic Design methodology. The application integrates maker-checker workflows and role-based access, ensuring secure and auditable onboarding.",
            contributions: [
                "Developed dynamic, reusable UI components and onboarding flows using React.js and TypeScript.",
                "Integrated a custom React-based design system aligned with the Atomic Design pattern, promoting scalability, consistency, and reusability.",
                "Implemented critical workflows for the “Maker” (data entry) and “Checker” (data review/approval) roles, enforcing business logic and access control.",
                "Collaborated in Agile sprints with backend, QA, and design teams to deliver high-impact features on time.",
                "Improved UX by streamlining form validations, conditional UI rendering, and error handling.",
            ],
            outcome:
                "Enabled the digital onboarding of retail and corporate customers, significantly reducing manual processing time and ensuring better compliance with internal banking policies.",
            tech: ["React.js", "TypeScript", "Material UI"],
        },
        {
            title: "Custom Design System (React + Material UI)",
            company: "RAKBANK",
            period: "08/2024 – Present",
            year: "2024",
            summary:
                "Contributed to the development and maintenance of a private centralized design system for RAKBANK’s frontend applications. The system adheres to the Atomic Design architecture and offers a reusable set of accessible UI components, styled with Material UI and tailored to the bank’s design language.",
            tech: ["React.js", "TypeScript", "Material UI"],
            contributions: [
                "Designed atomic-level UI components (Atoms, Molecules, Organisms) using React and Material UI.",
                "Ensured high reusability and consistency across multiple projects, including the CLM app.",
                "Documented component behavior and usage patterns to improve developer onboarding and adoption.",
                "Collaborated with designers and accessibility reviewers to meet WCAG standards and design specifications.",
            ],
            outcome:
                "Reduced frontend development time across teams, improved UI consistency across products, and established a scalable component-based architecture.",
        },
        {
            title: "Web Sales Solution (Multi-Tenant)",
            company: "Digitify",
            period: "02/2022 – Present",
            year: "2022",
            summary:
                "Designed and developed a multi-tenant web sales solution for Jysk Fynske Medier (JFM)—one of Denmark’s leading regional media groups. The platform supports multiple digital newspaper brands under JFM’s umbrella, enabling each title to maintain a distinct identity and user experience while sharing a unified codebase. \nThe solution dynamically applies brand-specific themes, styles, and configurations based on the deployment URL, allowing seamless customization for each title (e.g., news outlets, subscription portals).",
            tech: ["React.js", "TypeScript", "Node.js", "Material UI", "AWS"],
            contributions: [
                "Engineered a flexible front-end architecture in React.js, capable of rendering different brand themes at runtime using dynamic styling strategies.",
                "Implemented URL-based tenant detection to apply brand-specific configurations, styles, assets, and logic without affecting core functionality.",
                "Ensured high performance and reusability by abstracting core components and separating concerns between layout, theme, and business logic.",
                "Integrated RESTful APIs and dynamic routing to support customizable sales flows per brand.",
                "Worked closely with designers to maintain brand consistency and responsiveness across multiple screen sizes.",
                "Contributed to automated deployments and environment configuration through CI/CD pipelines, supporting efficient rollout across JFM ecosystem.",
            ],
            outcome:
                "Delivered a highly modular, scalable solution that enabled JFM to launch and manage customized sales portals for multiple titles from a single platform—reducing development overhead, improving time-to-market, and supporting long-term maintainability.",
        },
        {
            title: "GoBig AI-Powered Blog Platform",
            company: "Independent Project",
            period: "2023",
            year: "2023",
            summary:
                "Developed a full-stack AI-driven blog generation platform that dynamically creates and serves region-specific content based on user location. On each visit, the application detects the user’s country name, code, and language. If the country is not in the database, the backend fetches real-time Google Trends data using SerpApi, generates localized blog content with OpenAI and DeepSeek, and creates matching visuals using Leonardo.ai. The generated blogs are stored for future access, enabling automated, region-aware content publishing.",
            tech: [
                "Node.js",
                "Express",
                "Next.js",
                "Material UI",
                "SerpApi",
                "OpenAI",
                "DeepSeek",
                "Leonardo.ai",
            ],
            contributions: [
                "Designed and implemented the complete system architecture (frontend, backend, and integrations).",
                "Built and deployed scalable REST APIs with Node.js and Express.",
                "Integrated OpenAI, DeepSeek, and Leonardo.ai APIs for text and image generation workflows.",
                "Implemented dynamic data retrieval from Google Trends via SerpApi.",
                "Designed a modern, responsive frontend with Next.js and Material UI.",
                "Optimized the end-to-end process for seamless automation and minimal latency.",
            ],
            outcome:
                "Successfully launched an AI-powered blogging platform capable of generating and serving localized content on-demand, enhancing user engagement through region-specific articles and visuals.",
        },
        {
            title: "CIM and ACM",
            company: "Digitify",
            period: "2020",
            summary:
                "Developed a comprehensive internal administration platform named AMPS (Aria Media & Publishing Suite), designed to streamline customer management, operational processes, and system configurations for both Contact Center Agents and Internal Admin Teams of a major financial services provider. \nThe platform comprises three core modules, each serving distinct business needs and integrated into a unified web application:\n\n 1. Customer Interaction Management (CIM): Enables contact center agents to search, view, and manage customer accounts and subscriptions. Supports creation of new accounts through a guided and validated UI. Facilitates real-time data synchronization with backend services. \n\n2. Application Configuration Manager (ACM): Provides administrators a UI to configure key operational settings such as: Unmatched payments, Refund management, CIM and ACM dropdown configurations. Allows dynamic updates to app behavior without code deployment.\n\n3. Security Module: Allows system administrators to manage user roles, access levels, and role-based permissions. Enforces granular access control for security and compliance.",
            contributions: [
                "Developed modular and reusable UI components in React.js with SASS, ensuring responsiveness and accessibility.",
                "Implemented RESTful APIs and backend logic in Node.js for efficient data retrieval, validation, and persistence.",
                "Integrated AWS SES for transactional emails and AWS S3 for secure document storage.",
                "Established robust user authentication and role-based access management.",
                "Configured Azure DevOps pipelines for CI/CD, version control, and automated deployments.",
            ],
            tech: [
                "React.js",
                "Node.js",
                "MySQL",
                "AWS SES",
                "AWS S3",
                "Azure DevOps",
                "Material UI",
                "CSS",
            ],
            outcome:
                "Centralized administrative operations, improving efficiency across multiple departments. Reduced manual configuration overhead by 80% through dynamic application management. Enhanced platform reliability, scalability, and compliance through modular architecture and secure access control.",
        },
        {
            title: "MOARSS",
            company: "Speridian Technologies",
            period: "2019",
            summary:
                "Built a web-based meeting management platform designed to facilitate the scheduling, organization, and governance of internal meetings along with their corresponding agendas. The platform empowers users with different roles to interact with the application based on granular access levels, ensuring secure and structured participation across departments. \nKey features include:\n\n1. Meeting Scheduling: Users can create, edit, and delete meetings, specifying details such as date, time, location, and participants.\n\n2. Agenda Management: Organizers can define detailed agendas for each meeting, including topics, time allocations, and responsible individuals.\n\n3. Role-Based Access Control: The system enforces strict access permissions based on user roles (e.g., Admin, Organizer, Participant), ensuring that users can only perform actions aligned with their responsibilities.\n\n4. Notifications and Reminders: Automated email notifications are sent to participants regarding upcoming meetings and agenda updates.",
            contributions: [
                "Led the frontend development using React.js, implementing dynamic UI components and reusable forms.",
                "Collaborated with designers to maintain consistency and responsiveness across screen sizes and devices.",
                "Contributed to backend services using Node.js, including route handling, role management, and data validation.",
                "Participated in architectural decisions to support modular design and long-term maintainability.",
                "Ensured seamless interaction between frontend and backend through well-structured REST APIs.",
            ],
            outcome:
                "Delivered a user-friendly, secure, and scalable solution that improved internal collaboration and meeting productivity, while maintaining robust access control through role-based user management.",
            tech: ["React.js", "Node.js", "Express.js", "MySQL", "Bootstrap"],
        },
        {
            title: "SIMS",
            company: "Speridian Technologies",
            period: "2018",
            summary:
                "Developed a robust multi-tenant web application designed to manage and automate the scheduled inspections of building sensors (e.g., temperature, smoke, gas, motion). The platform enabled multiple organizations to operate within a shared portal, each with its custom branding, data isolation, and user access control.\nThe system was equipped with an advanced scheduling engine that automatically triggered reminders and follow-ups for upcoming inspections based on predefined inspection cycles and sensor types. I worked on all parts of this application.\nKey Features: \n\n1. Multi-Tenant Support: Allowed different organizations to operate independently within the same portal, with isolated data models, settings, and UI themes. \n\n2. Advanced Scheduling Engine: Implemented automated reminders and inspection workflows using custom cron-based logic. \n\n3. Sensor & Inspection Management: Enabled users to register, configure, and track sensors, as well as record inspection outcomes with audit history. \n\n4. Custom Branding: Dynamic theming and branding per organization (logo, colors, and layout preferences). \n\n5. Role-Based Access: Users could access and manage functionality based on organization-specific roles and permissions.",
            contributions: [
                "Led full-stack development — designing relational database schemas for multi-tenant separation and efficient querying, implementing backend business logic with Node.js and cron-based schedulers, and building responsive, modular UI components in React.js with custom theming for tenant branding.",
                "Designed and enforced secure RBAC policies for inspection teams, managers, and administrators.",
                "Integrated notification services for email/SMS alerts related to inspection due dates.",
            ],
            outcome: "",
            tech: ["React.js", "JavaScript", "Bootstrap", "CSS"],
        },
    ],
    achievements: [
        "Dean’s Honor Award, NAMAL University",
        "OWASP Top 10 Web Application Vulnerabilities Course – Aria Systems",
        "Top Contributor Award, Digitify",
    ],
};
