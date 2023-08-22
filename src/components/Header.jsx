import React , {useEffect, useState} from 'react';
import Logo from '../Assets/Images/logoSwis.png'
import { Sling as Hamburger } from "hamburger-react"
import { useSpring , animated} from '@react-spring/web'
import { Link} from 'react-scroll';
import '../../src/App.css';

const Header = () => {
  const [activeLink, setActiveLink] = useState('accueil');
  const [isHomeVisible, setIsHomeVisible] = useState(true)
  useEffect(() => {
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target.id === 'accueil') {
          setIsHomeVisible(entry.isIntersecting);
        }
      });
    });

    // Observe the "Accueil" section
    const homeSection = document.getElementById('accueil');
    if (homeSection) {
      observer.observe(homeSection);
    }

    return () => {
      if (homeSection) {
        observer.unobserve(homeSection);
      }
    };
  }, []);
  //spring animation for logos
  const logoAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 200, friction: 10 },
    delay: 500,
  });
    // Navbar
    const Navbar = () => {
        return (
        <nav style={{ backgroundColor:isHomeVisible ? 'rgba(0, 0, 0, 0.3)':'#333' }}>
          <animated.img style={{ ...logoAnimation, width: '100px' }} src={Logo} alt='Logo' />
          <div className='navbar-links'>
            <Link
              activeClass='active'
              to='accueil'
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => setActiveLink('accueil')}
              style={{ cursor: 'pointer' }}
              className={`nav-link ${activeLink === 'accueil' ? 'active' : ''}`}
            >
              ACCEUIL
            </Link>
            <Link
              activeClass='active'
              to='apropos'
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => setActiveLink('apropos')}
              style={{ cursor: 'pointer' }}
              className={`nav-link ${activeLink === 'apropos' ? 'active' : ''}`}
            >
              A PROPOS
            </Link>
            <Link
              activeClass='active'
              to='produits'
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => setActiveLink('produits')}
              style={{ cursor: 'pointer' }}
              className={`nav-link ${activeLink === 'produits' ? 'active' : ''}`}
            >
              NOS PRODUITS
            </Link>
            <Link
              activeClass='active'
              to='rdv'
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => setActiveLink('rdv')}
              style={{ cursor: 'pointer' }}
              className={`nav-link ${activeLink === 'rdv' ? 'active' : ''}`}
            >
              RENDEZ-VOUS
            </Link>
          </div>
        </nav>
        );
      };
      // Humberger
      const Humberger = () => {
        const [toggle1, setToggle1] = useState(false);
        return (
        <div className='container-Hamburger'>
          <div className='hamburger-header'>
          <div className='Hamburger'>
            <Hamburger
                  size={30}
                  color="#fff"
                  rounded
                  toggled={toggle1}
                  toggle={() => { setToggle1(!toggle1) }}
                  duration={0.8}
              />
          </div>
              <div className='ham-logo-container'>
                <animated.img style={{...logoAnimation, width: '100px'}} src={Logo} alt='Logo' />
              </div>
            </div>
            <div className={toggle1 ? 'open' : 'closed'}>
            <div className='ham-nav-links'>
              
            <Link
              activeClass='active'
              to='accueil'
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => setActiveLink('accueil')}
              style={{ cursor: 'pointer' }}
              className={`nav-link ${activeLink === 'accueil' ? 'active' : ''}`}
            >
              ACCEUIL
            </Link>
            <Link
              activeClass='active'
              to='apropos'
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => setActiveLink('apropos')}
              style={{ cursor: 'pointer' }}
              className={`nav-link ${activeLink === 'apropos' ? 'active' : ''}`}
            >
              A PROPOS
            </Link>
            <Link
              activeClass='active'
              to='produits'
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => setActiveLink('produits')}
              style={{ cursor: 'pointer' }}
              className={`nav-link ${activeLink === 'produits' ? 'active' : ''}`}
            >
              NOS PRODUITS
            </Link>
            <Link
              activeClass='active'
              to='rdv'
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => setActiveLink('rdv')}
              style={{ cursor: 'pointer' }}
              className={`nav-link ${activeLink === 'rdv' ? 'active' : ''}`}
            >
              RENDEZ-VOUS
            </Link>
             </div>
            </div>
        </div>
        );
      }     
    // LandingPage
    const LandingPage =()=>{
      const [showAnimation, setShowAnimation] = React.useState(false);

      React.useEffect(() => {
        setShowAnimation(true);
      }, []);

      //spring animation for text on first landing page
      const h2Spring = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(20px)' },
        delay: 500, // delay befor the animation starts ( millisecondes)
      });
    
      const pSpring = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(20px)' },
        delay: 1000, // delay befor the animation starts ( millisecondes)
      });
      return(
        <section className={`main-landing ${showAnimation ? 'animate' : ''}`} >
          <div className={`landing-container ${showAnimation ? 'animate' : ''}`}>
            {/* <div className='glace'> */}
            <animated.h2 style={h2Spring} className={showAnimation ? 'animate' : ''}>ET SI L'ÉNERGIE DE DEMAIN</animated.h2>
            <animated.h2 style={pSpring} className={showAnimation ? 'animate' : ''}>VOUS APPARTENAIT <span style={{color: '#ffc451'}}>?</span>
            </animated.h2>
            {/* </div> */}
          </div>
        </section>
      )
    }
  return (
    <header id='accueil'>
        <Navbar/>
        <Humberger/>
        <LandingPage/>
    </header>
  );
}

export default Header;
