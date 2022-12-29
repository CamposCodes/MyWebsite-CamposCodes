import * as C from "./styles";
import ImageLogo from '../../assets/2.png';
import {BsGithub,BsGoogle,BsLinkedin,BsFacebook,BsInstagram} from 'react-icons/bs';

const Footer = () => {
    return(
        <C.Container>
            <C.Name>Gabriel Campos Lima Alves</C.Name>
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