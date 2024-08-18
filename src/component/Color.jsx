import { useState } from "react";

function Mycolor() {

    let [color , setColor]=useState("red")
    // make a function over here
    const changecolor=(clr)=>{
        setColor(clr)
    }

    // writing the css of the div 
    let container = {
        width:"200px",
        height:"200px",
        border:"1 px solid black",
        borderRadius:"20%",
        backgroundColor:color
    }
    return (
        <>
            <div style ={container}>
              
            </div>
            
        <button onClick={()=>{
            changecolor('green')
        }}>Green</button>

        <br/><br/>

        <button onClick={()=>{
            setColor('yellow')
        }}>Yellow</button>
        
        </>
    );
}

export default Mycolor;