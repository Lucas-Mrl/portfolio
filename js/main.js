/* ============================================================
   TRANSLATIONS
============================================================ */
const i18n = {
  pt: {
    nav_skills:   "Skills",
    nav_exp:      "Experiência",
    nav_projects: "Projetos",
    nav_about:    "Sobre",

    hero_badge:     "Marketing Analytics · BI · Martech",
    hero_tagline:   "Conectando mídia, dados e tecnologia para transformar informação em decisão.",
    hm_platforms:   "Plataformas",
    hm_stores:      "Lojas",
    hm_savings:     "↓ Tempo Manual",
    hero_cta_proj:  "Ver Projetos",

    skills_tag:   "competências",
    skills_title: "Stack & Ferramentas",
    sk_analytics_title: "Analytics & BI",
    sk_analytics_desc:  "Análise de performance, dashboards e storytelling com dados.",
    sk_dev_title:       "Dev & Automação",
    sk_tracking_title:  "Tracking & Martech",
    sk_media_title:     "Mídia Paga",
    sk_media_desc:      "Gestão e análise em múltiplas plataformas.",
    sk_media_stat:      "plataformas integradas",
    sk_infra_title:     "Infra & Cloud",

    exp_tag:   "trajetória",
    exp_title: "Experiência",
    exp_current: "Atual",

    exp1_period: "Fev 2026 — presente",
    exp1_role:   "Analista de Mídia / BI",
    exp1_loc:    "Ourinhos, SP · Remoto · AudioNova Brasil",
    exp1_desc:   "Atuo diretamente na conta AudioNova — operação de grande porte no setor de saúde auditiva com mais de 280 lojas no Brasil. Reúne mídia paga em múltiplas plataformas, análise de dados, tracking, BI, automação e desenvolvimento de soluções internas.",
    exp1_b1:     "Gestão e análise de campanhas em 8 plataformas: Meta, Google, TikTok, Taboola, Pinterest, Kwai, Bing e X Ads",
    exp1_b2:     "Desenvolvimento de ecossistema de automação (media-reports, media-reports-web, store-view) — 90% de redução em trabalho manual",
    exp1_b3:     "Implementação e manutenção de tracking: GTM, GA4, Meta CAPI, TikTok CAPI, eventos personalizados",
    exp1_b4:     "Apresentação de resultados e recomendações estratégicas diretamente ao cliente, traduzindo dados técnicos em decisões",

    exp2_period: "Mar 2025 — Out 2025",
    exp2_role:   "Analista de Dados e Growth Marketing",
    exp2_loc:    "Idiomus · Educação Digital · Expansão Internacional",
    exp2_desc:   "Operação de educação digital em expansão internacional com campanhas de alto volume em múltiplos países. Análise de dados, performance de mídia e estruturação de processos de mensuração durante período de ~20% de crescimento no faturamento.",
    exp2_b1:     "Gestão e análise de campanhas em Google Ads, Meta Ads e TikTok Ads para funis perpétuos e lançamentos (ROAS, CAC, CPA, conversão)",
    exp2_b2:     "Desenvolvimento de dashboards em Looker Studio, Power BI e Excel para equipes de marketing, produto e gestão",
    exp2_b3:     "Implementação de rastreamento avançado com GA4 e GTM, eventos customizados e auditorias de jornada",
    exp2_b4:     "ETL/ELT com Python, Pandas e BigQuery; automações com n8n e Make; integração com Hotmart e CRMs",
    exp2_b5:     "Análise de cohort, testes A/B, segmentações e análise de funil para identificação de oportunidades de crescimento",

    exp3_period: "Set 2024 — Mar 2025",
    exp3_role:   "Gestor de Tráfego e Funis de Venda",
    exp3_loc:    "Senden Mídias · Delivery · 13 contas simultâneas",
    exp3_desc:   "Gestão simultânea de até 13 clientes do setor de delivery. Foco em ROAS, conversão e eficiência de investimento com relatórios estruturados e análise de funil.",
    exp3_b1:     "Campanhas em Google Ads e Meta Ads com acompanhamento de ROAS, CAC, CPA, CPC, CTR e conversão",
    exp3_b2:     "Campanhas otimizadas atingiram ROAS entre 8x e 20x; contribuição para aumentos de até 25% em taxas de conversão",
    exp3_b3:     "Análise de funil, criativos, ofertas e páginas para identificação de gargalos que impactavam conversão",
    exp3_b4:     "Dashboards e relatórios em Excel, Notion e ClickUp — redução de ~50% no tempo de apresentação de resultados",

    exp4_period:  "Anterior a Set 2024",
    exp4_role:    "Gestor de Tráfego e Marketing Digital",
    exp4_company: "Autônomo",
    exp4_loc:     "Empresas locais · Região de Ourinhos, SP",
    exp4_desc:    "Ciclo completo: campanhas em Google Ads e Meta Ads, criação de páginas e landing pages, copywriting, análise de métricas e otimização de conversão. Base prática em aquisição, comportamento do consumidor e análise de jornada.",

    edu_tag:   "formação",
    edu_title: "Educação & Certificações",
    edu1_title: "Tecnólogo em ADS",
    edu1_desc:  "Análise e Desenvolvimento de Sistemas — banco de dados, eng. de software, desenvolvimento web.",
    edu2_title: "Certificações",
    edu2_desc:  "Data Analyst Associate, Google Ads, Meta Ads, SQL, Python, Growth, BI, CRO.",

    proj_tag:   "portfólio",
    proj_title: "Projetos",
    proj_desc:  "Clique em qualquer card para ver o case completo.",

    pt_open:     "Open Source",
    pt_client:   "Client Work",
    pt_tool:     "Ferramenta Interna",
    pt_personal: "Projeto Pessoal",
    p_case:      "Ver Case ↗",
    p_gh:        "GitHub",

    p1_title: "Relatório de Mídia Automatizado",
    p1_desc:  "Pipeline que coleta spend de 9+ plataformas via API, agrega por regional e exporta para Google Sheets — diariamente, sem intervenção manual.",
    p2_title: "Leads Processor",
    p2_desc:  "App estática que reconcilia leads cruzando bases MDK e Total com mapeamento determinístico de ~280 lojas e ~80 parceiros PV.",
    p3_title: "AI Ad Metrics Analyzer",
    p3_desc:  "App com coleta automatizada de métricas de campanhas, tratamento de dados e geração de recomendações com suporte de inteligência artificial.",
    p4_title: "Meta CAPI — AudioNova",
    p4_desc:  "Implementação completa de Conversions API server-side para operação com 1.000+ anúncios ativos em 16 regionais.",
    p5_title: "Email → ClickUp Automation",
    p5_desc:  "Lê emails do FreshService via Microsoft Graph API, extrai dados estruturados com IA e cria tasks no ClickUp automaticamente.",
    p6_title: "TikTok Pixel & CAPI V2",
    p6_desc:  "Reconfiguração completa do tracking server-side do TikTok com estrutura de eventos alinhada a campanhas de lead gen.",
    p7_title: "Ad-Level Analytics Web App",
    p7_desc:  "Dashboard para análise granular por anúncio com cache inteligente, cruzamento com CRM e exportação Excel.",
    p8_title: "Store-Level Analytics",
    p8_desc:  "Dashboard por loja para 280+ unidades AudioNova com autenticação, drill-down regional e exportação Excel.",
    p9_title: "Executive Summary HTML/PDF",
    p9_desc:  "Relatório executivo gerado automaticamente a partir de PowerPoint, entregue em HTML interativo e PDF para reuniões de performance.",

    about_tag:  "sobre",
    about_title: "Analytics que\nentende de mídia.",
    about_p1:   "Meu diferencial é atuar nos dois extremos: execução técnica (APIs, Python, SQL, tracking, automações) e interpretação estratégica (análise de performance, recomendações de verba, otimização de funil).",
    about_p2:   "Minha trajetória começou no marketing digital — tráfego pago, funis e CRO — e evoluiu para o lado técnico quando percebi que a maioria dos problemas de performance não estava nas campanhas, mas na falta de mensuração confiável e processos para transformar dados em decisão.",
    about_p3:   "Baseado em Ourinhos, SP. Buscando posições em Marketing Analytics, BI, Growth Analytics ou Martech onde possa conectar dados, tecnologia e negócio.",

    contact_wa:    "WhatsApp",
    contact_email: "E-mail",

    footer_text: "Feito com HTML, CSS & JS puro · 2025",
  },

  en: {
    nav_skills:   "Skills",
    nav_exp:      "Experience",
    nav_projects: "Projects",
    nav_about:    "About",

    hero_badge:     "Marketing Analytics · BI · Martech",
    hero_tagline:   "Connecting media, data, and technology to turn information into decisions.",
    hm_platforms:   "Platforms",
    hm_stores:      "Stores",
    hm_savings:     "↓ Manual Work",
    hero_cta_proj:  "See Projects",

    skills_tag:   "stack",
    skills_title: "Skills & Tools",
    sk_analytics_title: "Analytics & BI",
    sk_analytics_desc:  "Performance analysis, dashboards and data storytelling.",
    sk_dev_title:       "Dev & Automation",
    sk_tracking_title:  "Tracking & Martech",
    sk_media_title:     "Paid Media",
    sk_media_desc:      "Management and analysis across multiple platforms.",
    sk_media_stat:      "integrated platforms",
    sk_infra_title:     "Infra & Cloud",

    exp_tag:   "career",
    exp_title: "Experience",
    exp_current: "Current",

    exp1_period: "Feb 2026 — present",
    exp1_role:   "Media / BI Analyst",
    exp1_loc:    "Ourinhos, SP · Remote · AudioNova Brasil",
    exp1_desc:   "Working directly on the AudioNova account — a large-scale operation in the hearing health sector with over 280 stores across Brazil. Combines paid media across multiple platforms, data analysis, tracking, BI, automation, and in-house tool development.",
    exp1_b1:     "Campaign management and analysis across 8 platforms: Meta, Google, TikTok, Taboola, Pinterest, Kwai, Bing and X Ads",
    exp1_b2:     "Built automation ecosystem (media-reports, media-reports-web, store-view) — 90% reduction in manual work",
    exp1_b3:     "Tracking implementation and maintenance: GTM, GA4, Meta CAPI, TikTok CAPI, custom events",
    exp1_b4:     "Presenting results and strategic recommendations directly to the client, translating technical data into decisions",

    exp2_period: "Mar 2025 — Oct 2025",
    exp2_role:   "Data & Growth Marketing Analyst",
    exp2_loc:    "Idiomus · Digital Education · International Expansion",
    exp2_desc:   "Digital education operation in international expansion with high-volume campaigns across multiple countries. Data analysis, media performance, and measurement process structuring during a period of ~20% revenue growth.",
    exp2_b1:     "Campaign management and analysis in Google Ads, Meta Ads and TikTok Ads for evergreen funnels and launches (ROAS, CAC, CPA, conversion)",
    exp2_b2:     "Dashboard development in Looker Studio, Power BI and Excel for marketing, product and management teams",
    exp2_b3:     "Advanced tracking setup with GA4 and GTM, custom events, and journey audits",
    exp2_b4:     "ETL/ELT with Python, Pandas and BigQuery; automations with n8n and Make; Hotmart and CRM integrations",
    exp2_b5:     "Cohort analysis, A/B testing, segmentation and funnel analysis to identify growth opportunities",

    exp3_period: "Sep 2024 — Mar 2025",
    exp3_role:   "Traffic Manager and Sales Funnel Specialist",
    exp3_loc:    "Senden Mídias · Delivery sector · 13 simultaneous accounts",
    exp3_desc:   "Simultaneous management of up to 13 clients in the delivery sector. Focus on ROAS, conversion, and investment efficiency with structured reporting and funnel analysis.",
    exp3_b1:     "Campaigns on Google Ads and Meta Ads tracking ROAS, CAC, CPA, CPC, CTR and conversion",
    exp3_b2:     "Optimized campaigns achieved ROAS between 8x and 20x; contribution to conversion rate increases of up to 25%",
    exp3_b3:     "Funnel, creative, offer, and landing page analysis to identify conversion bottlenecks",
    exp3_b4:     "Dashboards and reports in Excel, Notion and ClickUp — ~50% reduction in results presentation time",

    exp4_period:  "Before Sep 2024",
    exp4_role:    "Traffic Manager and Digital Marketing",
    exp4_company: "Freelance",
    exp4_loc:     "Local businesses · Ourinhos region, SP",
    exp4_desc:    "Full cycle: Google Ads and Meta Ads campaigns, landing page creation, copywriting, metrics analysis and conversion optimization. Practical foundation in acquisition, consumer behavior and journey analysis.",

    edu_tag:   "education",
    edu_title: "Education & Certifications",
    edu1_title: "Systems Analysis and Development",
    edu1_desc:  "Tecnólogo (Associate's degree) — databases, software engineering, web development.",
    edu2_title: "Certifications",
    edu2_desc:  "Data Analyst Associate, Google Ads, Meta Ads, SQL, Python, Growth, BI, CRO.",

    proj_tag:   "portfolio",
    proj_title: "Projects",
    proj_desc:  "Click any card to see the full case study.",

    pt_open:     "Open Source",
    pt_client:   "Client Work",
    pt_tool:     "Internal Tool",
    pt_personal: "Personal Project",
    p_case:      "View Case ↗",
    p_gh:        "GitHub",

    p1_title: "Automated Media Report",
    p1_desc:  "Pipeline that collects spend from 9+ platforms via API, aggregates by region and exports to Google Sheets — daily, without manual intervention.",
    p2_title: "Leads Processor",
    p2_desc:  "Static app that reconciles leads by cross-referencing MDK and Total databases with deterministic mapping of ~280 stores and ~80 PV partners.",
    p3_title: "AI Ad Metrics Analyzer",
    p3_desc:  "App with automated campaign metrics collection, data processing, and AI-powered recommendation generation.",
    p4_title: "Meta CAPI — AudioNova",
    p4_desc:  "Full server-side Conversions API implementation for an operation with 1,000+ simultaneous active ads across 16 regions.",
    p5_title: "Email → ClickUp Automation",
    p5_desc:  "Reads FreshService emails via Microsoft Graph API, extracts structured data with AI, and automatically creates ClickUp tasks.",
    p6_title: "TikTok Pixel & CAPI V2",
    p6_desc:  "Full reconfiguration of TikTok server-side tracking with an event structure aligned to lead gen campaigns.",
    p7_title: "Ad-Level Analytics Web App",
    p7_desc:  "Dashboard for granular per-ad analysis with smart caching, CRM cross-referencing, and Excel export.",
    p8_title: "Store-Level Analytics",
    p8_desc:  "Store-level dashboard for 280+ AudioNova units with authentication, regional drill-down, and Excel export.",
    p9_title: "Executive Summary HTML/PDF",
    p9_desc:  "Automated executive report generated from PowerPoint, delivered as interactive HTML and PDF for performance meetings.",

    about_tag:  "about",
    about_title: "Analytics that\nunderstands media.",
    about_p1:   "My edge is operating on both ends: technical execution (APIs, Python, SQL, tracking, automation) and strategic interpretation (performance analysis, budget recommendations, funnel optimization).",
    about_p2:   "My journey started in digital marketing — paid traffic, funnels, and CRO — and evolved toward the technical side when I realized most performance problems weren't in the campaigns themselves, but in the lack of reliable measurement and processes to turn data into decisions.",
    about_p3:   "Based in Ourinhos, SP (Brazil). Looking for positions in Marketing Analytics, BI, Growth Analytics or Martech where I can connect data, technology and business.",

    contact_wa:    "WhatsApp",
    contact_email: "Email",

    footer_text: "Built with pure HTML, CSS & JS · 2025",
  }
};

