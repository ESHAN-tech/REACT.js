import pic1 from "../assets/teach1.jpg";
import pic2 from "../assets/teach2.jpg";
import pic3 from "../assets/teach3.jpg";

export default function Teacher()
{
    let flexContainer = {
        display: "flex",
        gap: "150px",
        flexWrap: "wrap",
        justifyContent: "center"
    };

    let box = {
        width: "400px",
        height: "300px",
        border: "8px solid green",
        borderRadius: "4px",
        marginBottom: "50px",
        marginTop:"50px"
    };

    let imgStyle = {
        width: "100%",
        height: "100%"
    };

    return (
        <>    
            <h1 style={{color :"green" ,textAlign:"center"  , fontSize:"50px" ,textDecoration:"underline" } }>Our Teachers</h1>

            <div style={flexContainer}>
                <div style={box}>
                    <img src={pic1} alt="" style={imgStyle} />
                </div>

                <div style={box}>
                    <img src={pic2} alt="" style={imgStyle} />
                </div>

                <div style={box}>
                    <img src={pic3} alt="" style={imgStyle} />
                </div>
            </div>
        </>
    );
}
