import styled from 'styled-components';
import logo from "../assets/logo.svg"
import homeIcon from "../assets/home-icon.svg"
import search from "../assets/search-icon.svg"
import watchlist from "../assets/watchlist-icon.svg"
import original from "../assets/original-icon.svg"
import movie from "../assets/movie-icon.svg"
import series from "../assets/series-icon.svg"
import { Link } from 'react-router-dom'

import { authentication } from '../Firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

 const Header =(props)=>{

    const authHandler =()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
          .then((result) => {
           console.log(result);
         
          }).catch((error) => {
           alert(error.message)
           
          });
    }

    return(
       <Nav>
           <Logo>
               <img src ={logo} alt="Disney+"/>
           </Logo>
           <NavMenu>
               
               <Link to='/home'>
                   <img src={homeIcon} alt=''/>
                   <span>HOME</span>
               </Link>

               <Link to='/search'>
                   <img src={search} alt=''/>
                   <span>SEARCH</span>
               </Link>

               <Link to='/watchlist'>
                   <img src={watchlist} alt=''/>
                   <span>WATCHLIST</span>
               </Link>


               <Link to='/original'>
                   <img src={original} alt=''/>
                   <span>ORIGINALS</span>
               </Link>


               <Link to='/movie'>
                   <img src={movie} alt=''/>
                   <span>MOVIES</span>
               </Link>
               
               <Link to='/series'>
                   <img src={series} alt=''/>
                   <span>SERIES</span>
               </Link>
           </NavMenu>
           <Login onClick={authHandler}>LOGIN</Login>
           
        </Nav>
    )
}

const Nav = styled.nav` 
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 2rem;
    z-index: 3;
`;

const Logo = styled.a`
    padding: 0;
    width: 88px;
    margin-top: 4px;
    max-height: 70px;
    display: inline-block;
    font-size: 0;

    img{
        display: block;
        width: 100%;
    }
    
`;

 const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    @media screen and (max-width: 768px){
         display: none;
    }

  a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        
        

        img{
            height: 20px; 
            min-width: 20px;
            width: 20px;
            z-index: auto;
           
        }

        span{
            color: rgb(249, 249, 249);
            font-size: 14px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative; 

            &:before {
                background-color: rgb(249, 249, 249);
                border-radius: 0px 0px 4px 4px ;
                bottom: -6px;
                content: '';
                opacity: 0;
                position: absolute;
                left: 0px;
                right: 0px;
                height: 3px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.40, 0.45, 0.94);
                visibility: hidden;
                width: auto;
            }
        }
        
       

        &:hover{
            span:before{
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;  
            }
        }
    }

 `;

 const Login = styled.button`
    background-color: rgba(0, 0, 0, 0.6);
    text-transform: uppercase;
    padding: 8px 16px;
    color: #F9F9F9;
    letter-spacing: 1.5px;
    border: 1px solid #F9F9F9;
    border-radius: 4px; 
    transistion: all .2s ease 0s;

    &:hover{
       background-color: #F9F9F9;
       color: #000000;
    }
 `;



export default Header;