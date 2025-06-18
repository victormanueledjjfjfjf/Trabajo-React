import "./Footer.css";

import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="/terminos">Términos y condiciones</a>
          <a href="/privacidad">Política de privacidad</a>
          <a href="/contacto">Contacto</a>
        </div>
      </div>
    </footer>
  );
};