/* ============================================================
   PROJECT DATA (case studies)
============================================================ */
const projects = {
  "media-reports": {
    pt: {
      tag: "Open Source · Python · Automação",
      title: "Relatório de Mídia Automatizado",
      stack: ["Python", "GitHub Actions", "Google Sheets API", "Meta Marketing API", "Google Ads API (GAQL)", "TikTok Ads API", "Taboola API", "Bing Ads API", "X Ads API", "Pinterest API", "MySQL", "FastAPI"],
      problem: {
        label: "O Problema",
        text: "Consolidar diariamente o gasto de 9+ plataformas em um relatório por regional exigia horas de trabalho manual, era propenso a erros e criava inconsistências na comparação entre plataformas com estruturas de API completamente diferentes."
      },
      solution: {
        label: "A Solução",
        text: "Pipeline modular com um conector independente por plataforma, orquestrado por um main.py central. A cada execução diária (GitHub Actions, 3h AM Brasília), o sistema coleta spend via API, agrega por regional via pattern-matching em nomes de campanha, normaliza a matriz de dados e faz batch-write atômico no Google Sheets.",
        bullets: [
          "9 conectores independentes: Meta, Google Ads, TikTok, Pinterest, Taboola, Bing, X, Kwai e YouTube",
          "Integração com MySQL interno para calcular CPL cruzando leads com spend por ferramenta",
          "Agregação por 16 regionais via pattern-matching nos nomes de campanha (_RJ, _SPC1, _NE...)",
          "Rollover mensal automático: arquiva dados do mês anterior e reseta a planilha sem intervenção manual",
          "Error resilience: falhas individuais por plataforma não travam o pipeline inteiro",
          "Batch-write atômico: uma única chamada escreve a matriz completa, evitando rate limits",
          "Layout-aware: detecta dinamicamente a estrutura da planilha sem hardcoding de células",
          "Web app (FastAPI) com drill-down por anúncio/campanha, cache inteligente (TTL diferenciado) e export Excel"
        ]
      },
      impact: {
        label: "Resultado",
        items: [
          { value: "0h", label: "trabalho manual diário de consolidação" },
          { value: "9+", label: "plataformas integradas" },
          { value: "16", label: "regionais agregadas automaticamente" },
          { value: "90%", label: "redução de tempo em tarefas manuais" }
        ]
      },
      github: "https://github.com/Lucas-Mrl"
    },
    en: {
      tag: "Open Source · Python · Automation",
      title: "Automated Media Report",
      stack: ["Python", "GitHub Actions", "Google Sheets API", "Meta Marketing API", "Google Ads API (GAQL)", "TikTok Ads API", "Taboola API", "Bing Ads API", "X Ads API", "Pinterest API", "MySQL", "FastAPI"],
      problem: {
        label: "The Problem",
        text: "Consolidating daily spend from 9+ platforms into a regional report required hours of manual work, was error-prone, and created inconsistencies when comparing platforms with entirely different API structures."
      },
      solution: {
        label: "The Solution",
        text: "A modular pipeline with one independent connector per platform, orchestrated by a central main.py. On each daily run (GitHub Actions, 3 AM Brasília), the system fetches spend via API, aggregates by region using campaign name pattern-matching, normalizes the data matrix, and performs an atomic batch-write to Google Sheets.",
        bullets: [
          "9 independent connectors: Meta, Google Ads, TikTok, Pinterest, Taboola, Bing, X, Kwai and YouTube",
          "Internal MySQL integration to calculate CPL by cross-referencing leads with spend per tool",
          "16-regional aggregation via campaign name pattern-matching (_RJ, _SPC1, _NE...)",
          "Automatic monthly rollover: archives previous month and resets the sheet without manual intervention",
          "Error resilience: individual platform failures don't stop the entire pipeline",
          "Atomic batch-write: a single API call writes the full matrix, avoiding rate limits",
          "Layout-aware: dynamically detects spreadsheet structure without hardcoded cell references",
          "Web app (FastAPI) with ad/campaign drill-down, smart caching (differentiated TTL) and Excel export"
        ]
      },
      impact: {
        label: "Results",
        items: [
          { value: "0h", label: "daily manual consolidation work" },
          { value: "9+", label: "platforms integrated" },
          { value: "16", label: "regions aggregated automatically" },
          { value: "90%", label: "reduction in manual task time" }
        ]
      },
      github: "https://github.com/Lucas-Mrl"
    }
  },

  "leads-processor": {
    pt: {
      tag: "Open Source · JavaScript",
      title: "Leads Processor",
      stack: ["JavaScript", "HTML/CSS", "GitHub Pages", "Algoritmo de reconciliação"],
      problem: {
        label: "O Problema",
        text: "Conciliar relatórios de leads de duas fontes distintas (base MDK interna e base Total da plataforma) era feito manualmente, sem consistência no mapeamento de nomes de lojas e parceiros. Com ~280 lojas e ~80 parceiros PV com nomenclaturas variadas, erros de conciliação eram frequentes."
      },
      solution: {
        label: "A Solução",
        text: "App estática hospedada no GitHub Pages. O usuário faz upload de dois arquivos, o app cruza os dados usando mapeamento determinístico de nomes de lojas e parceiros e gera o relatório consolidado. Zero dependências de backend.",
        bullets: [
          "Mapeamento determinístico de ~280 lojas com variações de nomenclatura normalizadas",
          "~80 parceiros PV mapeados com aliases e grafias alternativas",
          "Cruzamento automático das bases MDK vs Total por loja",
          "100% client-side — roda no browser, sem backend",
          "Interface de upload simples com feedback visual imediato",
          "Exportação do relatório consolidado"
        ]
      },
      impact: {
        label: "Resultado",
        items: [
          { value: "100%", label: "client-side, zero backend" },
          { value: "~280", label: "lojas mapeadas" },
          { value: "~80", label: "parceiros PV mapeados" },
          { value: "0", label: "dependências externas" }
        ]
      },
      github: "https://github.com/Lucas-Mrl/leads-processor"
    },
    en: {
      tag: "Open Source · JavaScript",
      title: "Leads Processor",
      stack: ["JavaScript", "HTML/CSS", "GitHub Pages", "Reconciliation Algorithm"],
      problem: {
        label: "The Problem",
        text: "Reconciling lead reports from two distinct sources (internal MDK base and Total platform base) was done manually, with no consistency in store and partner name mapping. With ~280 stores and ~80 PV partners with varied naming conventions, reconciliation errors were frequent."
      },
      solution: {
        label: "The Solution",
        text: "A static app hosted on GitHub Pages. The user uploads two files, the app cross-references the data using deterministic store and partner name mapping, and generates the consolidated report. Zero backend dependencies.",
        bullets: [
          "Deterministic mapping of ~280 stores with normalized naming variations",
          "~80 PV partners mapped with aliases and alternate spellings",
          "Automatic cross-referencing of MDK vs Total bases per store",
          "100% client-side — runs in the browser, no backend",
          "Simple upload interface with immediate visual feedback",
          "Consolidated report export"
        ]
      },
      impact: {
        label: "Results",
        items: [
          { value: "100%", label: "client-side, zero backend" },
          { value: "~280", label: "stores mapped" },
          { value: "~80", label: "PV partners mapped" },
          { value: "0", label: "external dependencies" }
        ]
      },
      github: "https://github.com/Lucas-Mrl/leads-processor"
    }
  },

  "ai-analytics": {
    pt: {
      tag: "Projeto Pessoal · Python · IA",
      title: "AI Ad Metrics Analyzer",
      stack: ["Python", "Streamlit", "APIs de Anúncios", "LLM / IA", "pandas"],
      problem: {
        label: "O Problema",
        text: "Analisar métricas de múltiplas campanhas e extrair recomendações acionáveis manualmente é repetitivo e demorado. A ideia era automatizar tanto a coleta quanto a interpretação dos dados, usando IA para gerar insights que normalmente dependeriam de análise manual."
      },
      solution: {
        label: "A Solução",
        text: "Aplicação desenvolvida com Python e Streamlit que conecta APIs de plataformas de anúncios, coleta métricas automaticamente, processa os dados e utiliza um modelo de linguagem para gerar recomendações contextualizadas.",
        bullets: [
          "Coleta automatizada de métricas de campanhas via APIs de anúncios",
          "Processamento e normalização dos dados com pandas",
          "Interface interativa com Streamlit para seleção de período e plataforma",
          "Integração com LLM para geração de recomendações baseadas nos dados",
          "Sugestões contextualizadas: o que otimizar, onde redistribuir verba, o que pausar",
          "Visualizações de performance integradas à interface"
        ]
      },
      impact: {
        label: "Resultado",
        items: [
          { value: "↑", label: "velocidade de extração de insights" },
          { value: "IA", label: "recomendações contextualizadas" },
          { value: "↓", label: "tempo de análise manual" },
          { value: "1 app", label: "coleta + análise + recomendação" }
        ]
      }
    },
    en: {
      tag: "Personal Project · Python · AI",
      title: "AI Ad Metrics Analyzer",
      stack: ["Python", "Streamlit", "Ad APIs", "LLM / AI", "pandas"],
      problem: {
        label: "The Problem",
        text: "Analyzing metrics from multiple campaigns and extracting actionable recommendations manually is repetitive and time-consuming. The goal was to automate both data collection and interpretation, using AI to generate insights that would normally depend on manual analysis."
      },
      solution: {
        label: "The Solution",
        text: "An application built with Python and Streamlit that connects to ad platform APIs, automatically collects metrics, processes the data, and uses a language model to generate contextualized recommendations.",
        bullets: [
          "Automated campaign metrics collection via ad platform APIs",
          "Data processing and normalization with pandas",
          "Interactive Streamlit interface for period and platform selection",
          "LLM integration for data-driven recommendation generation",
          "Contextualized suggestions: what to optimize, where to reallocate budget, what to pause",
          "Integrated performance visualizations in the interface"
        ]
      },
      impact: {
        label: "Results",
        items: [
          { value: "↑", label: "insight extraction speed" },
          { value: "AI", label: "contextualized recommendations" },
          { value: "↓", label: "manual analysis time" },
          { value: "1 app", label: "collect + analyze + recommend" }
        ]
      }
    }
  },

  "meta-capi": {
    pt: {
      tag: "Client Work · Tracking Server-side",
      title: "Meta CAPI Setup — AudioNova",
      stack: ["Meta Conversions API", "Meta Pixel", "Python", "GTM", "Facebook Business SDK"],
      problem: {
        label: "O Desafio",
        text: "Com mais de 1.000 anúncios ativos simultâneos em múltiplas regionais e iOS 14+ reduzindo a efetividade do tracking client-side, os dados de conversão estavam subestimados. Dados ruins prejudicavam a otimização dos algoritmos de bid e a qualidade das análises de performance."
      },
      solution: {
        label: "A Solução",
        text: "Implementação completa da Meta Conversions API server-side em paralelo com o Pixel client-side, com deduplicação de eventos e mapeamento de parâmetros para maximizar o match rate.",
        bullets: [
          "CAPI server-side implementada em paralelo com o Pixel para redundância e deduplicação",
          "Mapeamento de todos os eventos de lead relevantes (CompleteRegistration, Lead, Contact)",
          "event_id único para deduplicação correta pixel + CAPI",
          "Parâmetros de qualidade: fbc, fbp, client_ip_address, client_user_agent, external_id",
          "Validação e monitoramento contínuo via Meta Events Manager",
          "Auditoria de divergências entre dados da plataforma e CRM"
        ]
      },
      impact: {
        label: "Resultado",
        items: [
          { value: "↑", label: "match rate vs. apenas Pixel" },
          { value: "↑", label: "qualidade dos dados para bid" },
          { value: "↓", label: "sub-reporte de conversões" },
          { value: "1k+", label: "anúncios cobertos" }
        ]
      }
    },
    en: {
      tag: "Client Work · Server-side Tracking",
      title: "Meta CAPI Setup — AudioNova",
      stack: ["Meta Conversions API", "Meta Pixel", "Python", "GTM", "Facebook Business SDK"],
      problem: {
        label: "The Challenge",
        text: "With over 1,000 simultaneous active ads across multiple regions and iOS 14+ reducing client-side tracking effectiveness, conversion data was underreported. Poor data was hurting bid algorithm optimization and performance analysis quality."
      },
      solution: {
        label: "The Solution",
        text: "Full Meta Conversions API server-side implementation running in parallel with the client-side Pixel, with event deduplication and parameter mapping to maximize match rate.",
        bullets: [
          "Server-side CAPI running in parallel with Pixel for redundancy and deduplication",
          "Mapping of all relevant lead events (CompleteRegistration, Lead, Contact)",
          "Unique event_id for correct pixel + CAPI deduplication",
          "Quality parameters: fbc, fbp, client_ip_address, client_user_agent, external_id",
          "Continuous validation and monitoring via Meta Events Manager",
          "Audit of discrepancies between platform data and CRM"
        ]
      },
      impact: {
        label: "Results",
        items: [
          { value: "↑", label: "event match rate vs. Pixel only" },
          { value: "↑", label: "data quality for bid optimization" },
          { value: "↓", label: "conversion under-reporting" },
          { value: "1k+", label: "ads covered" }
        ]
      }
    }
  },

  "email-clickup": {
    pt: {
      tag: "Ferramenta Interna · n8n · Automação",
      title: "Email → ClickUp Automation",
      stack: ["n8n", "Microsoft Graph API", "ClickUp API", "Oracle Cloud Free Tier", "ARM (São Paulo)", "IA / LLM"],
      problem: {
        label: "O Problema",
        text: "Emails de suporte chegavam via FreshService e precisavam ser manualmente convertidos em tasks no ClickUp com dados estruturados extraídos do corpo do email. Processo lento, sujeito a erros e que consumia tempo operacional desnecessário."
      },
      solution: {
        label: "A Solução",
        text: "Automação orquestrada via n8n, hospedada em instância Oracle Cloud Free Tier (ARM, São Paulo), que lê emails do FreshService via Microsoft Graph API, usa IA para extrair e classificar dados estruturados do conteúdo e cria/atualiza tasks automaticamente no ClickUp.",
        bullets: [
          "Integração Microsoft Graph API para leitura de emails do FreshService",
          "IA para extração e classificação automática de dados estruturados (prioridade, categoria, metadados)",
          "Criação e atualização automática de tasks no ClickUp via REST API",
          "Hospedado em Oracle Cloud Free Tier (ARM, região São Paulo) — custo zero",
          "Orquestração visual no n8n com tratamento de erros e retries",
          "Deduplicação: verifica existência de task antes de criar nova"
        ]
      },
      impact: {
        label: "Resultado",
        items: [
          { value: "0min", label: "tempo manual de triagem" },
          { value: "24/7", label: "automação ativa" },
          { value: "R$0", label: "custo de hospedagem" },
          { value: "100%", label: "rastreabilidade das demandas" }
        ]
      }
    },
    en: {
      tag: "Internal Tool · n8n · Automation",
      title: "Email → ClickUp Automation",
      stack: ["n8n", "Microsoft Graph API", "ClickUp API", "Oracle Cloud Free Tier", "ARM (São Paulo)", "AI / LLM"],
      problem: {
        label: "The Problem",
        text: "Support emails arrived via FreshService and needed to be manually converted into ClickUp tasks with structured data extracted from the email body. A slow, error-prone process that consumed unnecessary operational time."
      },
      solution: {
        label: "The Solution",
        text: "Automation orchestrated via n8n, hosted on Oracle Cloud Free Tier (ARM, São Paulo), that reads FreshService emails via Microsoft Graph API, uses AI to extract and classify structured data, and automatically creates/updates tasks in ClickUp.",
        bullets: [
          "Microsoft Graph API integration for reading FreshService emails",
          "AI for automatic extraction and classification of structured data (priority, category, metadata)",
          "Automatic task creation and updates in ClickUp via REST API",
          "Hosted on Oracle Cloud Free Tier (ARM, São Paulo region) — zero cost",
          "Visual orchestration in n8n with error handling and retries",
          "Deduplication: checks for existing task before creating a new one"
        ]
      },
      impact: {
        label: "Results",
        items: [
          { value: "0min", label: "manual triage time" },
          { value: "24/7", label: "automation active" },
          { value: "$0", label: "hosting cost" },
          { value: "100%", label: "demand traceability" }
        ]
      }
    }
  },

  "tiktok-capi": {
    pt: {
      tag: "Client Work · Tracking Server-side",
      title: "TikTok Pixel & CAPI — AudioNova V2",
      stack: ["TikTok Events API", "TikTok Pixel", "GTM", "Server-side Events"],
      problem: {
        label: "O Desafio",
        text: "A V1 do TikTok Pixel para AudioNova tinha problemas de cobertura de eventos e baixa qualidade de match, resultando em dados fragmentados no TikTok Ads Manager e limitando a eficiência dos algoritmos de lances para campanhas de geração de leads."
      },
      solution: {
        label: "A Solução",
        text: "Reconfiguração completa com foco em CAPI server-side (V2). Estrutura de eventos redesenhada para alinhar com os objetivos específicos de lead gen, com validação extensiva via TikTok Events Manager.",
        bullets: [
          "CAPI server-side com Events API do TikTok",
          "Estrutura de eventos redesenhada para lead gen (agendamento de consultas)",
          "Parâmetros de matching: email, phone, external_id",
          "Deduplicação Pixel + CAPI com event_id único",
          "Validação via TikTok Events Manager com monitoramento de qualidade",
          "Alinhamento com estrutura de campanhas: Awareness → Conversão → Retargeting"
        ]
      },
      impact: {
        label: "Resultado",
        items: [
          { value: "V2", label: "arquitetura redesenhada" },
          { value: "↑", label: "qualidade de match CAPI" },
          { value: "↓", label: "eventos perdidos vs. V1" },
          { value: "↑", label: "eficiência de otimização de lances" }
        ]
      }
    },
    en: {
      tag: "Client Work · Server-side Tracking",
      title: "TikTok Pixel & CAPI — AudioNova V2",
      stack: ["TikTok Events API", "TikTok Pixel", "GTM", "Server-side Events"],
      problem: {
        label: "The Challenge",
        text: "The V1 TikTok Pixel for AudioNova had event coverage issues and low match quality, resulting in fragmented data in TikTok Ads Manager and limiting bid algorithm efficiency for lead generation campaigns."
      },
      solution: {
        label: "The Solution",
        text: "Full reconfiguration focused on server-side CAPI (V2). Event structure redesigned to align with specific lead gen goals, with extensive validation via TikTok Events Manager.",
        bullets: [
          "Server-side CAPI with TikTok Events API",
          "Event structure redesigned for lead gen (appointment booking)",
          "Matching parameters: email, phone, external_id",
          "Pixel + CAPI deduplication with unique event_id",
          "Validation via TikTok Events Manager with quality monitoring",
          "Alignment with campaign structure: Awareness → Conversion → Retargeting"
        ]
      },
      impact: {
        label: "Results",
        items: [
          { value: "V2", label: "redesigned architecture" },
          { value: "↑", label: "CAPI match quality" },
          { value: "↓", label: "lost events vs. V1" },
          { value: "↑", label: "bid optimization efficiency" }
        ]
      }
    }
  },

  "ad-analytics": {
    pt: {
      tag: "Client Work · Web App",
      title: "Ad-Level Analytics Web App",
      stack: ["FastAPI", "Python", "Jinja2", "openpyxl", "MySQL", "Cache TTL"],
      problem: {
        label: "O Problema",
        text: "O relatório consolidado por regional não permitia drill-down por anúncio ou campanha. Identificar quais criativos performavam melhor em cada regional exigia acesso manual a cada plataforma — processo lento e sem visão unificada, sem cruzamento com dados de leads do CRM."
      },
      solution: {
        label: "A Solução",
        text: "Dashboard web (FastAPI) que reutiliza os conectores do pipeline de relatórios, adiciona camada de análise por anúncio e cruza com leads e agendamentos do CRM MySQL.",
        bullets: [
          "Drill-down por campanha → conjunto → anúncio individual",
          "Cruzamento com CRM em MySQL: leads, agendamentos, CPA, taxa de agendamento por anúncio",
          "Cache inteligente: TTL diferenciado para dados históricos (5min) vs. hoje (60s)",
          "Single-flight: requisições concorrentes para o mesmo período aguardam o primeiro resultado",
          "Export Excel com formatação profissional, totalizadores e fórmulas",
          "Tratamento de casos reais: anúncios renomeados, leads com campos nulos, diferenças de atribuição"
        ]
      },
      impact: {
        label: "Resultado",
        items: [
          { value: "1 UI", label: "todas as plataformas + CRM" },
          { value: "↑", label: "velocidade de análise criativa" },
          { value: "↓", label: "tempo de acesso a dados granulares" },
          { value: "0", label: "código de conector duplicado" }
        ]
      }
    },
    en: {
      tag: "Client Work · Web App",
      title: "Ad-Level Analytics Web App",
      stack: ["FastAPI", "Python", "Jinja2", "openpyxl", "MySQL", "Cache TTL"],
      problem: {
        label: "The Problem",
        text: "The consolidated regional report didn't allow drill-down by ad or campaign. Identifying which creatives performed best in each region required manual access to each platform — slow, with no unified view and no CRM lead cross-referencing."
      },
      solution: {
        label: "The Solution",
        text: "A web dashboard (FastAPI) that reuses the reporting pipeline connectors, adds ad-level analysis, and cross-references with leads and appointments from the MySQL CRM.",
        bullets: [
          "Drill-down by campaign → ad set → individual ad",
          "MySQL CRM cross-referencing: leads, appointments, CPA, booking rate per ad",
          "Smart caching: differentiated TTL for historical data (5min) vs. today (60s)",
          "Single-flight: concurrent requests for the same period wait for the first result",
          "Excel export with professional formatting, totals, and formulas",
          "Handling real-world cases: renamed ads, null-field leads, attribution differences"
        ]
      },
      impact: {
        label: "Results",
        items: [
          { value: "1 UI", label: "all platforms + CRM" },
          { value: "↑", label: "creative analysis speed" },
          { value: "↓", label: "time to access granular data" },
          { value: "0", label: "duplicated connector code" }
        ]
      }
    }
  },

  "store-analytics": {
    pt: {
      tag: "Client Work · Web App",
      title: "Store-Level Analytics",
      stack: ["FastAPI", "MySQL", "Python", "Auth", "openpyxl", "SQL (joins, subqueries)"],
      problem: {
        label: "O Problema",
        text: "Analisar performance por loja individual em uma rede de ~280 unidades em 16 regionais exigia cruzar dados de mídia com MySQL manualmente. Gestores precisavam de acesso aos dados de suas regiões sem ver dados de outras áreas."
      },
      solution: {
        label: "A Solução",
        text: "Dashboard de leads por loja, regional e canal de mídia. Mostra quais lojas recebem mais leads, quais canais convertem mais, como está a taxa de agendamento e como cada loja evolui mês a mês.",
        bullets: [
          "Autenticação por sessão com validação de domínio de email",
          "Matriz ferramenta × loja para ~280 unidades AudioNova",
          "MySQL com múltiplos joins e subqueries para cruzamento de lead por origem e tipo de campanha",
          "14 canais de mídia classificados em Python a partir de id_origin + id_campaign_type",
          "Análise mensal por loja: evolução de leads, agendamentos e CPL",
          "Export Excel com formatação e fórmulas"
        ]
      },
      impact: {
        label: "Resultado",
        items: [
          { value: "280+", label: "lojas analisáveis" },
          { value: "16", label: "regionais com acesso controlado" },
          { value: "14", label: "canais de mídia rastreados" },
          { value: "↑", label: "autonomia dos gestores regionais" }
        ]
      }
    },
    en: {
      tag: "Client Work · Web App",
      title: "Store-Level Analytics",
      stack: ["FastAPI", "MySQL", "Python", "Auth", "openpyxl", "SQL (joins, subqueries)"],
      problem: {
        label: "The Problem",
        text: "Analyzing performance by individual store across a network of ~280 units in 16 regions required manually cross-referencing media data with MySQL. Managers needed access to their region's data without seeing other areas' information."
      },
      solution: {
        label: "The Solution",
        text: "A leads-by-store, region, and media channel dashboard. Shows which stores receive the most leads, which channels convert best, booking rates, and how each store evolves month by month.",
        bullets: [
          "Session-based authentication with email domain validation",
          "Tool × store matrix for ~280 AudioNova units",
          "MySQL with multiple joins and subqueries to cross-reference leads by origin and campaign type",
          "14 media channels classified in Python from id_origin + id_campaign_type",
          "Monthly store analysis: lead volume, appointments, and CPL evolution",
          "Excel export with formatting and formulas"
        ]
      },
      impact: {
        label: "Results",
        items: [
          { value: "280+", label: "analyzable stores" },
          { value: "16", label: "regions with controlled access" },
          { value: "14", label: "media channels tracked" },
          { value: "↑", label: "regional manager autonomy" }
        ]
      }
    }
  },

  "exec-summary": {
    pt: {
      tag: "Client Work · Relatório Executivo",
      title: "Executive Summary HTML/PDF",
      stack: ["Python", "ReportLab", "python-pptx", "HTML/CSS", "pandas"],
      problem: {
        label: "O Contexto",
        text: "Reuniões executivas de performance de mídia exigiam um relatório visualmente consistente, baseado nos dados das apresentações PowerPoint, entregue em formato navegável (HTML) para a reunião e arquivável (PDF). Montar isso manualmente era repetitivo e inconsistente entre períodos."
      },
      solution: {
        label: "A Solução",
        text: "Pipeline em Python que extrai dados de apresentações PowerPoint, processa e gera automaticamente um relatório executivo em HTML interativo e PDF formatado via ReportLab.",
        bullets: [
          "Extração de dados de slides PowerPoint com python-pptx",
          "Processamento e normalização dos dados de performance",
          "Geração de HTML interativo com navegação entre seções",
          "PDF com ReportLab: layouts formatados para impressão e arquivo",
          "Seções: KPIs do período, performance por plataforma, comparativo vs. meta, recomendações",
          "Template padronizado para consistência visual entre reuniões"
        ]
      },
      impact: {
        label: "Resultado",
        items: [
          { value: "2x", label: "formatos (HTML + PDF)" },
          { value: "↓", label: "tempo de preparação" },
          { value: "100%", label: "consistência visual" },
          { value: "↑", label: "profissionalismo na apresentação" }
        ]
      }
    },
    en: {
      tag: "Client Work · Executive Report",
      title: "Executive Summary HTML/PDF",
      stack: ["Python", "ReportLab", "python-pptx", "HTML/CSS", "pandas"],
      problem: {
        label: "The Context",
        text: "Executive media performance meetings required a visually consistent report based on PowerPoint data, delivered in navigable HTML format for the meeting and archivable PDF. Building this manually was repetitive and inconsistent between periods."
      },
      solution: {
        label: "The Solution",
        text: "A Python pipeline that extracts data from PowerPoint presentations, processes it, and automatically generates an executive report as interactive HTML and formatted PDF via ReportLab.",
        bullets: [
          "Data extraction from PowerPoint slides with python-pptx",
          "Performance data processing and normalization",
          "Interactive HTML generation with section navigation",
          "PDF with ReportLab: print and archive-formatted layouts",
          "Sections: period KPIs, platform performance, vs. target comparison, recommendations",
          "Standardized template for visual consistency between meetings"
        ]
      },
      impact: {
        label: "Results",
        items: [
          { value: "2x", label: "formats (HTML + PDF)" },
          { value: "↓", label: "preparation time" },
          { value: "100%", label: "visual consistency" },
          { value: "↑", label: "presentation professionalism" }
        ]
      }
    }
  }
};

