import * as React from "react";

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
    </div>
);

export default Header;