import styled from 'styled-components';
import img from '../assets/login-background.jpg';
import img1 from "../assets/cta-logo-one.svg";
import img2 from "../assets/cta-logo-two.png"
const Login = (props)=>{
    return(

       <Container>
           <Content>
               <CTA>
                   <CtaLogo src={img1}/>
                   <SignUp>GET IT ALL HERE</SignUp>
                   <Description>
                       Get Premier Access to Raya and the Last Dragon 
                       with Disney+ new subscription. As of 03/04/22, Disney+ 
                       subscription and Bundle will increase by 1$. 
                   </Description>
                   <CtaLogo2 src={img2}/>
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
width: 100%;
display: block;
margin-bottom: 12px;
`;

const SignUp = styled.button`
    outline: none;
    border:1px solid transparent;
    background-color: #0063e5; 
    padding: 1rem 0;
    width: 100%;
    font-weight: bolder;
    font-size: 1rem;
    margin-bottom: 1rem;
    color: #F9F9F9;
    letter-spacing: 1.5px; 
    border-radius: 4px;

    &:hover {
        background-color: #0483ee;
      
    }

`;

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`; 

const CtaLogo2 = styled.img` 
    max-width: 600px;
    margin-bottom: 28px;
    display: inline-block; 
    vertical-align: bottom;
    width:100%;
`;
export default Login;