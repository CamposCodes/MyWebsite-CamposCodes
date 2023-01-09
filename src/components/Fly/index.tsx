import { FiSend} from "react-icons/fi";
import {motion} from 'framer-motion';
import * as C from './styles';


const Fly = () => {
    return(
        <C.Container>
            <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1.2, x:0, y:100}}
            transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                delay:.5
            }}>
                <FiSend className="icon"/>
            </motion.div>
            <motion.div
            initial={{ scale: 0 }}
            animate={{ rotateY: 180, rotate: 360, scale: 1.2, x:100, y:100}}
            transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                delay:.5
            }}>
                <FiSend className="icon"/>
            </motion.div>
        </C.Container>
    );
}

export default Fly;