import {useState , useEffect} from 'react'
import axios from 'axios';
function Dogfetch() {
    const URL="https://dog.ceo/api/breeds/image/random"

    let [dog ,setDog]=useState()

    useEffect(()=>{
        const fetchDog=async()=>{
            try{
                const response=await axios.get(URL)
                console.log(response);
                setDog(response.data.message)

            }
            catch(err){
                console.log(err);

            }
        }
        fetchDog()
    },[dog])
    return (
        <>
        <h1>fetch dog data</h1>
        <img src={dog} alt="" />
        
            
        </>
    );
}

export default Dogfetch;