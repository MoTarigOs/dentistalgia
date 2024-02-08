'use client';

import '@styles/Footer.css';
import { useContext } from 'react';
import { Context } from '@utils/Context';
import { getConstName } from '@utils/getLangItems';
import LogoImage from '@assets/icons/logo.png';
import Image from 'next/image';

import Instagram from '@assets/icons/instagram.svg';
import LinkedIn from '@assets/icons/linkedin.svg';
import Facebook from '@assets/icons/facebook.svg';
import Snapchat from '@assets/icons/snapchat.svg';
import { servicesArray } from '@utils/Constants';

const Footer = () => {

  const { isArabic, isDarkMode } = useContext(Context);
  
  const getImage = (name) => {

    switch(name){
      case 'Facebook':
        return Facebook;
      case 'LinkedIn':
        return LinkedIn;
      case 'Instagram':
        return Instagram;
      case 'Snapchat':
        return Snapchat;
      default:
        return null;  
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({
      top: -128,
      behavior: 'smooth'
    })
  };

  return (

    <div className='footer'>

      <div className='top'>
      
        <div className='logoDiv'>

          <div className='logo' onClick={handleLogoClick}>
            <Image src={LogoImage} alt='Dentistalgia footer logo image'/>
          </div>

          <p>Empowering smiles with exceptional care, advanced technology, and personalized attention. Your trusted partner for lifelong dental health and radiant smiles. Contact us today!</p>
        
          <ul>
            {['Facebook', 'Instagram', 'LinkedIn', 'Snapchat'].map((item) => (
              <li key={item}>
                <Image src={getImage(item)} width={32} height={32} alt={`${item} icon`}/>
              </li>
            ))}
          </ul>
        
        </div>

        <div className='Doctors'>

          <h2>Our doctors</h2>

          <ul>
            {servicesArray.slice(0,12).map((item) => (
              <li>{item.title}</li>
            ))}
          </ul>

        </div>

        <div className='Services'>

          <h2>Services</h2>

          <ul>
            {servicesArray.slice(0, 8).map((item) => (
              <li>{item.title}</li>
            ))}
          </ul>

        </div>

        <div className='sub'>

          <label>{getConstName('Join Us', isArabic)}Join Us</label>

          <div>
            <input placeholder={getConstName('Enter your Email', isArabic)}></input>
            <button>{getConstName('Subscribe', isArabic)}Subscribe</button>
          </div>

        </div>

      </div>

      <hr />
      
      <div className='bottom'>

          <h3>© 2024 Dentistalgia. All Rights Reserved.</h3>

          <h3><span>Privacy Policy</span> | <span>Terms & Conditions</span></h3>

      </div>

    </div>
  )
};

export default Footer;
