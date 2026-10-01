export const projects = [
  {
    id: "foreo-ad-platform",
    number: "01",
    flagship: true,
    title: "AI-POWERED ADVERTISING OPERATIONS",
    subtitle: "End-to-end digital advertising automation & agentic workflows",
    organization: "FOREO",
    role: "AI Contract Engineer",
    focus: "AI Agents · LLM Workflows · RAG · APIs · Automation · Backend",
    summary: "An AI-powered platform designed to automate the lifecycle of digital advertising operations — from campaign planning and product data processing to creative workflows, publishing, monitoring and optimisation.",
    technology: [
      "Python",
      "FastAPI",
      "Docker",
      "Vector Search",
      "Multimodal AI",
      "REST APIs",
      "PostgreSQL"
    ],
    workflow: [
      { id: "brief", label: "CAMPAIGN BRIEF", desc: "Ingestion of strategic creative targets and objectives" },
      { id: "planning", label: "AI PLANNING", desc: "LLM agents decompose targets into actionable channels" },
      { id: "data", label: "PRODUCT / DATA PROCESSING", desc: "Automated catalog enrichment & multimodal asset parsing" },
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
      myRole: "Served as AI Contract Engineer, architecting and building the core LLM pipelines, autonomous agent workflows, backend FastAPI services, vector search integration, and containerized deployment environments.",
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
    id: "octagram",
    number: "02",
    flagship: false,
    title: "OCTAGRAM",
    subtitle: "AI-POWERED BUSINESS AUTOMATION",
    organization: "Octagram AI",
    role: "Founder & Technical Lead",
    focus: "Digital Platforms · AI Automation · CRM Workflows · Lead Systems",
    summary: "Founded and technically led a technology company building digital platforms, AI automation systems and business software for businesses.",
    highlight: "6+ signed clients",
    url: "https://octagramai.com",
    technology: [
      "Python",
      "FastAPI",
      "AI Agents",
      "Browser Automation",
      "CRM APIs",
      "Next.js/React",
      "PostgreSQL"
    ],
    workflow: [
      { id: "discovery", label: "LEAD DISCOVERY", desc: "Automated search queries across niche industry datasets" },
      { id: "research", label: "RESEARCH", desc: "Deep extraction of company info, tech stacks, and contacts" },
      { id: "qualification", label: "QUALIFICATION", desc: "LLM filtering against ideal client profile parameters" },
      { id: "outreach", label: "OUTREACH", desc: "Personalized contextual message generation" },
      { id: "crm", label: "CRM", desc: "Automated record synchronization and deal pipeline routing" },
      { id: "software", label: "WEBSITE / SOFTWARE", desc: "Custom web applications and interactive client portals" },
      { id: "followup", label: "FOLLOW-UP", desc: "Automated multi-stage trigger-based engagement" }
    ],
    caseStudy: {
      problem: "Service businesses and growing companies frequently operate with disjointed manual processes for prospect discovery, research, outreach, CRM record keeping, and customer onboarding. Off-the-shelf tools often fail to integrate cleanly or require dedicated human operators for repetitive data entry.",
      approach: "Designed bespoke automation engines combining custom browser agents, API connectors, LLM reasoning pipelines, and robust backend services to streamline business processes end-to-end.",
      architectureDetails: [
        {
          layer: "1. Data Discovery & Extraction",
          description: "Targeted scrapers and verified dataset integrations extracting structured lead records."
        },
        {
          layer: "2. Intelligent Qualification Engine",
          description: "LLM agents scoring prospects against ICP criteria and generating contextual dossier summaries."
        },
        {
          layer: "3. Multi-Channel Outreach Dispatch",
          description: "API-integrated email and messaging sequences with dynamic, context-grounded personalization."
        },
        {
          layer: "4. CRM & Database Synchronization",
          description: "Two-way webhook synchronization with HubSpot, Notion, and relational PostgreSQL stores."
        }
      ],
      myRole: "Founder and Technical Lead. Led architectural design, engineered the end-to-end backend pipelines, built custom AI agents, integrated third-party APIs, and worked directly with 6+ clients to deploy production systems.",
      techStackDetails: {
        backend: "Python, FastAPI, Celery, PostgreSQL",
        automation: "Playwright, Webhooks, REST APIs, LangChain",
        frontend: "React, Next.js, Tailwind CSS",
        infra: "Docker, Cloud VPS, Redis"
      },
      outcome: "Built and deployed custom AI automation and web systems across 6+ client organizations, eliminating manual data entry hours and streamlining operational lead pipelines."
    }
  },
  {
    id: "multimodal-rag",
    number: "03",
    flagship: false,
    title: "MULTIMODAL AI / RAG SYSTEM",
    subtitle: "Grounded visual & textual retrieval with local/cloud LLMs",
    organization: "Engineering Project / FOREO",
    role: "AI Intern · Team Lead",
    focus: "Vector Search · Embeddings · Multimodal Ingestion · Ollama · FAISS",
    summary: "A multimodal AI application combining image classification, retrieval and LLM-generated responses grounded in structured knowledge bases.",
    technology: [
      "Python",
      "FastAPI",
      "FAISS",
      "Embeddings",
      "LLMs",
      "Docker",
      "Ollama"
    ],
    workflow: [
      { id: "input", label: "IMAGE + USER QUERY", desc: "Multimodal user input with visual and textual context" },
      { id: "vision", label: "IMAGE MODEL + RETRIEVAL", desc: "Visual embedding extraction & classification" },
      { id: "vector", label: "VECTOR SEARCH", desc: "Similarity matching across FAISS index knowledge" },
      { id: "llm", label: "LLM REASONING", desc: "Context injection into local / API model prompts" },
      { id: "grounded", label: "GROUNDED RESPONSE", desc: "Hallucination-checked, cited technical response" }
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
    subtitle: "Predictive ML pipeline for multi-platform marketing analytics",
    organization: "FOREO / Analytics Research",
    role: "ML & Backend Developer",
    focus: "Predictive Modeling · Feature Engineering · Data Pipelines · SQL",
    summary: "An ML system using multi-platform business data to estimate influencer performance and support marketing decision-making.",
    technology: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "SQL",
      "FastAPI"
    ],
    workflow: [
      { id: "data", label: "MULTI-PLATFORM DATA", desc: "Historical campaign metrics, engagements, and sales logs" },
      { id: "processing", label: "PROCESSING", desc: "Deduplication, normalization, and missing value imputation" },
      { id: "features", label: "FEATURE ENGINEERING", desc: "Audience quality scores, velocity, and category affinity" },
      { id: "model", label: "ML MODEL", desc: "Trained gradient boosting & regression models" },
      { id: "prediction", label: "PREDICTION", desc: "Expected conversion rates and revenue interval forecasts" },
      { id: "decision", label: "DECISION SUPPORT", desc: "API serving structured recommendations to media buyers" }
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
