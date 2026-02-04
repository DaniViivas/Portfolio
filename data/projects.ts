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
      'Sistema de Gestión de Práctica Profesional',
    description:
      'Sistema web para automatizar el proceso de práctica profesional con control de acceso y módulos funcionales.',
    logo: '/logos/react_icon.svg',
    link: '#',
    slug: 'practica-profesional',
  },
  {
    title: 'AuthSystem – Gestión de login, usuarios, permisos y roles',
    description:
      'Backend para autenticación y autorización: inicio de sesión, administración de usuarios, roles y permisos, con control de acceso por endpoints.',
    logo: '/logos/js_icon.svg',
    link: 'https://github.com/DaniVivas/AuthSystem',
    slug: 'authsystem',
  },
];
