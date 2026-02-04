import styles from '@/styles/AboutPage.module.css';
import { profile } from '@/data/profile';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{profile.fullName}</h1>
        <div className={styles.subtitle}>{profile.headline}</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>💫 About Me:</h2>
            <p className={styles.paragraph}>
              Estudiante de Informática Administrativa con sólida formación
              técnica y vocación de servicio. Combino mis conocimientos en
              lógica de sistemas y bases de datos con habilidades prácticas en
              mantenimiento de equipos, soporte técnico y ofimática. Me destaco
              por la comunicación efectiva, la empatía en la atención al cliente
              y la capacidad para diagnosticar y resolver problemas
              tecnológicos, asegurando una experiencia de usuario fluida y
              eficiente.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>💻 Tech Stack:</h2>
            <div className={styles.badges}>
              <img
                className={styles.badge}
                alt="Spring"
                loading="lazy"
                src="https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white"
              />
              <img
                className={styles.badge}
                alt="Laravel"
                loading="lazy"
                src="https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white"
              />
              <img
                className={styles.badge}
                alt="PHP"
                loading="lazy"
                src="https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white"
              />
              <img
                className={styles.badge}
                alt="NodeJS"
                loading="lazy"
                src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
              />
              <img
                className={styles.badge}
                alt="TypeScript"
                loading="lazy"
                src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
              />
              <img
                className={styles.badge}
                alt="NestJS"
                loading="lazy"
                src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white"
              />
              <img
                className={styles.badge}
                alt="Livewire"
                loading="lazy"
                src="https://img.shields.io/badge/livewire-%234e56a6.svg?style=for-the-badge&logo=livewire&logoColor=white"
              />
              <img
                className={styles.badge}
                alt="JWT"
                loading="lazy"
                src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"
              />
              <img
                className={styles.badge}
                alt="jQuery"
                loading="lazy"
                src="https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white"
              />
              <img
                className={styles.badge}
                alt="Nodemon"
                loading="lazy"
                src="https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD"
              />
              <img
                className={styles.badge}
                alt="Vite"
                loading="lazy"
                src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"
              />
              <img
                className={styles.badge}
                alt="React"
                loading="lazy"
                src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
              />
              <img
                className={styles.badge}
                alt="HTML5"
                loading="lazy"
                src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
              />
              <img
                className={styles.badge}
                alt="JavaScript"
                loading="lazy"
                src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
              />
              <img
                className={styles.badge}
                alt="MariaDB"
                loading="lazy"
                src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white"
              />
              <img
                className={styles.badge}
                alt="Microsoft SQL Server"
                loading="lazy"
                src="https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white"
              />
              <img
                className={styles.badge}
                alt="MySQL"
                loading="lazy"
                src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white"
              />
              <img
                className={styles.badge}
                alt="Postgres"
                loading="lazy"
                src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
              />
              <img
                className={styles.badge}
                alt="SQLite"
                loading="lazy"
                src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white"
              />
              <img
                className={styles.badge}
                alt="MongoDB"
                loading="lazy"
                src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
              />
              <img
                className={styles.badge}
                alt="Prisma"
                loading="lazy"
                src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"
              />
              <img
                className={styles.badge}
                alt="GitHub"
                loading="lazy"
                src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
              />
            </div>
          </section>


        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
