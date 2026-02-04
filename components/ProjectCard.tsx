import Image from 'next/image';

import { Project } from '@/types';

import styles from '@/styles/ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const isLinkEnabled = Boolean(project.link && project.link !== '#');

  return (
    <a
      href={isLinkEnabled ? project.link : undefined}
      target={isLinkEnabled ? '_blank' : undefined}
      rel={isLinkEnabled ? 'noopener noreferrer' : undefined}
      className={styles.card}
      aria-disabled={!isLinkEnabled}
      onClick={(e) => {
        if (!isLinkEnabled) e.preventDefault();
      }}
    >
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <Image
            src={project.logo}
            alt={`${project.title} logo`}
            width={24}
            height={24}
            className={styles.logo}
          />
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
