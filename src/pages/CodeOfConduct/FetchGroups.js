import React , {useEffect, useState} from 'react';
import styled from 'styled-components';
import logo from '../../logo.svg'


let CodeOfConduct = () => {
    let groups = [
        {
            groupName: 'Cusat Events Radar #️⃣3️⃣',
            groupLink: 'https://chat.whatsapp.com/EcOOIPqmyqTBgNC37zduM6'
        },
        {
            groupName: 'Cusat Events Radar #️⃣4️⃣',
            groupLink: 'https://chat.whatsapp.com/G3pVSXuxX23GkXkYbntFXu'
        },
        {
            groupName: 'Cusat Events Radar #️⃣5️⃣',
            groupLink: 'https://chat.whatsapp.com/HlODCw0YAfLBvohHnfqZnE'
        },
    ];

    let generateRandomIndex = (mn, mx) => {  
        return (Math.floor(Math.random() * (mx - mn) + mn));  
    } 

    let selectGroups = () =>{
        let maxIndex = groups.length
        let randomIndex = generateRandomIndex(0,maxIndex)
        setSelectedGroup(groups[randomIndex])
    }

    let [selectedGroup,setSelectedGroup] = useState(null)
    useEffect(()=>{
        setTimeout(() => {
            selectGroups();
            clearTimeout();        
        }, 2000);
    },[])

   

    return (<>
        {
            selectedGroup && 
                <StyledGroupLoader>
                        <div className="post-fetch">
                            <p>Cool! We have assigned a group for you:</p>
                            <p><strong>{selectedGroup.groupName}</strong></p>
                            <button
                                onClick={()=>{window.location.href = selectedGroup.groupLink}}
                            >Join Now!</button>
                            <p>Have fun with all the events and opportunities!</p> 
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