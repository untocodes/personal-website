import * as React from "react";
import * as styles from "./styles/Navigation.module.scss"
import { Link } from "gatsby";

const Navigation = (props) => (
  <div className={styles.nav}>
      <div className={styles.navLink}>
          <Link to="/">Home</Link>
      </div>
      <div className={styles.navLink}>
          <Link to="/cv/">CV</Link>
      </div>
      <div className={styles.navLink}>
          <Link to="/blog/">Blog</Link>
      </div>
  </div>
);
export default Navigation;