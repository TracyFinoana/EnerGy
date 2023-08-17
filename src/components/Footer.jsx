import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <p>Courriel : <a href="mailto:info@swiss-energy-company.ch">info@swiss-energy-company.ch</a></p>
        <p>Téléphone : (+41) 078 254 23 48</p>
        <p>Adresse : Rue du Mont-d'Or 16, 1337 VALLORBE</p>
        <div className="social-icons">
          <a href="https://api.whatsapp.com/send?phone=41782542348" target="_blank" rel="noopener noreferrer"><WhatsAppIcon /></a>
          <a href="https://www.instagram.com/swiss.energy.company/" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} SWISS ENERGY COMPANY</p>
        <p className="footer-dev">Fait avec <FavoriteIcon style={{ color: 'red' }} fontSize='5px'/> par epsylon</p>
      </div>
    </footer>
  );
};

export default Footer;
