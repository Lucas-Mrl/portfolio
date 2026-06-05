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
    hm_context:   "Indicadores aproximados de operações em que atuei diretamente, com dados sensíveis preservados por confidencialidade.",
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
    exp1_desc:   "Atuo diretamente na conta AudioNova — operação de saúde auditiva com 280+ lojas em todo o Brasil e verba mensal na casa dos 7 dígitos em mídia paga. Além da gestão de campanhas em 8 plataformas, sou responsável pelo desenvolvimento da infraestrutura analítica que sustenta as decisões de performance: automações, dashboards, tracking server-side e aplicações internas.",
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

    pt_open:      "Open Source",
    pt_client:    "Client Work",
    pt_tool:      "Ferramenta Interna",
    pt_personal:  "Projeto Pessoal",
    pt_challenge: "Case Técnico",
    p_case:      "Ver Case ↗",
    p_gh:        "GitHub",

    p1_title: "Relatório de Mídia Automatizado",
    p1_desc:  "Pipeline que automatiza a consolidação diária de verba de 9+ plataformas de mídia em um único relatório estruturado por regional — eliminando horas de trabalho manual e garantindo dados consistentes para tomada de decisão.",
    p2_title: "Leads Processor",
    p2_desc:  "Ferramenta que cruza automaticamente relatórios de leads de duas fontes com nomenclaturas diferentes — reconciliando nomes de 280+ lojas e 80+ parceiros sem intervenção manual.",
    p3_title: "AI Ad Metrics Analyzer",
    p3_desc:  "Aplicação que conecta a API do Meta Ads, coleta métricas de campanhas automaticamente e usa IA para gerar recomendações práticas — o que pausar, o que escalar e onde redistribuir verba.",
    p4_title: "Meta CAPI — AudioNova",
    p4_desc:  "Implementação server-side da Conversions API do Meta em paralelo com o Pixel — melhorando a qualidade do sinal de conversão, reduzindo sub-reporte e aumentando o match rate para algoritmos de lances.",
    p5_title: "Email → ClickUp Automation",
    p5_desc:  "Automação que lê emails de suporte, extrai dados estruturados com IA e cria ou atualiza tasks no ClickUp automaticamente — eliminando o processo manual de triagem e registro.",
    p6_title: "TikTok Pixel & CAPI V2",
    p6_desc:  "Reconfiguração completa do tracking server-side do TikTok: estrutura de eventos redesenhada para lead gen, parâmetros de matching corretos e validação sistemática — garantindo dados confiáveis no Ads Manager.",
    p7_title: "Ad-Level Analytics Web App",
    p7_desc:  "Dashboard que cruza dados de plataforma com leads e agendamentos do CRM — permitindo análise granular por campanha, conjunto e anúncio, com drill-down e exportação Excel.",
    p8_title:  "Store-Level Analytics",
    p8_desc:   "Aplicação que centraliza a análise de performance de 280+ lojas em 16 regionais, com filtros por canal e período, controle de acesso por regional e exportação — eliminando planilhas fragmentadas.",
    p10_title: "Desafio Técnico Looqbox",
    p10_desc:  "Três cases de análise de dados entregues como processo seletivo técnico: query parametrizada com MySQL e pandas, análise de ticket médio por loja, e visualização exploratória de dados com matplotlib.",
    p11_title: "Calculadora de Imposto Meta Ads",
    p11_desc:  "Calculadora que resolve um problema cotidiano de operações de mídia: o imposto de 12,15% do Meta Ads. Calcula o valor correto a inserir na plataforma para manter o investimento líquido desejado.",
    p12_title: "Transcritor de Call em Tempo Real",
    p12_desc:  "Script que transcreve calls de trabalho em tempo real usando Whisper rodando localmente — sem bots, sem servidores externos, sem custo. Captura áudio do sistema e salva a transcrição com timestamps.",
    // DIFERENCIAIS
    diff_tag:   "diferenciais",
    diff_title: "Diferenciais da minha atuação",
    d1_title: "Não analiso mídia isolada",
    d1_desc:  "Conecto investimento, leads, lojas, CRM e jornada do usuário. O número da plataforma precisa dialogar com o que chegou no CRM e o que virou venda.",
    d2_title: "Não dependo só de dashboard",
    d2_desc:  "Quando os dados precisam ser estruturados antes de virar análise, eu construo o pipeline. Não terceirizo o problema técnico para depois poder fazer a análise.",
    d3_title: "Tenho visão de negócio",
    d3_desc:  "Traduzo métricas técnicas em recomendações práticas. CPL alto não é um número — é um sinal de onde o funil está quebrando ou onde a segmentação errou.",
    d4_title: "Base técnica para executar",
    d4_desc:  "Python, SQL, APIs, tracking server-side, BI e automação — quando não existe ferramenta pronta, eu construo. Isso reduz a dependência de engenharia em problemas analíticos e operacionais de marketing.",
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
    t1_role:  "Depoimento anonimizado · Media.k · LinkedIn",
    t2_text:  "A visão por loja e regional facilitou muito a leitura de performance da operação. Conseguimos identificar gargalos específicos que antes ficavam escondidos nos números consolidados.",
    t2_name:  "Gestor de conta",
    t2_role:  "Depoimento anonimizado · AudioNova · LinkedIn",

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
    hm_context:   "Approximate figures from operations I worked on directly. Sensitive data preserved for confidentiality.",
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
    exp1_desc:   "Working directly on the AudioNova account — a hearing health operation with 280+ stores across Brazil and a 7-figure monthly paid media budget. Beyond campaign management across 8 platforms, I'm responsible for building the analytics infrastructure behind performance decisions: automations, dashboards, server-side tracking, and internal tools.",
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

    pt_open:      "Open Source",
    pt_client:    "Client Work",
    pt_tool:      "Internal Tool",
    pt_personal:  "Personal Project",
    pt_challenge: "Tech Challenge",
    p_case:      "View Case ↗",
    p_gh:        "GitHub",

    p1_title: "Automated Media Report",
    p1_desc:  "Pipeline that automates daily consolidation of media spend from 9+ platforms into a single structured report by region — eliminating hours of manual work and ensuring consistent data for decision-making.",
    p2_title: "Leads Processor",
    p2_desc:  "Tool that automatically cross-references lead reports from two sources with different naming conventions — reconciling 280+ store names and 80+ partners without manual intervention.",
    p3_title: "AI Ad Metrics Analyzer",
    p3_desc:  "App that connects to the Meta Ads API, collects campaign metrics automatically, and uses AI to generate practical recommendations — what to pause, what to scale, and where to reallocate budget.",
    p4_title: "Meta CAPI — AudioNova",
    p4_desc:  "Server-side implementation of Meta's Conversions API running alongside the Pixel — improving conversion signal quality, reducing under-reporting, and increasing match rate for bidding algorithms.",
    p5_title: "Email → ClickUp Automation",
    p5_desc:  "Automation that reads support emails, extracts structured data with AI, and creates or updates ClickUp tasks automatically — eliminating the manual triage and logging process.",
    p6_title: "TikTok Pixel & CAPI V2",
    p6_desc:  "Full reconfiguration of TikTok server-side tracking: redesigned event structure for lead gen, correct matching parameters, and systematic validation — ensuring reliable data in Ads Manager.",
    p7_title: "Ad-Level Analytics Web App",
    p7_desc:  "Dashboard that cross-references platform data with CRM leads and appointments — enabling granular analysis by campaign, ad set, and ad, with drill-down and Excel export.",
    p8_title:  "Store-Level Analytics",
    p8_desc:   "App that centralizes performance analysis for 280+ stores across 16 regions, with channel and period filters, region-based access control, and export — replacing fragmented spreadsheets.",
    p10_title: "Looqbox Technical Challenge",
    p10_desc:  "Three data analysis cases delivered as a technical selection process: parameterized MySQL query with pandas, average ticket analysis by store, and exploratory data visualization with matplotlib.",
    p11_title: "Meta Ads Tax Calculator",
    p11_desc:  "Calculator that solves a daily media operations problem: Meta Ads' 12.15% tax. Calculates the exact amount to enter in the platform to maintain the desired net investment.",
    p12_title: "Real-Time Call Transcriber",
    p12_desc:  "Script that transcribes work calls in real time using Whisper running locally — no bots, no external servers, no cost. Captures system audio and saves the transcript with timestamps.",
    // DIFFERENTIALS
    diff_tag:   "differentials",
    diff_title: "What sets my work apart",
    d1_title: "I don't analyze media in isolation",
    d1_desc:  "I connect spend, leads, stores, CRM, and user journey. Platform numbers need to align with what hit the CRM and what turned into a sale.",
    d2_title: "I don't depend solely on dashboards",
    d2_desc:  "When data needs to be structured before it can be analyzed, I build the pipeline. I don't outsource the technical problem and wait to do the analysis later.",
    d3_title: "I have a business mindset",
    d3_desc:  "I translate technical metrics into practical recommendations. A high CPL isn't just a number — it's a signal of where the funnel is breaking or where targeting went wrong.",
    d4_title: "Technical foundation to execute",
    d4_desc:  "Python, SQL, APIs, server-side tracking, BI and automation — when there's no ready-made tool, I build it. This reduces dependency on engineering for analytical and operational marketing problems.",
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
    t1_name:  "Teammate",
    t1_role:  "Anonymous testimonial · Media.k · LinkedIn",
    t2_text:  "The store and regional breakdown made it much easier to read the operation's performance. We were able to identify specific bottlenecks that were previously hidden in consolidated numbers.",
    t2_name:  "Account Manager",
    t2_role:  "Anonymous testimonial · AudioNova · LinkedIn",

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
      tag: "Ferramenta Interna · Python · Automação",
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
          "Agregação por 16 regionais via pattern-matching nos nomes de campanha",
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
      github: "https://github.com/Lucas-Mrl",
      context: {
        label: "Contexto",
        text: "Operação de mídia paga em 9+ plataformas, cada uma com API própria, estrutura de dados diferente e autenticação distinta. A consolidação por regional era feita manualmente, com alto risco de erro e custo de horas semanais."
      },
      responsibility: {
        label: "Minha responsabilidade",
        text: "Desenvolvi o pipeline completo do zero: arquitetura de connectors por plataforma, normalização e padronização dos dados, lógica de agregação por regional, integração com Google Sheets via API e automação do fluxo com GitHub Actions."
      },
      before_after: {
        label: "Antes & Depois",
        before: [
          "Consolidação manual por plataforma, em planilhas separadas",
          "Processo demorava horas a cada atualização",
          "Inconsistência entre períodos e fontes",
          "Sem visibilidade comparativa entre plataformas"
        ],
        after: [
          "Pipeline automatizado, atualização diária sem intervenção",
          "Dados normalizados e comparáveis entre todas as plataformas",
          "Relatório estruturado por regional disponível toda manhã",
          "Equipe focada em análise, não em consolidação"
        ]
      },
      learnings: {
        label: "Aprendizados",
        text: "Cada API tem rate limits, estrutura de resposta e autenticação distintos. Abstrair os connectors com uma interface comum tornou possível escalar de 3 para 9+ plataformas sem reescrever o core do pipeline. A decisão mais importante foi separar coleta, normalização e escrita em camadas independentes."
      }
    },
    en: {
      tag: "Internal Tool · Python · Automation",
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
          "16-regional aggregation via campaign name pattern-matching",
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
      github: "https://github.com/Lucas-Mrl",
      context: {
        label: "Context",
        text: "Paid media operation across 9+ platforms, each with its own API, data structure, and authentication. Regional consolidation was done manually, with high error risk and a weekly cost of several hours."
      },
      responsibility: {
        label: "My responsibility",
        text: "Built the full pipeline from scratch: per-platform connector architecture, data normalization and standardization, regional aggregation logic, Google Sheets API integration, and GitHub Actions automation."
      },
      before_after: {
        label: "Before & After",
        before: [
          "Manual consolidation per platform, in separate spreadsheets",
          "Process took hours at every update",
          "Inconsistencies between periods and sources",
          "No comparative visibility across platforms"
        ],
        after: [
          "Automated pipeline, daily update with no intervention",
          "Normalized, comparable data across all platforms",
          "Structured regional report available every morning",
          "Team focused on analysis, not consolidation"
        ]
      },
      learnings: {
        label: "Learnings",
        text: "Each API has different rate limits, response structures, and authentication. Abstracting connectors with a common interface made it possible to scale from 3 to 9+ platforms without rewriting the pipeline core. The most important decision was separating collection, normalization, and writing into independent layers."
      }
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
      github: "https://github.com/Lucas-Mrl/leads-processor",
      context: {
        label: "Contexto",
        text: "A operação utilizava dois sistemas distintos para gestão de leads — um CRM interno e um sistema de parceiros — cada um com nomenclatura própria para as mesmas lojas. O cruzamento manual entre os dois relatórios consumia tempo e gerava erros de atribuição."
      },
      responsibility: {
        label: "Minha responsabilidade",
        text: "Construí a aplicação client-side completa: algoritmo de mapeamento determinístico para reconciliar nomenclaturas, lógica de cruzamento entre os dois arquivos, interface de upload e exibição dos resultados unificados."
      },
      before_after: {
        label: "Antes & Depois",
        before: [
          "Dois relatórios separados, sem conexão automática",
          "Reconciliação manual de nomes por analista",
          "Erros de atribuição por variações de nomenclatura",
          "Processo repetido toda semana"
        ],
        after: [
          "Upload dos dois arquivos, cruzamento automático",
          "Mapeamento determinístico de 280+ lojas e 80+ parceiros",
          "Resultado unificado com atribuição correta",
          "Processo que levava horas resolvido em segundos"
        ]
      },
      learnings: {
        label: "Aprendizados",
        text: "O problema não era tecnológico — era de nomenclatura inconsistente entre sistemas. Modelar o mapeamento como dado (não como código hardcoded) tornou a solução resiliente a novos casos sem necessidade de redeployment."
      }
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
      github: "https://github.com/Lucas-Mrl/leads-processor",
      context: {
        label: "Context",
        text: "The operation used two distinct systems for lead management — an internal CRM and a partner system — each with its own naming convention for the same stores. Manual cross-referencing between the two reports was time-consuming and caused attribution errors."
      },
      responsibility: {
        label: "My responsibility",
        text: "Built the full client-side application: deterministic mapping algorithm to reconcile naming conventions, cross-referencing logic between the two files, upload interface, and unified results display."
      },
      before_after: {
        label: "Before & After",
        before: [
          "Two separate reports with no automatic connection",
          "Manual name reconciliation by analysts",
          "Attribution errors due to naming variations",
          "Process repeated every week"
        ],
        after: [
          "Upload both files, automatic cross-referencing",
          "Deterministic mapping for 280+ stores and 80+ partners",
          "Unified result with correct attribution",
          "Process that took hours resolved in seconds"
        ]
      },
      learnings: {
        label: "Learnings",
        text: "The problem wasn't technical — it was inconsistent naming between systems. Modeling the mapping as data (not hardcoded logic) made the solution resilient to new cases without requiring redeployment."
      }
    }
  },

  "ai-analytics": {
    demo: "assets/demos/ai-metrics.html",
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
      },
      context: {
        label: "Contexto",
        text: "Operação com 1.000+ anúncios ativos e múltiplas regionais, dependendo exclusivamente do Pixel para mensuração de conversões. Com restrições crescentes de cookies e browsers, o sub-reporte aumentava — afetando a qualidade dos sinais para os algoritmos de lances do Meta."
      },
      responsibility: {
        label: "Minha responsabilidade",
        text: "Implementei a Conversions API server-side completa em paralelo com o Pixel existente: configuração dos eventos, lógica de deduplicação, definição dos parâmetros de qualidade de match (email hash, phone hash, fbp, fbc) e monitoramento contínuo via Events Manager."
      },
      before_after: {
        label: "Antes & Depois",
        before: [
          "Mensuração dependente exclusivamente do Pixel client-side",
          "Sub-reporte crescente por bloqueios de cookies e navegadores",
          "Sinais fracos para os algoritmos de lances",
          "Match rate abaixo do ideal"
        ],
        after: [
          "CAPI server-side rodando em paralelo com o Pixel",
          "Menor sub-reporte de conversões",
          "Dados mais completos para os algoritmos do Meta",
          "Match rate melhorado com parâmetros de qualidade"
        ]
      },
      learnings: {
        label: "Aprendizados",
        text: "A deduplicação de eventos é tão crítica quanto a implementação em si — eventos duplicados prejudicam os algoritmos tanto quanto eventos ausentes. A qualidade dos parâmetros de matching (não apenas a quantidade de eventos) é o fator que mais impacta o resultado prático."
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
      },
      context: {
        label: "Context",
        text: "Operation with 1,000+ active ads and multiple regions, relying exclusively on the Pixel for conversion measurement. With growing cookie and browser restrictions, under-reporting was increasing — affecting the quality of signals for Meta's bidding algorithms."
      },
      responsibility: {
        label: "My responsibility",
        text: "Implemented the full server-side Conversions API in parallel with the existing Pixel: event configuration, deduplication logic, definition of match quality parameters (email hash, phone hash, fbp, fbc), and continuous monitoring via Events Manager."
      },
      before_after: {
        label: "Before & After",
        before: [
          "Measurement relying exclusively on client-side Pixel",
          "Growing under-reporting due to cookie and browser blocking",
          "Weak signals for bidding algorithms",
          "Below-target match rate"
        ],
        after: [
          "Server-side CAPI running in parallel with Pixel",
          "Reduced conversion under-reporting",
          "More complete data for Meta's algorithms",
          "Improved match rate with quality parameters"
        ]
      },
      learnings: {
        label: "Learnings",
        text: "Event deduplication is as critical as the implementation itself — duplicate events harm algorithms as much as missing ones. The quality of matching parameters (not just event volume) is the factor with the most practical impact."
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
      },
      context: {
        label: "Contexto",
        text: "A equipe recebia chamados de suporte por email que precisavam ser manualmente convertidos em tasks estruturadas no ClickUp — com campos de prioridade, categoria e prazo extraídos do corpo do email. Processo lento, sujeito a perda de informações e consumindo tempo operacional desnecessário."
      },
      responsibility: {
        label: "Minha responsabilidade",
        text: "Orquestrei o fluxo completo no n8n: configurei a leitura de emails via Microsoft Graph API, integrei IA para extração e classificação dos dados, e implementei a criação/atualização automática de tasks no ClickUp. Configurei e hospedei a instância na Oracle Cloud Free Tier."
      },
      before_after: {
        label: "Antes & Depois",
        before: [
          "Leitura manual de cada email de suporte",
          "Criação manual de tasks no ClickUp",
          "Risco de perda ou atraso no registro",
          "Dados não estruturados, difíceis de acompanhar"
        ],
        after: [
          "Emails processados automaticamente ao chegar",
          "Tasks criadas com campos estruturados via IA",
          "Zero intervenção manual no fluxo padrão",
          "Custo operacional zero (Oracle Cloud Free Tier)"
        ]
      },
      learnings: {
        label: "Aprendizados",
        text: "A maior dificuldade foi lidar com variações no formato dos emails. Usar IA para extração em vez de regex tornou o sistema muito mais robusto a emails fora do padrão — uma decisão de arquitetura que economizou retrabalho."
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
      },
      context: {
        label: "Context",
        text: "The team received support requests by email that needed to be manually converted into structured ClickUp tasks — with priority, category, and deadline fields extracted from the email body. A slow process prone to information loss and unnecessary operational overhead."
      },
      responsibility: {
        label: "My responsibility",
        text: "Orchestrated the full flow in n8n: set up email reading via Microsoft Graph API, integrated AI for data extraction and classification, and implemented automatic task creation/update in ClickUp. Configured and hosted the instance on Oracle Cloud Free Tier."
      },
      before_after: {
        label: "Before & After",
        before: [
          "Manual reading of each support email",
          "Manual task creation in ClickUp",
          "Risk of lost or delayed records",
          "Unstructured data, difficult to track"
        ],
        after: [
          "Emails processed automatically on arrival",
          "Tasks created with structured fields via AI",
          "Zero manual intervention in standard flow",
          "Zero operational cost (Oracle Cloud Free Tier)"
        ]
      },
      learnings: {
        label: "Learnings",
        text: "The main challenge was handling email format variations. Using AI for extraction instead of regex made the system far more robust to non-standard emails — an architectural decision that saved significant rework."
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
      },
      context: {
        label: "Contexto",
        text: "O tracking V1 do TikTok Ads tinha problemas de cobertura de eventos e baixa qualidade de match, gerando dados fragmentados no TikTok Ads Manager e limitando a eficiência dos algoritmos de lances para campanhas de geração de leads."
      },
      responsibility: {
        label: "Minha responsabilidade",
        text: "Reconcebi a estrutura de eventos do zero: redefinição do mapeamento de eventos para o funil de lead gen, implementação da CAPI V2 com parâmetros de matching corretos, e validação sistemática via Events Manager até estabilização dos dados."
      },
      before_after: {
        label: "Antes & Depois",
        before: [
          "Cobertura de eventos incompleta no funil",
          "Match quality abaixo do recomendado pelo TikTok",
          "Dados fragmentados no Ads Manager",
          "Algoritmos de lances com informação insuficiente"
        ],
        after: [
          "Estrutura de eventos correta para o funil de lead gen",
          "CAPI V2 implementada com parâmetros de matching adequados",
          "Match quality melhorado após validação",
          "Dados mais consistentes para os algoritmos"
        ]
      },
      learnings: {
        label: "Aprendizados",
        text: "O TikTok tem particularidades de implementação bem diferentes do Meta — a estrutura de eventos é mais rígida e os parâmetros de matching têm pesos distintos. Documentar e validar o mapeamento antes de implementar em produção evitou retrabalho."
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
      },
      context: {
        label: "Context",
        text: "V1 TikTok Ads tracking had event coverage issues and low match quality, generating fragmented data in TikTok Ads Manager and limiting bidding algorithm efficiency for lead generation campaigns."
      },
      responsibility: {
        label: "My responsibility",
        text: "Redesigned the event structure from scratch: redefined the event mapping for the lead gen funnel, implemented CAPI V2 with correct matching parameters, and systematically validated via Events Manager until data stabilized."
      },
      before_after: {
        label: "Before & After",
        before: [
          "Incomplete event coverage in the funnel",
          "Match quality below TikTok's recommendations",
          "Fragmented data in Ads Manager",
          "Bidding algorithms with insufficient information"
        ],
        after: [
          "Correct event structure for the lead gen funnel",
          "CAPI V2 implemented with proper matching parameters",
          "Improved match quality after validation",
          "More consistent data for algorithms"
        ]
      },
      learnings: {
        label: "Learnings",
        text: "TikTok has implementation quirks very different from Meta — the event structure is more rigid and matching parameters carry different weights. Documenting and validating the mapping before deploying to production avoided significant rework."
      }
    }
  },

  "ad-analytics": {
    demo: "assets/demos/ad-analytics.html",
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
      },
      context: {
        label: "Contexto",
        text: "A operação precisava analisar performance a nível de anúncio individual, cruzando dados de plataforma com leads e agendamentos reais vindos do CRM — informação que nenhuma plataforma de mídia fornecia nativamente. A análise manual era lenta e limitada ao nível de campanha."
      },
      responsibility: {
        label: "Minha responsabilidade",
        text: "Desenvolvi a aplicação completa do zero: backend FastAPI com conexão a múltiplas fontes de dados, camada de cache para viabilizar a performance, lógica de drill-down por campanha/conjunto/anúncio, interface de visualização e exportação Excel com dados cruzados."
      },
      before_after: {
        label: "Antes & Depois",
        before: [
          "Dados isolados por plataforma, sem cruzamento com CRM",
          "Análise limitada ao nível de campanha",
          "Cruzamento manual demorado e sujeito a erro",
          "Sem exportação estruturada para compartilhar"
        ],
        after: [
          "Dashboard centralizado com dados de plataforma + CRM",
          "Drill-down até o nível de anúncio individual",
          "Cruzamento automático com leads e agendamentos reais",
          "Exportação Excel com todos os dados combinados"
        ]
      },
      learnings: {
        label: "Aprendizados",
        text: "Cache inteligente foi a decisão técnica mais crítica para viabilizar a aplicação — sem ele, o tempo de resposta tornaria o uso impraticável. Aprendi a equilibrar granularidade de dados com performance de resposta, e a importância de desenhar a API pensando no padrão de uso real."
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
      },
      context: {
        label: "Context",
        text: "The operation needed to analyze performance at the individual ad level, cross-referencing platform data with actual leads and appointments from the CRM — information no media platform provided natively. Manual analysis was slow and limited to the campaign level."
      },
      responsibility: {
        label: "My responsibility",
        text: "Built the full application from scratch: FastAPI backend connecting to multiple data sources, caching layer to ensure performance, drill-down logic by campaign/ad set/ad, visualization interface, and Excel export with cross-referenced data."
      },
      before_after: {
        label: "Before & After",
        before: [
          "Platform data isolated, no CRM cross-referencing",
          "Analysis limited to campaign level",
          "Manual cross-referencing — slow and error-prone",
          "No structured export to share results"
        ],
        after: [
          "Centralized dashboard with platform + CRM data",
          "Drill-down to individual ad level",
          "Automatic cross-referencing with actual leads and appointments",
          "Excel export with all combined data"
        ]
      },
      learnings: {
        label: "Learnings",
        text: "Smart caching was the most critical technical decision to make the application viable — without it, response times would have made it unusable. I learned to balance data granularity with response performance, and the importance of designing the API around actual usage patterns."
      }
    }
  },

  "store-analytics": {
    demo: "assets/demos/store-analytics.html",
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
      },
      context: {
        label: "Contexto",
        text: "Rede com 280+ lojas em 16 regionais onde gestores regionais precisavam analisar performance de cada unidade sem acesso a dados de outras regionais — exigindo controle de acesso granular por domínio, além da complexidade dos joins necessários para cruzar dados de leads com informações cadastrais das lojas."
      },
      responsibility: {
        label: "Minha responsabilidade",
        text: "Desenvolvi o sistema completo: queries MySQL com múltiplos joins para cruzar dados de leads com cadastro de lojas, estrutura de autenticação por domínio de email, interface de filtros com drill-down por loja, comparativos por período e canal, e exportação de dados."
      },
      before_after: {
        label: "Antes & Depois",
        before: [
          "Análise por loja dependia de cruzamentos manuais em Excel",
          "Sem visibilidade centralizada por regional",
          "Sem controle de acesso — gestor via dados de outra regional",
          "Comparação entre lojas era manual e demorada"
        ],
        after: [
          "Dashboard com acesso controlado por regional",
          "Filtros por canal, período e loja em tempo real",
          "Visão consolidada e individual por unidade",
          "Exportação estruturada para análises externas"
        ]
      },
      learnings: {
        label: "Aprendizados",
        text: "O controle de acesso por domínio de email foi a decisão técnica mais impactante — permitiu escalar para todas as regionais sem criar um sistema complexo de usuários e senhas. Definir claramente os limites de acesso antes de desenvolver economizou retrabalho e evitou problemas de privacidade operacional."
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
      },
      context: {
        label: "Context",
        text: "Network with 280+ stores across 16 regions where regional managers needed to analyze each unit's performance without access to other regions' data — requiring granular domain-based access control, plus the complexity of joins needed to cross-reference lead data with store records."
      },
      responsibility: {
        label: "My responsibility",
        text: "Built the full system: MySQL queries with multiple joins to cross-reference lead data with store records, email domain-based authentication, drill-down filter interface by store, period and channel comparisons, and data export."
      },
      before_after: {
        label: "Before & After",
        before: [
          "Store-level analysis required manual Excel cross-referencing",
          "No centralized regional visibility",
          "No access control — managers could see other regions' data",
          "Comparing stores was manual and time-consuming"
        ],
        after: [
          "Dashboard with region-based access control",
          "Real-time filters by channel, period, and store",
          "Consolidated and individual unit views",
          "Structured export for external analyses"
        ]
      },
      learnings: {
        label: "Learnings",
        text: "Email domain-based access control was the most impactful technical decision — it allowed scaling to all regions without building a complex user/password system. Clearly defining access boundaries before development saved rework and avoided operational privacy issues."
      }
    }
  },

  "looq-challenge": {
    demo: "assets/demos/looq-challenge.html",
    pt: {
      tag: "Case Técnico · Data Analytics",
      title: "Desafio Técnico Looqbox",
      stack: ["Python", "pandas", "SQLAlchemy", "MySQL", "matplotlib"],
      problem: {
        label: "O Desafio",
        text: "Processo seletivo técnico da Looqbox com 3 cases progressivos: desde queries parametrizadas em MySQL com pandas até análise exploratória de dados de vendas e visualização de dados do IMDb."
      },
      solution: {
        label: "A Solução",
        text: "3 scripts Python independentes, cada um resolvendo um case com complexidade crescente, boas práticas de código e visualizações claras.",
        bullets: [
          "Case 1: função parametrizável para queries MySQL com pandas/SQLAlchemy, filtragem por produto, loja e data",
          "Case 2: análise de performance de vendas por produto e loja — ranking, top performers, métricas por período",
          "Case 3: análise exploratória + visualização de dados do IMDb com matplotlib"
        ]
      },
      impact: {
        label: "Resultado",
        items: [
          { value: "3", label: "cases entregues" },
          { value: "MySQL", label: "queries parametrizadas" },
          { value: "pandas", label: "manipulação de dados" },
          { value: "matplotlib", label: "visualizações" }
        ]
      }
    },
    en: {
      tag: "Tech Challenge · Data Analytics",
      title: "Looqbox Technical Challenge",
      stack: ["Python", "pandas", "SQLAlchemy", "MySQL", "matplotlib"],
      problem: {
        label: "The Challenge",
        text: "Looqbox technical selection process with 3 progressive cases: from parameterized MySQL queries with pandas to sales data analysis and IMDb data visualization."
      },
      solution: {
        label: "The Solution",
        text: "3 independent Python scripts, each solving a case with increasing complexity, clean code, and clear visualizations.",
        bullets: [
          "Case 1: parameterizable function for MySQL queries with pandas/SQLAlchemy, filtering by product, store, and date",
          "Case 2: sales performance analysis by product and store — ranking, top performers, metrics by period",
          "Case 3: exploratory analysis + IMDb data visualization with matplotlib"
        ]
      },
      impact: {
        label: "Results",
        items: [
          { value: "3", label: "cases delivered" },
          { value: "MySQL", label: "parameterized queries" },
          { value: "pandas", label: "data manipulation" },
          { value: "matplotlib", label: "visualizations" }
        ]
      }
    }
  },

  "meta-tax-calc": {
    demo: "assets/demos/meta-tax-calc.html",
    pt: {
      tag: "Open Source · React",
      title: "Calculadora de Imposto Meta Ads",
      stack: ["React", "Vite", "JavaScript"],
      problem: {
        label: "O Problema",
        text: "O imposto de 12,15% sobre investimentos no Meta Ads é descontado do valor inserido na plataforma — gerando confusão entre o valor bruto e o investimento líquido real. Gestores precisavam de uma forma rápida de calcular quanto inserir para manter o orçamento desejado."
      },
      solution: {
        label: "A Solução",
        text: "App React que calcula em tempo real o imposto, o valor total a inserir na plataforma para manter o orçamento líquido desejado, e o valor do imposto em reais.",
        bullets: [
          "Input com máscara de moeda brasileira em tempo real",
          "Cálculo automático: orçamento → imposto (12,15%) → correção → líquido",
          "Interface limpa, sem instalação — acesso via browser",
          "Build com Vite para performance máxima"
        ]
      },
      impact: {
        label: "Resultado",
        items: [
          { value: "12,15%", label: "imposto calculado automaticamente" },
          { value: "3", label: "métricas exibidas simultaneamente" },
          { value: "↓", label: "erros de cálculo de orçamento" },
          { value: "React", label: "interface reativa" }
        ]
      }
    },
    en: {
      tag: "Open Source · React",
      title: "Meta Ads Tax Calculator",
      stack: ["React", "Vite", "JavaScript"],
      problem: {
        label: "The Problem",
        text: "The 12.15% tax on Meta Ads investments is deducted from the amount entered in the platform — causing confusion between gross value and actual net investment. Managers needed a quick way to calculate how much to enter to maintain the desired budget."
      },
      solution: {
        label: "The Solution",
        text: "React app that calculates in real time the tax, the total amount to enter in the platform to maintain the desired net budget, and the tax amount in BRL.",
        bullets: [
          "Input with Brazilian currency mask in real time",
          "Automatic calculation: budget → tax (12.15%) → correction → net",
          "Clean interface, no installation — browser access",
          "Vite build for maximum performance"
        ]
      },
      impact: {
        label: "Results",
        items: [
          { value: "12.15%", label: "tax calculated automatically" },
          { value: "3", label: "metrics displayed simultaneously" },
          { value: "↓", label: "budget calculation errors" },
          { value: "React", label: "reactive interface" }
        ]
      }
    }
  },

  "whisper-transcriber": {
    demo: "assets/demos/whisper-transcriber.html",
    pt: {
      tag: "Projeto Pessoal · AI · Python",
      title: "Transcritor de Call em Tempo Real",
      stack: ["Python", "faster-whisper", "sounddevice", "scipy", "threading"],
      problem: {
        label: "O Problema",
        text: "Transcrever calls de trabalho em tempo real sem depender de bots, integrações externas ou serviços pagos. A solução precisava funcionar 100% local, capturar qualquer áudio tocando no sistema e salvar a transcrição com timestamps."
      },
      solution: {
        label: "A Solução",
        text: "Script Python que captura áudio via loopback do sistema ou microfone e transcreve em tempo real com o modelo Whisper rodando localmente, sem enviar dados para nenhum servidor.",
        bullets: [
          "Captura de áudio do sistema (loopback) com sounddevice — sem bot, sem gravação de terceiros",
          "Transcrição em tempo real com faster-whisper (modelo large-v3, 100% local)",
          "Thread separada para captura e transcrição sem blocking",
          "VAD filter embutido: ignora silêncio automaticamente",
          "Resampling automático para 16kHz com scipy",
          "Salva transcrição em .txt com timestamps por fala"
        ]
      },
      impact: {
        label: "Resultado",
        items: [
          { value: "100%", label: "offline — zero servidores externos" },
          { value: "large-v3", label: "modelo Whisper de alta precisão" },
          { value: "R$ 0", label: "custo operacional" },
          { value: "real-time", label: "transcrição durante a call" }
        ]
      }
    },
    en: {
      tag: "Personal Project · AI · Python",
      title: "Real-Time Call Transcriber",
      stack: ["Python", "faster-whisper", "sounddevice", "scipy", "threading"],
      problem: {
        label: "The Problem",
        text: "Transcribe work calls in real time without relying on bots, external integrations, or paid services. The solution needed to run 100% locally, capture any audio playing on the system, and save the transcription with timestamps."
      },
      solution: {
        label: "The Solution",
        text: "Python script that captures audio via system loopback or microphone and transcribes in real time using Whisper running locally, without sending data to any server.",
        bullets: [
          "System audio capture (loopback) with sounddevice — no bot, no third-party recording",
          "Real-time transcription with faster-whisper (large-v3 model, 100% local)",
          "Separate thread for audio capture and transcription without blocking",
          "Built-in VAD filter: automatically ignores silence",
          "Automatic resampling to 16kHz with scipy",
          "Saves transcription to .txt with timestamps per speech segment"
        ]
      },
      impact: {
        label: "Results",
        items: [
          { value: "100%", label: "offline — zero external servers" },
          { value: "large-v3", label: "high-accuracy Whisper model" },
          { value: "R$ 0", label: "operational cost" },
          { value: "real-time", label: "transcription during the call" }
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

function buildModal(data, demo) {
  const bullets = data.solution.bullets.map(b => `<li>${b}</li>`).join('');
  const stack   = data.stack.map(s => `<span>${s}</span>`).join('');
  const impact  = data.impact.items.map(i => `
    <div class="m-impact-item">
      <span class="m-impact-val">${i.value}</span>
      <span class="m-impact-label">${i.label}</span>
    </div>`).join('');
  const ghBtn = data.github
    ? `<a href="${data.github}" target="_blank" rel="noopener" class="btn btn-outline">GitHub ↗</a>` : '';
  const demoBtn = demo
    ? `<a href="${demo}" target="_blank" rel="noopener" class="btn btn-primary">${lang === 'pt' ? '▶ Ver Demo' : '▶ View Demo'}</a>` : '';
  const closeLabel = lang === 'pt' ? 'Fechar' : 'Close';

  const contextSection = data.context ? `
    <div class="m-hr"></div>
    <div class="m-section">
      <div class="m-section-label">${data.context.label}</div>
      <p>${data.context.text}</p>
    </div>` : '';

  const respSection = data.responsibility ? `
    <div class="m-hr"></div>
    <div class="m-section">
      <div class="m-section-label">${data.responsibility.label}</div>
      <p>${data.responsibility.text}</p>
    </div>` : '';

  const baSection = data.before_after ? `
    <div class="m-hr"></div>
    <div class="m-section">
      <div class="m-section-label">${data.before_after.label}</div>
      <div class="m-ba">
        <div class="m-ba-col m-ba-before">
          <div class="m-ba-title">${lang === 'pt' ? 'Antes' : 'Before'}</div>
          <ul>${data.before_after.before.map(b => `<li>${b}</li>`).join('')}</ul>
        </div>
        <div class="m-ba-col m-ba-after">
          <div class="m-ba-title">${lang === 'pt' ? 'Depois' : 'After'}</div>
          <ul>${data.before_after.after.map(a => `<li>${a}</li>`).join('')}</ul>
        </div>
      </div>
    </div>` : '';

  const learnSection = data.learnings ? `
    <div class="m-hr"></div>
    <div class="m-section">
      <div class="m-section-label">${data.learnings.label}</div>
      <p>${data.learnings.text}</p>
    </div>` : '';

  return `
    <span class="m-tag">${data.tag}</span>
    <h2 class="m-title">${data.title}</h2>
    <div class="m-stack">${stack}</div>
    <div class="m-hr"></div>
    <div class="m-section">
      <div class="m-section-label">${data.problem.label}</div>
      <p>${data.problem.text}</p>
    </div>
    ${contextSection}
    ${respSection}
    <div class="m-hr"></div>
    <div class="m-section">
      <div class="m-section-label">${data.solution.label}</div>
      <p>${data.solution.text}</p>
      <ul class="m-bullets">${bullets}</ul>
    </div>
    ${baSection}
    <div class="m-hr"></div>
    <div class="m-section">
      <div class="m-section-label">${data.impact.label}</div>
      <div class="m-impact">${impact}</div>
    </div>
    ${learnSection}
    <div class="m-footer">
      ${demoBtn}
      ${ghBtn}
      <button class="btn btn-outline" onclick="closeModal()">${closeLabel}</button>
    </div>`;
}

function openModal(key) {
  const data = projects[key];
  if (!data) return;
  mContent.innerHTML = buildModal(data[lang] || data['pt'], data.demo);
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
