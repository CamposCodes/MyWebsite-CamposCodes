import * as C from './styles';
import Theme from '../../components/Theme';
import {motion} from 'framer-motion';

const Contact = () => {


    return(
        <Theme>
        <motion.div
            initial={{width: 0}}
            animate={{width: "100%"}}
            exit={{x: window.innerWidth, transition:{duration: 0.1}}}
        ></motion.div>
        </Theme>
    );
}

export default Contact;