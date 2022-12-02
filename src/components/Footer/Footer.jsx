import { Link } from "react-router-dom";
import "./footer.css";


function Footer() {
  return (
    <div className="footer">
            <div className="container-fluid">
                <div className="row p-2 bg-dark text-white">
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <div>
                            <Link to="/"><img className="rounded mx-4 d-block d-flex align-items-center logo"
                                    src="/img/logoHamburguesa.png"/></Link>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <div>
                            <p className="h5">Síguenos en:</p>
                        </div>
                        <div>
                            <Link to="//www.instagram.com/?hl=es" className="text-decoration-none text-secondary"><img
                                    className="redes p-2" src="//cdn-icons-png.flaticon.com/512/1409/1409946.png"/>Instagram</Link>
                        </div>
                        <div>
                            <Link to="//es-la.facebook.com/" className="text-decoration-none text-secondary"><img
                                    className="redes p-2" src="//cdn-icons-png.flaticon.com/512/733/733547.png"/>Facebook</Link> 
                        </div>
                        <div>
                            <Link to="//twitter.com/?lang=es" className="text-decoration-none text-secondary"><img
                                    className="redes p-2" src="//cdn-icons-png.flaticon.com/512/3256/3256013.png"/>Twitter</Link>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <div>
                            <p className="h5"> Contacto</p>
                        </div>
                        <div>
                            <p className="text-secondary">Teléfono: 000 0800 4433</p>
                        </div>
                        <div>
                            <p className="text-secondary">Email: ventas@bigburger.com</p>
                        </div>
                    </div>
                    <div className="col-sm-12 pt-4">
                        <p className="text-white text-center">Todos los derechos reservados</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Footer