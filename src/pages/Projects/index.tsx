import * as C from './styles';
//links of projects
import logo from '../../assets/1.png';

const Projects = () => {
    return(
        <C.Container>
            <C.ProjectArea>
                <a target='_blank' href="https://camposcodes.github.io/SkateGame/">
                    <C.ProjectImage src={logo}/>
                </a>
            </C.ProjectArea>
        </C.Container>
    );
}

export default Projects;