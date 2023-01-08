import Theme from "../../components/Theme";
import * as C from './styles';
import {motion} from 'framer-motion';
import Animation from '../../components/Animation';
import {BsGoogle,BsLinkedin,BsFacebook,BsInstagram} from 'react-icons/bs';

const About = () => {

    const Animate = {
        variantA: {opacity: 1, x: 100, y: 100},
        variantB: {opacity: 1, x: 0, y: 0},
        variantC: {opacity: 1, x: 200, y: 200},
        variantD: {opacity: 1, x: 0, y: 0},
        variantE: {opacity: 1, x: 300, y: 300},
        variantF: {opacity: 1, x: 0, y: 0},
        variantG: {opacity: 1, x: 400, y: 400},
        variantH: {opacity: 1, x: 0, y: 0},
        variantI: {opacity: 1, x: 500, y: 500},
        variantJ: {opacity: 1, x: 0, y: 0},
    };


    return (
    <Theme>
        <motion.div
            initial={{width: 0}}
            animate={{width: "100%"}}
            exit={{x: window.innerHeight, transition:{duration: 0.1}}}
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
