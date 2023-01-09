import * as C from './styles';
import Navbar from '../Navbar';
import { ReactNode } from 'react';
import Footer from '../Footer';
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