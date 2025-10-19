export type ExperienceItem = {
    role: string;
    company: string;
    start: string;
    end?: string;
    location?: string;
    bullets: string[];
    tech?: string[];
};

export const resumeData = {
    name: "Shakir Ullah",
    title: "Senior Software Engineer — React & TypeScript",
    location: "Lahore, Punjab, Pakistan",
    phone: "+92 333 6861392",
    email: "shakir201650@gmail.com",
    contactUsDesc:
        "  We’d love to hear from you. Whether you have a question about services, pricing, or anything else — our team is ready to answer all your questions.",
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
                "Built key features of a digital onboarding platform for retail and corporate customers using React.js, TypeScript, Material UI, and Atomic Design.",
            tech: ["React.js", "TypeScript", "Material UI"],
        },
        {
            title: "Custom Design System (React + Material UI)",
            company: "RAKBANK",
            period: "08/2024 – Present",
            summary:
                "Developed a centralized design system aligned with Atomic Design principles to deliver reusable UI components.",
            tech: ["React.js", "TypeScript", "Material UI"],
        },
        {
            title: "Web Sales Solution (Multi-Tenant)",
            company: "Digitify",
            period: "02/2022 – Present",
            summary:
                "Architected a multi-tenant sales platform supporting multiple newspaper brands with dynamic theming and configuration.",
            tech: ["React.js", "TypeScript", "Node.js", "Material UI", "AWS"],
        },
        {
            title: "GoBig AI-Powered Blog Platform",
            company: "Independent Project",
            period: "2023",
            summary:
                "Full-stack AI-powered blog generator using Next.js, Node.js, OpenAI, improving SEO and engagement.",
            tech: ["Next.js", "Node.js", "OpenAI"],
        },
    ],
    achievements: [
        "Dean’s Honor Award, NAMAL University",
        "OWASP Top 10 Web Application Vulnerabilities Course – Aria Systems",
        "Top Contributor Award, Digitify",
    ],
};
