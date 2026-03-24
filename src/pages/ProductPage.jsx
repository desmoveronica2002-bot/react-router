import { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom"

export default function ProductPage(){

    const [product, setProduct]=useState(null)

    const {id} = useParams()
    console.log(id);

    const api_url = `https://fakestoreapi.com/products/${id}`;
    console.log(api_url);

    useEffect(()=>{
        fetch(api_url)
        .then(res=>res.json())
        .then(data=>setProduct(data))

    },[])

    return(
        <h1>product : {id}</h1>
    )
}