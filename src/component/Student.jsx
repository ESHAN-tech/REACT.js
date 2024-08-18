

export default function Student({ imgName, admission, about }) {
    // CSS styling object
    let box = {
        width: "200px",
        height: "200px",
        border: "5px solid black",
        borderRadius: "20%",
        marginTop: "50px",
    };

    let imgStyle = {
        width: "100%",
        height: "100%",
        borderRadius: "inherit",
    };

    return (
        <>
            {/*  
            Here we make a div for passing image in the App.jsx.
            Here we pass the image as a property called props...
            And here we have to use the CSS over there...
            */}
            <div style={box}>
                <img src={imgName} alt="Student" style={imgStyle} />
                <p>{admission}</p>
                <p>{about}</p>
            </div>
        </>
    );
}
