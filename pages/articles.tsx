import ArticleCard from '@/components/ArticleCard';

import { Article } from '@/types';

import styles from '@/styles/ArticlesPage.module.css';

interface ArticlesPageProps {
  articles: Article[];
  username?: string | null;
}

const ArticlesPage = ({ articles, username }: ArticlesPageProps) => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>My Articles</h1>
      <p className={styles.pageSubtitle}>
        {username ? (
          <>
            Recent posts from{' '}
            <a
              href={`https://dev.to/${username}`}
              target="_blank"
              rel="noopener"
              className={styles.underline}
            >
              dev.to/{username}
            </a>
            .
          </>
        ) : (
          <>No dev.to username configured.</>
        )}
      </p>
      <div className={styles.container}>
        {articles.length ? (
          articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))
        ) : (
          <p className={styles.pageSubtitle}>
            No articles to show right now.
          </p>
        )}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const username = process.env.NEXT_PUBLIC_DEVTO_USERNAME || null;
  const url = username
    ? `https://dev.to/api/articles?username=${encodeURIComponent(
      username
    )}&per_page=6`
    : null;

  const data = url ? await fetch(url).then((r) => r.json()) : [];

  return {
    props: { title: 'Articles', articles: data, username },
    revalidate: 60,
  };
}

export default ArticlesPage;