/* ============================================================
   STATE
============================================================ */
let lang = 'pt';

/* ============================================================
   LANGUAGE
============================================================ */
function setLang(l) {
  lang = l;
  document.documentElement.lang = l === 'pt' ? 'pt-BR' : 'en';
  document.getElementById('langLabel').textContent = l === 'pt' ? 'EN' : 'PT';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    const val = i18n[l][k];
    if (val === undefined) return;
    if (el.tagName === 'H2' && val.includes('\n')) {
      el.innerHTML = val.replace('\n', '<br>');
    } else {
      el.textContent = val;
    }
  });
}

document.getElementById('langToggle').addEventListener('click', () => setLang(lang === 'pt' ? 'en' : 'pt'));

/* ============================================================
   NAVBAR
============================================================ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

/* ============================================================
   MOBILE MENU
============================================================ */
const menuBtn = document.getElementById('menuBtn');
const mMenu   = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => mMenu.classList.toggle('open'));
mMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mMenu.classList.remove('open')));

/* ============================================================
   SMOOTH SCROLL
============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  });
});

/* ============================================================
   REVEAL ON SCROLL
============================================================ */
const ro = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 90);
      ro.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-reveal]').forEach(el => ro.observe(el));

/* ============================================================
   MODAL
============================================================ */
const modal    = document.getElementById('modal');
const mContent = document.getElementById('modalContent');
const mOverlay = document.getElementById('modalOverlay');
const mX       = document.getElementById('modalX');

