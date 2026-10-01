export const projects = [
  {
    id: "octagram",
    number: "01",
    flagship: true,
    title: "OCTAGRAM",
    subtitle: "AI-Powered Business Automation Platform",
    organization: "Octagram AI",
    role: "Founder & Technical Lead",
    period: "2026 — Present",
    badge: "PRODUCTION · 6+ CLIENTS",
    highlight: "6+ signed clients",
    url: "https://octagramai.com",
    summary: "Founded and technically led a technology company building digital platforms, autonomous AI automation engines and business software for commercial clients.",
    problem: "Growing service businesses lose hundreds of operational hours to fragmented manual workflows across prospect research, lead qualification, outreach dispatch, CRM synchronization, and client portal delivery. Off-the-shelf SaaS tools rarely integrate cleanly without heavy manual data entry.",
    whatIBuilt: [
      "End-to-end autonomous business automation engine connecting web scrapers, LLM evaluators, and CRM APIs.",
      "Custom web platforms and interactive client portals built on React/Next.js with clean API backends.",
      "Multi-step lead qualification and contextual outreach generation pipelines.",
      "Two-way webhook synchronization layers for automated CRM updates and notification routing."
    ],
    myContribution: [
      "Designed the full system architecture from database schemas and API contracts to async queue workers.",
      "Engineered autonomous browser agents using Playwright and Python backend services with FastAPI.",
      "Implemented LLM reasoning pipelines for automated lead scoring against ideal client profiles.",
      "Delivered and deployed production systems across 6+ commercial clients."
    ],
    technology: [
      "Python",
      "FastAPI",
      "Playwright",
      "PostgreSQL",
      "Redis",
      "React",
      "Docker"
    ],
    workflow: [
      { id: "discovery", label: "BUSINESS DISCOVERY", desc: "Automated search queries across niche industry datasets" },
      { id: "research", label: "AI RESEARCH", desc: "Deep extraction of company profiles, tech stacks, and contacts" },
      { id: "qualification", label: "LEAD QUALIFICATION", desc: "LLM filtering against ideal client profile parameters" },
      { id: "outreach", label: "OUTREACH", desc: "Contextual, grounded message generation & scheduling" },
      { id: "crm", label: "CRM SYNC", desc: "Automated record synchronization and deal pipeline routing" },
      { id: "software", label: "WEBSITE / SOFTWARE", desc: "Custom web applications and interactive client portals" },
      { id: "delivery", label: "CLIENT DELIVERY", desc: "Automated onboarding, validation, and multi-stage execution" }
    ],
    caseStudy: {
      problem: "Service businesses and growing companies frequently operate with disjointed manual processes for prospect discovery, research, outreach, CRM record keeping, and customer onboarding. Off-the-shelf tools often fail to integrate cleanly or require dedicated human operators for repetitive data entry.",
      approach: "Designed bespoke automation engines combining custom browser agents, API connectors, LLM reasoning pipelines, and robust backend services to streamline business processes end-to-end.",
      architectureDetails: [
        {
          layer: "1. Data Discovery & Extraction Engine",
          description: "Targeted browser automation (Playwright) and verified API integrations extracting structured lead and business records."
        },
        {
          layer: "2. Intelligent Qualification Pipeline",
          description: "Task-specific LLM agents evaluating prospects against ICP criteria and generating structured qualification dossiers."
        },
        {
          layer: "3. Multi-Channel Outreach Dispatch",
          description: "API-integrated communication sequences with dynamic, context-grounded personalization and delivery scheduling."
        },
        {
          layer: "4. CRM & Database Synchronization",
          description: "Two-way webhook and REST synchronization with HubSpot, Notion, and relational PostgreSQL databases."
        },
        {
          layer: "5. Client Platform & Delivery Layer",
          description: "Custom web software and interactive client portals built on React/Next.js with clean API backends."
        }
      ],
      myRole: "Founder & Technical Lead. Owned technical architecture, engineered end-to-end backend pipelines, built custom AI agents, integrated external APIs, and worked directly with 6+ clients to deploy production systems.",
      techStackDetails: {
        backend: "Python, FastAPI, Celery, PostgreSQL, Redis",
        automation: "Playwright, Webhooks, REST APIs, Tool Calling",
        frontend: "React, Next.js, Tailwind CSS",
        infrastructure: "Docker, Cloud VPS, Linux"
      },
      outcome: "Built and deployed custom AI automation and web systems across 6+ client organizations, eliminating manual data entry hours and streamlining operational business pipelines."
    }
  },
  {
    id: "foreo-ad-platform",
    number: "02",
    flagship: true,
    title: "AI-POWERED ADVERTISING OPERATIONS",
    subtitle: "Automated Campaign Planning, Creative Workflows & Publishing",
    organization: "FOREO",
    role: "AI Contract Engineer",
    period: "2026 — Present",
    badge: "PRODUCTION · CLIENT",
    summary: "An AI-powered platform designed to automate the lifecycle of digital advertising operations — from campaign planning and product data processing to creative workflows, publishing, monitoring and optimisation.",
    problem: "Digital advertising operations across international consumer product lines involve repetitive, fragmented manual workflows across campaign briefing, creative asset structuring, catalog sync, and channel-by-channel ad launch. Ad teams spend significant operational hours translating campaign goals into ad variations and monitoring distributed platform dashboards.",
    whatIBuilt: [
      "Modular AI pipeline with dedicated task-specific agents orchestrated via FastAPI backend services.",
      "Vector search (RAG) retrieval layer maintaining strict compliance with product catalogs and brand guidelines.",
      "Multimodal creative processing pipeline automating ad copy variations and visual asset validation.",
      "Containerized microservices connecting directly to ad platform APIs for automated publishing and telemetry."
    ],
    myContribution: [
      "Architected the agentic reasoning layer and prompt orchestration pipelines for multi-channel ad lifecycles.",
      "Engineered high-throughput FastAPI REST APIs, schema validation with Pydantic, and PostgreSQL database models.",
      "Integrated multimodal AI models with internal product catalogs and brand knowledge bases.",
      "Containerized backend services with Docker and set up automated integration testing."
    ],
    technology: [
      "Python",
      "FastAPI",
      "Docker",
      "Vector Search",
      "Multimodal AI",
      "PostgreSQL",
      "Redis"
    ],
    workflow: [
      { id: "brief", label: "CAMPAIGN BRIEF", desc: "Structured parsing of marketing briefs & target demographics" },
      { id: "planning", label: "AI PLANNING", desc: "LLM agents decompose targets into actionable channels" },
      { id: "data", label: "CATALOG / DATA SYNC", desc: "Automated catalog enrichment & multimodal asset parsing" },
      { id: "creative", label: "CREATIVE WORKFLOW", desc: "Generation, copy alignment, and brand guideline checking" },
      { id: "publishing", label: "CAMPAIGN PUBLISHING", desc: "API connectors push live assets directly to platforms" },
      { id: "monitoring", label: "MONITORING", desc: "Real-time telemetry ingestion and performance tracking" },
      { id: "optimisation", label: "OPTIMISATION", desc: "Agentic feedback loops adjust allocation and creatives" }
    ],
    caseStudy: {
      problem: "Digital advertising operations across international consumer product lines involve repetitive, fragmented manual workflows across campaign briefing, creative asset structuring, catalog sync, and channel-by-channel ad launch. Ad teams spend significant operational hours translating campaign goals into ad variations and monitoring distributed platform dashboards.",
      approach: "Engineered a modular AI pipeline with dedicated task-specific agents orchestrated via FastAPI backend services. The system ingests campaign goals, cross-references internal product knowledge via vector retrieval (RAG), orchestrates multimodal content preparation, and provides structured API connectors to publish and monitor live ad campaigns.",
      architectureDetails: [
        {
          layer: "1. Brief & Ingestion Engine",
          description: "Structured parsing of marketing briefs, extracting target demographics, SKU priorities, and tone requirements."
        },
        {
          layer: "2. Agentic Reasoning & RAG Layer",
          description: "Retrieval-Augmented Generation across brand guidelines and product catalogs to maintain exact messaging compliance."
        },
        {
          layer: "3. Multimodal Creative & Copy Processing",
          description: "Automated generation, adaptation, and multi-format validation of product copy and visual asset configurations."
        },
        {
          layer: "4. Execution & Publishing Orchestrator",
          description: "Containerized microservices that authenticate, schedule, and push live ad sets via channel APIs."
        },
        {
          layer: "5. Telemetry & Continuous Feedback Loop",
          description: "Automated data polling that surfaces performance metrics back into the decision layer for iterative adjustments."
        }
      ],
      myRole: "AI Contract Engineer. Architected and built core LLM pipelines, autonomous agent workflows, backend FastAPI services, vector search integration, and containerized deployment environments.",
      techStackDetails: {
        backend: "Python, FastAPI, Pydantic, SQLAlchemy",
        ai: "OpenAI API, Multimodal Models, Vector Search, LangChain / Custom Agents",
        infrastructure: "Docker, PostgreSQL, Redis, REST APIs",
        tooling: "Git, PyTest, Automated CI/CD pipelines"
      },
      outcome: "Delivered a centralized operational platform that automates multi-step ad workflows end-to-end, replacing disparate manual touchpoints with a reliable, inspectable AI system."
    }
  },
  {
    id: "multimodal-rag",
    number: "03",
    flagship: false,
    title: "MULTIMODAL AI / RAG SYSTEM",
    subtitle: "Grounded Visual & Textual Retrieval with Local and Cloud LLMs",
    organization: "FOREO",
    role: "AI Intern · Team Lead",
    period: "2025 — 2026",
    badge: "PRODUCTION · TEAM LEAD",
    summary: "A multimodal AI application combining image classification, dense vector retrieval and LLM-generated responses grounded in structured knowledge bases.",
    problem: "Standard text-only RAG pipelines fail when domain knowledge relies heavily on visual diagrams, physical product inspections, and multi-format technical documentation.",
    whatIBuilt: [
      "Dual-stream ingestion pipeline extracting joint visual and textual embeddings into FAISS.",
      "Hybrid similarity search matching query images and text against technical reference datasets.",
      "FastAPI service orchestrating prompt context synthesis with local (Ollama) and cloud LLM APIs.",
      "Containerized inference service with strict validation against hallucinations."
    ],
    myContribution: [
      "Led a team of 4 engineers through sprints covering data preprocessing, embedding design, and service integration.",
      "Implemented CLIP-based visual feature extraction and FAISS dense vector indexing.",
      "Built FastAPI middleware to assemble grounded prompts with citation metadata.",
      "Configured containerized deployments supporting Ollama for on-premises inference."
    ],
    technology: [
      "Python",
      "FastAPI",
      "FAISS",
      "CLIP",
      "Ollama",
      "Docker",
      "PyTorch"
    ],
    workflow: [
      { id: "input", label: "IMAGE + QUERY", desc: "Multimodal user input with visual and textual context" },
      { id: "vision", label: "IMAGE EMBEDDING", desc: "Visual feature extraction & classification via CLIP" },
      { id: "vector", label: "FAISS SEARCH", desc: "Sub-second similarity matching across indexed knowledge base" },
      { id: "llm", label: "LLM REASONING", desc: "Context injection into local (Ollama) / cloud LLM prompts" },
      { id: "grounded", label: "VERIFIED RESPONSE", desc: "Hallucination-checked, cited technical response" }
    ],
    caseStudy: {
      problem: "Standard text-only RAG pipelines fail when domain knowledge relies heavily on visual diagrams, physical product inspections, and multi-format technical documentation.",
      approach: "Built a dual-stream ingestion pipeline that extracts dense vector embeddings for both image components and textual segments, storing them in FAISS. At query time, user images and text prompts are jointly embedded and matched against indexed reference materials, synthesizing grounded answers with zero external hallucinations.",
      architectureDetails: [
        {
          layer: "1. Multimodal Ingestion Pipeline",
          description: "Image feature extraction alongside text chunking with metadata tagging."
        },
        {
          layer: "2. Hybrid Vector Indexing",
          description: "FAISS index managing dense multimodal embeddings for sub-second similarity search."
        },
        {
          layer: "3. Context Synthesis Engine",
          description: "FastAPI middleware injecting retrieved visual labels and textual chunks into the LLM system prompt."
        },
        {
          layer: "4. Deployment & Local Inference",
          description: "Containerized deployment with flexible model fallback (Ollama for on-prem, OpenAI/Anthropic APIs for cloud)."
        }
      ],
      myRole: "Team Lead & Engineer, directing 4 engineers on data preprocessing, embedding design, index optimization, and FastAPI service integration.",
      techStackDetails: {
        core: "Python, FastAPI, PyTorch, FAISS",
        models: "CLIP, Ollama (Llama 3), OpenAI GPT-4o Vision API",
        ops: "Docker, Uvicorn, Git"
      },
      outcome: "Delivered a high-speed multimodal retrieval system capable of answering complex user inquiries containing both images and text with verifiable document grounding."
    }
  },
  {
    id: "influencer-roi",
    number: "04",
    flagship: false,
    title: "INFLUENCER ROI PREDICTION",
    subtitle: "Predictive ML Pipeline for Multi-Platform Marketing Analytics",
    organization: "FOREO / Analytics Research",
    role: "ML & Backend Developer",
    period: "2025",
    badge: "PRODUCTION · ML SYSTEM",
    summary: "An ML system using multi-platform business data to estimate creator performance and support marketing decision-making.",
    problem: "Marketing teams frequently allocate substantial advertising spend to creator partnerships based on vanity metrics like follower count, leading to high variability in actual commercial ROI.",
    whatIBuilt: [
      "SQL data extraction and ETL pipeline aggregating historical campaign logs and conversion attributions.",
      "Feature engineering module computing engagement velocity, audience authentic interaction ratios, and category affinity.",
      "Supervised Scikit-learn regression and gradient-boosting models predicting revenue intervals.",
      "FastAPI endpoint serving real-time ROI forecasts and confidence intervals to decision dashboards."
    ],
    myContribution: [
      "Designed and authored SQL aggregation queries across historical multi-platform marketing datasets.",
      "Built feature extraction pipelines in Python using Pandas and NumPy.",
      "Trained and evaluated Scikit-learn regression models using cross-validation.",
      "Created containerized FastAPI inference endpoint returning structured JSON predictions."
    ],
    technology: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "SQL",
      "FastAPI",
      "PostgreSQL"
    ],
    workflow: [
      { id: "data", label: "MULTI-PLATFORM DATA", desc: "Historical campaign metrics, engagements, and sales logs" },
      { id: "processing", label: "ETL & CLEANING", desc: "Deduplication, normalization, and missing value imputation" },
      { id: "features", label: "FEATURE PIPELINE", desc: "Audience quality scores, velocity, and category affinity" },
      { id: "model", label: "ML MODEL", desc: "Trained gradient boosting & regression models" },
      { id: "prediction", label: "ROI FORECAST", desc: "Expected conversion rates and revenue interval forecasts" },
      { id: "decision", label: "DECISION API", desc: "FastAPI endpoint delivering predictions to media planners" }
    ],
    caseStudy: {
      problem: "Marketing teams frequently allocate substantial advertising spend to creator partnerships based on vanity metrics like follower count, leading to high variability in actual commercial ROI.",
      approach: "Built a structured data pipeline extracting engagement histories, audience demographics, and historical sales attribution data. Developed a supervised machine learning model to predict expected conversion and ROI boundaries before contract commitment.",
      architectureDetails: [
        {
          layer: "1. Data Pipeline & ETL",
          description: "SQL ingestion aggregating past campaign records, post frequencies, and conversion attributions."
        },
        {
          layer: "2. Feature Engineering Suite",
          description: "Calculated engagement velocity, audience authentic interaction ratios, and historical category performance."
        },
        {
          layer: "3. Predictive Model Training",
          description: "Scikit-learn regression and ensemble models cross-validated against historical campaign results."
        },
        {
          layer: "4. Decision Support API",
          description: "FastAPI endpoint delivering confidence intervals and ROI forecasts directly to marketing dashboards."
        }
      ],
      myRole: "Engineered data preprocessing scripts, built feature extraction pipelines with Pandas/NumPy, trained Scikit-learn models, and created the inference API.",
      techStackDetails: {
        stack: "Python, Pandas, NumPy, Scikit-learn, SQL",
        api: "FastAPI, SQLite / PostgreSQL",
        visualization: "Matplotlib, Seaborn (for model evaluation metrics)"
      },
      outcome: "Implemented an empirical scoring framework providing media planners with quantifiable revenue estimations prior to campaign investment."
    }
  }
];

