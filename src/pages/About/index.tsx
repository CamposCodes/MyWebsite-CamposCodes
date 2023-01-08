import Theme from "../../components/Theme";
import * as C from './styles';
import {motion} from 'framer-motion';
import Animation from '../../components/Animation';

const About = () => {
    return (
    <Theme>
        <motion.div
            initial={{width: 0}}
            animate={{width: "100%"}}
            exit={{x: window.innerWidth, transition:{duration: 0.1}}}
            >
        <C.Container>
            <C.Title>How to reach me</C.Title>
            <C.Info>
                <Animation/>
            </C.Info>
        </C.Container>
        </motion.div>
    </Theme>
  );
};

export default About;
