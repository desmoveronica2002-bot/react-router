import { Link } from "react-router-dom";

export default function Home(){
    return(
        <>
        <header className="container"> 
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
               <div className="container-fluid">
                  <div className="collapse navbar-collapse" id="navbarNav">
                   <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/presentazione">chi siamo</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/products">prodotti</Link>
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