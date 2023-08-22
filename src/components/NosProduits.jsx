import { useSpring, animated } from '@react-spring/web';
import React, { useState, useEffect, useRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { FiChevronUp } from 'react-icons/fi';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import panneaux from '../Assets/Images/vaillantphoto.webp';
import pompe from '../Assets/Images/oip.webp';

Modal.setAppElement('#root'); // Point d'accès racine de l'application pour react-modal

const Questions = () => {
 
const CustomCard = ({ question, index, onImageClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const spring = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-100px)',
    delay: index * 100,
  });

  const expandSpring = useSpring({
    height: isOpen ? 'auto' : 0,
    opacity: isOpen ? 1 : 0,
    delay: 200,
  });
  
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <animated.div style={spring} ref={cardRef}>
      <Card>
        <CardHeader
          titleTypographyProps={{
            variant: 'subtitle2',
            fontFamily: 'Markot-Regular',
            color: '#ffc451',
          }}
          subheaderTypographyProps={{
            variant: 'caption',
            fontFamily: 'Markot-Regular',
          }}
          title={question.Nom}
          subheader={question.mode}
          onClick={handleClick}
          action={
            <FiChevronUp
              className={isOpen ? 'arrowOpened' : 'arrowClosed'}
              size={23}
              onClick={handleClick}
            />
          }
        />
        <CardMedia
          component="img"
          height="140"
          image={question.image}
          alt={question.Nom}
          onClick={onImageClick}
          style={{ cursor: 'pointer' }}
        />
        {isOpen && (
          <animated.div style={expandSpring}>
            <CardContent style={{ flexGrow: 1 }}>
              <p>{question.desc}</p>
            </CardContent>
          </animated.div>
        )}
      </Card>
    </animated.div>
  );
};

  const questionsAndAnswerArray = [
    {
      Nom: 'PANNEAUX PHOTOVOLTAIQUE',
      Prix: '9 900,00 CHF',
      desc:
        'Panneaux photovoltaïques made in suisse, structure de Fixation K2 Système, Micro-onduleur ENPHASE, Installations et Accessoires ainsi que vos démarches administratives',
      mode: 'INSTALLATION CLÉS EN MAIN',
      image: pompe,

    },
   {
      Nom: 'POMPE A CHALEUR',
      Prix: '19 990,00 CHF',
      desc:
        'Pompe à chaleur, matériels sanitaires, dossier administratifs, forfait pose, Contrôle et mise en service',
      mode: 'CLÉS EN MAINS',
      image: panneaux,
    }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="Questions-div hidden"  id="produits">
      <h3>NOS PRODUITS</h3>
      <Grid container spacing={2} justifyContent={'space-evenly'}>
        {questionsAndAnswerArray.map((question, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CustomCard question={question} index={index} onImageClick={() => openModal(question.image)} />
          </Grid>
        ))}
      </Grid>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Image Popup"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
          },
          content: {
            maxWidth: '90%',
            maxHeight: '90%',
            margin: 'auto',
          },
        }}
      >
       <button className="modal-close-button" onClick={closeModal}>
          <CloseIcon fontSize="large" />
        </button>
        {selectedImage && (
          <img src={selectedImage} alt="Agrandissement" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        )}
      </Modal>
    </div>
  );
};

export default Questions;
