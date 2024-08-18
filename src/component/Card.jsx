function Card( {imgName}){
    

    let box = {
        width:"400px",
        height:"400px",
        border :"8px solid white",
        borderRadius:"4px",
        marginBottom:"50px",
       
        img:{
            width:"100%",
            height:"100%",
        }

    }
    
    return(
        <>
        
        <div style ={box}>
            <img src={imgName} alt=""  style={box.img}/>
            {/* <p>Namr:{Name}</p>
            <p>RollNumber:{Rollno}</p> */}
        </div>
        </>
    )

}
export default Card
