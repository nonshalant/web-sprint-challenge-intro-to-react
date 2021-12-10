
import React from 'react';
import styled from 'styled-components';

const StyledHeight = styled.div`
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
    opacity: 0;
    transition: .3s;
}
`
const Height = (props) =>{
    const {data} = props;

    return (
        <StyledHeight>
            {
            data.map((char, index) =>{
            return `Height ${index + 1}: ${char.height}. `
        })
        }
        </StyledHeight>

    
    )
}

export default Height;