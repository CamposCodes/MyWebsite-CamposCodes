import * as C from './styles';
import image1 from '../../assets/1.png';
import Theme from '../../components/Theme';
import profile from '../../assets/profile.png';

const Home = () => {

    return (
        <Theme>
            <C.Container>
                {/* <C.Title>...</C.Title> */}
                <C.TextArea>
                <C.Image src={profile}></C.Image>
                <C.Text>
                    <C.Title>Sobre Mim</C.Title>
                    Me chamo Gabriel Campos, atualmente curso Sistemas de Informação na UFJF (Universidade Federal de Juiz de Fora) e busco minha primeira oportunidade profissional como desenvolvedor Front-end.
                </C.Text>
                </C.TextArea>
            </C.Container>
        </Theme>
    );
}


export default Home;