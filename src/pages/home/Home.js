import React from "react";
import logo from '../../logo.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import whatsAppIcon from './assets/whatsapp.svg'
import instagramIcon from './assets/instagram.svg'

export default function Home() {
  return (
    <StyledPage>
      
      <div className="home-header-container">
        <img className="home-logo" src={logo} alt="CUSAT Events Radar Logo"/>
        <div>
          <h1 className="home-welcome">Welcome to</h1>
          <h1 className="home-header">CUSAT</h1>
          <h1 className="home-header">EVENTS</h1>
          <h1 className="home-header">RADAR</h1>
        </div>

      </div>
      <p className="home-sub-header">Events and opportunities in and out of CUSAT updated daily.</p>
      <div className="home-buttons-container">
        <button
          onClick={()=>{window.location.href = 'https://www.instagram.com/cusat_events_radar'}}
        ><img src={instagramIcon} alt=""/> Browse Events on Instagram</button>
        <Link to="/code-of-conduct">
          <button><img src={whatsAppIcon} alt=""/> Join WhatsApp Group</button>
        </Link>
      </div>      
    </StyledPage>
  
  );
}

let StyledPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  color: white;
  /* padding-top: 50px; */
  
  background: linear-gradient(218deg, #000000, #39b54a, #000000, #1d902d, #000000);
  background-size: 800% 800%;
  animation: bg-animation 20s ease-in-out infinite;
  @media only screen and (max-width: 650px) {
    .home-buttons-container{
      flex-direction: column;
    }
    .home-header{
      font-size: 35px!important;
      line-height: 40px!important;
    }
    .home-welcome{
      font-size: 20px!important;
      line-height: 25px!important;
    }
    .home-logo{
      width: 150px!important;
    }
    
  }

  @media only screen and (max-width: 500px){
    .home-sub-header{
      font-size: 15px!important;
    }
    .home-buttons-container button{
      font-size: 15px;
    }
    .home-welcome{
      margin-left: 20px!important;
    }
    .home-header{
      margin-left: 20px!important;
    }
  }
  @media only screen and (max-width: 350px){
    .home-header{
      font-size: 25px!important;
      line-height: 30px!important;
    }
    .home-welcome{
      font-size: 15px!important;
      line-height: 20px!important;
    }
    .home-logo{
      width: 120px!important;
    }
  }

  @keyframes bg-animation {
    0%{background-position:0% 48%}
    50%{background-position:100% 53%}
    100%{background-position:0% 48%}
  }
  .home-header-container{
    display: flex;
    align-items: center;
  }
  .home-logo{
    width: 250px;
    box-shadow: 0 10px 100px black;
    border-radius: 50%;
    transition: all 0.5s ease-in-out;
    :hover{
      box-shadow: 0 0px 100px rgba(0, 255, 0, 0.535);
      transform: scale(0.9);
    }
  }
  .home-welcome{
    margin: 0;
    padding: 0;
    margin-left: 50px;
    font-weight: 500;
    font-size: 30;
  }
  .home-header{
    margin: 0;
    padding: 0;
    margin-left: 50px;
    font-weight: bold;
    font-size: 60px;
    line-height: 60px;
    text-shadow: 0 5px 20px rgba(0, 0, 0, 0.446);

  }
  .home-sub-header{
    font-size: 20px;
    min-width: 50%;
    max-width: 80%;
    text-align: center;
    margin-top: 50px;
  }
  button{
    display: flex;
    align-items: center;
    border: none;
    padding: 5px 20px;
    border-radius: 80px;
    font-weight: 600;
    font-size: 18px;
    background-color: white;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.207);
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    margin: 10px;
    transition: all 0.5s ease-in-out;
    box-sizing: border-box;
    border: 1.5px solid rgba(57, 181, 74, 0); 
    text-decoration: none;
    outline: none;
    img{
      width: 20px;
      margin-right: 10px;
    }
    :hover{
      background-color: black;
      color: white;
      box-shadow: 0 0px 100px rgba(0, 255, 0, 0.535);
      border: 1.5px solid #39b54a; 

    }
  }
  .home-buttons-container{
    display: flex;
    align-items: center;
  }
`




