// Frameworks
import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

// Components
import Base from "../components/Base.jsx";
import {MiniTitle} from "../components/Titles.jsx";


const E404 = (props) => (
  <Base>
      <Helmet>
          <title>Unto Karjalainen - 404</title>
      </Helmet>
      <MiniTitle>Error</MiniTitle>
      <p>404 - Not Found</p>
      <Link to="/">Return to the homepage.</Link>
  </Base>
);

export default E404;

