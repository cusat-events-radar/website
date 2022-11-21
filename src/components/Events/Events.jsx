import React from 'react';

const Events = (props) => {

  const positions = ["top", "left", "right", "bottom", "top-left", "top-right", "bottom-right", "bottom-left"]

  const getPositon = () => {
      var x = Math.floor(Math.random() * positions.length);
      return positions[x];
  }
  

  if (props.class) {
    return (
      <div className={props.class}>
        <img src={props.imgUrl} className={`circleImg blink-image ${getPositon()}`}></img>
      </div>
    )
  }
  else {
    return (
      <div></div>
    )
  }
}

export default Events