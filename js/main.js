/* ============================================================
   TRANSLATIONS
============================================================ */
const i18n = {
  pt: {
    // NAV
    nav_resolve:  "O que resolvo",
    nav_exp:      "Experiência",
    nav_projects: "Projetos",
    nav_about:    "Sobre",
    nav_cv:       "Baixar CV",

    // HERO
    hero_badge:    "Marketing Analytics · BI · Growth Analytics · Martech",
    hero_tagline:  "Transformo dados de mídia, CRM e tracking em dashboards, automações e decisões de crescimento.",
    hero_focus:    "Aberto a oportunidades em Marketing Analytics, BI, Growth Analytics e Martech.",
    hm_budget:     "Verba Gerenciada",
    hm_platforms:  "Plataformas",
    hm_stores:     "Lojas",
    cta_cases:     "Ver Cases",
    cta_cv:        "Baixar CV",
    cta_contact:   "Falar Comigo",

    // O QUE RESOLVO
    resolve_tag:   "problemas",
    resolve_title: "O que eu resolvo",
    resolve_desc:  "Problemas reais que já apareceram em operações de marketing — e que eu sei resolver.",
    r1_title: "Dados espalhados entre plataformas",
    r1_desc:  "Consolido dados de mídia, CRM, lojas e planilhas em visões únicas e estruturadas para análise — sem copiar e colar entre abas.",
    r2_title: "Relatórios manuais e demorados",
    r2_desc:  "Automatizo rotinas de coleta, tratamento e exportação de dados — o que levava horas passa a rodar sem intervenção, diariamente.",
    r3_title: "Tracking inconsistente",
    r3_desc:  "Implemento e audito eventos via GTM, GA4, pixels e APIs server-side para que as conversões que chegam na plataforma correspondam à realidade.",
    r4_title: "Decisão cega por regional, loja ou canal",
    r4_desc:  "Crio dashboards e análises segmentadas para identificar onde está o problema — se é o canal, a regional, a loja ou o funil.",
    r5_title: "Métricas sem contexto de negócio",
    r5_desc:  "Transformo CPL, ROAS, taxa de conversão e CPA em recomendações acionáveis — o que cortar, o que escalar, onde realocar verba.",

    // SKILLS
    skills_tag:   "stack",
    skills_title: "Ferramentas & Contexto de Uso",
    skills_desc:  "Não só o que uso — mas para que uso cada coisa.",
    sc1_title: "Análise & BI",
    sc1_ctx:   "Para construir queries, modelos analíticos e dashboards que equipes de mídia e gestão consigam usar para tomar decisões.",
    sc2_title: "Automação & Pipelines",
    sc2_ctx:   "Para automatizar coleta, tratamento e exportação de dados, eliminando rotinas manuais recorrentes.",
    sc3_title: "Tracking & Mensuração",
    sc3_ctx:   "Para estruturar mensuração confiável, reduzir sub-reporte de conversões e auditar divergências entre plataforma e CRM.",
    sc4_title: "Mídia Paga",
    sc4_ctx:   "Para gestão, análise e integração via API — do planejamento de verba à leitura granular de performance por campanha e canal.",
    sc5_title: "Dev & Infra",
    sc5_ctx:   "Para desenvolver aplicações internas, scripts de automação e integrações entre sistemas quando a ferramenta de prateleira não chega lá.",

    // COMO TRABALHO
    proc_tag:   "método",
    proc_title: "Como trabalho",
    proc_desc:  "Do problema à recomendação — como estruturo o trabalho analítico na prática.",
    ps1_title: "Entendo a decisão que precisa ser tomada",
    ps1_desc:  "Antes de qualquer dado ou ferramenta: qual pergunta de negócio precisa ser respondida? Qual decisão vai mudar com essa análise?",
    ps2_title: "Mapeio as fontes de dados disponíveis",
    ps2_desc:  "Plataformas de mídia, CRM, banco de dados, planilhas, APIs — identifico o que existe, o que está confiável e o que precisa ser estruturado.",
    ps3_title: "Estruturo coleta, tratamento e padronização",
    ps3_desc:  "ETL, normalização, deduplicação, reconciliação entre fontes — os dados precisam ser confiáveis antes de virarem análise.",
    ps4_title: "Crio visualizações e indicadores acionáveis",
    ps4_desc:  "Dashboards, relatórios, exportações Excel — projetados para quem vai tomar a decisão, não para impressionar tecnicamente.",
    ps5_title: "Automatizo o que for recorrente",
    ps5_desc:  "Se uma tarefa vai se repetir toda semana, ela vira script, pipeline ou automação. Tempo manual é o recurso mais caro de uma operação de dados.",
    ps6_title: "Transformo análise em recomendação prática",
    ps6_desc:  "O entregável final não é um gráfico — é uma resposta: o que fazer, onde cortar, o que escalar, o que investigar mais.",

    // EXPERIÊNCIA
    exp_tag:     "trajetória",
    exp_title:   "Experiência",
    exp_current: "Atual",

    exp1_period: "Fev 2026 — presente",
    exp1_role:   "Analista de Mídia / BI",
    exp1_loc:    "Ourinhos, SP · Remoto · Cliente: AudioNova Brasil",
    exp1_desc:   "Atuo diretamente na conta AudioNova — operação de saúde auditiva com 280+ lojas em todo o Brasil e ~R$2M de verba mensal em mídia paga. Além da gestão de campanhas em 8 plataformas, sou responsável pelo desenvolvimento da infraestrutura analítica que sustenta as decisões de performance: automações, dashboards, tracking server-side e aplicações internas.",
    exp1_b1:     "Gestão e análise de campanhas em 8 plataformas: Meta, Google, TikTok, Taboola, Pinterest, Kwai, Bing e X Ads",
    exp1_b2:     "Desenvolvimento de ecossistema interno: pipeline de dados conectando 9 APIs, dashboard web por anúncio/loja, relatório diário automatizado — redução de até 90% em trabalho manual de consolidação",
    exp1_b3:     "Tracking server-side: implementação e manutenção de GTM, GA4, Meta CAPI e TikTok CAPI, com auditoria de divergências entre plataforma e CRM",
    exp1_b4:     "Apresentação de resultados e recomendações diretamente ao cliente, traduzindo dados técnicos em decisões de verba e ajustes de funil",

    exp2_period: "Mar 2025 — Out 2025",
    exp2_role:   "Analista de Dados e Growth Marketing",
    exp2_loc:    "Educação Digital · Expansão Internacional",
    exp2_desc:   "Operação de educação digital com campanhas de alto volume em múltiplos países. Atuei em análise de dados, performance de mídia e estruturação de processos de mensuração durante um período em que a operação registrou crescimento de aproximadamente 20% no faturamento.",
    exp2_b1:     "Gestão e análise de campanhas em Google Ads, Meta Ads e TikTok Ads para funis perpétuos e lançamentos, acompanhando ROAS, CAC, CPA e taxa de conversão",
    exp2_b2:     "Dashboards em Looker Studio, Power BI e Excel para equipes de marketing, produto e gestão",
    exp2_b3:     "Rastreamento avançado com GA4 e GTM, eventos customizados e auditorias de jornada de conversão",
    exp2_b4:     "ETL/ELT com Python, Pandas e BigQuery; automações com n8n e Make; integração com Hotmart e CRMs",

    exp3_period: "Set 2024 — Mar 2025",
    exp3_role:   "Gestor de Tráfego e Funis de Venda",
    exp3_loc:    "Setor de Delivery · 13 contas simultâneas",
    exp3_desc:   "Gestão simultânea de até 13 clientes no setor de delivery. Foco em ROAS, conversão e eficiência de investimento, com análise de funil, relatórios estruturados e otimização baseada em dados.",
    exp3_b1:     "Campanhas no Google Ads e Meta Ads acompanhando ROAS, CAC, CPA, CPC, CTR e conversão",
    exp3_b2:     "Em operações com otimização estruturada, campanhas atingiram ROAS entre 8x e 20x; contribuição para aumentos de até 25% em taxas de conversão",
    exp3_b3:     "Dashboards em Excel, Notion e ClickUp — redução de ~50% no tempo de apresentação de resultados",

    exp4_period:  "Anterior a Set 2024",
    exp4_role:    "Gestor de Tráfego e Marketing Digital",
    exp4_company: "Autônomo",
    exp4_loc:     "Empresas locais · Ourinhos, SP",
    exp4_desc:    "Ciclo completo para negócios locais: campanhas no Google Ads e Meta Ads, criação de landing pages, copywriting, análise de métricas e otimização de conversão. Foi onde desenvolvi a base prática em aquisição de clientes e análise de jornada.",

    // EDUCAÇÃO
    edu_tag:     "formação",
    edu_title:   "Educação & Certificações",
    edu1_title:  "Tecnólogo em ADS",
    edu1_status: "Concluído · Diploma",
    edu1_desc:   "Análise e Desenvolvimento de Sistemas — banco de dados, engenharia de software, desenvolvimento web e lógica de programação.",
    edu2_title:  "Certificações Principais",
    cert1: "Data Analyst Associate — DataCamp",
    cert2: "Google Ads — Search, Display & Performance Max",
    cert3: "Meta Blueprint — Meta Ads",
    edu3_title: "Formação Complementar",
    edu3_desc:  "Comunidade Sobral de Tráfego Pago · SQL · Python · BI · CRO · Growth · Automações · Engenharia de dados.",

    // PROJETOS
    proj_tag:   "portfólio",
    proj_title: "Projetos",
    proj_desc:  "Clique em qualquer card para ver o case completo.",
    conf_text:  "Dados sensíveis foram anonimizados por confidencialidade. Os cases preservam a lógica e a estrutura das soluções, sem expor informações privadas de clientes.",
    cat_bi:       "BI & Analytics",
    cat_pipeline: "Data Pipelines & Automação",
    cat_tracking: "Tracking & Martech",
    cat_ai:       "AI & Experimentação",

    pt_open:     "Open Source",
    pt_client:   "Client Work",
    pt_tool:     "Ferramenta Interna",
    pt_personal: "Projeto Pessoal",
    p_case:      "Ver Case ↗",
    p_gh:        "GitHub",

    p1_title: "Relatório de Mídia Automatizado",
    p1_desc:  "Pipeline automatizado que consolida investimento de mídia de 9+ plataformas, padroniza os dados por regional e atualiza relatórios diariamente sem intervenção manual.",
    p2_title: "Leads Processor",
    p2_desc:  "Aplicação client-side que cruza relatórios de leads de duas fontes distintas, aplicando mapeamento determinístico para reconciliar nomenclaturas de 280+ lojas e 80+ parceiros.",
    p3_title: "AI Ad Metrics Analyzer",
    p3_desc:  "Aplicação com coleta automatizada de métricas de campanhas via API, tratamento de dados com Pandas e geração de recomendações com suporte de inteligência artificial — o que cortar, o que escalar, onde redistribuir verba.",
    p4_title: "Meta CAPI — AudioNova",
    p4_desc:  "Implementação server-side completa de Conversions API em paralelo com Pixel, para operação com 1.000+ anúncios ativos e múltiplas regionais — deduplicação, parâmetros de qualidade e monitoramento contínuo.",
    p5_title: "Email → ClickUp Automation",
    p5_desc:  "Automação que lê emails do FreshService via Microsoft Graph API, classifica e extrai dados com IA, e cria ou atualiza tasks no ClickUp — Oracle Cloud Free Tier, zero custo.",
    p6_title: "TikTok Pixel & CAPI V2",
    p6_desc:  "Reconfiguração completa do tracking server-side do TikTok, com estrutura de eventos redesenhada para lead gen, parâmetros de matching e validação via Events Manager.",
    p7_title: "Ad-Level Analytics Web App",
    p7_desc:  "Dashboard interno para análise granular por campanha, conjunto e anúncio, cruzando dados de plataforma com leads e agendamentos do CRM — com cache inteligente e exportação Excel.",
    p8_title: "Store-Level Analytics",
    p8_desc:  "Aplicação interna para análise de performance por loja e regional, com filtros, comparações e exportação de dados de 280+ unidades — autenticação por domínio e drill-down operacional.",
    p9_title: "Executive Summary HTML/PDF",
    p9_desc:  "Relatório executivo gerado automaticamente a partir de PowerPoint — HTML interativo para reunião e PDF para arquivo, com KPIs, comparativos e recomendações.",

    // DIFERENCIAIS
    diff_tag:   "diferenciais",
    diff_title: "Por que não é o mesmo que o próximo analista",
    d1_title: "Não analiso mídia isolada",
    d1_desc:  "Conecto investimento, leads, lojas, CRM e jornada do usuário. O número da plataforma precisa dialogar com o que chegou no CRM e o que virou venda.",
    d2_title: "Não dependo só de dashboard",
    d2_desc:  "Quando os dados precisam ser estruturados antes de virar análise, eu construo o pipeline. Não terceirizo o problema técnico para depois poder fazer a análise.",
    d3_title: "Tenho visão de negócio",
    d3_desc:  "Traduzo métricas técnicas em recomendações práticas. CPL alto não é um número — é um sinal de onde o funil está quebrando ou onde a segmentação errou.",
    d4_title: "Base técnica para executar",
    d4_desc:  "Python, SQL, APIs, tracking server-side, BI e automação — quando não existe ferramenta pronta, eu construo. Sem depender de engenharia para resolver problemas de dados de marketing.",
    d5_title: "Entendo os dois extremos",
    d5_desc:  "Tanto a operação de mídia — estratégia, criativos, lances, budget — quanto a infraestrutura analítica por trás dela. Isso evita a lacuna entre \"quem analisa\" e \"quem executa\".",

    // SOBRE
    about_tag:   "sobre",
    about_title: "Analytics que\nentende de mídia.",
    about_p1:    "Comecei no marketing digital operando campanhas, funis e landing pages para negócios locais. Com o tempo, percebi que muitas decisões de mídia eram limitadas não pela campanha em si, mas pela qualidade dos dados disponíveis.",
    about_p2:    "Foi nesse ponto que passei a construir a infraestrutura analítica por trás da performance: dashboards, pipelines, automações, tracking server-side e integrações com APIs de mídia.",
    about_p3:    "Hoje atuo conectando mídia, BI e tecnologia para transformar dados dispersos em decisões mais rápidas, confiáveis e acionáveis.",

    contact_wa:    "WhatsApp",
    contact_email: "E-mail",

    // DEPOIMENTOS
    test_tag:   "referências",
    test_title: "O que dizem",
    t1_text:  "Lucas conseguiu transformar uma rotina manual complexa em um processo muito mais rápido e confiável. O que demorava horas passou a rodar automaticamente — sem perda de qualidade nos dados.",
    t1_name:  "Colega de equipe",
    t1_role:  "Media.k · LinkedIn",
    t2_text:  "A visão por loja e regional facilitou muito a leitura de performance da operação. Conseguimos identificar gargalos específicos que antes ficavam escondidos nos números consolidados.",
    t2_name:  "Gestor de conta",
    t2_role:  "AudioNova · LinkedIn",

    // CTA
    cta_tag:   "contato",
    cta_title: "Aberto a oportunidades onde mídia, dados, BI e tecnologia se encontram.",
    cta_desc:  "Marketing Analytics · BI · Growth Analytics · Martech",

    footer_text: "Feito com HTML, CSS & JS puro · Atualizado em junho/2026",
  },

  en: {
    // NAV
    nav_resolve:  "What I solve",
    nav_exp:      "Experience",
    nav_projects: "Projects",
    nav_about:    "About",
    nav_cv:       "Download CV",

    // HERO
    hero_badge:    "Marketing Analytics · BI · Growth Analytics · Martech",
    hero_tagline:  "I turn media, CRM, and tracking data into dashboards, automations, and growth decisions.",
    hero_focus:    "Open to roles in Marketing Analytics, BI, Growth Analytics, and Martech.",
    hm_budget:     "Managed Budget",
    hm_platforms:  "Platforms",
    hm_stores:     "Stores",
    cta_cases:     "See Cases",
    cta_cv:        "Download CV",
    cta_contact:   "Get in Touch",

    // WHAT I SOLVE
    resolve_tag:   "problems",
    resolve_title: "What I solve",
    resolve_desc:  "Real problems that show up in marketing operations — and that I know how to fix.",
    r1_title: "Data scattered across platforms",
    r1_desc:  "I consolidate media, CRM, store, and spreadsheet data into unified, structured views for analysis — no more copy-pasting between tabs.",
    r2_title: "Slow, manual reporting",
    r2_desc:  "I automate collection, processing, and export routines — what used to take hours runs without intervention, daily.",
    r3_title: "Inconsistent tracking",
    r3_desc:  "I implement and audit events via GTM, GA4, pixels, and server-side APIs so the conversions reaching the platform match reality.",
    r4_title: "Blind decisions by region, store, or channel",
    r4_desc:  "I build segmented dashboards and analyses to identify exactly where the problem is — the channel, the region, the store, or the funnel.",
    r5_title: "Metrics without business context",
    r5_desc:  "I turn CPL, ROAS, conversion rate, and CPA into actionable recommendations — what to cut, what to scale, where to reallocate budget.",

    // SKILLS
    skills_tag:   "stack",
    skills_title: "Tools & Context of Use",
    skills_desc:  "Not just what I use — but what I use each thing for.",
    sc1_title: "Analytics & BI",
    sc1_ctx:   "To build queries, analytical models, and dashboards that media and management teams can actually use to make decisions.",
    sc2_title: "Automation & Pipelines",
    sc2_ctx:   "To automate data collection, processing, and export — eliminating recurring manual routines.",
    sc3_title: "Tracking & Measurement",
    sc3_ctx:   "To build reliable measurement, reduce conversion under-reporting, and audit discrepancies between platform and CRM data.",
    sc4_title: "Paid Media",
    sc4_ctx:   "For management, analysis, and API integration — from budget planning to granular performance reads by campaign and channel.",
    sc5_title: "Dev & Infra",
    sc5_ctx:   "To build internal tools, automation scripts, and system integrations when off-the-shelf solutions fall short.",

    // HOW I WORK
    proc_tag:   "method",
    proc_title: "How I work",
    proc_desc:  "From problem to recommendation — how I structure analytical work in practice.",
    ps1_title: "I understand the decision that needs to be made",
    ps1_desc:  "Before any data or tool: what business question needs answering? What decision will change as a result of this analysis?",
    ps2_title: "I map available data sources",
    ps2_desc:  "Media platforms, CRM, databases, spreadsheets, APIs — I identify what exists, what's reliable, and what needs to be structured.",
    ps3_title: "I structure collection, processing, and standardization",
    ps3_desc:  "ETL, normalization, deduplication, cross-source reconciliation — data needs to be trustworthy before it becomes analysis.",
    ps4_title: "I build actionable visualizations and metrics",
    ps4_desc:  "Dashboards, reports, Excel exports — designed for the decision-maker, not to impress technically.",
    ps5_title: "I automate what's recurring",
    ps5_desc:  "If a task will repeat every week, it becomes a script, pipeline, or automation. Manual time is the most expensive resource in a data operation.",
    ps6_title: "I turn analysis into practical recommendations",
    ps6_desc:  "The final deliverable isn't a chart — it's an answer: what to do, where to cut, what to scale, what to investigate further.",

    // EXPERIENCE
    exp_tag:     "career",
    exp_title:   "Experience",
    exp_current: "Current",

    exp1_period: "Feb 2026 — present",
    exp1_role:   "Media / BI Analyst",
    exp1_loc:    "Ourinhos, SP · Remote · Client: AudioNova Brasil",
    exp1_desc:   "Working directly on the AudioNova account — a hearing health operation with 280+ stores across Brazil and ~R$2M in monthly paid media budget. Beyond campaign management across 8 platforms, I'm responsible for building the analytics infrastructure behind performance decisions: automations, dashboards, server-side tracking, and internal tools.",
    exp1_b1:     "Campaign management and analysis across 8 platforms: Meta, Google, TikTok, Taboola, Pinterest, Kwai, Bing and X Ads",
    exp1_b2:     "Built internal ecosystem: data pipeline connecting 9 APIs, ad/store-level web dashboard, automated daily report — up to 90% reduction in manual consolidation work",
    exp1_b3:     "Server-side tracking: implementation and maintenance of GTM, GA4, Meta CAPI and TikTok CAPI, with divergence audits between platform and CRM",
    exp1_b4:     "Presenting results and recommendations directly to the client, translating technical data into budget decisions and funnel adjustments",

    exp2_period: "Mar 2025 — Oct 2025",
    exp2_role:   "Data & Growth Marketing Analyst",
    exp2_loc:    "Digital Education · International Expansion",
    exp2_desc:   "Digital education operation with high-volume campaigns across multiple countries. I worked on data analysis, media performance, and measurement structuring during a period when the operation recorded ~20% revenue growth.",
    exp2_b1:     "Campaign management in Google Ads, Meta Ads and TikTok Ads for evergreen funnels and launches, tracking ROAS, CAC, CPA, and conversion rates",
    exp2_b2:     "Dashboards in Looker Studio, Power BI, and Excel for marketing, product, and management teams",
    exp2_b3:     "Advanced tracking with GA4 and GTM, custom events, and conversion journey audits",
    exp2_b4:     "ETL/ELT with Python, Pandas, and BigQuery; automations with n8n and Make; Hotmart and CRM integrations",

    exp3_period: "Sep 2024 — Mar 2025",
    exp3_role:   "Traffic Manager and Sales Funnel Specialist",
    exp3_loc:    "Delivery Sector · 13 simultaneous accounts",
    exp3_desc:   "Simultaneous management of up to 13 delivery sector clients. Focus on ROAS, conversion, and investment efficiency with structured reporting and funnel analysis.",
    exp3_b1:     "Google Ads and Meta Ads campaigns tracking ROAS, CAC, CPA, CPC, CTR, and conversion",
    exp3_b2:     "In optimized operations, campaigns reached ROAS between 8x and 20x; contributed to conversion rate increases of up to 25%",
    exp3_b3:     "Dashboards in Excel, Notion, and ClickUp — ~50% reduction in results presentation time",

    exp4_period:  "Before Sep 2024",
    exp4_role:    "Traffic Manager and Digital Marketing",
    exp4_company: "Freelance",
    exp4_loc:     "Local businesses · Ourinhos, SP",
    exp4_desc:    "Full cycle for local businesses: Google Ads and Meta Ads campaigns, landing page creation, copywriting, metrics analysis, and conversion optimization. Where I built my practical foundation in customer acquisition and journey analysis.",

    // EDUCATION
    edu_tag:     "education",
    edu_title:   "Education & Certifications",
    edu1_title:  "Systems Analysis and Development",
    edu1_status: "Completed · Degree",
    edu1_desc:   "Tecnólogo (Associate's degree) — databases, software engineering, web development, programming logic.",
    edu2_title:  "Main Certifications",
    cert1: "Data Analyst Associate — DataCamp",
    cert2: "Google Ads — Search, Display & Performance Max",
    cert3: "Meta Blueprint — Meta Ads",
    edu3_title: "Complementary Training",
    edu3_desc:  "Sobral Paid Traffic Community · SQL · Python · BI · CRO · Growth · Automation · Data Engineering.",

    // PROJECTS
    proj_tag:   "portfolio",
    proj_title: "Projects",
    proj_desc:  "Click any card to see the full case study.",
    conf_text:  "Sensitive data has been anonymized for confidentiality. The case studies preserve the logic and structure of each solution without exposing private client information.",
    cat_bi:       "BI & Analytics",
    cat_pipeline: "Data Pipelines & Automation",
    cat_tracking: "Tracking & Martech",
    cat_ai:       "AI & Experimentation",

    pt_open:     "Open Source",
    pt_client:   "Client Work",
    pt_tool:     "Internal Tool",
    pt_personal: "Personal Project",
    p_case:      "View Case ↗",
    p_gh:        "GitHub",

    p1_title: "Automated Media Report",
    p1_desc:  "Automated pipeline that consolidates media spend from 9+ platforms, standardizes data by region, and updates reports daily without manual intervention.",
    p2_title: "Leads Processor",
    p2_desc:  "Client-side app that cross-references lead reports from two distinct sources using deterministic mapping to reconcile naming conventions across 280+ stores and 80+ partners.",
    p3_title: "AI Ad Metrics Analyzer",
    p3_desc:  "App with automated campaign metrics collection via API, data processing with Pandas, and AI-powered recommendations — what to cut, what to scale, where to reallocate budget.",
    p4_title: "Meta CAPI — AudioNova",
    p4_desc:  "Full server-side Conversions API implementation running in parallel with Pixel for an operation with 1,000+ active ads and multiple regions — deduplication, quality parameters, and continuous monitoring.",
    p5_title: "Email → ClickUp Automation",
    p5_desc:  "Automation that reads FreshService emails via Microsoft Graph API, classifies and extracts data with AI, and creates or updates ClickUp tasks — Oracle Cloud Free Tier, zero cost.",
    p6_title: "TikTok Pixel & CAPI V2",
    p6_desc:  "Full reconfiguration of TikTok server-side tracking with a redesigned event structure for lead gen, matching parameters, and validation via Events Manager.",
    p7_title: "Ad-Level Analytics Web App",
    p7_desc:  "Internal dashboard for granular analysis by campaign, ad set, and ad — cross-referencing platform data with CRM leads and appointments, with smart caching and Excel export.",
    p8_title: "Store-Level Analytics",
    p8_desc:  "Internal app for performance analysis by store and region across 280+ units — domain-based authentication, operational drill-down, and data export.",
    p9_title: "Executive Summary HTML/PDF",
    p9_desc:  "Executive report automatically generated from PowerPoint — interactive HTML for meetings and PDF for records, with KPIs, comparatives, and recommendations.",

    // DIFFERENTIALS
    diff_tag:   "differentials",
    diff_title: "Why I'm not just another analyst",
    d1_title: "I don't analyze media in isolation",
    d1_desc:  "I connect spend, leads, stores, CRM, and user journey. Platform numbers need to align with what hit the CRM and what turned into a sale.",
    d2_title: "I don't depend solely on dashboards",
    d2_desc:  "When data needs to be structured before it can be analyzed, I build the pipeline. I don't outsource the technical problem and wait to do the analysis later.",
    d3_title: "I have a business mindset",
    d3_desc:  "I translate technical metrics into practical recommendations. A high CPL isn't just a number — it's a signal of where the funnel is breaking or where targeting went wrong.",
    d4_title: "Technical foundation to execute",
    d4_desc:  "Python, SQL, APIs, server-side tracking, BI and automation — when there's no ready-made tool, I build it. No dependency on engineering to solve marketing data problems.",
    d5_title: "I understand both ends",
    d5_desc:  "Both the media operation — strategy, creatives, bids, budget — and the analytics infrastructure behind it. This closes the gap between \"who analyzes\" and \"who executes\".",

    // ABOUT
    about_tag:   "about",
    about_title: "Analytics that\nunderstands media.",
    about_p1:    "I started in digital marketing running campaigns, funnels, and landing pages for local businesses. Over time, I realized many media decisions were limited not by the campaigns themselves, but by the quality of available data.",
    about_p2:    "That's when I started building the analytics infrastructure behind performance: dashboards, pipelines, automations, server-side tracking, and media API integrations.",
    about_p3:    "Today I work at the intersection of media, BI, and technology — turning scattered data into faster, more reliable, and more actionable decisions.",

    contact_wa:    "WhatsApp",
    contact_email: "Email",

    // TESTIMONIALS
    test_tag:   "references",
    test_title: "What they say",
    t1_text:  "Lucas managed to turn a complex manual routine into a much faster and more reliable process. What used to take hours started running automatically — with no loss in data quality.",
    t1_name:  "Team member",
    t1_role:  "Media.k · LinkedIn",
    t2_text:  "The store and regional breakdown made it much easier to read the operation's performance. We were able to identify specific bottlenecks that were previously hidden in consolidated numbers.",
    t2_name:  "Account manager",
    t2_role:  "AudioNova · LinkedIn",

    // CTA
    cta_tag:   "contact",
    cta_title: "Open to opportunities where media, data, BI, and technology meet.",
    cta_desc:  "Marketing Analytics · BI · Growth Analytics · Martech",

    footer_text: "Built with pure HTML, CSS & JS · Updated June 2026",
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
