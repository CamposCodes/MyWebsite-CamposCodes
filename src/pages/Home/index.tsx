import * as C from "./styles";
import Theme from "../../components/Theme";

import profile from "../../assets/profile.png";

import { motion } from "framer-motion";

import { DiReact, DiJsBadge, DiGitBranch } from "react-icons/di";
import { SiTypescript } from "react-icons/si";

const Home = () => {
  return (
    <Theme>
      <motion.div
        style={{ width: 100 }}
        onViewportEnter={() => window.scrollTo(0, 0)}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
      >
        <C.Container>
          <C.TextArea>
            <C.Image src={profile}></C.Image>
            <C.Text>
              <C.Title>Sobre mim</C.Title> Olá! Meu nome é Gabriel Campos Lima
              Alves e atualmente estou cursando Sistemas de Informação na
              Universidade Federal de Juiz de Fora, em Minas Gerais. Tenho 21
              anos e estou em busca da minha primeira oportunidade no mercado de
              trabalho como desenvolvedor front-end.
            </C.Text>
          </C.TextArea>
          <C.TextArea2>
            <C.Text2>
              <C.SubTitle>Tecnologias que trabalho</C.SubTitle>
            </C.Text2>
          </C.TextArea2>
          <C.TextArea5>
            <C.Text>
              Com o domínio das linguagens abaixo, tenho certeza de que posso
              contribuir para o desenvolvimento de projetos de sucesso e agregar
              valor à sua equipe.
            </C.Text>
          </C.TextArea5>
          <C.ButtonContainer>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.3, 1.5, 1.2], rotateX: [0, 20, -20, 0] }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                delay: 0.2,
                duration: 2,
              }}
            >
              <C.LinkButton to="/projects">
                <DiReact className="icon1" />
              </C.LinkButton>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.3, 1.5, 1], rotateX: [0, 20, -20, 0] }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                delay: 2.2,
                duration: 2,
              }}
            >
              <C.LinkButton to="/contact">
                <DiJsBadge className="icon2" />
              </C.LinkButton>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.3, 1.5, 1.2], rotateX: [0, 20, -20, 0] }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                delay: 4.2,
                duration: 2,
              }}
            >
              <C.LinkButton to="/about">
                <DiGitBranch className="icon1" />
              </C.LinkButton>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.3, 1.5, 1], rotateX: [0, 20, -20, 0] }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                delay: 6.2,
                duration: 2,
              }}
            >
              <C.LinkButton to="/about">
                <SiTypescript className="icon2" />
              </C.LinkButton>
            </motion.div>
          </C.ButtonContainer>
          <C.TextArea4>
            <C.Text>
              <C.Title2>Objetivo</C.Title2>
              Meu objetivo é criar experiências incríveis para os usuários,
              utilizando tecnologias inovadoras e soluções criativas. Estou
              animado para fazer parte de uma equipe dinâmica e colaborativa, e
              contribuir para o sucesso da empresa. Acredito que minha dedicação
              e habilidades técnicas podem ser uma grande contribuição para
              projetos de sucesso. Mal posso esperar para mostrar todo o meu
              potencial e crescer junto com a equipe!
            </C.Text>
          </C.TextArea4>
          <C.TextArea3>
            <C.Text>
              <C.Title2>Motivação</C.Title2>
              Estou muito motivado a fazer parte de uma empresa inovadora que
              valorize o trabalho em equipe e que me proporcione um ambiente de
              aprendizado contínuo. Acredito que minhas habilidades técnicas,
              combinadas com minha determinação em alcançar objetivos, me tornam
              um forte candidato para a vaga de desenvolvedor front-end.
            </C.Text>
            <C.Text>
              <C.Title2>Disposição</C.Title2>
              Fico à disposição para conversar e apresentar mais sobre minhas
              habilidades e experiências. Desde já agradeço pela oportunidade e
              espero fazer parte do seu time em breve. E como disse Chris Pine,
              "Programação não é sobre o que você sabe, é sobre o que você pode
              descobrir."
            </C.Text>
          </C.TextArea3>
        </C.Container>
      </motion.div>
    </Theme>
  );
};

export default Home;
