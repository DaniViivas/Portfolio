export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Sistema de Gestión Empresarial – HARDLAN',
    description:
      'Sistema web para gestión de servicios, usuarios/roles/permisos, inventarios y facturación. Despliegue en red para múltiples usuarios.',
    logo: '/logos/vsc.svg',
    link: '#',
    slug: 'hardlan',
  },
  {
    title:
      'Sistema de Gestión de Práctica Profesional – Facultad de Informática Administrativa (UNAH-CU)',
    description:
      'Sistema web para automatizar el proceso de práctica profesional con control de acceso y módulos funcionales.',
    logo: '/logos/react_icon.svg',
    link: '#',
    slug: 'practica-profesional',
  },
];
