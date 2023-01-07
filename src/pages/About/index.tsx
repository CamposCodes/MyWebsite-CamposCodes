import Theme from "../../components/Theme";
import * as C from './styles';
import {BsGithub,BsGoogle,BsLinkedin,BsFacebook,BsInstagram} from 'react-icons/bs';
import {motion} from 'framer-motion';

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
            <C.Flex>
                <motion.div
                variants={Animate}
                initial="variantA"
                animate="variantB"
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 100,
                    duration: 1,
                    delay: .1,
                }}
                >
                <C.Area>
                    <C.Link target="_blank" href="https://github.com/CamposCodes">
                        <BsGithub className="icon" />
                    </C.Link>
                </C.Area>
                </motion.div>
                <motion.div
                variants={Animate}
                initial="variantC"
                animate="variantD"
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 100,
                    duration: 1,
                    delay: .1,
                }}
                >
                <C.Area>
                    <C.Link target="_blank" href="https://www.linkedin.com/in/gabriel-campos-lima-alves-947554249/">
                        <BsLinkedin className="icon" />
                    </C.Link>
                </C.Area>
                </motion.div>
                <motion.div
                variants={Animate}
                initial="variantE"
                animate="variantF"
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 100,
                    duration: 1,
                    delay: .1,
                }}
                >
                <C.Area>
                    <C.Link target="_blank" href="https://www.instagram.com/dev.camposg/">
                        <BsInstagram className="icon" />
                    </C.Link>
                </C.Area>
                </motion.div>
                <motion.div
                variants={Animate}
                initial="variantG"
                animate="variantH"
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 100,
                    duration: 1,
                    delay: .1,
                }}
                >                
                <C.Area>
                    <C.Link target="_blank" href="https://www.facebook.com/people/Dev-Campos/100085400052572/">
                        <BsFacebook className="icon" />
                    </C.Link>
                </C.Area>
                </motion.div>
                <motion.div
                variants={Animate}
                initial="variantI"
                animate="variantJ"
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 100,
                    duration: 1,
                    delay: .1,
                }}
                >
                <C.Area>
                    <C.Link target="_blank" href="">
                        <BsGoogle className="icon" />
                    </C.Link>
                </C.Area>
                </motion.div>
            </C.Flex>
        </C.Container>
        </motion.div>
    </Theme>
  );
};

export default About;
