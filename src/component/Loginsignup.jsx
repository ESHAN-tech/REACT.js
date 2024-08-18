import { useState } from 'react';
import './LoginSignup.css'

const Loginsignup =() =>
{
    // need two function 1st which fetch all data and second
    let [ login , setLogin]=useState({userId:"", password:""})
   
    const fetchData=(e)=>{
        console.log(e.target.name);
        console.log(e.target.value);
// this below line prevent from multiple if condition 
        setLogin({...login, [e.target.name]:e.target.value});
        console.log("object of login = ", login);

      }

      // performing destructure 

      const handleForm=(e)=>{
        e.preventDefault();// means stop the default behaviour of button

        let {userId , password}=login
      console.log(`submit data by user is ${userId} and ${password}`);
  // use state ko khali kerna 
        setLogin({userId:"" ,password:""})

      }
      

    return(

        <div className='container'>
            <form onSubmit={handleForm}>
            <div className='header'>
                <div className='text'>Log-in</div>

                <div className='underline'></div>

            </div>
            <div className='inputs'>
                {/* <div className='input'>
                    
                    <input type="text"  placeholder='Name'/>
                </div> */}

                <div className='input'>
                    
                    <input type="email" placeholder='Id'  
                    onChange={fetchData} value={login.userId} name="userId"/>
                </div>

                <div className='input'>
                    
                    <input type="password" placeholder='password' 
                    onChange={fetchData} value={login.password} name='password' />
                </div>"

            </div>
            <div className='forget-password'> forget password? <span> click here </span></div>
            <div className='submit-container'>
                {/* <div className='submit'> SIGNUP</div> */}
                <div className='submit'> <button>LOGIN</button></div>
                
            </div>
            </form>
            

        </div>
    )
}

export default Loginsignup;