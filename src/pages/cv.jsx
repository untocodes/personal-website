// Frameworks
import * as React from "react";
import { Helmet } from "react-helmet";

// Components
import Base from "../components/Base.jsx";
import {MiniTitle,BigTitle} from "../components/Titles.jsx";
import Description from "../components/Description.jsx";
import ExperienceList from "../components/ExperienceList.jsx";
import TechList from "../components/TechList.jsx";
import SocialButtons from "../components/SocialButtons.jsx";

// Data
import ExperienceData from "../data/experience.json";
import TechData from "../data/technologies.json";
import SocialsData from "../data/socials.json";

const CV = (props) => (
  <Base>
      <Helmet>
          <title>Unto Karjalainen - CV</title>
          <meta name="description" content="Software-Developer, Web-Designer and hardware tinkerer from Jyväskylä, Finland."/>
          <meta name="keywords" content="Unto,Karjalainen,Unto
          Karjalainen,Jyväskylä,Finland,Software-Developer"/>
          <meta name="author" content="Unto Karjalainen"/>
          <meta property="og:title" content="Unto Karjalainen - CV"></meta>
          <meta property="og:type" content="website"></meta>
          <meta property="og:description" content="Software-Developer, Web-Designer and hardware tinkerer from Jyväskylä, Finland."></meta>
      </Helmet>
      <BigTitle>Curriculum Vitae</BigTitle>
      <h1>Unto Karjalainen</h1>
      <p>Software Developer, DevOps Engineer and UI/Web-Designer.</p>
      <MiniTitle>About Me</MiniTitle>
      <Description>
        Young multi-talented Software Developer from Jyväskylä, Finland.
        <br></br><br></br>
        I have coded for atleast 8 years now and have solved many problems and used many interesting and different technologies in that time.
        <br></br><br></br>
        In addition to coding I can also implement solutions for different problems in DevOps and server/cloud-infrastructure. 
      </Description>
      <MiniTitle>Technical skills</MiniTitle>
      <TechList data={TechData}></TechList>
      <ExperienceList data={ExperienceData}></ExperienceList>
      <MiniTitle>Links</MiniTitle>
      <SocialButtons socials={SocialsData}></SocialButtons>
  </Base>
);

export default CV;

