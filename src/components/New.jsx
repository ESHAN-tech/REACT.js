import axios from 'axios'
import { useState , useEffect } from 'react'
function New() {

        const API_KEY="6bc6c15c05c0450e97a2b23c207ecc43";
        const URL=`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

        let [news ,setNews]=useState([])
        let [loading , setLoading]=useState(true)
        useEffect( ()=>{
            const fetchNews=async()=>{
                try{
                    const response = await axios.get (URL)
                    console.log(response.data);
                    setNews(response.data.articles)
                    
                    setLoading(false)
                }
                catch(err){
                        console.log(err);
                }
            }
            fetchNews()
        }, [])

    return (


        <>

        <h1>MY NEWS API</h1>
        {/* JSX EXPRESEIONto acces the arr we need to use map */}

        {loading ?  <p>Loading...</p> :
        
                news.map((items)=>{



                    return(
                        <p key={items.author}>
                            {items.author} 
                        </p>

                    )
                })
                   
                
            }
        </>
    );
}

export default New;