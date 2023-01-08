import * as C from './styles';
import Theme from '../../components/Theme';
import profile from '../../assets/profile.png';
import {motion} from 'framer-motion';
import { DiReact,DiJsBadge,DiGitBranch } from "react-icons/di";
import { SiTypescript } from "react-icons/si";

const Home = () => {


    return (
        <Theme>
        <motion.div
            initial={{width: 0}}
            animate={{width: "100%"}}
            exit={{x: window.innerWidth, transition:{duration: 0.1}}}
        >
            <C.Container>
                <C.TextArea>
                    <C.Image src={profile}></C.Image>
                    <C.Text>
                        <C.Title>About me</C.Title>
                        My name is Gabriel Campos, currently studying Information Systems at UFJF (Federal University of Juiz de Fora) and looking for my first professional opportunity as a Front-end developer.
                    </C.Text>
                </C.TextArea>
                <C.TextArea2>
                    <C.Text>
                        My name is Gabriel Campos, currently studying Information Systems at UFJF (Federal University of Juiz de Fora) and looking for my first professional opportunity as a Front-end developer.
                        My name is Gabriel Campos, currently studying Information Systems at UFJF (Federal University of Juiz de Fora) and looking for my first professional opportunity as a Front-end developer.
                    </C.Text>
                </C.TextArea2>
                <C.TextArea2>
                    <C.Text2>
                        <C.SubTitle>technologies I work with</C.SubTitle>
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
                    <C.LinkButton to="/about">
                        <SiTypescript className="icon2"/>
                    </C.LinkButton> 
                </C.ButtonContainer>
                <C.TextArea>
                    <C.Image src={profile}></C.Image>
                    <C.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </C.Text>
                </C.TextArea>
            </C.Container>
            </motion.div>
        </Theme>
    );
}


export default Home;