import React,{useEffect} from "react";
import { getContext } from "./context";
import Events from "../Events/Events";

import event1 from "../../assets/event1.jpeg";


export function Radar() {

  const eventArr = [
    {
      name: "e1",
      date: '11/23/2022',
      imgUrl: event1,
    },
    {
      name: "e2",
      date: '11/25/2022',
      imgUrl: event1,
    },
    {
      name: "e3",
      date: '12/12/2022',
      imgUrl: event1,
    },
    {
      name: "e4",
      date: '12/15/2022',
      imgUrl: event1,
    },
    {
      name : "e5",
      date : '12/25/2022',
      imgUrl: event1
    },
    {
      name : "e6",
      date : '12/11/2022',
      imgUrl: event1
    },
    {
      name : "e7",
      date : '11/11/2022',
      imgUrl: event1
    }
  ];

  for (var i = 0; i < eventArr.length; i++) {

    const event = eventArr[i];

    let currDate = new Date();
    let eventDate = new Date(event.date);
    if( eventDate >= currDate){
      let Difference_In_Time = Math.abs(eventDate - currDate);
      let Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));
      event.diff = Difference_In_Days;

      if(Difference_In_Days <= 6){
        event.className = "circularMapR5";
      }
      else if(Difference_In_Days > 6 && Difference_In_Days <= 12){
        event.className = "circularMapR4";
      }
      else if(Difference_In_Days > 12 && Difference_In_Days <= 18){
        event.className = "circularMapR3";
      }
      else if(Difference_In_Days > 18 && Difference_In_Days <= 24){
        event.className = "circularMapR2";
      }
      else if(Difference_In_Days > 24 && Difference_In_Days <= 31){
        event.className = "circularMapR1";
      }
    }
  }
  
  console.log(eventArr);
  
  const divRef = React.useRef(null);

  useEffect(() => {
    if (divRef.current)
      getContext(divRef.current);
  }, []);

  return (
    <>
      <div ref={divRef} id="radar">
        {eventArr.map((event, key) => {
          return (
            <Events
              class= {event.className}
              imgUrl={event.imgUrl}
              position={event.position}
              key={key}
            />
          )})}
      </div>
    </>
  );

}

