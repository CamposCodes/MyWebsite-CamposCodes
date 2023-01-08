import * as C from './styles';

const ButtonToTop = () => {

    const ToTop = () => { 
        window.scrollTo(0, 0);
    };

    return(
        <C.Container onClick={ToTop}>
            <button>Back to top</button>
        </C.Container>
    );
}

export default ButtonToTop;