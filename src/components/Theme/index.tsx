import * as C from './styles';
import Navbar from '../Navbar';
import { ReactNode } from 'react';
import Footer from '../Footer';
// import Ball from '../../components/Ball';
import Animation from '../../components/Animation';
import ScrollBar from '../ScrollBar';

type Props = {
    children: ReactNode
}

const Theme =  ({children}: Props) => {
    return(
        <C.Container>
            <C.Area>
                <ScrollBar/>
                <Navbar/>
                <C.Page>
                
                {/* <Ball/> */}
                    {children}
                </C.Page>
                <Footer/>
            </C.Area>
        </C.Container>
    );
}

export default Theme;