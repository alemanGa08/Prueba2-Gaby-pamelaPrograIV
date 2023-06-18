import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-12 text-center">
            <h5>Contacto Administrador 1</h5>
            <ul className="list-unstyled text-small" style={{ display: "flex", justifyContent: "center" }}>
              <a href="https://www.facebook.com/gaby.aleman.08" target="_blank" rel="noreferrer" style={{ flex: "1", margin: "0 10px", display: "inline-block" }}>
                <FontAwesomeIcon icon={faFacebook} size="3x" />
              </a>
              <a href="https://github.com/alemanGa08" target="_blank" rel="noreferrer" style={{ flex: "1", margin: "0 10px", display: "inline-block" }}>
                <FontAwesomeIcon icon={faGithub} size="3x" />
              </a>
              <a href="https://www.instagram.com/gabyaleman08/" target="_blank" rel="noreferrer" style={{ flex: "1", margin: "0 10px", display: "inline-block" }}>
                <FontAwesomeIcon icon={faInstagram} size="3x" />
              </a>
            </ul>
          </div>
          <div className="col-md-6 col-sm-12 text-center">
            <h5>Contacto Administrador 2</h5>
            <ul className="list-unstyled text-small" style={{ display: "flex", justifyContent: "center" }}>
              <a href="https://www.facebook.com/pamee.contreras.142?mibextid=ZbWKwL" target="_blank" rel="noreferrer" style={{ flex: "1", margin: "0 10px", display: "inline-block" }}>
                <FontAwesomeIcon icon={faFacebook} size="3x" />
              </a>
              <a href="https://github.com/Pamela2103" target="_blank" rel="noreferrer" style={{ flex: "1", margin: "0 10px", display: "inline-block" }}>
                <FontAwesomeIcon icon={faGithub} size="3x" />
              </a>
              <a href="https://instagram.com/pamee_barrantes?igshid=MWQ1ZGUxMzBkMA==" target="_blank" rel="noreferrer" style={{ flex: "1", margin: "0 10px", display: "inline-block" }}>
                <FontAwesomeIcon icon={faInstagram} size="3x" />
              </a>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <h5>Acerca de</h5>
            <p>
           ¡Síguenos en nuestras redes sociales para estar al tanto de nuestras últimas actualizaciones!
            </p>
          </div>
        </div>
        <div className="border-top pt-3">
          <p className="text-muted" style={{ textAlign: "center" }}>&copy; 17/06/2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;