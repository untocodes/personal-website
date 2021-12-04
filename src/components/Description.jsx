import * as React from "react";
import * as styles from "./styles/Description.module.scss"
const Description = (props) => (
    <p className={styles.description}>{props.children}</p>
);

export default Description;