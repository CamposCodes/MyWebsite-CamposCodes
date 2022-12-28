import Theme from "../../components/Theme";
import * as C from './styles';
import {BsGithub,BsGoogle,BsLinkedin,BsFacebook,BsInstagram} from 'react-icons/bs';

const About = () => {
    return (
    <Theme>
        <C.Container>
            <C.Title>How to reach me</C.Title>
            <C.Area>
                <C.Link target="_blank" href="https://github.com/CamposCodes">
                    <BsGithub className="icon" />
                    <C.SubTitle>Github</C.SubTitle>
                </C.Link>
            </C.Area>
            <C.Area>
                <C.Link target="_blank" href="https://www.linkedin.com/in/gabriel-campos-lima-alves-947554249/">
                    <BsLinkedin className="icon" />
                    <C.SubTitle>Linkedin</C.SubTitle>
                </C.Link>
            </C.Area>
            <C.Area>
                <C.Link target="_blank" href="https://www.instagram.com/dev.camposg/">
                    <BsInstagram className="icon" />
                    <C.SubTitle>Instagram</C.SubTitle>
                </C.Link>
            </C.Area>
            <C.Area>
                <C.Link target="_blank" href="https://www.facebook.com/people/Dev-Campos/100085400052572/">
                    <BsFacebook className="icon" />
                    <C.SubTitle>Facebook</C.SubTitle>
                </C.Link>
            </C.Area>
            <C.Area>
                <C.Link target="_blank" href="">
                    <BsGoogle className="icon" />
                    <C.SubTitle>Gmail</C.SubTitle>
                </C.Link>
            </C.Area>
        </C.Container>
    </Theme>
  );
};

export default About;
