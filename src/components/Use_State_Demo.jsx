import {useState} from "react"

const Use_State_Demo=()=>{

//[initial value  ,function]

let [ count , setCount ]= useState(0)//0 is initialized to count and setCount is updator function to modify the value of state (variable) of component
const changeCount=()=>{
    // let c=count++
    // console.log("After changing value is",c);
    setCount(count+1)
}

return (
<>

<h1>We are learning Use State React Hook</h1>
<h2>Value of count is {count}</h2>
<button onClick={changeCount}>Increase count</button>

</>
)
}

export default Use_State_Demo