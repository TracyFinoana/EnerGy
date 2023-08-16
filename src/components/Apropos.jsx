import { Typography } from '@mui/material';
import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page hidden" id="apropos">
      <meta name="description" content="Découvrez notre entreprise engagée dans les énergies renouvelables en Suisse romande. Expertise en panneaux photovoltaïques et pompes à chaleur. Faites confiance à notre service respectueux de l'environnement." />
         <Typography variant="h6"  style={{textAlign: 'center',color: '#ffc451', fontFamily: 'Markot-Book',fontWeight: 'bold'}}>
              A PROPOS
            </Typography>
      <p>
        <span> ET SI L'ÉNERGIE DE DEMAIN VOUS APPARTENAIT ? </span> Bienvenue sur notre site dédié aux énergies renouvelables ! Nous sommes une entreprise engagée dans la transition énergétique en Suisse romande et mettons à votre disposition notre expertise dans l'installation de panneaux photovoltaïques, de pompes à chaleur et bien plus encore. Face à la pénurie électrique et aux enjeux écologiques et économiques, nous sommes convaincus que les énergies renouvelables sont l'avenir de notre planète et de notre économie. Faites confiance à notre entreprise pour bénéficier d'un service de qualité, respectueux de l'environnement et adapté à vos besoins.
      </p>
    
    </div>
  );
};

export default AboutPage;
