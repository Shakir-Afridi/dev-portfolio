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
};

export const resumeData = {
    name: "Shakir Ullah",
    title: "Senior Software Engineer — React.js & Node.js",
    location: "Lahore, Punjab, Pakistan",
    phone: "+92 333 6861392",
    email: "shakir201650@gmail.com",
    contactUsDesc:
        "We’d love to hear from you. Whether you have a question about services, pricing, or anything else — our team is ready to answer all your questions.",
    linkedin: "https://www.linkedin.com/in/shakir-ullah-201650/",
    summary:
        "With over 7 years of hands-on experience in software engineering, I specialize in designing, developing, and scaling modern web applications that are performance-optimized, user-centric, and maintainable. My core stack includes ReactJS, Node.js, and TypeScript, with experience across the full product lifecycle. I’ve worked on enterprise-scale systems, customer-facing platforms, and internal tools, delivering high-quality solutions that improve business efficiency and user engagement.",
    education: [
        {
            degree: "Bachelor of Computer Science",
            institution: "NAMAL University, Mianwali, Punjab",
            start: "2014-09-15",
            end: "2018-05-25",
            gpa: "4.0/4.0",
            notes: [
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
    ] as ExperienceItem[],
    projects: [
        {
            title: "CLM - Customer Lifecycle Management (Onboarding Platform)",
            company: "RAKBANK",
            period: "09/2024 – Present",
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
    ] as Project[],
    achievements: [
        "Dean’s Honor Award, NAMAL University",
        "OWASP Top 10 Web Application Vulnerabilities Course – Aria Systems",
        "Top Contributor Award, Digitify",
    ],
};
