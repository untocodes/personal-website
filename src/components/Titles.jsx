import * as React from "react";
import * as styles from "./styles/Titles.module.scss"
export const MiniTitle = (props) => (
    <h2 className={styles.title}>{props.children}</h2>
);
export const BigTitle = (props) => (
    <h2 className={[styles.title, styles.bigTitle].join(' ')}>{props.children}</h2>
)