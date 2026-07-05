import type { Project } from './types';

export const projects: Project[] = [
  {
    slug: 'titan',
    featured: true,
    title: 'TITAN',
    client: {
      en: 'Spanish Air Force',
      es: 'Ejército del Aire',
    },
    desc: {
      en: 'AI-driven decision-support platform delivering grounded, real-time intelligence over classified military documentation and operational data.',
      es: 'Plataforma de apoyo a la decisión basada en IA que ofrece inteligencia fiable y en tiempo real sobre documentación militar clasificada y datos operativos.',
    },
    stack: ['Python', 'Watsonx.ai', 'LangChain', 'Weaviate', 'CP4D'],
    problem: {
      en: 'Military operations require instant, traceable answers grounded in massive corpora of regulations, technical manuals and historical reports — with zero tolerance for hallucinations.',
      es: 'Las operaciones militares exigen respuestas instantáneas y trazables, fundamentadas en corpus enormes de normativa, manuales técnicos e informes históricos — con tolerancia cero a las alucinaciones.',
    },
    architecture: [
      {
        en: 'RAG architecture with hierarchical chunking — small chunks for retrieval, larger context windows for the LLM to reason over.',
        es: 'Arquitectura RAG con chunking jerárquico: fragmentos pequeños para la recuperación y ventanas de contexto amplias para que el LLM razone.',
      },
      {
        en: 'Hybrid search combining dense vector retrieval (HNSW index) with BM25 keyword search, fused via Reciprocal Rank Fusion to capture both semantic intent and exact identifiers.',
        es: 'Búsqueda híbrida que combina recuperación vectorial densa (índice HNSW) con búsqueda por palabras clave BM25, fusionadas mediante Reciprocal Rank Fusion para capturar tanto la intención semántica como identificadores exactos.',
      },
      {
        en: 'Enterprise vector database deployed on OpenShift for full data sovereignty and on-prem security compliance.',
        es: 'Base de datos vectorial empresarial desplegada en OpenShift para soberanía total del dato y cumplimiento de seguridad on-premise.',
      },
      {
        en: 'Continuous evaluation pipeline measuring Faithfulness, Context Recall and Answer Relevancy with RAGAS-style metrics to keep responses grounded in source material.',
        es: 'Pipeline de evaluación continua que mide Faithfulness, Context Recall y Answer Relevancy con métricas tipo RAGAS para mantener las respuestas ancladas en las fuentes.',
      },
    ],
    tags: ['RAG', 'Hybrid Search', 'Vector DB', 'LLM Orchestration', 'Predictive Analytics'],
  },
  {
    slug: 'mlmarketlens',
    title: 'MLMarketLens',
    link: 'https://mlmarketlens.com/',
    client: {
      en: 'Final degree project — UPM',
      es: 'Trabajo de fin de grado — UPM',
    },
    desc: {
      en: 'Neural pipeline predicting financial market trends by fusing historical price action with real-time sentiment extracted from social media and news.',
      es: 'Pipeline neuronal que predice tendencias de mercado fusionando el histórico de precios con el sentimiento en tiempo real extraído de redes sociales y noticias.',
    },
    stack: ['Python', 'TensorFlow', 'LangChain', 'HuggingFace', 'Finance APIs'],
    problem: {
      en: 'Pure quantitative models miss narrative-driven market moves. The system fuses structured time-series with unstructured text sentiment to capture both signals.',
      es: 'Los modelos puramente cuantitativos se pierden los movimientos de mercado impulsados por la narrativa. El sistema fusiona series temporales estructuradas con sentimiento textual no estructurado para capturar ambas señales.',
    },
    architecture: [
      {
        en: 'Custom sentence-transformer embeddings to vectorise news headlines and social posts at scale — the same embedding model used for indexing and inference.',
        es: 'Embeddings sentence-transformer a medida para vectorizar titulares y publicaciones sociales a escala — el mismo modelo de embeddings para indexado e inferencia.',
      },
      {
        en: 'Sentiment-aware feature engineering: aggregating embedding-space sentiment scores into time-series features alongside OHLCV price data.',
        es: 'Ingeniería de features sensible al sentimiento: agregación de puntuaciones de sentimiento del espacio de embeddings como features de serie temporal junto a los datos de precio OHLCV.',
      },
      {
        en: 'Sequence model (LSTM + attention) trained to learn the joint distribution of price action and narrative sentiment for trend forecasting.',
        es: 'Modelo secuencial (LSTM + atención) entrenado para aprender la distribución conjunta de precio y sentimiento narrativo en la predicción de tendencias.',
      },
      {
        en: 'LangChain pipeline orchestrating news ingestion, embedding generation, sentiment scoring and prediction in a continuous loop.',
        es: 'Pipeline en LangChain que orquesta ingesta de noticias, generación de embeddings, scoring de sentimiento y predicción en un bucle continuo.',
      },
    ],
    tags: ['NLP', 'Sentiment Analysis', 'Time-Series', 'Embeddings', 'LangChain'],
  },
  {
    slug: 'aspera',
    title: 'Aspera Deployments',
    client: {
      en: 'RTVE · Telefónica · Iberdrola',
      es: 'RTVE · Telefónica · Iberdrola',
    },
    desc: {
      en: 'High-throughput data transfer architecture engineered for three of Spain’s largest enterprises — eliminating bottlenecks across media and energy data pipelines.',
      es: 'Arquitectura de transferencia de datos de alto rendimiento para tres de las mayores empresas de España — eliminando cuellos de botella en pipelines de medios y energía.',
    },
    stack: ['IBM Aspera', 'OpenShift', 'Kubernetes', 'Networking'],
    problem: {
      en: 'AI and analytics pipelines are bottlenecked by data movement. Petabyte-scale audiovisual archives and energy telemetry need to move between systems faster than TCP can deliver.',
      es: 'Los pipelines de IA y analítica se atascan en el movimiento de datos. Archivos audiovisuales a escala de petabytes y telemetría energética necesitan moverse entre sistemas más rápido de lo que TCP permite.',
    },
    architecture: [
      {
        en: 'FASP protocol implementation bypassing TCP limitations — predictable throughput at line rate regardless of distance or latency.',
        es: 'Implementación del protocolo FASP superando las limitaciones de TCP — rendimiento predecible a velocidad de línea con independencia de la distancia o la latencia.',
      },
      {
        en: 'Container-native deployment on OpenShift with horizontal scaling and zero-downtime rollouts across hybrid cloud environments.',
        es: 'Despliegue nativo en contenedores sobre OpenShift con escalado horizontal y despliegues sin downtime en entornos de nube híbrida.',
      },
      {
        en: 'Secure pipelines feeding downstream AI workloads — model training, semantic indexing of audiovisual archives, real-time energy telemetry analytics.',
        es: 'Pipelines seguros que alimentan cargas de IA: entrenamiento de modelos, indexado semántico de archivos audiovisuales y analítica de telemetría energética en tiempo real.',
      },
      {
        en: 'Custom monitoring integrations surfacing transfer metrics into existing enterprise observability stacks.',
        es: 'Integraciones de monitorización a medida que exponen métricas de transferencia en los stacks de observabilidad corporativos existentes.',
      },
    ],
    tags: ['Data Infrastructure', 'High-Throughput Transfer', 'Cloud-Native', 'Security'],
  },
  {
    slug: 'conversational-ai',
    title: 'Conversational AI Engine',
    client: {
      en: 'Mapfre & Orange',
      es: 'Mapfre y Orange',
    },
    desc: {
      en: 'Production-grade LLM pipelines for enterprise virtual assistants — improving intent classification, multi-turn coherence and grounded response quality at scale.',
      es: 'Pipelines LLM de nivel de producción para asistentes virtuales corporativos — mejorando la clasificación de intenciones, la coherencia multi-turno y la calidad de las respuestas a escala.',
    },
    stack: ['Watsonx.ai', 'LangChain', 'LLMs', 'RAG', 'DPO'],
    problem: {
      en: 'Generic LLMs hallucinate on insurance policies and telecom contracts. The system needs grounded, brand-aligned answers across complex multi-turn dialogues.',
      es: 'Los LLM genéricos alucinan con pólizas de seguros y contratos de telecomunicaciones. El sistema necesita respuestas fundamentadas y alineadas con la marca en diálogos multi-turno complejos.',
    },
    architecture: [
      {
        en: 'RAG pipeline over policy documents and product catalogues — semantic chunking by topic boundary rather than fixed token windows, preserving meaning across retrieval.',
        es: 'Pipeline RAG sobre pólizas y catálogos de producto — chunking semántico por límites de tema en lugar de ventanas fijas de tokens, preservando el significado en la recuperación.',
      },
      {
        en: 'Hybrid retrieval combining dense embeddings with keyword search to handle both abstract concepts and exact policy codes or SKUs.',
        es: 'Recuperación híbrida que combina embeddings densos con búsqueda por palabras clave para manejar tanto conceptos abstractos como códigos de póliza o SKUs exactos.',
      },
      {
        en: 'DPO (Direct Preference Optimization) fine-tuning on curated preference pairs to align the model with brand tone — without training a separate reward model.',
        es: 'Fine-tuning con DPO (Direct Preference Optimization) sobre pares de preferencia curados para alinear el modelo con el tono de marca — sin entrenar un modelo de recompensa aparte.',
      },
      {
        en: 'Continuous evaluation loop using Faithfulness and Answer Relevancy metrics to catch regressions before production deployment.',
        es: 'Bucle de evaluación continua con métricas de Faithfulness y Answer Relevancy para detectar regresiones antes del despliegue en producción.',
      },
      {
        en: 'Conversation memory layer maintaining intent across multi-turn flows for natural, contextual exchanges.',
        es: 'Capa de memoria conversacional que mantiene la intención a lo largo de flujos multi-turno para intercambios naturales y contextuales.',
      },
    ],
    tags: ['RAG', 'DPO Fine-tuning', 'Semantic Chunking', 'LLM Evaluation', 'Intent Classification'],
  },
  {
    slug: 'workflow-automation',
    title: 'Intelligent Workflow Automation',
    client: {
      en: 'IBM Internal',
      es: 'IBM interno',
    },
    desc: {
      en: 'Browser-native automation layer augmenting internal engineering workflows with intelligent task routing — eliminating repetitive overhead at the source.',
      es: 'Capa de automatización nativa del navegador que potencia flujos internos de ingeniería con enrutado inteligente de tareas — eliminando la carga repetitiva en origen.',
    },
    stack: ['JavaScript', 'Chrome API', 'LLMs', 'Automation'],
    problem: {
      en: 'Engineers lose hours daily to repetitive form-filling, status updates and context switching across internal tools. Standard scripts break on edge cases — LLMs handle them.',
      es: 'Los ingenieros pierden horas cada día rellenando formularios, actualizando estados y cambiando de contexto entre herramientas internas. Los scripts convencionales fallan en los casos límite — los LLM los resuelven.',
    },
    architecture: [
      {
        en: 'Browser-native extension intercepting page context and surfacing intelligent actions in real time.',
        es: 'Extensión nativa del navegador que intercepta el contexto de la página y sugiere acciones inteligentes en tiempo real.',
      },
      {
        en: 'LLM-powered task classification routing user actions to the right internal system without manual lookup.',
        es: 'Clasificación de tareas con LLM que enruta las acciones del usuario al sistema interno correcto sin búsquedas manuales.',
      },
      {
        en: 'Lightweight on-device parsing for sensitive data — no PII ever leaves the browser unless explicitly approved.',
        es: 'Parseo ligero en el dispositivo para datos sensibles — ningún dato personal sale del navegador sin aprobación explícita.',
      },
      {
        en: 'Workflow orchestration layer chaining multi-step actions across disconnected enterprise tools.',
        es: 'Capa de orquestación de flujos que encadena acciones de varios pasos entre herramientas corporativas desconectadas.',
      },
    ],
    tags: ['Workflow Automation', 'LLM Routing', 'Browser-Native', 'Internal Tooling'],
  },
];
