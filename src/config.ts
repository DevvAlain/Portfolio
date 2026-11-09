export const config = {
    developer: {
        name: "Duc",
        fullName: "Vu Thanh Duc",
        title: "Full-Stack Developer & AI Engineer",
        description: "Full-Stack Developer and AI Engineer with proven experience shipping production systems end-to-end: .NET microservices and Vue.js at FPT Software, GPU-accelerated Python pipelines (OCR, Whisper, LLMs), and freelance web platforms delivered for real clients. Skilled across React, Next.js, Node.js, .NET Core, Python, and cloud services (AWS, Docker)."
    },
    social: {
        github: "DevvAlain",
        email: "devdylan.work@gmail.com",
        phone: "0393 261 459",
        location: "Ho Chi Minh City, Vietnam"
    },
    about: {
        title: "About Me",
        description: "I am a Software and AI Engineer based in Ho Chi Minh City, Vietnam, graduating in Software Engineering from FPT University. I have proven experience shipping production systems end-to-end — from high-throughput .NET microservices and real-time inventory synchronization at FPT Software to GPU-accelerated speech and LLM translation pipelines in Python. Passionate about architecting reliable cloud backends, modern web applications, and practical AI integrations that solve real-world problems."
    },
    experiences: [
        {
            position: "Freelance Full-Stack Developer",
            company: "Solo Projects",
            period: "2026 - Present",
            location: "Ho Chi Minh City, Vietnam",
            description: "Delivering end-to-end commercial solutions directly for clients: Happy Furniture e-commerce platform, I8 Studio TVC showcase, and a real-time QR restaurant ordering system with kitchen display.",
            responsibilities: [
                "Built and shipped live e-commerce site happyfurniturevn.com with React storefront, Next.js admin dashboard, and .NET REST API",
                "Built and launched portfolio site i8.com.vn for a TVC production studio using Next.js, Prisma, and Tailwind CSS v4",
                "Engineered QR restaurant ordering platform with real-time WebSocket order routing to kitchen display and daily sales analytics"
            ],
            technologies: ["React", "Next.js", ".NET REST API", "Node.js", "MySQL", "Prisma", "WebSocket", "Tailwind CSS"]
        },
        {
            position: "Back-end & Front-end Developer",
            company: "FPT Software",
            period: "2025 - 2026",
            location: "Ho Chi Minh City, Vietnam",
            description: "Developed enterprise and government systems across multiple squads: Japan citizen management, APAC retail smart inventory, and internal resource & sprint tracking tools.",
            responsibilities: [
                "Built C# (.NET Core) services for a government citizen management platform deployed in Japan; developed a shared Vue.js component library",
                "Designed APIs for order placement and real-time inventory sync; resolved low-stock race conditions via transactions and locking on SQL Server (no overselling)",
                "Added Redis caching, cutting stock-lookup response time from ~800ms to under 150ms with 75%+ xUnit/Moq test coverage",
                "Built Express REST APIs and Vue.js dashboard syncing Jira tasks and SonarQube metrics via webhooks, cutting weekly report time by ~60%"
            ],
            technologies: [".NET Core", "C#", "Vue.js", "SQL Server", "Redis", "Docker", "Jenkins CI/CD", "Node.js (Express)", "MongoDB"]
        },
        {
            position: "AI & Data Pipeline Engineering",
            company: "Independent & Research Projects",
            period: "2025 - Present",
            location: "Vietnam",
            description: "Designing scalable AI pipelines, speech analysis microservices, and LLM integrations with focus on reliability, queue decoupling, and performance optimization.",
            responsibilities: [
                "Built GPU-accelerated video OCR and subtitle translation/TTS pipeline running at ~3.1x real-time speed with 94.3% clean cues",
                "Led team of 5 designing OratorAI, an AI presentation analysis platform with Amazon SQS-decoupled microservices and Gemini report generation",
                "Built and integrated AI features into finance, language learning, and EV service platforms (Grok, OpenAI, PayOS)"
            ],
            technologies: ["Python", "PaddleOCR", "Faster Whisper", "Pyannote.audio", "LLMs", "Amazon SQS", "Docker"]
        },
        {
            position: "Bachelor of Software Engineering",
            company: "FPT University",
            period: "2021 - 2026",
            location: "Ho Chi Minh City, Vietnam",
            description: "Major in Software Engineering. Comprehensive foundation in software architecture, distributed systems, database design, algorithms, and AI/ML system integration.",
            responsibilities: [
                "Led capstone and academic projects (OratorAI, AImpact, Quizlingo, EVCare)",
                "Working English proficiency with extensive experience reading and writing technical documentation"
            ],
            technologies: ["C#", "Python", "JavaScript", "TypeScript", "Software Architecture", "Agile/Scrum"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Subtitle OCR, Translation & TTS Pipeline",
            category: "AI Automation & Data Pipeline",
            technologies: "Python, OpenCV, PaddleOCR (GPU), LLMs, Ollama, TTS",
            image: "/images/subtitle_ocr.png",
            link: "https://github.com/DevvAlain",
            description:
                "A GPU-accelerated two-stage automation pipeline converting raw video to Chinese subtitles via two-pass OCR with consensus voting, followed by LLM-assisted Vietnamese translation with quality gates and timeline-synced TTS audio. Processed ~23,700 cues with 94.3% accuracy at 3.1x real-time speed."
        },
        {
            id: 2,
            title: "OratorAI — AI Presentation Analysis Platform",
            category: "AI Microservices & Speech",
            technologies: "Python, Faster Whisper, Pyannote.audio, Amazon SQS, Google Gemini, Docker",
            image: "/images/oratorai.png",
            link: "https://fptoratorai.netlify.app/",
            description:
                "A presentation analysis platform led as Team Leader & Backend Developer. Designed microservices using Faster Whisper for speech-to-text, Pyannote.audio for speaker diarization, Sentence Transformers, Amazon SQS for queue-based worker decoupling, and Google Gemini for automated structured feedback reports."
        },
        {
            id: 3,
            title: "Happy Furniture — E-Commerce Website",
            category: "Full-Stack Web & E-Commerce",
            technologies: "React, Next.js, .NET REST API, SQL Server",
            image: "/images/happyfurniture.png",
            link: "https://happyfurniturevn.com",
            description:
                "A live commercial e-commerce platform (happyfurniturevn.com) built and shipped for a furniture retailer from requirements to deployment. Features product search/filtering, image upload, responsive UI, 30+ products live, and a Next.js admin dashboard."
        },
        {
            id: 4,
            title: "I8 Studio — Production Showcase Website",
            category: "Director Showcase & TVC Portfolio",
            technologies: "Next.js, Prisma, shadcn/ui, Tailwind CSS v4",
            image: "/images/i8studio.png",
            link: "https://i8.com.vn",
            description:
                "A modern portfolio site (i8.com.vn) for a TVC production studio with animated interactive landing, video archive, commercial listings, and contact workflows."
        },
        {
            id: 5,
            title: "Smart Inventory & Order Tracking System",
            category: "Enterprise Backend & Caching",
            technologies: ".NET Core, SQL Server, Redis, Docker, xUnit/Moq",
            image: "/images/smart_inventory.png",
            link: "https://github.com/DevvAlain",
            description:
                "Enterprise order placement and real-time inventory sync platform developed at FPT Software for an APAC retail client. Resolved low-stock race conditions via database transactions and row locking; cut stock lookup latency from ~800ms to <150ms via Redis caching."
        },
        {
            id: 6,
            title: "Restaurant Table-Side Ordering System",
            category: "Real-Time Food & Beverage Platform",
            technologies: "React, Node.js (Express), MySQL, WebSocket",
            image: "/images/restaurant_qr.png",
            link: "https://github.com/DevvAlain",
            description:
                "QR-based table ordering system with live WebSocket routing to kitchen displays, order status tracking, an admin panel for dynamic menu/pricing management, and automated daily sales analytics."
        },
        {
            id: 7,
            title: "Citizen Management Platform (Japan)",
            category: "Government Enterprise System",
            technologies: "C# (.NET Core), Vue.js, SQL Server, Jenkins CI/CD",
            image: "/images/citizen_platform.png",
            link: "https://github.com/DevvAlain",
            description:
                "Enterprise administrative platform for Japanese citizen management deployed at FPT Software. Built C# (.NET Core) services for administrative workflows and developed a shared Vue.js component library adopted across teams to cut development time and ensure UI consistency."
        },
        {
            id: 8,
            title: "AImpact, Quizlingo & EVCare",
            category: "AI Applications & FinTech",
            technologies: "FastAPI / Node.js, Grok, OpenAI, Google Gemini, PayOS",
            image: "/images/aimpact_quizlingo.png",
            link: "https://github.com/DevvAlain",
            description:
                "Suite of AI applications led as team leader: AImpact (AI personal finance with Grok and PayOS payment integration), Quizlingo (adaptive English quiz powered by OpenAI), and EVCare (EV service management system with Gemini)."
        }
    ],
    contact: {
        email: "devdylan.work@gmail.com",
        phone: "0393 261 459",
        github: "https://github.com/DevvAlain",
        linkedin: "https://www.linkedin.com/in/thanh-duc-vu-66a9863b7/",
        twitter: "https://github.com/DevvAlain",
        instagram: "https://github.com/DevvAlain",
        resume: "/cv/CV_VuThanhDuc_Fullstack_Developer.pdf",
        cvLinks: {
            fullstackPdf: "/cv/CV_VuThanhDuc_Fullstack_Developer.pdf",
            fullstackDrive: "https://drive.google.com/drive/folders/1HG-NBqv-X0L-eRlNCgP71l19lRDK9UAg?usp=sharing",
            aiPdf: "/cv/CV_VuThanhDuc_AI_Engineer.pdf",
            aiDrive: "https://drive.google.com/drive/folders/11mA4zChs0LitwyQKTdWJDmh1i1dN4lHY?usp=sharing",
            dataPdf: "/cv/CV_VuThanhDuc_Data_Engineer.pdf"
        }
    },
    skills: {
        develop: {
            title: "FULL-STACK & BACKEND",
            description: "Enterprise .NET, Node.js & modern React/Next.js systems",
            details:
                "Designing robust microservices, RESTful APIs, and responsive frontends. Experienced in concurrency control, Redis caching, database design, and cloud deployments with Docker & AWS.",
            tools: [".NET Core", "C#", "Node.js", "React.js", "Next.js", "Vue.js", "TypeScript", "SQL Server", "PostgreSQL", "Docker", "AWS", "Redis"]
        },
        design: {
            title: "AI & DATA ENGINEERING",
            description: "LLM integration, GPU OCR, speech pipelines & ETL",
            details:
                "Building production-grade AI pipelines including video OCR, speech-to-text, speaker diarization, and LLM translation. Developing queue-based decoupled workers using Amazon SQS and local models with Ollama.",
            tools: ["Python", "PaddleOCR", "Faster Whisper", "Pyannote.audio", "LLMs", "Google Gemini", "OpenAI API", "Ollama", "Amazon SQS", "OpenCV", "spaCy"]
        }
    }
};
