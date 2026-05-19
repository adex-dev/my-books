import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';


export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div  style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
        }}>
         <div
          style={{
            maxWidth: '900px',
            width: '100%',
            textAlign: 'center',
          }}
        >
         <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
            }}
          >
            <Link
              to="/docs/rust/intro"
              style={{
                padding: '2rem',
                border: '1px solid #ddd',
                borderRadius: '16px',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <h2>Rust</h2>
              <p>Rust programming documentation.</p>
            </Link>

            <Link
              to="/docs/python/intro"
              style={{
                padding: '2rem',
                border: '1px solid #ddd',
                borderRadius: '16px',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <h2>Python</h2>
              <p>Python learning modules.</p>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
