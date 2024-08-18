import { useState } from "react";
const Color = ()=>{

    let[color , setColor ]=useState("green")

    function changeColor(clr){
        setColor(clr)
    }

    let div={
        width:"300px",
        height:"300px",
        backgroundColor:color,
        marginLeft:"100px",
        marginTop:"70px",
        border:"5px solid black",
        borderRadius:"100%"
    }

    .hero={
        color:"purple",
        backgroundColor:"yellow"
    }

  


    return(

        <>
        <div  style={div}></div>
        {/* <button onClick={changeColor("green")}></button>
        <button onClick={changeColor("blue")}></button> */}

        <button  onClick={()=>changeColor("red")}>Red</button>
        <button onClick={()=>changeColor("blue")}>Blue</button>
        
        </>
    )

}
export default Color;