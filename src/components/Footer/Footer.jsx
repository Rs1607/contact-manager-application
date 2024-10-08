import React from 'react';
import { FaFacebook, FaTwitter, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: 'black', color: 'white', padding: '40px 0', height: '250px', marginTop:'45px' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3 text-center">
            <FaPhone className="fa fa-phone text-success" size={30} />
          </div>
          <div className="col-md-6 text-center">
            <h3>Interested to work with us? Drop us a line</h3>
            <p>hello@contact.com</p>
          </div>
          <div className="col-md-3 text-center">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#1877F2' }}>
                  <FaFacebook size={24} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#00acee' }}>
                  <FaTwitter size={24} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="mailto:hello@example.com" style={{ color: '#D44638' }}>
                  <FaEnvelope size={24} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366' }}>
                  <FaWhatsapp size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 text-center">
            <p>
              <strong>Kolkata Office:</strong>  263 Saltlake Sector V , Kolkata 700091 | Tel: 916 753 2645
            </p>
            <p>All rights reserved @RajarshiSamanta</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;