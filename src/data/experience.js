export const capabilities = [
  {
    number: "01",
    category: "AI AGENTS",
    tagline: "Systems that reason, use tools and execute multi-step workflows.",
    description: "Autonomous agent architectures built with task decomposition, deterministic tool invocation, state management, and reliable fallback policies.",
    tech: ["Tool Calling", "Autonomous Loops", "State Machines", "LangChain", "Agentic Workflows"],
    icon: "Cpu"
  },
  {
    number: "02",
    category: "LLM APPLICATIONS",
    tagline: "Production applications using structured generation, retrieval and tool use.",
    description: "Enterprise generative systems with schema-enforced JSON validation, dense vector RAG pipelines, and grounded context injection.",
    tech: ["RAG", "Embeddings", "Structured Output", "Prompt Orchestration", "Multimodal AI"],
    icon: "Workflow"
  },
  {
    number: "03",
    category: "AI AUTOMATION",
    tagline: "AI systems connected to APIs, browsers, databases and business workflows.",
    description: "End-to-end automation connecting browser interactions, CRM records, webhook events, and back-office pipelines into reliable business engines.",
    tech: ["Playwright", "Webhooks", "CRM Sync", "Async Queues", "Browser Automation"],
    icon: "Workflow"
  },
  {
    number: "04",
    category: "BACKEND SYSTEMS",
    tagline: "FastAPI services, APIs, databases, asynchronous workflows and containerized deployments.",
    description: "High-throughput asynchronous microservices built to handle production traffic, orchestrate long-running inference jobs, and maintain data consistency.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "REST APIs", "Pydantic"],
    icon: "Server"
  },
  {
    number: "05",
    category: "MACHINE LEARNING",
    tagline: "Predictive models, feature engineering, data pipelines and applied ML systems.",
    description: "Applied machine learning workflows spanning SQL data extraction, statistical feature engineering, and supervised predictive model training.",
    tech: ["Python", "Scikit-learn", "SQL", "Pandas", "NumPy", "Feature Pipelines"],
    icon: "Database"
  }
];

export const techDisciplines = [
  {
    category: "AI / ML",
    description: "Model reasoning, retrieval-augmented generation & predictive analytics.",
    skills: ["Python", "PyTorch", "Scikit-learn", "LLMs", "RAG", "Embeddings", "Computer Vision"]
  },
  {
    category: "BACKEND",
    description: "High-throughput asynchronous services, relational persistence & caching.",
    skills: ["FastAPI", "REST APIs", "PostgreSQL", "Redis", "Docker", "Pydantic", "SQLAlchemy"]
  },
  {
    category: "AI INFRASTRUCTURE",
    description: "Dense vector indexing, local model inference & containerized serving.",
    skills: ["FAISS", "Ollama", "Vector Databases", "Model Serving", "Uvicorn"]
  },
  {
    category: "DEVELOPMENT & OPS",
    description: "Reliable version control, automated pipelines & containerized Linux deployments.",
    skills: ["Git", "GitHub", "Linux", "Docker", "CI/CD", "PyTest"]
  }
];

export const processStages = [
  {
    step: "01",
    title: "UNDERSTAND",
    subtitle: "Turn business problem into measurable technical requirements",
    description: "Deconstruct the core operational constraint. Isolate where AI provides real leverage versus where deterministic software logic is superior."
  },
  {
    step: "02",
    title: "DESIGN",
    subtitle: "Architecture before implementation",
    description: "Define architecture, data flows, APIs and failure modes before writing code. Specify schema contracts, latency budgets, and fallback mechanisms."
  },
  {
    step: "03",
    title: "BUILD",
    subtitle: "Modular systems with clear interfaces and validation",
    description: "Develop modular services with robust error-handling, schema validation, and inspectable logging across agentic reasoning paths."
  },
  {
    step: "04",
    title: "DEPLOY",
    subtitle: "Containerize, integrate, monitor and validate production behaviour",
    description: "Package services into isolated Docker containers with automated healthchecks, environment security, and verified external API connectivity."
  },
  {
    step: "05",
    title: "ITERATE",
    subtitle: "Feedback-driven refinement",
    description: "Use real usage telemetry and system feedback to improve the product. Optimize vector retrieval, prompt precision, and query performance based on live demand."
  }
];

