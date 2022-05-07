import styled from 'styled-components';
import background from '../assets/home-background.png';
import ImgSlider from './ImgSlider'
import NewDisney from './NewDisney';
import Recommends from './Recommends';
import Trending from './Trending';
import Viewers from './Viewers';
import Originals from './Originals'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storage } from '../Firebase';
import { setMovies } from '../Features/Movie/MovieSlice';
import { selectUserName } from '../Features/user/UserSlice';
import { onSnapshot, collection } from 'firebase/firestore';


const Home = (props) =>{
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    
   
    let recommends = [];
    let newdisney = [];
    let originals = [];
    let trending = [];

    useEffect(()=>{
        onSnapshot(collection(storage,'movies'),(snapshot) => {

            snapshot.docs.map((doc) => {
                console.log(newdisney)

              
                switch(doc.data().type){
                   
                    case 'recommend' :
                       recommends.push({ id:doc.id, ...doc.data()});
                       break;
    
                   case 'new':
                    newdisney.push({id: doc.id, ...doc.data() });
                      break;
                   case 'original':
                           originals.push({id: doc.id, ...doc.data() });
                           break;
     
                   case 'trending':
                        trending.push({id: doc.id, ...doc.data() });
                        break;
                   default :
                    alert('error');
                
    
                   }
             
               
           })

           dispatch(
            setMovies({
            recommend: recommends,
            newDisney: newdisney,
            trending: trending,
            originals: originals
        })
        );
    })
           
    }, [userName])


    return(
        <Container>
           <ImgSlider/>
           <Viewers/>
           <Recommends/>
           <NewDisney/>
           <Originals/>
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