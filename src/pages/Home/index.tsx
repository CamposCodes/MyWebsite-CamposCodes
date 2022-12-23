import * as C from './styles';
import image1 from '../../assets/1.png';

const Home = () => {

    return(
        <C.Container>
            <C.TextArea>
                <C.Title>Quem eu sou?</C.Title>
                <C.Text></C.Text>
                <C.Image src={image1}></C.Image>
            </C.TextArea>
            <C.TextArea>
                {/* <C.Title>Quem eu sou?</C.Title> */}
                <C.Text></C.Text>
                <C.Image src={image1}></C.Image>
            </C.TextArea>
            <C.TextArea>
                {/* <C.Title>Quem eu sou?</C.Title> */}
                <C.Text></C.Text>
                <C.Image src={image1}></C.Image>
            </C.TextArea>
        </C.Container>
    );
}


export default Home;