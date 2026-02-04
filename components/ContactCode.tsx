import styles from '@/styles/ContactCode.module.css';
import { profile } from '@/data/profile';

type JsonItem = {
  key: string;
  value: string;
  href?: string;
};

const contactItems: JsonItem[] = [
  {
    key: 'personalEmail',
    value: profile.personalEmail,
    href: `mailto:${profile.personalEmail}`,
  },
  ...(profile.universityEmail
    ? [
      {
        key: 'universityEmail',
        value: profile.universityEmail,
        href: `mailto:${profile.universityEmail}`,
      },
    ]
    : []),
  {
    key: 'phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, '')}`,
  },

  ...(profile.links.whatsapp
    ? [
      {
        key: 'whatsapp',
        value: profile.links.whatsapp.display || 'Escríbeme por WhatsApp',
        href: profile.links.whatsapp.href,
      },
    ]
    : []),
  {
    key: 'location',
    value: profile.location,
  },
  ...(profile.links.website
    ? [
      {
        key: 'website',
        value: profile.links.website.display || profile.links.website.href,
        href: profile.links.website.href,
      },
    ]
    : []),
  ...(profile.links.github
    ? [
      {
        key: 'github',
        value: profile.links.github.display || profile.links.github.href,
        href: profile.links.github.href,
      },
    ]
    : []),
  ...(profile.links.linkedin
    ? [
      {
        key: 'linkedin',
        value: profile.links.linkedin.display || profile.links.linkedin.href,
        href: profile.links.linkedin.href,
      },
    ]
    : []),
  ...(profile.links.cv
    ? [
      {
        key: 'cv',
        value: profile.links.cv.display || 'Descargar CV',
        href: profile.links.cv.href,
      },
    ]
    : []),
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.punctuation}>&#123;</span>
      </p>
      {contactItems.map((item, index) => {
        const isLast = index === contactItems.length - 1;
        return (
          <p className={styles.line} key={item.key}>
            &nbsp;&nbsp;
            <span className={styles.jsonKey}>&quot;{item.key}&quot;</span>
            <span className={styles.punctuation}>: </span>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener"
                className={styles.jsonString}
              >
                &quot;{item.value}&quot;
              </a>
            ) : (
              <span className={styles.jsonString}>&quot;{item.value}&quot;</span>
            )}
            <span className={styles.punctuation}>{isLast ? '' : ','}</span>
          </p>
        );
      })}
      <p className={styles.line}>
        <span className={styles.punctuation}>&#125;</span>
      </p>
    </div>
  );
};

export default ContactCode;
