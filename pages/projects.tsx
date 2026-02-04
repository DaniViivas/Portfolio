import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

import styles from '@/styles/ProjectsPage.module.css';

const ProjectsPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Proyectos</h1>
      <p className={styles.pageSubtitle}>
        Una selección de mis trabajos recientes. Estos proyectos reflejan mis
        habilidades en desarrollo web y la construcción de soluciones
        funcionales.
      </p>

      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Proyectos' },
  };
}

export default ProjectsPage;
