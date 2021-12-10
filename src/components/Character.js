// Write your Character component here

import react from "react";

const Character = (props) =>{
    const {data} = props;
    
    return (
        data.map((char, index)=>{
            console.log(char)
        })
        
    )
}

export default Character;