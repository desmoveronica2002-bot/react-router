import { useState, useEffect } from "react";
import axios from "axios";

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
      <header className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/presentazione">chi siamo</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/products">prodotti</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="container">
        <div>
          <h2>Lista Prodotti</h2>
            <ul>
              {todos.map((product) => (
                <li key={product.id}>
                   <img src={product.image} alt={product.title} width="100" />
                   <br/>
                   {product.title} - {product.price} €  
                   <br />
                   {product.description}  
                   <br />
                   Categoria: {product.category}  
                   <br />
                    Rating: {product.rating.rate}-({product.rating.count} recensioni)
                </li>
            ))}
            </ul>
        </div>
      </main>
    </>
  );
}