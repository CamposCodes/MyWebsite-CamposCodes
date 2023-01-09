import * as C from "./styles";
import ImageLogo from '../../assets/11.png';
import {BsGithub,BsLinkedin,BsFacebook,BsInstagram} from 'react-icons/bs';
import ButtonToTop from '../ButtonToTop';

const Footer = () => {
    return(
        <C.Container>
            <C.BackToTop><ButtonToTop/></C.BackToTop>
            <C.Redes>
                <BsGithub className="icon"/>
                <BsLinkedin className="icon"/>
                <BsInstagram className="icon"/>
                <BsFacebook className="icon"/>
            </C.Redes>
            <C.LinksContainer>
                <C.LinkTo to="/projects">projetos</C.LinkTo>
                <C.LinkTo to="/about">sobre</C.LinkTo>
                <C.LinkTo to="/contact">contato</C.LinkTo>
            </C.LinksContainer>
            <C.Logo src={ImageLogo}></C.Logo>
        </C.Container>
    );
}

export default Footer;