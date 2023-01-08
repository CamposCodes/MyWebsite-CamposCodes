import * as C from './styles';
import { motion } from 'framer-motion';
import {BsGithub,BsGoogle,BsLinkedin,BsFacebook,BsInstagram} from 'react-icons/bs';

const Animation = () => {

    const Animate = {
        variantA : {left: 0,x: 0, y:0},
        variantB : {left: 0,x: -100, y:-100},
        variantC : {left: 0,x: -50, y:-250},
        variantD : {left: 0,x: -150, y:30},
        variantE : {left: 0,x: 50, y:30},
        variantF : {left: 0,x: -50, y: -250},
        variantG : {left: 0,x: 90, y: -100},
    }

    return(
        <C.Container>
            <C.Area>
                <C.Balls>
                <motion.div
                variants={Animate}
                initial="variantA"
                animate="variantB"
                transition={{
                    type: "spring",
                    stiffness: 2,
                    damping: 4,
                    mass: 10,
                }}
                >
                    <C.Ball>
                        <C.Link target="_blank" href="https://github.com/CamposCodes">
                            <BsGithub className="icon" />
                        </C.Link>
                    </C.Ball>
                </motion.div>
                <motion.div
                variants={Animate}
                initial="variantA"
                animate="variantC"
                transition={{
                    type: "spring",
                    stiffness: 2,
                    damping: 4,
                    mass: 10,
                }}
                >
                    <C.Ball>
                       <C.Link target="_blank" href="https://www.linkedin.com/in/gabriel-campos-lima-alves-947554249/">
                            <BsLinkedin className="icon" />
                        </C.Link>
                    </C.Ball>
                </motion.div>
                <motion.div
                variants={Animate}
                initial="variantA"
                animate="variantD"
                transition={{
                    type: "spring",
                    stiffness: 2,
                    damping: 4,
                    mass: 10,
                }}
                >
                    <C.Ball>
                        <C.Link target="_blank" href="https://www.instagram.com/dev.camposg/">
                            <BsInstagram className="icon" />
                        </C.Link>
                    </C.Ball>
                </motion.div>
                <motion.div
                variants={Animate}
                initial="variantA"
                animate="variantE"
                transition={{
                    type: "spring",
                    stiffness: 2,
                    damping: 4,
                    mass: 10,
                }}
                >
                    <C.Ball>
                        <C.Link target="_blank" href="https://www.facebook.com/people/Dev-Campos/100085400052572/">
                            <BsFacebook className="icon" />
                        </C.Link>
                    </C.Ball>
                </motion.div>
                <motion.div
                variants={Animate}
                initial="variantA"
                animate="variantF"
                transition={{
                    type: "spring",
                    stiffness: 2,
                    damping: 4,
                    mass: 10,
                }}
                >
                    <C.Ball>
                        <C.Link target="_blank" href="">
                            <BsGoogle className="icon" />
                        </C.Link>
                    </C.Ball>
                </motion.div>
                <motion.div
                variants={Animate}
                initial="variantA"
                animate="variantG"
                transition={{
                    type: "spring",
                    stiffness: 2,
                    damping: 4,
                    mass: 10,
                }}
                >
                    <C.Ball>
                        <C.Link target="_blank" href="https://www.linkedin.com/in/gabriel-campos-lima-alves-947554249/">
                            <BsLinkedin className="icon" />
                        </C.Link>
                    </C.Ball>
                </motion.div>
                </C.Balls>
            </C.Area>
        </C.Container>
    );
}

export default Animation;