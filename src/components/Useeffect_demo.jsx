import React from 'react'
import{useState , useEffect} from "react";
import axios from 'axios'
import CartoonDetail from './CartoonDetail';

function Useeffect_demo() {

    const URL="https://api.sampleapis.com/cartoons/cartoons2D"
    let [cartoon , setcartoon]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await axios.get(URL)
                console.log(response.data);
                setcartoon(response.data);
            }
            catch(err){
                console.log(err);

            }
        }
        //function fetch close...
        fetchData()

},[])
    return (
        <>
            <h1>use effect demo</h1>
{/* cartoon naam ka prop cartoon naam ka aray */}
        <CartoonDetail cartoon={cartoon}/>


            {
            /*
            THIS ALL CODE IS DONE IN SEPRATE COMPONENT IN CARTOON DETAIL
            { 
                cartoon.map((item)=>{
                    return(
                        <div >

                        <li key={item.id}>{item.title}||{item.genre}</li>
                        <img src={item.image} alt="hello ji"  style={{width:"200px" , height:"200px"}}/>

                        </div>
                    )
                })
            }
        </div> */
        }
        
        </>
    ); 
}

export default Useeffect_demo;