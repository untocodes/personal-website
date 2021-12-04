import * as React from "react";
import * as styles from "./styles/ExperienceListing.module.scss"
const ExperienceListing = (props) => (
    <div className={styles.experienceListing}>
        <time>{props.data.time}</time> 
        <h3>{props.data.company}</h3>
        <p>{props.data.position}</p>
        { props.data.description.split('\n').map((data,index) => (
            <p key={index}>{data}</p>
        )) }
    </div>
);
export default ExperienceListing;