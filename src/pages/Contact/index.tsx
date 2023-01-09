import * as C from './styles';
import Theme from '../../components/Theme';
import {motion} from 'framer-motion';
import Form from '../../components/Form';
import Fly from '../../components/Fly';

const Contact = () => {
    
    return(
        <Theme>
        <motion.div 
            onViewportEnter={()=>window.scrollTo(0, 0)}
            initial={{width: 0}}
            animate={{width: "100%"}}
            exit={{x: window.innerWidth, transition:{duration: 0.5}}}
            >
        <C.Container>
            <Fly/>
                <C.TextArea>
                    <C.Text>
                        Got a question ? Are you interested in partnering ? Have some suggestion or just want to say hi? Contact me 
                    </C.Text>
                </C.TextArea>
                <C.FormArea>
                    <Form/>
                </C.FormArea>
        </C.Container>
        </motion.div>
        </Theme>
    );
}

export default Contact;