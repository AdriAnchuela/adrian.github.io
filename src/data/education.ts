import type { EducationItem } from './types';

export const education: EducationItem[] = [
  {
    degree: { en: 'Computer Engineering', es: 'Ingeniería Informática' },
    school: 'Universidad de Alcalá',
    years: '2019 — 2024',
    note: {
      en: 'Final project: MLMarketLens — neural network model for stock and fund trend prediction using NLP and social media sentiment analysis.',
      es: 'TFG: MLMarketLens — modelo de redes neuronales para la predicción de tendencias de acciones y fondos usando NLP y análisis de sentimiento en redes sociales.',
    },
  },
  {
    degree: { en: 'Cybersecurity Training', es: 'Formación en Ciberseguridad' },
    school: 'Universidad de Alcalá',
    years: '2022',
    note: {
      en: 'Intensive program in network security, ethical hacking, penetration testing and enterprise risk assessment.',
      es: 'Programa intensivo en seguridad de redes, hacking ético, pentesting y evaluación de riesgos corporativos.',
    },
  },
];
