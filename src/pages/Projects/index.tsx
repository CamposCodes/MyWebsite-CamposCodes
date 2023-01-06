import * as C from './styles';
import Theme from '../../components/Theme';
import { motion } from "framer-motion";
import { useRef } from "react";
import { FiTool } from "react-icons/fi";

const Projects = () => {
    const constraintsRef = useRef(null);

    return(
        <Theme>
        <motion.div
            initial={{width: 0}}
            animate={{width: "100%"}}
            exit={{x: window.innerWidth, transition:{duration: 0.1}}}
        >
            <C.Container>
                <C.Top>
                <motion.div className="container" ref={constraintsRef}>
                    <C.Title>My projects</C.Title>
                    <C.SubTitle>drag tools</C.SubTitle>
                    <motion.div className="item" drag dragConstraints={constraintsRef}>
                        <FiTool className="icon"/>
                    </motion.div>
                    <motion.div className="item" drag dragConstraints={constraintsRef}>
                        <FiTool className="icon"/>
                    </motion.div>
                    <motion.div className="item" drag dragConstraints={constraintsRef}>
                        <FiTool className="icon"/>
                    </motion.div>
                    <motion.div className="item" drag dragConstraints={constraintsRef}>
                        <FiTool className="icon"/>
                    </motion.div>
                </motion.div>
                </C.Top>
                <C.ContainerGrid>
                    <C.ProjectArea>
                        <a target='_blank' href="https://camposcodes.github.io/SkateGame/">
                            <C.ProjectContent>Skate Game</C.ProjectContent>
                        </a>
                    </C.ProjectArea>
                    <C.ProjectArea>
                        <a target='_blank' href="https://camposcodes.github.io/SkateGame/">
                            <C.ProjectContent>Skate Game</C.ProjectContent>
                        </a>
                    </C.ProjectArea>
                    <C.ProjectArea>
                        <a target='_blank' href="https://camposcodes.github.io/SkateGame/">
                            <C.ProjectContent>Skate Game</C.ProjectContent>
                        </a>
                    </C.ProjectArea>
                    <C.ProjectArea>
                        <a target='_blank' href="https://camposcodes.github.io/SkateGame/">
                            <C.ProjectContent>Skate Game</C.ProjectContent>
                        </a>
                    </C.ProjectArea>
                    <C.ProjectArea>
                        <a target='_blank' href="https://camposcodes.github.io/SkateGame/">
                            <C.ProjectContent>Skate Game</C.ProjectContent>
                        </a>
                    </C.ProjectArea>
                    <C.ProjectArea>
                        <a target='_blank' href="https://camposcodes.github.io/SkateGame/">
                            <C.ProjectContent>Skate Game</C.ProjectContent>
                        </a>
                    </C.ProjectArea>
                    <C.ProjectArea>
                        <a target='_blank' href="https://camposcodes.github.io/SkateGame/">
                            <C.ProjectContent>Skate Game</C.ProjectContent>
                        </a>
                    </C.ProjectArea>
                    <C.ProjectArea>
                        <a target='_blank' href="https://camposcodes.github.io/SkateGame/">
                            <C.ProjectContent>Skate Game</C.ProjectContent>
                        </a>
                    </C.ProjectArea>
                    <C.ProjectArea>
                        <a target='_blank' href="https://camposcodes.github.io/SkateGame/">
                            <C.ProjectContent>Skate Game</C.ProjectContent>
                        </a>
                    </C.ProjectArea>
                    <C.ProjectArea>
                        <a target='_blank' href="https://camposcodes.github.io/SkateGame/">
                            <C.ProjectContent>Skate Game</C.ProjectContent>
                        </a>
                    </C.ProjectArea>
                </C.ContainerGrid>
            </C.Container>
            </motion.div>
        </Theme>
    );
}

export default Projects; 