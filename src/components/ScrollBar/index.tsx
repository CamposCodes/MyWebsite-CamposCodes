import { motion, useScroll } from "framer-motion";
import * as C from './styles';

function ScrollBar() {
  const { scrollYProgress } = useScroll();
  
  return (
    <C.Container>
    <motion.div className="progressBar" style={{ scaleX: scrollYProgress }} />  
    </C.Container>
  );
}

export default ScrollBar;
