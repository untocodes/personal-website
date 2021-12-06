import * as React from "react";
import * as styles from "./styles/ProjectListing.module.scss";
import Button from "./Button";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectListing = (props) => {
    const Images = useStaticQuery(graphql`
    {
        allFile(filter: {sourceInstanceName: {eq: "images"}}) {
          edges {
            node {
              relativePath
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
    }  
    `)
    const ProjImg = getImage(Images.allFile.edges.find(element => element.node.relativePath == props.data.image).node.childImageSharp);
    return (
    <div className={styles.ProjectListing}>
        <GatsbyImage image={ProjImg}></GatsbyImage>
        <h2>{props.data.name}</h2>
        { props.data.desc.split('\n').map((data,index) => (
            <p key={index}>{data}</p>
        )) }
        {props.data.links.map(link => (  
          <Button key={link.title} href={link.url}>
            <FontAwesomeIcon icon={[link.fontawesome_pack, link.fontawesome_icon]} />
            {link.title}
          </Button>
        ))}  
    </div>
    );
}


export default ProjectListing;

