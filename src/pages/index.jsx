// Frameworks
import * as React from "react";
import { Helmet } from "react-helmet";

// Components
import Base from "../components/Base.jsx";
import {MiniTitle} from "../components/Titles.jsx";
import Description from "../components/Description.jsx";
import SocialButtons from "../components/SocialButtons.jsx";

// Data
import SocialsData from "../data/socials.json";


const Index = (props) => (
  <Base className="center">
      <Helmet>
        <title>Unto Karjalainen</title>
        <meta name="description" content="Software-Developer, Web-Designer and hardware tinkerer from Helsinki, Finland."/>
        <meta name="keywords" content="Unto,Karjalainen,Unto
        Karjalainen,Helsinki,Finland,Software-Developer"/>
        <meta name="author" content="Unto Karjalainen"/>
        <meta property="og:title" content="Unto Karjalainen"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:description" content="Software-Developer, Web-Designer and hardware tinkerer from Helsinki, Finland."></meta>
      </Helmet>

      <MiniTitle>Who?</MiniTitle>
      <h1> Unto Karjalainen </h1>
      <p>Software Developer, DevOps Engineer and UI/Web-Designer.</p>
      <Description>
        Experienced Software Developer from Helsinki, Finland with a passion for Web-Design and DevOps.
      </Description>
      <MiniTitle>Where?</MiniTitle>
      <SocialButtons socials={SocialsData}></SocialButtons>
  </Base>
);

export default Index;