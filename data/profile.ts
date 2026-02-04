export interface ProfileLink {
    label: string;
    href: string;
    display?: string;
}

export interface ProfileProject {
    title: string;
    subtitle?: string;
    description: string;
    technologies: string[];
    link?: string;
}

export interface Profile {
    fullName: string;
    headline: string;
    location: string;
    phone: string;
    personalEmail: string;
    universityEmail?: string;
    summary: string;
    education: {
        institution: string;
        program: string;
        status: string;
    };
    academicProjects: ProfileProject[];
    skills: {
        backend: string[];
        frontend: string[];
        versionControl: string[];
        containers: string[];
        databases: string[];
        tools: string[];
        softSkills: string[];
    };
    links: {
        website?: ProfileLink;
        github?: ProfileLink;
        linkedin?: ProfileLink;
        cv?: ProfileLink;
        whatsapp?: ProfileLink;
    };
    seo: {
        defaultTitle: string;
        description: string;
        keywords: string;
        ogImage?: string;
        siteUrl?: string;
    };
    github: {
        username?: string;
    };
    devto: {
        username?: string;
    };
}

export const profile: Profile = {
    fullName: 'OSMAN DANIEL VIVAS BARAHONA',
    headline: 'Estudiante de Informática Administrativa',
    location: 'Tegucigalpa, Honduras',
    phone: '+504 9907-7134',
    personalEmail: 'osmanvivas28@gmail.com',
    universityEmail: 'osman.vivas@unah.hn',
    summary:
        'Estudiante de Informática Administrativa con sólida formación técnica y vocación de servicio. Combino mis conocimientos en lógica de sistemas y bases de datos con habilidades prácticas en mantenimiento de equipos, soporte técnico y ofimática. Me destaco por la comunicación efectiva, la empatía en la atención al cliente y la capacidad para diagnosticar y resolver problemas tecnológicos, asegurando una experiencia de usuario fluida y eficiente.',
    education: {
        institution: 'Universidad Nacional Autónoma de Honduras (UNAH)',
        program: 'Licenciatura en Informática Administrativa',
        status: 'En curso (80% de avance)',
    },
    academicProjects: [
        {
            title: 'Sistema de Gestión Empresarial – HARDLAN',
            subtitle: 'Proyecto académico (UNAH)',
            description:
                'Sistema web orientado a la gestión de servicios de instalación, reparación y mantenimiento de equipos informáticos. Incluye gestión de usuarios/roles/permisos, control de acceso, rutas y módulos funcionales; módulos para solicitudes de servicios, inventarios y facturación; despliegue en red para múltiples usuarios.',
            technologies: ['Laravel', 'MySQL', 'React', 'Tailwind CSS', 'Docker'],
        },
        {
            title:
                'Sistema de Gestión de Práctica Profesional – Facultad de Informática Administrativa (UNAH-CU)',
            subtitle: 'Proyecto académico en desarrollo (UNAH)',
            description:
                'Sistema web para automatizar el proceso de práctica profesional. Incluye gestión de usuarios/roles/permisos, control de acceso, rutas del sistema y módulos funcionales.',
            technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Express'],
        },
    ],
    skills: {
        backend: ['Java', 'PHP', 'Node.js', 'Laravel', 'APIs REST', 'TypeScript'],
        frontend: ['JavaScript', 'React', 'Tailwind CSS'],
        versionControl: ['Git', 'GitHub'],
        containers: ['Docker'],
        databases: ['MySQL', 'SQL Server', 'PostgreSQL'],
        tools: [
            'Trello',
            'Notion',
            'Microsoft Office',
            'Google Workspace',
            'Windows',
            'Linux',
        ],
        softSkills: [
            'Vocación de servicio',
            'Adaptabilidad',
            'Comunicación efectiva',
            'Trabajo en equipo',
            'Responsabilidad y fiabilidad',
        ],
    },
    links: {
        cv: {
            label: 'CV',
            href: '/cv-osman-vivas.pdf',
            display: 'Descargar CV',
        },
        whatsapp: {
            label: 'WhatsApp',
            href: 'https://wa.me/50499077134?text=Hola%20Osman%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte.',
            display: 'Escríbeme por WhatsApp',
        },
        // Si luego quieres agregar GitHub/LinkedIn, lo ponemos aquí.
    },
    seo: {
        defaultTitle: 'OSMAN DANIEL VIVAS BARAHONA',
        description:
            'Portafolio de Osman Daniel Vivas Barahona. Estudiante de Informática Administrativa enfocado en desarrollo web, soporte técnico y soluciones orientadas al usuario.',
        keywords:
            'osman vivas, osman daniel vivas barahona, informatica administrativa, portafolio, desarrollo web, react, laravel, node, tailwind, docker',
        ogImage: '/themes/default.png',
    },
    github: {
        // Si este es tu usuario, quedará listo para la sección GitHub.
        username: 'osmanvivas28',
    },
    devto: {
        // Rellena si tienes cuenta en dev.to; si no, la página mostrará vacío.
        username: undefined,
    },
};