function buildModal(data) {
  const bullets   = data.solution.bullets.map(b => `<li>${b}</li>`).join('');
  const stack     = data.stack.map(s => `<span>${s}</span>`).join('');
  const impact    = data.impact.items.map(i => `
    <div class="m-impact-item">
      <span class="m-impact-val">${i.value}</span>
      <span class="m-impact-label">${i.label}</span>
    </div>`).join('');
  const ghBtn = data.github
    ? `<a href="${data.github}" target="_blank" rel="noopener" class="btn btn-outline">GitHub ↗</a>`
    : '';
  const closeLabel = lang === 'pt' ? 'Fechar' : 'Close';

  return `
    <span class="m-tag">${data.tag}</span>
    <h2 class="m-title">${data.title}</h2>
    <div class="m-stack">${stack}</div>
    <div class="m-hr"></div>
    <div class="m-section">
      <div class="m-section-label">${data.problem.label}</div>
      <p>${data.problem.text}</p>
    </div>
    <div class="m-hr"></div>
    <div class="m-section">
      <div class="m-section-label">${data.solution.label}</div>
      <p>${data.solution.text}</p>
      <ul class="m-bullets">${bullets}</ul>
    </div>
    <div class="m-hr"></div>
    <div class="m-section">
      <div class="m-section-label">${data.impact.label}</div>
      <div class="m-impact">${impact}</div>
    </div>
    <div class="m-footer">
      ${ghBtn}
      <button class="btn btn-outline" onclick="closeModal()">${closeLabel}</button>
    </div>`;
}

function openModal(key) {
  const data = projects[key];
  if (!data) return;
  mContent.innerHTML = buildModal(data[lang] || data['pt']);
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  mX.focus();
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

mX.addEventListener('click', closeModal);
mOverlay.addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
});

document.querySelectorAll('.proj-card').forEach(card => {
  const key = card.getAttribute('data-project');
  card.addEventListener('click', e => {
    if (e.target.closest('.proj-btn-gh')) return;
    openModal(key);
  });
  const btn = card.querySelector('.proj-btn-case');
  if (btn) btn.addEventListener('click', e => { e.stopPropagation(); openModal(key); });
});

/* ============================================================
   COPY EMAIL
============================================================ */
const copyBtn = document.getElementById('copyEmailBtn');
const toast   = document.createElement('div');
toast.className = 'toast';
document.body.appendChild(toast);

let toastTimer;
copyBtn.addEventListener('click', () => {
  const email = copyBtn.getAttribute('data-email');
  navigator.clipboard.writeText(email).then(() => {
    toast.textContent = lang === 'pt' ? '✓ E-mail copiado!' : '✓ Email copied!';
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
  });
});

/* ============================================================
   INIT
============================================================ */
setLang('pt');
