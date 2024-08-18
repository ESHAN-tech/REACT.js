import { useState } from "react";

export default function Contactus(){
//using css for div._._.


let[userName , setUserName] = useState("")
let[userEmail , setUserEmail] = useState("")
let[UserPhone, setUserPhone] = useState("")
let[UserQuery, setUserQuery] = useState("")

const handle_userName=(e)=>{
   console.log(e.target.name);
   //console.log(e.target.value);
   setUserName(e.target.value);// assignig value to userName state
}

const handle_userEmail=(e)=>{
  console.log(e.target.name);
  console.log(e.target.value);
  setUserEmail(e.target.value);// assignig value to userName state
}

const handle_UserPhone=(e)=>{
  console.log(e.target.name);
  console.log(e.target.value);
  setUserPhone(e.target.value)//assigning value to username state 
  }

  const handle_UserQuery=(e)=>{
    console.log(e.target.name);
    console.log(e.target.value);
    setUserQuery(e.target.value)//assigning value to username state 
    }

const handleSubmit=(e)=>{
e.preventDefault() // Prevent default form submission
console.log("user data for submission" ,userName+userEmail);
alert("User Name: " + userName + "\nUser Email: " + userEmail);
}

const formContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "400px",
  
  // flexDirection: "column"
};

const formStyle = {
  width: "500px",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)"
};

return(

<>
<h1 style={{color:"blue" ,textAlign:"center"  , fontSize:"50px" ,textDecoration:"underline" , fontFamily:"fantasy"}}>Contact Us</h1>
      <div style={formContainerStyle}>
        <form onSubmit={handleSubmit} style={formStyle}>
            <div>
            <label htmlFor="name">Name:</label>
            <input
             type="text" name="userName"  placeholder="Enter your name" className="form-control" onChange={handle_userName} value={userName}
            />
            </div>

            <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name ="userEmail" placeholder="Enter your email" className="form-control" onChange={handle_userEmail} value={userEmail}/>
            </div>

            <div>
            <label htmlFor="phone">Phone:</label>
            <input type="tel" name="userPhone" placeholder="Enter your phone number" className="form-control" onChange={handle_UserPhone} value={UserPhone}/>
            </div>

            <div>
            <label htmlFor="query">Query:</label>
            <textarea  rows="4" name="UserQuery" placeholder="Enter your query" className="form-control" onChange={handle_UserQuery} value={UserQuery}></textarea>
            </div>
        

            <button type="submit" style={{color:"blue"}}>Submit</button>
                
            </form>
          </div>
    

</>


)


}