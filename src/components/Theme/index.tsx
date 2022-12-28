import * as C from './styles';
import Navbar from '../Navbar';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode
}

const Theme =  ({children}: Props) => {
    return(
        <C.Container>
            <C.Area>
                <Navbar/>
                <C.Page>
                    {children}
                </C.Page>
            </C.Area>
        </C.Container>
    );
}

export default Theme;