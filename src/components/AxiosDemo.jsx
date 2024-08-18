import axios from "axios";
import { useState } from "react";

let AxiosDemo = () => {
    let [products, setProducts] = useState([]);

    const URL = "https://api.escuelajs.co/api/v1/categories";

    const fetchProduct = async () => {
        try {
            let response = await axios.get(URL); // get method used to fetch data from API
            console.log(response.data); // its an array giving 56 obj 
            setProducts(response.data);
            //console.log('product data is ' + products);

            response.data.forEach((p) => {
                console.log("title " + p.title);
                console.log("id " + p.id);
            });
        } catch (error){
            console.error("Error fetching products:", error);
        }
    }

    return (
        <>
            <h1>Product Listing</h1>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Product Images</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>
                                    {item.images?.map((image, index) => (
                                        <img key={index} src={image} alt={item.title} style={{width: "200px", height: "200px", margin: "5px"}} />
                                    ))}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <button onClick={fetchProduct}>Show Product</button>
        </>
    );
}

export default AxiosDemo;
