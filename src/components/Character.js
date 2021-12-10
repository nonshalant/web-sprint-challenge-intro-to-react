// Write your Character component here
import styled from "styled-components";
import react from "react";



const Character = (props) =>{
    const {data} = props;
    
    return (
    <div>
      {data.map( char => {
          return char.name
      })}
    </div>
    )
}

export default Character;