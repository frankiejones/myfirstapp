import React from 'react';

const Pets =(props) => {
    return (
      <div> 
        <p>Hello my pet's name is {props.name}.</p>
        <p>My pet is a {props.species}.</p>
        <p>My pet has {props.legs} legs.</p>
        <p>Thier fave food is {props.food}.</p>
      </div>
    )
  }

  export default Pets;