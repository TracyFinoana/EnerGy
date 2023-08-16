import React, { useEffect } from 'react';
import Apropos from './Apropos';
import NosProduits from './NosProduits';
import RdvPage from './Rendez-vous';
import Map from './Map';
import Chatbot from './ChatBot';
const Body = () => {
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div>
      <Apropos />
      <NosProduits/>
      <RdvPage/>
      <Map />
      <Chatbot/>
    </div>
  );
};

export default Body;
