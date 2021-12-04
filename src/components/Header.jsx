import * as React from "react";
import { Helmet } from "react-helmet";

// Common styles
import '../styles/common.scss';

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Navigation from "./Navigation.jsx";


library.add(fab, fas)


const Header = (props) => (
    <div>
        <Navigation></Navigation>
        <Helmet
            htmlAttributes={{
                lang: 'en',
            }}
        />

    </div>
);

export default Header;