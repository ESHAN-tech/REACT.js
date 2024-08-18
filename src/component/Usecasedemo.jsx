import { useState } from "react";
const Usecasedemo = () => {
    let [count , setCount]=useState(0);
    // make a function 
    const changecolor=()=>{
        setCount(count+1)
    }
    return (
        <>
        
        <h1>{count}</h1>
        <button onClick={changecolor}> CLICK ME </button>
        </>
    );
};

export default Usecasedemo;