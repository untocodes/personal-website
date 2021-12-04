import * as React from "react";
import * as styles from "./styles/Toolbar.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const changeTheme = () => {
  document.getElementsByTagName('html')[0].classList.toggle('light');
}
const Toolbar = (props) => (
  <div className={styles.toolbar}>
      <div onClick={changeTheme} lick="document.getElementsByTagName('html')[0].classList.toggle('light');" className={styles.toolbarButton}>
          <FontAwesomeIcon fixedWidth icon={["fas","lightbulb"]} />
      </div>
  </div>
);
export default Toolbar;