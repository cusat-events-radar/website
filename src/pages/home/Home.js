import React from "react";
import logo from '../../logo.svg'
import styled from 'styled-components'


export default function Home() {
  return (
    <StyledPage>
      
      <div className="home-header-container">
        <img class="home-logo" src={logo} alt="CUSAT Events Radar Logo"/>
        <div>
          <h1 className="home-welcome">Welcome to</h1>
          <h1 className="home-header">CUSAT</h1>
          <h1 className="home-header">EVENTS</h1>
          <h1 className="home-header">RADAR</h1>
        </div>

      </div>
      <p className="home-sub-header">Events and opportunities in and out of CUSAT updated daily.</p>
      <div>
        <button>Browse Events on Instagram</button>
        <button>Join WhatsApp Group</button>
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
    font-weight: 500;
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
    :hover{
      background-color: black;
      color: white;
      box-shadow: 0 0px 100px rgba(0, 255, 0, 0.535);
      border: 1.5px solid #39b54a; 

    }
  }
`




