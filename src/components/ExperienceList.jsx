import * as React from "react";
import ExperienceListing from "./ExperienceListing.jsx";
import { MiniTitle } from "./Titles.jsx";

const ExperienceList = (props) => (
    <div>
        {Object.keys(props.data).map(key => (  
            <div key={key}>
                <MiniTitle>{props.data[key].title}</MiniTitle>
                { props.data[key].positions.map((position,index) => (
                    <ExperienceListing key={index} data={position}></ExperienceListing>
                ))}
            </div>
        ))}  
    </div>
);

export default ExperienceList;