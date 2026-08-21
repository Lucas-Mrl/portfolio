/* ============================================================
   TRANSLATIONS
============================================================ */
const i18n = {
  pt: {
    // NAV
    nav_exp:      "Experiência",
    nav_projects: "Projetos",
    nav_about:    "Sobre",
    nav_cv:       "CV ↗",
    nav_capabilities:   "Especialidades",
    nav_idx:            "Outros Projetos",
    nav_testimonials:   "Referências",

    // HERO
    hero_tagline:  "Construo pipelines, dashboards e automações que conectam mídia, CRM e dados operacionais a decisões de negócio.",
    hero_availability: "Aberto a oportunidades · Ourinhos, SP",
    hero_stats_context: "¹ Indicadores de operações em que atuei diretamente. Dados sensíveis preservados por confidencialidade.",
    hm_manual:     "↓ trabalho manual",
    hm_sources:    "fontes integradas",
    hm_units:      "unidades analisadas",
    cta_cases:     "Ver projetos ↓",
    cta_cv:        "CV ↗",
    cta_linkedin:  "LinkedIn ↗",
    cta_email:     "E-mail ↗",

    // CAPABILITIES
    cap_title:  "Especialidades",
    cap1_title: "Analytics & BI",
    cap1_desc:  "Dashboards executivos e operacionais, modelagem de dados e análise de performance. Foco em decisão, não em visualização pela visualização.",
    cap2_title: "Data Pipelines & Automação",
    cap2_desc:  "Pipelines de coleta, normalização e consolidação — Python conectando APIs, CRMs, bancos e planilhas. Elimino trabalho manual recorrente.",
    cap3_title: "Marketing Analytics & Tracking",
    cap3_desc:  "Análise de aquisição, funil e eventos server-side com GA4, GTM, Meta CAPI e TikTok Events API. Entendo mídia e infraestrutura.",

    // PROJECT INDEX
    idx_title:    "Outros projetos",
    filter_all:   "Todos",

    // CASES EM DESTAQUE
    cd_p1_problem: "280+ lojas e 16 regionais sem visão centralizada. Desenvolvi aplicação analítica com FastAPI + MySQL, autenticação por perfil de acesso e drill-down por loja, regional e canal.",
    cd_p2_problem: "Análise de performance limitada ao nível de campanha. Construí dashboard que cruza dados de plataformas com leads e agendamentos do CRM — drill-down até o anúncio individual.",
    cd_p3_problem: "Consolidação de 9 plataformas feita manualmente — horas de trabalho por regional, por dia. Automatizei coleta, normalização e entrega: dados disponíveis toda manhã sem intervenção.",
    // CARD LABELS
    cd_lbl_units:       "unidades",
    cd_lbl_regions:     "regionais",
    cd_lbl_channels:    "canais",
    cd_lbl_crm:         "integrado",
    cd_lbl_granularity: "granularidade",
    cd_lbl_manual:      "↓ trabalho manual",
    cd_lbl_apis:        "fontes",
    cd_lbl_delivery:    "dados disponíveis toda manhã",

    // EXPERIÊNCIA
    exp_tag:     "experiência",
    exp_title:   "Onde atuei",
    exp_current: "● Atual",

    exp1_period: "Fev 2026 — presente",
    exp1_role:   "Data & BI Analyst | Marketing Analytics",
    exp1_loc:    "Remoto · Cliente: AudioNova Brasil",
    exp1_desc:   "Infraestrutura analítica de uma operação nacional de saúde auditiva com 280+ lojas e 16 regionais — pipelines, dashboards, automações e integrações de ponta a ponta.",
    exp1_b1:     "Pipeline de dados em Python conectando 9 APIs de mídia — coleta, normalização e consolidação automática por regional, com redução de ~90% no trabalho manual diário",
    exp1_b2:     "Dashboard web interno (FastAPI + MySQL) para análise de performance por loja, regional e canal — autenticação por perfil, filtros e exportação de 280+ unidades",
    exp1_b4:     "Ad-level analytics: drill-down por anúncio individual cruzando dados de plataforma com leads e agendamentos reais do CRM — visibilidade de CPA real por criativo",

    exp2_period: "Mar 2025 — Out 2025",
    exp2_role:   "Growth Analytics & BI Analyst",
    exp2_loc:    "Educação Digital · Expansão Internacional",
    exp2_desc:   "Análise de dados e mensuração em operação de educação digital com campanhas de alto volume em múltiplos países. Atuei estruturando processos de dados, rastreamento e dashboards durante período com ~20% de crescimento no faturamento.",
    exp2_b1:     "Análise de aquisição e funil em múltiplos países; dashboards executivos em Looker Studio, Power BI e Excel para equipes de marketing, produto e gestão",
    exp2_b3:     "Rastreamento avançado com GA4 e GTM, eventos customizados e auditorias de jornada de conversão",
    exp2_b4:     "ETL/ELT com Python, Pandas e BigQuery; automações com n8n e Make; integração com Hotmart e CRMs",

    exp3_period: "Jun 2024 — Mar 2025",
    exp3_role:   "Marketing Analytics & Performance Analyst",
    exp3_loc:    "Setor de Delivery · 13 contas simultâneas",
    exp3_desc:   "Gestão de performance com foco em ROAS, funil de conversão e análise de dados de aquisição — base que desenvolveu entendimento profundo de métricas de marketing antes da transição para Analytics.",
    exp3_b1:     "Acompanhamento de ROAS, CAC, CPA e conversão em campanhas Google Ads e Meta Ads; otimizações com base em análise de funil",
    exp3_b2:     "Relatórios e dashboards em Excel e Notion — redução de ~50% no tempo de apresentação de resultados para clientes",
    exp3_tech: "Meta Ads · Google Ads · ROAS · Análise de Funil · Excel",

    exp4_period:  "Mar 2024 — Set 2024",
    exp4_role:    "Gestor de Tráfego e Marketing Digital",
    exp4_company: "Autônomo",
    exp4_loc:     "Empresas locais · Ourinhos, SP",
    exp4_desc:    "Ciclo completo para negócios locais — campanhas, landing pages e análise de métricas. Onde desenvolvi a base prática em aquisição de clientes, análise de jornada e leitura de dados de marketing que fundamentam minha atuação atual em Analytics.",

    // EDUCAÇÃO
    edu_tag:     "formação",
    edu_title:   "Educação & Certificações",
    edu1_title:  "Tecnólogo em ADS",
    edu1_status: "Concluído",
    edu1_desc:   "Análise e Desenvolvimento de Sistemas — banco de dados, engenharia de software, desenvolvimento web e lógica de programação.",
    edu2_title:  "Certificações Principais",
    cert1: "Data Analyst Associate — DataCamp",
    cert2: "Google Ads — Search, Display & Performance Max",
    cert3: "Meta Blueprint — Meta Ads",
    edu3_title: "Formação Complementar",
    edu3_desc:  "Comunidade Sobral de Tráfego · SQL · Python · BI · CRO · Growth · Automações · Engenharia de Dados",

    cpt_sub_pipeline: "coleta + normalização",

    // PROJETOS
    conf_text:  "Cases preservam a lógica das soluções; dados sensíveis foram anonimizados.",
    cat_bi:       "BI & Analytics",
    cat_pipeline: "Data Pipelines & Automação",
    cat_tracking: "Integração & Eventos Server-Side",
    cat_ai:       "AI & Experimentação",

    pt_open:      "Open Source",
    pt_client:    "Client Work",
    pt_tool:      "Ferramenta Interna",
    pt_personal:  "Projeto Pessoal",
    pt_challenge: "Case Técnico",
    p_case:      "Ver Case ↗",
    p_gh:        "GitHub",

    p1_title: "Pipeline<br>Multi-Fonte",
    p1_desc:  "Pipeline que automatiza coleta, normalização e consolidação diária de dados de 9+ plataformas em relatório estruturado por regional — eliminando horas de trabalho manual e garantindo dados confiáveis toda manhã.",
    p2_title: "Pipeline de Tratamento de Dados",
    p2_desc:  "Aplicação que cruza e padroniza registros de duas fontes com nomenclaturas diferentes — reconciliando 280+ unidades e 80+ parceiros sem intervenção manual.",
    p3_title: "AI Ad Metrics Analyzer",
    p3_desc:  "Aplicação que conecta APIs externas, coleta métricas automaticamente e usa IA para gerar recomendações práticas — o que pausar, o que escalar e onde realocar esforço.",
    p4_title: "Pipeline de Eventos Server-Side · Meta",
    p4_desc:  "Implementação server-side da Conversions API do Meta em paralelo com o Pixel — melhorando a qualidade do sinal de conversão, reduzindo sub-reporte e aumentando o match rate para algoritmos de lances. Operação com 1.000+ anúncios ativos e múltiplas regionais.",
    p5_title: "Automação de Workflow Operacional",
    p5_desc:  "Automação que lê emails de suporte via Microsoft Graph API, classifica e extrai dados com IA, e cria ou atualiza tasks no ClickUp — integração end-to-end sem custo (Oracle Cloud Free Tier).",
    p6_title: "Pipeline de Eventos Server-Side · TikTok",
    p6_desc:  "Reestruturação completa do pipeline de eventos server-side do TikTok: estrutura redesenhada para lead gen, parâmetros de matching e validação sistemática via Events Manager.",
    p7_title: "Ad-Level<br>Analytics",
    p7_desc:  "Dashboard interno que cruza dados de plataformas com leads e agendamentos reais do CRM — análise granular até o nível de anúncio individual, com visibilidade de CPA, filtros cruzados e exportação Excel.",
    p8_title:  "Store-Level<br>Analytics",
    p8_desc:   "Aplicação que centraliza a análise de performance de 280+ lojas em 16 regionais, com filtros por canal e período, controle de acesso por regional e exportação — eliminando planilhas fragmentadas.",
    p10_title: "Desafio Técnico Looqbox",
    p10_desc:  "Três cases de análise de dados entregues como processo seletivo técnico: query parametrizada com MySQL e pandas, análise de ticket médio por loja, e visualização exploratória de dados com matplotlib.",
    p11_title: "Calculadora de Imposto Meta Ads",
    p11_desc:  "Calculadora que resolve um problema cotidiano de operações de mídia: o imposto de 12,15% do Meta Ads. Calcula o valor correto a inserir na plataforma para manter o investimento líquido desejado.",
    p12_title: "Transcritor de Call em Tempo Real",
    p12_desc:  "Script que transcreve calls de trabalho em tempo real usando Whisper rodando localmente — sem bots, sem servidores externos, sem custo. Captura áudio do sistema e salva a transcrição com timestamps.",

    // DIFERENCIAIS
    d2_title: "Pipeline completo: coleta, tratamento e análise",
    d4_title: "Base técnica em mídia e infraestrutura analítica",
    d5_title: "Do dado bruto à recomendação prática",

    // SOBRE
    img_store_alt: "Store-Level Analytics — dashboard de performance por loja",
    img_ad_alt:    "Ad-Level Analytics — drill-down até o anúncio individual",
    img_lucas_alt: "Lucas Morales — Analista de Dados e BI",
    about_tag:   "sobre",
    about_title: "Dados que<br>viram decisão.",
    about_p1:    "Profissional de dados com formação em tecnologia e base construída em operações reais de mídia e marketing. Comecei gerenciando tráfego pago e percebi que mesmo boa estratégia fica limitada quando os dados não são confiáveis — foi o que me levou a focar em analytics, BI e automação.",
    about_p2:    "Hoje atuo onde existe problema concreto: dado fragmentado entre sistemas, relatório manual recorrente, decisão tomada sem visibilidade real. Construo pipelines, dashboards e integrações que conectam fontes dispersas e transformam dados operacionais em decisões mais rápidas e confiáveis.",

    contact_wa:    "WhatsApp ↗",
    contact_email: "E-mail",

    // DEPOIMENTOS
    test_tag:   "referências",
    test_title: "O que dizem",
    t1_text:  "Trabalhei com o Lucas por alguns meses na empresa. Nesse tempo ele se destacou pela agilidade e inteligência em executar e propor melhorias. Recomendo tranquilamente, é um ótimo companheiro de equipe e um ótimo profissional.",
    t1_name:  "João Azevedo",
    t1_role:  "Gestor de Tráfego · Analista de Performance · LinkedIn",
    t2_text:  "Lucas é espetacular! Uma pessoa que aprende rápido, adora dados, esforçado, dá o melhor de si e sempre busca trazer insights e novas opções para melhorar os resultados, além da experiência e aprendizado contínuo sobre mídia paga. Agregará em qualquer lugar que trabalhar.",
    t2_name:  "Mikael França",
    t2_role:  "Especialista em Marketing Digital · Gestor de Performance e Growth · LinkedIn",

    // CTA
    cta_tag:      "contato",
    cta_title: "Buscando alguém que conecte dados, operação e decisão? Estou disponível para trabalho remoto — Brasil, Estados Unidos, Austrália, Portugal e Canadá.",
    cta_linkedin: "LinkedIn ↗",

    footer_text: "© 2026 Lucas Morales · Data Analytics & BI",

    // ARIA / UX
    menu_open:   "Abrir menu",
    modal_close: "Fechar",
  },

  en: {
    // NAV
    nav_exp:      "Experience",
    nav_projects: "Projects",
    nav_about:    "About",
    nav_cv:       "CV ↗",
    nav_capabilities:   "Expertise",
    nav_idx:            "Other Projects",
    nav_testimonials:   "References",

    // HERO
    hero_tagline:  "I build pipelines, dashboards and automations that connect media, CRM and operational data to business decisions.",
    hero_availability: "Open to opportunities · Ourinhos, SP",
    hero_stats_context: "¹ Figures from operations I worked on directly. Sensitive data preserved for confidentiality.",
    hm_manual:     "↓ manual work",
    hm_sources:    "sources integrated",
    hm_units:      "units analyzed",
    cta_cases:     "View projects ↓",
    cta_cv:        "CV ↗",
    cta_linkedin:  "LinkedIn ↗",
    cta_email:     "Email ↗",

    // CAPABILITIES
    cap_title:  "Expertise",
    cap1_title: "Analytics & BI",
    cap1_desc:  "Executive and operational dashboards, data modeling and performance analysis. Focus on decisions, not visualization for its own sake.",
    cap2_title: "Data Pipelines & Automation",
    cap2_desc:  "Collection, normalization and consolidation pipelines — Python connecting APIs, CRMs, databases and spreadsheets. I eliminate recurring manual work.",
    cap3_title: "Marketing Analytics & Tracking",
    cap3_desc:  "Acquisition analysis, funnels and server-side events with GA4, GTM, Meta CAPI and TikTok Events API. I understand both media and infrastructure.",

    // PROJECT INDEX
    idx_title:    "Other projects",
    filter_all:   "All",

    // CASES
    cd_p1_problem: "280+ stores and 16 regions with no centralized view. I built an analytics app with FastAPI + MySQL, profile-based authentication and drill-down by store, region and channel.",
    cd_p2_problem: "Performance analysis limited to campaign level. I built a dashboard crossing platform data with CRM leads and appointments — drill-down to individual ad.",
    cd_p3_problem: "Consolidating 9 platforms was done manually — hours of work per region, per day. I automated collection, normalization and delivery: data available every morning without intervention.",
    // CARD LABELS
    cd_lbl_units:       "units",
    cd_lbl_regions:     "regions",
    cd_lbl_channels:    "channels",
    cd_lbl_crm:         "integrated",
    cd_lbl_granularity: "granularity",
    cd_lbl_manual:      "↓ manual work",
    cd_lbl_apis:        "sources",
    cd_lbl_delivery:    "data available every morning",

    // EXPERIENCE
    exp_tag:     "experience",
    exp_title:   "Where I've worked",
    exp_current: "● Current",

    exp1_period: "Feb 2026 — present",
    exp1_role:   "Data & BI Analyst | Marketing Analytics",
    exp1_loc:    "Remote · Client: AudioNova Brasil",
    exp1_desc:   "Analytics infrastructure for a national hearing health operation with 280+ stores and 16 regions — pipelines, dashboards, automations and integrations end to end.",
    exp1_b1:     "Python data pipeline connecting 9 media APIs — collection, normalization and automatic consolidation by region, with ~90% reduction in daily manual work",
    exp1_b2:     "Internal web dashboard (FastAPI + MySQL) for store, region and channel performance — auth by profile, filters and export for 280+ units",
    exp1_b4:     "Ad-level analytics: drill-down per individual ad crossing platform data with real CRM leads and appointments — real CPA visibility per creative",

    exp2_period: "Mar 2025 — Oct 2025",
    exp2_role:   "Growth Analytics & BI Analyst",
    exp2_loc:    "Digital Education · International Expansion",
    exp2_desc:   "Data analysis and measurement at a digital education operation with high-volume campaigns across multiple countries. Structured data processes, tracking, and dashboards during a period with ~20% revenue growth.",
    exp2_b1:     "Acquisition and funnel data analysis across multiple countries; executive dashboards in Looker Studio, Power BI, and Excel for marketing, product, and management teams",
    exp2_b3:     "Advanced tracking with GA4 and GTM, custom events, and conversion journey audits",
    exp2_b4:     "ETL/ELT with Python, Pandas, and BigQuery; automations with n8n and Make; Hotmart and CRM integrations",

    exp3_period: "Jun 2024 — Mar 2025",
    exp3_role:   "Marketing Analytics & Performance Analyst",
    exp3_loc:    "Delivery Sector · 13 simultaneous accounts",
    exp3_desc:   "Performance management focused on ROAS, conversion funnels, and acquisition data analysis — the foundation that built deep marketing metrics understanding before transitioning to Analytics.",
    exp3_b1:     "ROAS, CAC, CPA, and conversion tracking across Google Ads and Meta Ads campaigns; funnel-driven optimizations",
    exp3_b2:     "Reports and dashboards in Excel and Notion — ~50% reduction in client results presentation time",
    exp3_tech: "Meta Ads · Google Ads · ROAS · Funnel Analysis · Excel",

    exp4_period:  "Mar 2024 — Sep 2024",
    exp4_role:    "Digital Marketing & Performance",
    exp4_company: "Freelance",
    exp4_loc:     "Local businesses · Ourinhos, SP",
    exp4_desc:    "Full cycle for local businesses — campaigns, landing pages and metrics analysis. Where I built the practical foundation in customer acquisition, journey analysis and marketing data reading that grounds my current Analytics work.",

    // EDUCATION
    edu_tag:     "education",
    edu_title:   "Education & Certifications",
    edu1_title:  "Systems Analysis and Development",
    edu1_status: "Completed",
    edu1_desc:   "Tecnólogo (Associate's degree) — databases, software engineering, web development, programming logic.",
    edu2_title:  "Main Certifications",
    cert1: "Data Analyst Associate — DataCamp",
    cert2: "Google Ads — Search, Display & Performance Max",
    cert3: "Meta Blueprint — Meta Ads",
    edu3_title: "Complementary Training",
    edu3_desc:  "Sobral Paid Traffic Community · SQL · Python · BI · CRO · Growth · Automation · Data Engineering.",

    cpt_sub_pipeline: "collection + normalization",

    // PROJECTS
    conf_text:  "Case studies preserve solution logic; sensitive data has been anonymized.",
    cat_bi:       "BI & Analytics",
    cat_pipeline: "Data Pipelines & Automation",
    cat_tracking: "Integration & Server-Side Events",
    cat_ai:       "AI & Experimentation",

    pt_open:      "Open Source",
    pt_client:    "Client Work",
    pt_tool:      "Internal Tool",
    pt_personal:  "Personal Project",
    pt_challenge: "Tech Challenge",
    p_case:      "View Case ↗",
    p_gh:        "GitHub",

    p1_title: "Multi-Source<br>Pipeline",
    p1_desc:  "Pipeline that automates daily collection, normalization and consolidation of data from 9+ platforms into a structured regional report — eliminating hours of manual work and ensuring consistent, reliable data every morning.",
    p2_title: "Data Processing Pipeline",
    p2_desc:  "Tool that automatically cross-references records from two sources with different naming conventions — reconciling 280+ units and 80+ partners without manual intervention.",
    p3_title: "AI Ad Metrics Analyzer",
    p3_desc:  "App that connects external APIs, collects metrics automatically, and uses AI to generate practical recommendations — what to pause, what to scale, and where to reallocate effort.",
    p4_title: "Server-Side Event Pipeline · Meta",
    p4_desc:  "Server-side Conversions API implementation running alongside the Pixel — improving conversion signal quality, reducing under-reporting, and increasing match rate for bidding algorithms. Operation with 1,000+ active ads across multiple regions.",
    p5_title: "Operational Workflow Automation",
    p5_desc:  "Automation that reads support emails via Microsoft Graph API, classifies and extracts data with AI, and creates or updates ClickUp tasks — end-to-end integration at zero cost (Oracle Cloud Free Tier).",
    p6_title: "Server-Side Event Pipeline · TikTok",
    p6_desc:  "Full restructuring of TikTok server-side event pipeline: redesigned event structure for lead gen, correct matching parameters, and systematic validation via Events Manager.",
    p7_title: "Ad-Level<br>Analytics",
    p7_desc:  "Internal dashboard crossing platform data with CRM leads and real appointments — drill-down to individual ad with CPA visibility, cross-filters and Excel export.",
    p8_title:  "Store-Level<br>Analytics",
    p8_desc:   "App that centralizes performance analysis for 280+ stores across 16 regions, with channel and period filters, region-based access control, and export — replacing fragmented spreadsheets.",
    p10_title: "Looqbox Technical Challenge",
    p10_desc:  "Three data analysis cases delivered as a technical selection process: parameterized MySQL query with pandas, average ticket analysis by store, and exploratory data visualization with matplotlib.",
    p11_title: "Meta Ads Tax Calculator",
    p11_desc:  "Calculator that solves a daily media operations problem: Meta Ads' 12.15% tax. Calculates the exact amount to enter in the platform to maintain the desired net investment.",
    p12_title: "Real-Time Call Transcriber",
    p12_desc:  "Script that transcribes work calls in real time using Whisper running locally — no bots, no external servers, no cost. Captures system audio and saves the transcript with timestamps.",

    // DIFFERENTIALS
    d2_title: "Full pipeline: collection, processing and analysis",
    d4_title: "Technical foundation in media and analytics infrastructure",
    d5_title: "From raw data to practical recommendation",

    // ABOUT
    img_store_alt: "Store-Level Analytics — store performance dashboard",
    img_ad_alt:    "Ad-Level Analytics — drill-down to individual ad",
    img_lucas_alt: "Lucas Morales — Data Analytics & BI Analyst",
    about_tag:   "about",
    about_title: "Data that<br>drives decisions.",
    about_p1:    "Data professional with a technology background built through real operations in media and marketing. I started managing paid traffic and realized that even good strategy is limited when the data isn't reliable — that's what led me to focus on analytics, BI and automation.",
    about_p2:    "Today I work where there's a concrete problem: data fragmented across systems, recurring manual reports, decisions made without real visibility. I build pipelines, dashboards and integrations that connect scattered sources and turn operational data into faster, more reliable decisions.",

    contact_wa:    "WhatsApp ↗",
    contact_email: "Email",

    // TESTIMONIALS
    test_tag:   "references",
    test_title: "What they say",
    t1_text:  "I worked with Lucas for a few months at the company. During that time, he stood out for his agility and intelligence in executing and proposing improvements. I highly recommend him — he's a great teammate and a great professional.",
    t1_name:  "João Azevedo",
    t1_role:  "Traffic Manager · Performance Analyst · LinkedIn",
    t2_text:  "Lucas is spectacular! Someone who learns fast, loves data, is hardworking, gives his best and always seeks to bring insights and new options to improve results, in addition to continuous experience and learning in paid media. He will add value wherever he works.",
    t2_name:  "Mikael França",
    t2_role:  "Digital Marketing Specialist · Performance & Growth Manager · LinkedIn",

    // CTA
    cta_tag:      "contact",
    cta_title: "Looking for someone who connects data, operations and decisions? Available for remote work — Brazil, United States, Australia, Portugal and Canada.",
    cta_linkedin: "LinkedIn ↗",

    footer_text: "© 2026 Lucas Morales · Data Analytics & BI",

    // ARIA / UX
    menu_open:   "Open menu",
    modal_close: "Close",
  }
};
