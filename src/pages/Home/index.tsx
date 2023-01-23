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
            style={{width:100}}
            onViewportEnter={()=>window.scrollTo(0, 0)}
            initial={{width: 0}}
            animate={{width: "100%"}}
            exit={{x: window.innerWidth, transition:{duration: 0.5}}}
        >
            <C.Container>
                <C.TextArea>
                    <C.Image src={profile}></C.Image>
                    <C.Text>
                        <C.Title>About me</C.Title>
                        I am Gabriel Campos and a I.T. student who is passionate about writing code, solving problems, and automating stuff, and i'm always looking for improvement and new knowledge to build better solutions through apps.
                    </C.Text>
                </C.TextArea>
                <C.TextArea2>
                    <C.Text2>
                        <C.SubTitle>technologies I work with</C.SubTitle>
                    </C.Text2>
                </C.TextArea2>
                <C.ButtonContainer>
                    <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [1,1.3,1.5,1.2], rotateX:[0,20,-20,0]}}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 20,
                        delay:.2,
                        duration: 2
                    }}>
                        <C.LinkButton to="/projects">
                            <DiReact className="icon1"/>
                        </C.LinkButton> 
                    </motion.div>
                    <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [1,1.3,1.5,1], rotateX:[0,20,-20,0]}}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 20,
                        delay:2.2,
                        duration: 2
                    }}> 
                        <C.LinkButton to="/contact">
                            <DiJsBadge className="icon2"/>
                        </C.LinkButton> 
                    </motion.div>
                    <motion.div  
                    initial={{ scale: 0 }}
                    animate={{ scale: [1,1.3,1.5,1.2], rotateX:[0,20,-20,0]}}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 20,
                        delay:4.2,
                        duration: 2
                    }}> 
                        <C.LinkButton to="/about">
                            <DiGitBranch className="icon1"/>
                        </C.LinkButton> 
                    </motion.div>
                    <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [1,1.3,1.5,1], rotateX:[0,20,-20,0]}}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 20,
                        delay:6.2,
                        duration: 2
                    }}> 
                        <C.LinkButton to="/about">
                            <SiTypescript className="icon2"/>
                        </C.LinkButton> 
                    </motion.div>
                </C.ButtonContainer>
                <C.TextArea>
                    <C.Image src={profile}></C.Image>
                    <C.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </C.Text>
                </C.TextArea>
                <C.TextArea4>
                    <C.Text>
                        <C.Title2>My experiences as a developer</C.Title2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.s
                    </C.Text>
                </C.TextArea4>
                <C.TextArea3>
                    <C.Text>
                        <C.Title2>More</C.Title2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </C.Text>
                    <C.Text>
                        <C.Title2>More</C.Title2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.s
                    </C.Text>
                </C.TextArea3>
            </C.Container>
            </motion.div>
        </Theme>
    );
}


export default Home;