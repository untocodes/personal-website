import * as React from "react";
import Button from "../components/Button.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SocialButtons = (props) => (
    <div>
        {props.socials.map(social => (  
          <Button key={social.name} href={social.url}>
            <FontAwesomeIcon icon={[social.fontawesome_pack, social.fontawesome_icon]} />
            {social.name}
          </Button>
        ))}  
    </div>
);

export default SocialButtons;