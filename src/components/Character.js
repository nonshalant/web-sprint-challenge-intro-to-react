// Write your Character component here
import react from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
color: red;
font-weight: bold;
font-size: 2rem;
background-color: black;
height: 100%;
width: 90%;
margin: auto;
border-radius: 10%;
border: 1px solid red;

&:hover{
    display:none;
}
`

const Character = (props) =>{
    const {data} = props;
    
    return (
    <StyledCharacter>
      {data.map( char => {
          return char.name
      })}
    </StyledCharacter>
    )
}

export default Character;