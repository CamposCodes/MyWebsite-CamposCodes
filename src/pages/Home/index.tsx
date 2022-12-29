import * as C from './styles';
import Theme from '../../components/Theme';
import profile from '../../assets/profile.png';
import { DiReact,DiJsBadge,DiGitBranch } from "react-icons/di";

const Home = () => {

    return (
        <Theme>
            <C.Container>
                <C.TextArea>
                    <C.Image src={profile}></C.Image>
                    <C.Text>
                        <C.Title>Sobre Mim</C.Title>
                        Me chamo Gabriel Campos, atualmente curso Sistemas de Informação na UFJF (Universidade Federal de Juiz de Fora) e busco minha primeira oportunidade profissional como desenvolvedor Front-end.
                    </C.Text>
                </C.TextArea>
                <C.TextArea2>
                    <C.Text2>
                        <C.SubTitle>Algumas tecnologias com que trabalhos</C.SubTitle>
                    </C.Text2>
                </C.TextArea2>
                <C.ButtonContainer>
                    <C.LinkButton to="/projects">
                        <DiReact className="icon1"/>
                    </C.LinkButton> 
                    <C.LinkButton to="/contact">
                        <DiJsBadge className="icon2"/>
                    </C.LinkButton> 
                    <C.LinkButton to="/about">
                        <DiGitBranch className="icon1"/>
                    </C.LinkButton> 
                </C.ButtonContainer>
                <C.TextArea2>
                    <C.Text2>
                        <C.Title>Sobre Mim</C.Title>
                        Me chamo Gabriel Campos, atualmente curso Sistemas de Informação na UFJF (Universidade Federal de Juiz de Fora) e busco minha primeira oportunidade profissional como desenvolvedor Front-end.
                    </C.Text2>
                </C.TextArea2>
                <C.TextArea>
                    <C.Image src={profile}></C.Image>
                    <C.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </C.Text>
                </C.TextArea>
            </C.Container>
        </Theme>
    );
}


export default Home;