export default function Presentazione(){
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
            <h1>CHI SIAMO!</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero sapiente 
            dolores ipsum ipsa? Minima assumenda dolores quod minus aspernatur ducimus?
            Doloremque similique eum voluptates velit soluta ipsum, officiis sed porro.</p>

        </main>
          
          </>
    )
}