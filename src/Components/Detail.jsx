import styled from "styled-components";
import icon1 from "../assets/play-icon-black.png";
import icon2 from "../assets/play-icon-white.png";
import icon3 from "../assets/group-icon.png";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { storage } from "../Firebase"
import { doc, getDoc } from "firebase/firestore";



const Detail =()=> {
    const { id } = useParams();
    const [detailData, setDetailData] = useState({})

    useEffect(()=>{
        getDoc(doc(storage, "movies", id)).then( (movieSnap) => {
            if (movieSnap.exists()) {
                  setDetailData(movieSnap.data());
            } else {
                console.log("No such document!");
            }
        }).catch((error) =>{
            console.log('Error data:', error)
        })
        
       
    },[id]) 


    return(
       <Container>
           <Background>
                <img src={detailData.backgroundImg} alt={detailData.title} />
           </Background>
           <ImgTitle>
                <img src={detailData.titleImg} alt={detailData.title} />
           </ImgTitle>
           <ContentMeta>
                <Control>
                    <Player>
                        <img src={icon1} alt="" />
                        <span>PLAY</span>
                    </Player>
                    <Trailer>
                        <img src={icon2} alt="" />
                        <span>TRAILER</span>
                    </Trailer>
                    <AddList>
                        <span/>
                        <span/>
                    </AddList>
                    <GroupWatch>
                        <div>
                            <img src={icon3} alt="" />
                        </div>
                    </GroupWatch>
                </Control>
                <SubTitle>
                     {detailData.subTitle}
                </SubTitle>

                <Description>
                {detailData.description}
              </Description>  
           </ContentMeta>
       </Container>
    )
}

const  Container = styled.div`
    position: relative; 
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
    left: 0px;
    opacity: 0.8;
    position: fixed;
    top: 0; 
    z-index: -1;

    img{
        width: 100vw;
        height: 100vh;  
    }

    @media (max-width: 768px){
        width: initial;

    }
`;

const ImgTitle = styled.div`
    align-item: flex-end;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin: 4rem auto;
    height: 30vh;
    min-height: 170px;
    padding-bottom: 24px;
    width: 100%;

    img{
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
    }

`;
const ContentMeta = styled.div`
    max-width: 874px;

`;

const Control = styled.div`
    align-items: center;
    display: flex; 
    flex-flow: row nonwrap;
    margin: 24px 0px;
    min-height: 56px;
`;

const Player = styled.button`
   font-size: 15px;
   margin: 0 22px 0 0;
   padding: 0 24px;
   height: 56px;
   border-radius: 4px;
   align-items: center;
   display: flex;
   cursor: pointer;
   justify-content: center;
   letter-spacing: 1.8px;
   text-align: center;
   text-transform: uppercase;
   background: rgb(249, 249, 249);
   border: none;
   color: rgb(0, 0, 0);

   img{
       width: 32px;
   }

   &:hover{
       background: rgb(198, 198, 198);
   }

   @media (max-width: 768px){
       height: 45px;
       padding: 0px 12px;
       font-size: 12px;
       margin: 0 10px 0 0;
       img{
           width: 25px;
       }
   }
`;

const Trailer = styled(Player)`
     background: rgba(0, 0, 0, 0.3);
     border: 1px solid rgb(249, 249, 249);
     color: rgb(249, 249, 249);
`;

const AddList = styled.div`
   margin-right: 16px;
   height: 44px;
   width: 44px;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: rgba(0, 0, 0, 0.6);
   border-radius: 50px;
   border: 2px solid white;
   cursor: pointer;

   span {
       background-color: rgb(249, 249, 249);
       display: inline-block;

       &:first-child{
            height: 2px;
            transform: translate(1px, 0px) rotate(0deg);
            width: 16px;
       }

       &:nth-child(2){
        height: 16px;
        transform: translateX(-8px) rotate(0deg);
        width: 2px;
       }
   }

`;

const GroupWatch = styled.div`
   height: 44px;
   width: 44px;
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   background: white;

   div{
       height: 40px;
       width: 40px;
       background: rgb(0, 0, 0); 
       border-radius: 50%;

   } 

   img{
       width: 100%;
   }
`;

const SubTitle = styled.div`
   color: rgb(249, 249, 249);
   font-size: 1rem;
   min-height: 20px;

   @media (max-width: 768px){
       font-size: 12px;
   }
`;

const Description = styled.div`
   line-height: 1.4;
   padding: 16px 0px;
   color: rgb(249, 249, 249);
   font-size: 1.5rem;
   @media (max-width: 768px){
       font-size: 14px;
   }
`;
export default Detail;