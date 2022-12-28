import * as C from './styles';
import {MdMenu,MdClose} from 'react-icons/md';
import React, {useState} from 'react';
import { motion } from 'framer-motion';
import LogoImage1 from '../../assets/1.png';


const Navbar = () => {
    
    // ANIMATION 
    const variants = {
        open: { opacity: 1, y: "10%" },
        closed: { opacity: 1, y: "-100%" },
    }
    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 10
    };
    // ANIMATION 
      
    
    const [extendNavbar, setExtendNavbar] = useState(false);

    const changeNavbar = () => {
        setExtendNavbar((extendNavbar)=>!extendNavbar);
    } 
    
    return(
        <C.NavbarContainer extendNavbar={extendNavbar}>
            <C.NavbarInnerContainer>
                <C.LeftContainer>
                    <C.Logo src={LogoImage1}></C.Logo>
                </C.LeftContainer>
                <C.MidContainer>
                    <C.NavbarLinkContainer>
                        <C.NavbarLink to="/">Home</C.NavbarLink>
                        <C.NavbarLink to="/projects">Projects</C.NavbarLink>
                        <C.NavbarLink to="/contact">Contact us</C.NavbarLink>
                        <C.NavbarLink to="/about">About us</C.NavbarLink>
                        <C.OpenLinksButton onClick = {changeNavbar}>
                            {extendNavbar ? <MdClose/> : <MdMenu />}    
                        </C.OpenLinksButton>
                    </C.NavbarLinkContainer>
                </C.MidContainer>
                <C.RightContainer>
                </C.RightContainer>
            </C.NavbarInnerContainer>
            {extendNavbar && (
                <motion.nav
                className="App_sec"
                variants={variants}
                animate= {extendNavbar ? "open": "close" } 
                transition={spring}
                >
                <C.NavbarExtendedContainer>
                        <C.NavbarLinkExtend onClick={changeNavbar} to="/">Home</C.NavbarLinkExtend>
                        <C.NavbarLinkExtend onClick={changeNavbar} to="/projects">Projects</C.NavbarLinkExtend>
                        <C.NavbarLinkExtend onClick={changeNavbar} to="/contact">Contact us</C.NavbarLinkExtend>
                        <C.NavbarLinkExtend onClick={changeNavbar} to="/about">About us</C.NavbarLinkExtend>
                </C.NavbarExtendedContainer>
                </motion.nav>

)}
        </C.NavbarContainer>
    );
}

export default Navbar;