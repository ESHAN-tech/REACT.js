import { useState } from "react"

const Use_State=()=>
{
    //[initial value , function]
    let [username , setUsername] =useState("rishabh");
    //making function , it's an call back function
   return <>
   <div>display count</div>
   <input onChange={(e)=>setUsername(e.target.value)}></input>
   {username}
   
   </>

}

export default Use_State