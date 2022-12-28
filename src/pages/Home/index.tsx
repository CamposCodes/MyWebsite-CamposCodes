import * as C from './styles';
import image1 from '../../assets/1.png';

const Home = () => {

    return (
      <C.Container>
        <C.Title>Quem eu sou?</C.Title>
        <C.TextArea>
          <C.Image src={image1}></C.Image>
          <C.Text>
            xxxxxxx xxxxxxxxxxxxxxxxx xxxxxx xx xxxxxxxx xxxx
            xxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxx xxxxxxxxxxx x xxxxx xxxxxxxxxxx
            xxxxxxx xxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxx xxxxxxxxx xxx
          </C.Text>
        </C.TextArea>
      </C.Container>
    );
}


export default Home;