import { useState } from "react"
import axios from "axios"
import ShowQuotes from "./ShowQuotes"
export default function Quotes()
{
    let [quotes,setQuotes]=useState([])//HERE setQuotes IS THE UPDATER FUNCTION WHICH UPDATES THE "quotes" NAMED ARRAY
const URL ="https://dummyjson.com/quotes"
const fetchQuotes=async()=>{

    try {

        const response = await axios.get(URL)
        setQuotes(response.data.quotes)
        console.log(response.data.quotes)

    }catch(e){
        console.log(e)
    }

}
    return(
        <>
        <h1>Famous Quotes:</h1>
        <div style ={{display:"flex",flexDirection:"column"}}>
         

            <ShowQuotes quotesArray={quotes}/>
        </div>
        <button onClick={fetchQuotes}>ShowQuotes</button>
        </>
    )
}