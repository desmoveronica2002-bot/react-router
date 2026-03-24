import { Link } from "react-router-dom";

export default function Home(){
    return(
        <>
        <header className="container"> 
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
               <div class="container-fluid">
                  <div class="collapse navbar-collapse" id="navbarNav">
                   <ul class="navbar-nav">
                      <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="/presentazione">chi siamo</Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="products">prodotti</Link>
                      </li>
                    </ul>
                  </div>
                </div>
            </nav>
        </header>

        <main className="container">
            <h1>BENVENUTO!</h1>
            <img src="https://nuvoluzione.com/wp-content/uploads/2016/03/vendita-promozionale.jpg" alt="img promozionale" />

        </main>
          </>
    )
}