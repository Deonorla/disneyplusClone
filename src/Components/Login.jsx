 import styled from 'styled-components';
import img from '../assets/login-background.jpg';
import img2 from "../assets/cta-logo-one.svg";
const Login = (props)=>{
    return(

       <Container>
           <Content>
               <CTA>
                   <CtaLogo src={img2}/>
               </CTA>
               <BgImage src={img} alt=''/>
           </Content>
       </Container>
    )
}

const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;

const Content = styled.div`
 margin-bottom: 10vw;
 width: 100%;
 position: relative;
 min-height: 100vh; 
 box-sizing: border-box;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 padding: 80px 40px;
 height: 100%;
`;

const BgImage = styled.img`
z-index: -1;
position: absolute;
top: 0;
right: 0;
left: 0;
height: auto;
width: auto;

`;

const CTA = styled.div`
 display: flex;
 max-width: 650px;
 flex-direction: column;
 margin-top: 0;
 justify-content: center;
 align-items: center;
 margin-left: auto;
 margin-right: auto;
 transistion-timing-function: ease-out;
 transistion: opacity .2s;
 width: 100%;
`;

const CtaLogo =styled.img`
max-width: 70vw;
display: block;
margin-bottom: 12px;
`;

export default Login;