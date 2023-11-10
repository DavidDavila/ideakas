import { RolesEnum } from '../types/roles.types';

export const ROLES = {
  INVESTOR: {
    name: RolesEnum.INVESTOR,
    mean: 'Inversor',
    description:
      'Aporta capital para apoyar proyectos y busca rendimiento financiero en retorno.',
  },
  CEO: {
    name: RolesEnum.CEO,
    mean: 'Director Ejecutivo Principal',
    description:
      'Es el jefe máximo de la empresa. Toma decisiones importantes, define la dirección y la visión de la empresa, y se encarga de la gestión general.',
  },
  CTO: {
    name: RolesEnum.CTO,
    mean: 'Director de Tecnología',
    description:
      'Es el encargado de la tecnología en la empresa. Toma decisiones sobre tecnología, innovación y desarrollo de productos tecnológicos.',
  },
  CMO: {
    name: RolesEnum.CMO,
    mean: 'Director de Marketing',
    description:
      'Se encarga de la estrategia de marketing y promoción de la empresa. Esto incluye la gestión de la marca, publicidad, relaciones públicas y estrategias de ventas.',
  },
  CDO: {
    name: RolesEnum.CDO,
    mean: 'Director de Datos',
    description:
      'Gestiona y utiliza datos para tomar decisiones y fomentar la innovación en la empresa.',
  },
  COO: {
    name: RolesEnum.COO,
    mean: 'Director de Operaciones',
    description:
      'Se encarga de las operaciones diarias de la empresa, como la cadena de suministro, producción y logística.',
  },
  CFO: {
    name: RolesEnum.CFO,
    mean: 'Director Financiero',
    description:
      'Gestiona las finanzas de la empresa, incluyendo la planificación financiera, la contabilidad y las decisiones financieras estratégicas.',
  },
  CHRO: {
    name: RolesEnum.CHRO,
    mean: 'Director de RRHH',
    description:
      'Se encarga de los recursos humanos, incluyendo la contratación, capacitación, desarrollo y cultura organizacional.',
  },
  CCO: {
    name: RolesEnum.CCO,
    mean: 'Director de Cumplimiento',
    description:
      'Se asegura de que la empresa cumple con las regulaciones y estándares legales en su industria.',
  },
  CIO: {
    name: RolesEnum.CIO,
    mean: 'Director de Información',
    description:
      'Gestiona la tecnología de la información y los sistemas de la empresa.',
  },
};
