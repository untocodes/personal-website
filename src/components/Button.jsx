import * as React from "react";
import * as styles from "./styles/Button.module.scss"
const Button = (props) => (
    <a href={props.href} className={styles.button}>
        {props.children}
    </a>
);
export default Button;