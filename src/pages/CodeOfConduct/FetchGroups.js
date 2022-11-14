import React , {useEffect, useState} from 'react';
import styled from 'styled-components';
import logo from '../../logo.svg'


let CodeOfConduct = () => {
    let groups = [
        {
            groupName: 'CUSAT EVENTS RADAR ',
            groupLink: 'https://chat.whatsapp.com/Fnf95LBztDWJ84nJSTgPHJ'
        },
    ];

    let generateRandomIndex = (mn, mx) => {  
        return (Math.floor(Math.random() * (mx - mn) + mn));  
    } 

    let selectGroups = () =>{
        let localStorageRaw= localStorage.getItem('cusat-events-radar-data');
        let localStorageData= JSON.parse(localStorageRaw) 
        setIsGroupAlreadyAssigned(false)
        if(localStorageRaw!==null && localStorageData.isAlreadyAssigned===true){
            setIsGroupAlreadyAssigned(true)
            setSelectedGroup(localStorageData)
            console.log(localStorageData);
        }else{
            setIsGroupAlreadyAssigned(false)
            let maxIndex = groups.length
            let randomIndex = generateRandomIndex(0,maxIndex)
            let dataToStore = {...groups[randomIndex], isAlreadyAssigned: true}
            setSelectedGroup(groups[randomIndex])
            localStorage.setItem('cusat-events-radar-data', JSON.stringify(dataToStore));
        }
    }

    let [selectedGroup,setSelectedGroup] = useState(null)
    let [isGroupAlreadyAssigned,setIsGroupAlreadyAssigned] = useState(false)
    useEffect(()=>{
        setTimeout(() => {
            selectGroups();
            clearTimeout();        
        }, 2000);
    },[])

   let joinNowButtonOnClick = () =>{
       window.location.href = selectedGroup.groupLink
   }

    return (<>
        {
            selectedGroup && 
                <StyledGroupLoader>
                        <div className="post-fetch">
                            {
                                isGroupAlreadyAssigned &&
                                <p><strong>Welcome Back!</strong> We already had assigned a group for you:</p>
                            }
                            {
                                !isGroupAlreadyAssigned &&
                                <p>Cool! We have assigned a group for you:</p>
                            }
                            <p className="cer-group-name"><strong>{selectedGroup.groupName}</strong></p>
                            <button
                                onClick={joinNowButtonOnClick}
                            >Join Now!</button>
                            <p>Have fun with all the events and opportunities!</p> 
                            <p className="cant-join-text">
                                <strong>Can't Join? Facing issues? Let us know:</strong><br/>
                                Naseem Shah: <a href="tel:+919544842728">9544842728</a>,<br/>
                                Kiran P.K: <a href="tel:+917559014936">7559014936</a>,<br/>
                                Fazil Haneefa: <a href="tel:+917559090892">7559090892</a><br/>
                                <strong><em><a href="mailto:cusateventsradar@gmail.com">cusateventsradar@gmail.com</a></em></strong>
                            </p>
                        </div>
                </StyledGroupLoader>
        }
        {
            !selectedGroup &&
                <StyledGroupLoader>
                        <div className="loading-group-spinner-container">
                            <img className="spinner-logo" src={logo} alt="CUSAT Events Radar Logo"/>
                            <p>Fetching a group link for you...</p>
                        </div>
                </StyledGroupLoader>
        }
    </>
    );
}


export default CodeOfConduct;


let StyledGroupLoader = styled.div`
background-color: white;
border: 2px solid black;
border-radius: 10px;
padding: 20px;
color: black;
width: 80vw;
height: fit-content;
max-height: 70vh;
max-width: 500px;
min-width: 200px;
position: relative;
overflow: hidden;
overflow-y: auto;
.cer-group-name{
    padding: 10px;
    background-color: rgba(128, 128, 128, 0.42);
    width: fit-content;
    margin: auto;
    border-radius: 10px;
}
.cant-join-text{
    font-size: 12px;
}
.loading-group-spinner-container{
    display: flex;
    justify-content: center;
    p{
        margin-left: 10px;
        font-weight: 500;
        font-size: 15px;
        white-space: nowrap;
    }
}

.spinner-logo{
    width: 50px;
}
.post-fetch{
    p{
        text-align: center;
        color: balck;
    }
    a{
        color: black;
    }
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.493);
        padding: 15px;
        border: none;
        border-radius: 10px;
        background: linear-gradient(90deg, #009c4c, #004b24, #009c4c);
        background-position: 0%;
        background-size: 200%;
        color: white;
        font-weight: 900;
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        transition: all 0.5s ease;
        outline: none;
        margin: 40px auto;
        :hover{
            background-position: 200%;
            box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.493);

        }

    }
}

`
