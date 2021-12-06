// Frameworks
import * as React from "react";
import { Helmet } from "react-helmet";

// Components
import Base from "../components/Base.jsx";
import ProjectListing from "../components/ProjectListing.jsx";
import {MiniTitle,BigTitle} from "../components/Titles.jsx";

//Data

import ProjectData from '../data/projects.json';

const Projects = (props) => (
  <Base>
      <Helmet>
          <title>Unto Karjalainen - Projects</title>
          <meta name="description" content="Software-Developer, Web-Designer and hardware tinkerer from Jyväskylä, Finland."/>
          <meta name="keywords" content="Unto,Karjalainen,Unto
          Karjalainen,Jyväskylä,Finland,Software-Developer"/>
          <meta name="author" content="Unto Karjalainen"/>
          <meta property="og:title" content="Unto Karjalainen - Projects"></meta>
          <meta property="og:type" content="website"></meta>
          <meta property="og:description" content="Software-Developer, Web-Designer and hardware tinkerer from Jyväskylä, Finland."></meta>
      </Helmet>
      <BigTitle>Projects</BigTitle>
      {ProjectData.map(proj => (  
        <ProjectListing data={proj}></ProjectListing>
      ))}
  </Base>
);

export default Projects;

