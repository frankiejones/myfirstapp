import React from 'react';


const Student =(props) => {
    return (
      <div> 
        <p>Hello my pet's name is {props.names} and I am {props.ages}.</p>
      </div>
    )
  };

  export default Student;