export const selectedRepositories = [
  {
    name: "ai-ad-operations-orchestrator",
    description: "Multi-agent orchestration service automating campaign briefing, RAG catalog enrichment, and API publishing.",
    tech: ["Python", "FastAPI", "Vector Search", "Docker"],
    demonstrates: "Async microservices, state machines, and multi-channel API connectors."
  },
  {
    name: "multimodal-rag-faiss",
    description: "Dual-stream visual and textual document retrieval engine using CLIP embeddings and local/cloud LLMs.",
    tech: ["Python", "FAISS", "CLIP", "Ollama", "FastAPI"],
    demonstrates: "Joint multimodal vector indexing, citation grounding, and local inference fallback."
  },
  {
    name: "influencer-roi-ml-service",
    description: "Supervised ML pipeline predicting creator conversion rates and ROI intervals from multi-platform data.",
    tech: ["Python", "Scikit-learn", "Pandas", "SQL", "FastAPI"],
    demonstrates: "Feature engineering pipelines, model validation, and production API serving."
  },
  {
    name: "enterprise-agent-workflows",
    description: "Autonomous browser and API automation engines for lead discovery, CRM sync, and client delivery.",
    tech: ["Python", "Playwright", "FastAPI", "Redis", "Celery"],
    demonstrates: "Robust browser automation, retry policies, and webhook synchronization."
  }
];
