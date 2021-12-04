import * as React from "react";
import * as styles from "./styles/TechList.module.scss";
import ReactTooltip from 'react-tooltip';
const TechList = (props) => (
    <div className={styles.techList}> 
        <ReactTooltip />
        {Object.keys(props.data).map(key => (  
            <div key={key}>
                <h3>{props.data[key].title}</h3>
                <ul>
                    {props.data[key].skills.map(data => (
                        <li data-tip={data.desc} key={data.desc}>
                            <i className={data.icon}></i>
                        </li>
                    ))}
                </ul>

            </div>
        ))}  
    </div>
);

export default TechList;