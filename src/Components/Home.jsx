import styled from 'styled-components';
import background from '../assets/home-background.png';
import ImgSlider from './ImgSlider'
import NewDisney from './NewDisney';
import Recommends from './Recommends';
import Trending from './Trending';
import Viewers from './Viewers';
const Home = (props) =>{
    return(
        <Container>
           <ImgSlider/>
           <Viewers/>
           <Recommends/>
           <NewDisney/>
           <Trending/>
        </Container>
    )
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px); 

    &:after{ 
        background url(${background}) center center / cover 
        no-repeat fixed;
        content: '';
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;

export default Home; 