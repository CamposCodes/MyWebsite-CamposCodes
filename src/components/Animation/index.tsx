import {motion} from 'framer-motion';
import * as C from './styles';


const Lines = () => {
    return(
        <div className="line">
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
            <C.Lines>0</C.Lines>
            <C.Lines>1</C.Lines>
        </div>
    );
}

const BiLine1 = () => {
    const Animate = {
        variantA: {opacity: 1, x: -100, y: 5},
        variantB: {opacity: .7, x: 500, y: 5}
    };

    return(
        <motion.div 
        className="animate"
        variants={Animate}
        initial="variantA"
        animate="variantB"
        transition={{
            type: "spring",
            stiffness: 100,
            damping: 0,
            duration: 1,
        }}><Lines/></motion.div>    
    );
}
const BiLine2 = () => {
    const Animate = {
        variantA: {opacity: 1, x: -100, y: 5},
        variantB: {opacity: .6, x: 500, y: 5}
    };

    return(
        <motion.div 
        className="animate"
        variants={Animate}
        initial="variantA"
        animate="variantB"
        transition={{
            type: "spring",
            stiffness: 100,
            damping: 0,
            duration: 1,
            delay: .2
        }}><Lines/></motion.div>    
    );
}
const BiLine3 = () => {
    const Animate = {
        variantA: {opacity: 1, x: -100, y: 5},
        variantB: {opacity: .5, x: 500, y: 5}
    };

    return(
        <motion.div 
        className="animate"
        variants={Animate}
        initial="variantA"
        animate="variantB"
        transition={{
            type: "spring",
            stiffness: 100,
            damping: 0,
            duration: 1,
            delay: .1,
        }}><Lines/></motion.div>    
    );
}

const Animation = () => {
    
    
    return(
        <C.Container>
            <C.Area>
                <BiLine1/>
                <BiLine2/>
                <BiLine3/>
                <BiLine1/>
                <BiLine2/>
                <BiLine3/>
                <BiLine1/>
                <BiLine2/>
                <BiLine3/>
                <BiLine1/>
                <BiLine2/>
                <BiLine3/>
                <BiLine1/>
                <BiLine2/>
                <BiLine3/>
                <BiLine1/>
                <BiLine2/>
                <BiLine3/>
                <BiLine1/>
                <BiLine2/>
                <BiLine3/>
                <BiLine1/>
                <BiLine2/>
                <BiLine3/>
                <BiLine1/>
                <BiLine2/>
                <BiLine3/>
                <BiLine1/>
                <BiLine2/>
                <BiLine3/>
                <BiLine1/>
                <BiLine2/>
                <BiLine3/>
                <BiLine1/>
                <BiLine2/>
                <BiLine3/>
                <BiLine1/>
                <BiLine2/>
                <BiLine3/>
                <BiLine3/>
                <BiLine1/>
                <BiLine2/>
                <BiLine3/>
            </C.Area>
        </C.Container>
    );
}


export default Animation;