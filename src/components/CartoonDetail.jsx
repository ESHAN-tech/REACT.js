export default function CartoonDetails({cartoon}) {
    return(
    <>
    
    <div style={{display:"flex",gap:"20px",flexWrap:"wrap"}}>
    {
    cartoon.map((items)=>{
        return(
    <div key={items.id} style={{width:"200px", height:"200px"}}>
    <img src={items.image} alt="" style={{width:"60%",height:"60%"}}/>
    <p>Title:{items.title}</p>
    <p>Genre:{items.genre[0]}</p>
    <p>Creator:{items.creator}</p>
    </div>)
    
    })
    
    }  
    </div>
    
    </>
    
    
    )
    }