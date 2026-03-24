import { Link } from "react-router-dom";

export default function Presentazione(){
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
            <h1>CHI SIAMO!</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero sapiente 
            dolores ipsum ipsa? Minima assumenda dolores quod minus aspernatur ducimus?
            Doloremque similique eum voluptates velit soluta ipsum, officiis sed porro.</p>

        </main>
          
          </>
    )
}