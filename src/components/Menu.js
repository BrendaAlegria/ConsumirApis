export function Menu(){
    return(
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Datos de Firebase </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-3 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Usuarios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Product">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Nuevo">Nuevo Usuario</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/NuevoProducto">Nuevo Producto</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>        
    );
}