import type {ReactNode} from 'react';
import {useEffect} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import { useLocation } from '@docusaurus/router';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title"  style={{
              fontSize: '1.3rem',
              opacity: 0.7,
              marginBottom: '3rem',
            }}>
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Reads My Books uhuii ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
   const location = useLocation();

  useEffect(() => {
    const navbar = document.querySelector('.navbar');

    if (!navbar) return;

    if (location.pathname === '/my-books/') {
      navbar.classList.add(styles.hideNavbar);
    } else {
      navbar.classList.remove(styles.hideNavbar);
    }

    return () => {
      navbar.classList.remove(styles.hideNavbar);
    };
  }, [location.pathname]);

  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
