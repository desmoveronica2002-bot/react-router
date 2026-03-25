import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Products() {
  const [todos, setTodos] = useState([]);

  // Fetch dei dati
  function fetchTodos() {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => setTodos(res.data))
  }
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>

      <main className="container">
        <div>
          <h2>Lista Prodotti</h2>
        </div>

        <div className="row">
            {todos.map((product) => (
                <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 contorno-card">
                   <img src={product.image} className="dimensione"/>
                    <div className="card-body">
                        <h3 className="card-title">{product.title}</h3>
                        <Link to={`/products/${product.id}`}>Vedi prodotto</Link>
                    </div>
                </div>
            ))}
        </div>
  
       
      </main>
    </>
  );
}