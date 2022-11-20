import React from "react";
import logo from '../../logo.svg'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import whatsAppIcon from './assets/whatsapp.svg'
import instagramIcon from './assets/instagram.svg'
import Tilt from 'react-parallax-tilt';
import {isMobile} from 'react-device-detect';
import {Radar} from "../../components/radar/Radar";

export default function Home() {

    return (
        <StyledPage>
            <Tilt
                className="home-parallax-tilt"
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.40}
                scale={isMobile ? 1.0 : 0.9}
                gyroscope={true}
                tiltAngleXInitial={isMobile ? -90 : 0}
                tiltAngleYInitial={0}
                tiltMaxAngleX={isMobile ? 0 : 10}
                tiltMaxAngleY={10}
                glarePosition="all"
            >
                <div className="home-header-container">
                    <Radar/>


                </div>
                <p className="home-sub-header">Events and opportunities in and out of CUSAT updated daily.</p>
                <div className="home-buttons-container">
                    <button
                        className="home-buttons magic-hover magic-hover__square"
                        onClick={() => {
                            window.location.href = 'https://www.instagram.com/cusat_events_radar'
                        }}
                    >
                        <img src={instagramIcon} alt=""/>
                        Browse Events on Instagram
                    </button>
                    <Link className="home-buttons magic-hover magic-hover__square" to="/code-of-conduct">

                        <img src={whatsAppIcon} alt=""/>
                        Join WhatsApp Group

                    </Link>
                </div>
                {isMobile &&
                    <div className="comeback-indesktop">
                        <p>Come back in desktop browser for best experience of the website :)</p>
                    </div>
                }
            </Tilt>
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
  box-sizing: border-box;
  color: white;
  background: linear-gradient(218deg, #000000, #39b54a, #000000, #1d902d, #000000);
  background-size: 800% 800%;
  animation: bg-animation 20s ease-in-out infinite;
  overflow: hidden;
  transform-style: preserve-3d;
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
  .home-parallax-tilt{
    padding: 50px 25px 35px 25px;
    box-sizing: border-box;
    transform-style: preserve-3d;
    transform: translateZ(-100px);
  }
  .home-header-container{
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
  }
  .home-logo{
    width: 250px;
    box-shadow: 0 10px 100px black;
    border-radius: 50%;
    transition: all 0.5s ease-in-out;
    transform: translateZ(50px);
    transform-style: preserve-3d;
    :hover{
      box-shadow: 0 0px 100px rgba(0, 255, 0, 0.535);
      transform: translateZ(20px);
    }
  }
  .home-welcome{
    margin: 0;
    padding: 0;
    margin-left: 50px;
    font-weight: 500;
    font-size: 30;
    transform: translateZ(50px);
    transform-style: preserve-3d;
  }
  .home-header{
    margin: 0;
    padding: 0;
    margin-left: 50px;
    font-weight: bold;
    font-size: 60px;
    line-height: 60px;
    text-shadow: 0 5px 20px rgba(0, 0, 0, 0.446);
    transform: translateZ(50px);
    transform-style: preserve-3d;
  }
  .home-sub-header{
    font-size: 20px;
    min-width: 50%;
    max-width: 80%;
    text-align: center;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    transform: translateZ(10px);
    transform-style: preserve-3d;
    /* white-space: nowrap;   */
  }
  .LinkElement{
    transform-style: preserve-3d;
  }
  .home-buttons{
    display: flex;
    align-items: center;
    border: none;
    padding: 5px 20px;
    border-radius: 80px;
    color: black;
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
    transform: translateZ(30px);
    transform-style: preserve-3d;
    img{
      width: 20px;
      margin-right: 10px;
    }
    :hover{
      background-color: black;
      color: white;
      box-shadow: 0 0px 100px rgba(0, 255, 0, 0.535);
      border: 1.5px solid #39b54a;
      transform: translateZ(80px) translateY(-10px);
      transform-style: preserve-3d;

      img{
        filter: invert(1);
      }


    }
  }
  .home-buttons-container{
    display: flex;
    align-items: center;
    transform-style: preserve-3d;
  }
  .comeback-indesktop{
    margin-top: 30px;
    p{
      font-size: 10px;
      text-align: center;
    }

  }
`




