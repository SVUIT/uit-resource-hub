import React, { JSX } from 'react';
import styles from './styles.module.css';

const mdxContext = require.context('@site/src/data', false, /\.mdx$/);
const CardComponents: React.ComponentType[] = mdxContext.keys().map((key: string) => mdxContext(key).default);

interface CardLayoutProps {
  title: string;
  tags?: string[];
  children: React.ReactNode;
}

function CardLayout({ title, tags = [], children }: CardLayoutProps) {
  return (
    <>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <div style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>{children}</div>
      {tags.length > 0 && (
        <div style={{ marginTop: '10px' }}>
          {tags.map((tag, idx) => (
            <span
              key={idx}
              style={{
                fontSize: '0.75rem',
                background: '#eee',
                padding: '2px 6px',
                borderRadius: '2px',
                marginRight: '5px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {CardComponents.map((Card, idx) => (
            <div key={idx} className="col col--4">
              <div className="card" style={{ marginBottom: '20px' }}>
                <div className="card__body">
                  <Card />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { CardLayout };
