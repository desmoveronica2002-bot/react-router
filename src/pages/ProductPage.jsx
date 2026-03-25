import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { useContext } from "react";
import BudgetContext from "../contexts/BudgetContext";


export default function ProductPage(){


    const ctx = useContext(BudgetContext)
    console.log(ctx);







    const [product, setProduct]=useState(null)

    const {id} = useParams()
    console.log(id);

    const api_url = `https://fakestoreapi.com/products/${id}`;
    console.log(api_url);

    useEffect(()=>{
        fetch(api_url)
        .then(res=>res.json())
        .then(data=>{
            setProduct(data)
    })

    },[])

    return(
        <>

        <main className="container">
            {product!==null &&(
                <div> 
                    <img src={product.image} className="prodotto"></img>
                    <h1>{product.title}</h1>
                    <p><strong>Prezzo:</strong> {product.price} €</p>
                    <p>{product.category}</p>
                    <p>Rating: {product.rating.rate} ⭐ ({product.rating.count} recensioni)</p>
                </div>

            )}

        </main>
        </>
    )
}