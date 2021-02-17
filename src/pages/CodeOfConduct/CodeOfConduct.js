import React , {useState} from 'react';
import styled from 'styled-components';
import FetchGroups from './FetchGroups'

let CodeOfConduct = () => {
        let [isAccepted,setIsAccepted] = useState(false)
        return (
            <StyledPage >
               
                        {   !isAccepted &&
                            <div>
                                <h1>Code of Conduct</h1>
                                <StyledCodeofConduct>
                                    <div className="coc-content">
                                        <ul>
                                            <li>
                                                <strong>Relevant Posts Only:</strong>
                                                <br/>
                                                Everyone must write posts only those are relevant to the group subject.
                                            </li>
                                            <li>
                                                <strong>English Please:</strong>
                                                <br/>
                                                Please post messages in English only so that every member can understand.
                                            </li>
                                            <li>
                                                <strong>Irrelevant Content:</strong>
                                                <ul>
                                                    <li>Do not post anything outside the topic.</li>
                                                    <li>Do not spam or post any irrelevant messages in the group.</li>
                                                    <li>Please avoid chit chat and casual / small talk. All of us are members of other groups where we get them.</li>
                                                    <li>Unrelated content will not be tolerated at all.</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>No stalking of any member:</strong>
                                                <br/>
                                                Members are requested to refrain from bothering group members personally.
                                            </li>
                                            <li>
                                                <strong>Do not Change Group Name & Icon:</strong>
                                                <br/>
                                                Members are prohibited from changing group name and group icon. Only admins will do it as and when necessary.
                                            </li>
                                            <li>
                                                <strong>Excessive self-promotion:</strong>
                                                <br/>
                                                You can use the platform to showcase some nice work you have done. However, it should be related information and excessive self-promotion will not be entertained.
                                            </li>                            
                                            <li>
                                                <strong>No group invite links:</strong>
                                                <br/>
                                                Members are prohibited from sharing external group invite links in the group. Only admins will do it as and when necessary.
                                            </li>
                                            <li>
                                                <strong>No Multiple Entries:</strong>
                                                <br/>
                                                Request members to be in only one of our related groups only. Members in more than one group will be removed. This is necessary so as to accommodate new members.
                                            </li>
                                            <li>
                                            <strong>Quality not Quantity:</strong>
                                            <br/>
                                            In larger interest, members are expected to refrain from sending messages without any defined intent of conversation
                                        </li>
                                        </ul>
                                    </div>
                                    <div 
                                        className="accept-bottom-bar"
                                        onClick={()=>{setIsAccepted(true)}}    
                                    >
                                        OK! LET ME IN!!
                                    </div>
                                </StyledCodeofConduct>
                            </div>
                        }


                    {   isAccepted && <FetchGroups />
                           
                    }
               
            </StyledPage>
        );
    
}


export default CodeOfConduct;



let StyledCodeofConduct = styled.div`
    background-color: white;
    border: 2px solid black;
    border-radius: 10px;
    padding: 10px;
    color: black;
    width: 80vw;
    height: 70vh;
    max-width: 500px;
    min-width: 200px;
    position: relative;
    overflow: hidden;
    .accept-bottom-bar{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 10%;
        background-color: white;
        font-family: 'Poppins', sans-serif;
        box-shadow: 0 -10px 50px rgba(0, 0, 0, 0.493);
        /* padding: 20px; */
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 0px;
        padding: 20px;
        background: linear-gradient(90deg, #009c4c, #004b24, #009c4c);
        background-position: 0%;
        background-size: 200%;
        color: white;
        font-weight: bold;
        transition: all 0.5s ease;
        cursor: pointer;
        :hover{
            background-position: 200%;
            height: 15%;
            font-size: 35px;

        }
        
    }
    .coc-content{
        width: 100%;
        height: 93%!important;
        overflow-y: auto;
        ul> li{
            margin: 10px 0px;
        }
       
    }
`

let StyledPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: white;
  box-sizing: border-box;
  /* padding-top: 50px; */
  
  background: linear-gradient(218deg, #000000, #39b54a, #000000, #1d902d, #000000);
  background-size: 800% 800%;
  animation: bg-animation 20s ease-in-out infinite;

  @keyframes bg-animation {
    0%{background-position:0% 48%}
    50%{background-position:100% 53%}
    100%{background-position:0% 48%}
  }
  h1{
      font-size: 25px;
      text-align: center;
  }
`

