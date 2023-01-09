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
            onViewportEnter={()=>window.scrollTo(0, 0)}
            initial={{width: 0}}
            animate={{width: "100%"}}
            exit={{x: window.innerWidth, transition:{duration: 0.5}}}
        >
            <C.Container>
                <C.Top>
                <motion.div className="container" ref={constraintsRef}>
                    <C.Title>My projects</C.Title>
                    <C.SubTitle>drag tools</C.SubTitle>
                    <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate:[50,-50,0]}}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 20,
                        delay:.2,
                        duration: 1
                    }}
                    className="item" 
                    drag dragConstraints={constraintsRef}>
                        <FiTool className="icon"/>
                    </motion.div>
                    <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate:[50,-50,0]}}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 20,
                        delay:1.2,
                        duration: 1
                    }}
                    className="item" 
                    drag dragConstraints={constraintsRef}>
                        <FiTool className="icon"/>
                    </motion.div>
                    <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate:[50,-50,0]}}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 20,
                        delay:2.2,
                        duration: 1
                    }}
                    className="item" 
                    drag dragConstraints={constraintsRef}>                
                        <FiTool className="icon"/>
                    </motion.div>
                    <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate:[50,-50,0]}}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 20,
                        delay:3.2,
                        duration: 1
                    }}
                    className="item" 
                    drag dragConstraints={constraintsRef}>                
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
                        <a target='_blank' href="https://github.com/CamposCodes/CadastroEmEtapas">
                            <C.ProjectContent>Cadastro em Etapas</C.ProjectContent>
                        </a>
                    </C.ProjectArea>
                    <C.ProjectArea>
                        <a target='_blank' href="https://github.com/CamposCodes/GaleriaDeFotos">
                            <C.ProjectContent>Galeria de Fotos</C.ProjectContent>
                        </a>
                    </C.ProjectArea>
                    <C.ProjectArea>
                        <a target='_blank' href="https://github.com/CamposCodes/CostsGerenciadorDeProjetos">
                            <C.ProjectContent>Gerenciador de Projetos</C.ProjectContent>
                        </a>
                    </C.ProjectArea>
                    <C.ProjectArea>
                        <a target='_blank' href="https://github.com/CamposCodes/ToDoListMobile-ReactNative">
                            <C.ProjectContent>ToDo List Mobile</C.ProjectContent>
                        </a>
                    </C.ProjectArea>
                    <C.ProjectArea>
                        <a target='_blank' href="https://github.com/CamposCodes/IdleClickGame-React">
                            <C.ProjectContent>Idle Click Game</C.ProjectContent>
                        </a>
                    </C.ProjectArea>
                    <C.ProjectArea>
                        <a target='_blank' href="https://github.com/CamposCodes/BrowserExtensionJs-ListaDeFavoritos">
                            <C.ProjectContent>Extensão Google Chrome 1</C.ProjectContent>
                        </a>
                    </C.ProjectArea>
                    <C.ProjectArea>
                        <a target='_blank' href="https://github.com/CamposCodes/BrowserExtensionJs-TransformaEmMaiusculo">
                            <C.ProjectContent>Extensão Google Chrome 2</C.ProjectContent>
                        </a>
                    </C.ProjectArea>
                    <C.ProjectArea>
                        <a target='_blank' href="https://camposcodes.github.io/AppleProductsResponsivo/">
                            <C.ProjectContent>Apple Products Responsivo</C.ProjectContent>
                        </a>
                    </C.ProjectArea>
                    <C.ProjectArea>
                        <a target='_blank' href="https://camposcodes.github.io/RelogioDigital/">
                            <C.ProjectContent>Relógio Digital</C.ProjectContent>
                        </a>
                    </C.ProjectArea>
                    <C.ProjectArea>
                        <a target='_blank' href="https://camposcodes.github.io/JogoDaMemoria/">
                            <C.ProjectContent>Jogo da Memória</C.ProjectContent>
                        </a>
                    </C.ProjectArea>
                    <C.ProjectArea>
                        <a target='_blank' href="https://camposcodes.github.io/JogoDaTravessia/">
                            <C.ProjectContent>Jogo da Travessia</C.ProjectContent>
                        </a>
                    </C.ProjectArea>
                    <C.ProjectArea>
                        <a target='_blank' href="https://camposcodes.github.io/CloneNetflix/">
                            <C.ProjectContent>Clone Netflix</C.ProjectContent>
                        </a>
                    </C.ProjectArea>
                    <C.ProjectArea>
                        <a target='_blank' href="https://camposcodes.github.io/CadastroCepAPI/s">
                            <C.ProjectContent>Clone Amazon Prime API</C.ProjectContent>
                        </a>
                    </C.ProjectArea>
                    <C.ProjectArea>
                        <a target='_blank' href="https://github.com/CamposCodes/CloneAmazonPrimeVideo">
                            <C.ProjectContent>Cadastro Cep API</C.ProjectContent>
                        </a>
                    </C.ProjectArea>
                    <C.ProjectArea>
                        <a target='_blank' href="https://camposcodes.github.io/CloneTwitter/">
                            <C.ProjectContent>Clone Twitter</C.ProjectContent>
                        </a>
                    </C.ProjectArea>
                </C.ContainerGrid>
            </C.Container>
            </motion.div>
        </Theme>
    );
}

export default Projects; 