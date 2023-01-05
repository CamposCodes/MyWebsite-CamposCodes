import * as C from './styles';
import Navbar from '../Navbar';
import { ReactNode } from 'react';
import Footer from '../Footer';
import Ball from '../../components/Ball';

type Props = {
    children: ReactNode
}

const Theme =  ({children}: Props) => {
    return(
        <C.Container>
            <C.Area>
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