import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}>
          <div
            style={{
              maxWidth: "900px",
              width: "100%",
              textAlign: "center",
            }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1.5rem",
              }}>
              <div
                style={{
                  position: "relative",
                  padding: "2rem",
                  borderRadius: "16px",
                  border: "1px solid #2e8555",
                }}>
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    right: "-38%",
                    bottom: 0,
                    zIndex: -10,
                  }}>
                  <img
                    src="img/rust.png"
                    alt="logo rust"
                    style={{
                      width: "15%",
                      height: "20%",
                    }}
                  />
                </div>
                <Link
                  to="/docs/rust/intro"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}>
                  <h2>Rust</h2>
                  <p>Rust programming documentation.</p>
                </Link>
              </div>
              <div
                style={{
                  position: "relative",
                  padding: "2rem",
                  borderRadius: "16px",
                  border: "1px solid #2e8555",
                }}>
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    right: "-38%",
                    bottom: 0,
                    zIndex: -10,
                  }}>
                  <img
                    src="img/sql.svg"
                    alt="logo sql"
                    style={{
                      width: "15%",
                      height: "20%",
                    }}
                  />
                </div>
                <Link
                  to="/docs/sql/intro"
                   style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}>
                  <h2>Sql</h2>
                  <p>Learning learning modules.</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
