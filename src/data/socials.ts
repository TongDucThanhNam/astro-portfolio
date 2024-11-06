// import {faFacebook, faGithub, faLinkedin, faXTwitter, type IconDefinition} from '@fortawesome/free-brands-svg-icons';
import {
    FaFacebook, FaGithub, FaLinkedin, FaTwitter,

} from "react-icons/fa";
type Social = {
    label: string;
    icon: any;
    url: string;
};

const socials: Social[] = [
    {label: 'Facebook', icon: FaFacebook, url: 'https://twitter.com/tongducthanhnam'},
    {label: 'X', icon: FaTwitter, url: 'https://twitter.com/tongducthanhnam'},
    {
        label: 'LinkedIn',
        icon: FaLinkedin,
        url: 'https://linkedin.com/in/tong-duc-thanh-nam',
    },
    {label: 'GitHub', icon: FaGithub, url: 'https://github.com/tongducthanhnam'},
];

export default socials;
