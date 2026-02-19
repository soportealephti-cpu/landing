
import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'calibraciones',
    title: 'CALIBRACIONES DOSIMÉTRICAS',
    description: 'Aseguramos la precisión de tus equipos de medición de radiación.',
    icon: 'fa-gauge-high',
    category: 'Metrología',
    keyBenefits: ['Trazabilidad internacional', 'Precisión garantizada', 'Cumplimiento normativo'],
    fullContent: 'Nuestro laboratorio cuenta con los más altos estándares para la calibración de detectores de radiación ionizante, garantizando que cada lectura sea confiable y segura para el personal expuesto.'
  },
  {
    id: 'dosimetria',
    title: 'DOSIMETRÍA INDIVIDUAL EXTERNA',
    description: 'Monitoreo personalizado para la seguridad ocupacional.',
    icon: 'fa-user-shield',
    category: 'Seguridad',
    keyBenefits: ['Reportes mensuales detallados', 'Tecnología TLD/OSL', 'Alertas de sobreexposición'],
    fullContent: 'Suministramos y procesamos dosímetros personales para cuantificar la dosis de radiación recibida por trabajadores expuestos, cumpliendo con las regulaciones de salud y seguridad en el trabajo.'
  },
  {
    id: 'hermeticidad',
    title: 'PRUEBA DE HERMETICIDAD',
    description: 'Verificación de fugas en fuentes selladas.',
    icon: 'fa-microscope',
    category: 'Control',
    keyBenefits: ['Prevención de contaminación', 'Certificación técnica', 'Equipos de alta sensibilidad'],
    fullContent: 'Evaluamos la integridad física de las fuentes radiactivas selladas para descartar cualquier fuga de material al ambiente, protegiendo tanto al personal como a las instalaciones.'
  },
  {
    id: 'mapeo',
    title: 'MAPEO DE TASA DE DOSIS',
    description: 'Identificación de zonas seguras y críticas en instalaciones.',
    icon: 'fa-map-location-dot',
    category: 'Ambiental',
    keyBenefits: ['Visualización de riesgos', 'Optimización de blindaje', 'Soporte en diseño de salas'],
    fullContent: 'Realizamos levantamientos radiométricos detallados para determinar los niveles de radiación en diferentes puntos de una instalación, permitiendo una gestión de riesgos eficiente.'
  },
  {
    id: 'mantenimiento',
    title: 'MANTENIMIENTO Y CALIBRACIÓN A DENSÍMETROS',
    description: 'Cuidado especializado para equipos de densidad nuclear.',
    icon: 'fa-screwdriver-wrench',
    category: 'Equipos',
    keyBenefits: ['Prolongación de vida útil', 'Ajuste fino de sensores', 'Repuestos originales'],
    fullContent: 'Servicio técnico preventivo y correctivo para densímetros nucleares utilizados en minería y construcción, asegurando que operen bajo condiciones óptimas de seguridad y funcionalidad.'
  },
  {
    id: 'desechos',
    title: 'GESTIÓN DE DESECHOS RADIACTIVOS',
    description: 'Manejo seguro y responsable de residuos nucleares.',
    icon: 'fa-biohazard',
    category: 'Residuos',
    keyBenefits: ['Transporte autorizado', 'Almacenamiento temporal seguro', 'Eliminación controlada'],
    fullContent: 'Ofrecemos soluciones integrales para la recolección, clasificación y disposición final de desechos radiactivos de baja y media actividad, siguiendo estrictos protocolos ambientales.'
  },
  {
    id: 'monitoreo',
    title: 'MONITOREO AMBIENTAL',
    description: 'Vigilancia continua de niveles radiológicos en el entorno.',
    icon: 'fa-leaf',
    category: 'Ambiental',
    keyBenefits: ['Monitoreo 24/7', 'Análisis de muestras de aire/agua', 'Sostenibilidad operativa'],
    fullContent: 'Evaluación del impacto radiológico en el entorno de operaciones industriales, garantizando que no existan liberaciones no autorizadas al medio ambiente.'
  },
  {
    id: 'consultoria',
    title: 'CONSULTORÍA ESPECIALIZADA',
    description: 'Asesoría técnica para proyectos complejos.',
    icon: 'fa-chalkboard-user',
    category: 'Estratégico',
    keyBenefits: ['Tramitación de licencias', 'Oficial de Protección Radiológica', 'Cursos de capacitación'],
    fullContent: 'Brindamos soporte estratégico para la obtención de licencias de operación, diseño de programas de protección radiológica y formación continua del personal bajo estándares internacionales.'
  },
  {
    id: 'calidad-rx',
    title: 'CONTROL DE CALIDAD EN RX',
    description: 'Evaluación de desempeño en equipos de rayos X médicos.',
    icon: 'fa-x-ray',
    category: 'Médico',
    keyBenefits: ['Reducción de dosis al paciente', 'Imagenología de alta calidad', 'Cumplimiento MINSA/IPEN'],
    fullContent: 'Pruebas rigurosas a equipos de rayos X diagnósticos y terapéuticos para asegurar que emitan la menor dosis necesaria logrando la mejor calidad de imagen posible.'
  },
  {
    id: 'transporte',
    title: 'TRANSPORTE DE MATERIAL RADIACTIVO',
    description: 'Logística segura y escoltada para fuentes radiactivas.',
    icon: 'fa-truck-fast',
    category: 'Logística',
    keyBenefits: ['Vehículos equipados', 'Planificación de rutas seguras', 'Respuesta a emergencias'],
    fullContent: 'Servicio especializado de transporte de materiales Clase 7 (radiactivos), garantizando que el material llegue a su destino sin incidentes y bajo custodia experta.'
  }
];