export const experience = [
  {
    period: "2026 — PRESENT",
    company: "OCTAGRAM",
    location: "Remote",
    role: "Founder & Technical Lead",
    badge: "PRODUCTION",
    highlight: "6+ signed clients",
    description: "Founded and technically lead a technology company building digital platforms, AI automation systems and business software for commercial clients.",
    highlights: [
      "Engineered autonomous browser agents and API automation pipelines delivering end-to-end client workflows.",
      "Built custom web software, client portals, and CRM synchronization backends with FastAPI and React/Next.js.",
      "Directed technical architecture from initial business discovery to live production deployment across 6+ clients."
    ]
  },
  {
    period: "2026 — PRESENT",
    company: "FOREO",
    location: "Paris / Remote",
    role: "AI Contract Engineer",
    badge: "PRODUCTION · CLIENT",
    description: "Building AI-powered advertising operations, agentic workflows, backend services, integrations and automation systems.",
    highlights: [
      "Architected autonomous agent pipelines automating multi-channel digital advertising lifecycles.",
      "Developed high-throughput FastAPI backend services, schema validation with Pydantic, and vector search retrieval.",
      "Integrated multimodal AI models with internal product catalogs and brand knowledge bases."
    ]
  },
  {
    period: "2025 — 2026",
    company: "FOREO",
    location: "Paris, France",
    role: "AI Intern · Team Lead",
    badge: "PRODUCTION",
    description: "Led a team of four engineers building multimodal AI applications, RAG systems, backend services and ML workflows.",
    highlights: [
      "Directed sprint deliverables covering computer vision feature extraction and FAISS-based vector search pipelines.",
      "Engineered containerized Python microservices and REST APIs for internal operations tooling.",
      "Spearheaded multimodal document grounding systems using local (Ollama) and cloud LLM APIs."
    ]
  },
  {
    period: "2023 — 2024",
    company: "TRAINITY",
    location: "Bangalore, India",
    role: "Data Analyst Intern",
    badge: "INTERNSHIP",
    description: "Business analytics, automated reporting, data processing and SQL/Python workflows.",
    highlights: [
      "Authored optimized SQL queries for extracting key business performance indicators across operational databases.",
      "Built automated data cleaning scripts in Python using Pandas and NumPy.",
      "Structured executive reporting communicating operational metric anomalies and trends."
    ]
  },
  {
    period: "2022",
    company: "ATIC-FRANCE",
    location: "Paris, France",
    role: "Co-founder / AI Developer",
    badge: "EARLY VENTURE",
    description: "NLP pipelines for speech-to-text extraction and automated video summarisation.",
    highlights: [
      "Implemented automated transcription pipelines using speech-to-text NLP models.",
      "Engineered semantic summarization algorithms extracting key discussion topics from media recordings."
    ]
  }
];

export const education = [
  {
    institution: "BITS PILANI",
    degree: "B.Sc. Computer Science",
    period: "2022 — 2026",
    details: "GPA: 9.27 / 10",
    focus: "Distributed Systems, Data Structures & Algorithms, Database Management, Operating Systems"
  },
  {
    institution: "IBM",
    degree: "Data Science Professional Certificate",
    period: "Credential",
    details: "Specialized in Python, Machine Learning, Data Analysis, and Statistical Modeling",
    focus: "Applied Data Science, Machine Learning Models, SQL & Data Pipelines"
  }
];

export const philosophies = [
  {
    id: "01",
    quote: "Build for the problem, not the technology.",
    context: "Technology is a tool for leverage. Forcing fashionable AI models onto problems that require basic database logic adds cost and fragility without value."
  },
  {
    id: "02",
    quote: "A prototype becomes useful when someone can actually use it.",
    context: "Notebook experiments are only preliminary. Software gains real significance when deployed with resilient endpoints, real data inputs, and zero babysitting."
  },
  {
    id: "03",
    quote: "Good engineering makes complexity disappear.",
    context: "The mark of great systems engineering is an interface that feels effortless to the user while quietly orchestrating complex multi-system pipelines beneath."
  }
];
