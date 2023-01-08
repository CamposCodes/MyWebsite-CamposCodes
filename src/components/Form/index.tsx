import * as C from "./styles";
import { FiSend} from "react-icons/fi";
import {motion} from 'framer-motion';

const Form = () => {
  return (
    <C.Container>
      <C.Area>
        <C.Form>
            <label>
                Your name
                <input placeholder="Name" type="text" autoFocus/>
            </label>
            <label>
                Your e-mail
                <input placeholder="E-mail" type="email" autoFocus/>
            </label>
            <label>
                Message
                <textarea placeholder="Your message on here "/>
            </label>
            <C.Button type='submit'>
                <motion.div
                whileHover={{ scale: 1.2, rotate: 45 }}
                whileTap={{
                scale: 0.8,
                rotate: -25,
                x:100,
                y:-80
                }}>
                    <FiSend/>
                </motion.div>
            </C.Button>
        </C.Form>
      </C.Area>
    </C.Container>
  );
};

export default Form;
