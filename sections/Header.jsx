'use client';

import { getConstName } from "@utils/getLangItems";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Logo from '@assets/icons/logo.png';
import '@styles/Header.css';
import { Context } from "@utils/Context";
import Link from "next/link";
import { motion } from "framer-motion";
import Svgs from "@utils/Svgs";

const Header = () => {
  
  const { 
    isArabic, setIsArabic, selectedRouter, setSelectedRouter,
    isMenu, setIsMenu, isMobile, setIsMobile
  } = useContext(Context);
  const [isLang, setIsLang] = useState(false);

  useEffect(() => {

    const settingMobile = () => {
      console.log("resized");
      if(window.innerWidth <= 960){
        setIsMobile(true);
        setIsMenu(false);
      } else {
        setIsMobile(false);
      }
    };

    settingMobile();

    window.addEventListener('resize', settingMobile);
    return () => window.removeEventListener('resize', settingMobile);
  }, []);

  return (

    <div className="headerWrapper">

      <div className="HeaderContainer">

        <div className="headerTop">

          <Link href={'/'}><div className="headerLogo">
            <Image src={Logo} alt="Dentistalgia logo"/>
          </div></Link>

          {!isMobile ? <div className="headerRight">

            <Link href={'/sign-in'}><h3>{getConstName('Login', isArabic)}</h3></Link>

          </div> : <div className="mobileHeader">
            
            <div className="menuIconDiv" onClick={() => setIsMenu(!isMenu)}>

              <motion.span style={{ marginBottom: 8 }}
              initial={{ rotateZ: 0, y: 0 }} animate={{ 
                rotateZ: isMenu ? '-45deg' : 0,
                y: isMenu ? 10 : 0
              }}/>

              <motion.span style={{ marginBottom: 8 }}
              initial={{ opacity: 1 }} 
              animate={{ opacity: isMenu ? 0 : 1 }}/>

              <motion.span 
              initial={{ rotateZ: 0, y: 0 }} animate={{ 
                rotateZ: isMenu ? '45deg' : 0,
                y: isMenu ? -10 : 0
              }}/>

            </div>

            <motion.div
              className="mobileSideNav"
              style={{ left: isArabic && 'unset', right: isArabic && 0 }}
              initial={{ x: isArabic ? '110%' : '-110%' }}
              animate={{ x: isMenu ? 0 : isArabic ? '110%' : '-110%', transition: { type: "tween", duration: 0.15 } }}
            >

              <ul>

                {['Home', 'Why choose us', 'Services', 'Our team', 'About'].map((item) => (
                  <li key={item}>
                    <Link href={`/${item === 'Home' ? '' : item.replaceAll(' ', '-').toLowerCase()}`}
                      className={selectedRouter === item ? 'selected' : null}
                      onClick={() => setIsMenu(false)}
                    >
                      {getConstName(item, isArabic)}
                    </Link>
                  </li>
                ))}

                <li>
                  <select onChange={(e) => setIsArabic(e.target.value === 'en' ? false : true)}
                  value={isArabic ? 'ar' : 'en'}
                  >
                    <option value="en" style={{ textAlign: 'left' }}>Engllish</option>
                    <option value="ar">العربية</option>
                  </select>
                </li>

              </ul>

            </motion.div>

          </div>}

        </div>

        {!isMobile && <div className="header">

          <ul className="headerButtons">

            {['Home', 'Why choose us', 'Services', 'Our team', 'About'].map((item) => (
              <li key={item} className={selectedRouter === item ? 'selected' : null}

              >
                <Link href={`/${item === 'Home' ? '' : item.replaceAll(' ', '-').toLowerCase()}`}>
                  {getConstName(item, isArabic).toUpperCase()}
                </Link>
              </li>
            ))}

            <li className="lang" onMouseEnter={() => setIsLang(true)}
              onMouseLeave={() => setIsLang(false)}
            >
              <button>Language <Svgs name={'arrow'}/></button>
              {isLang && <ul className="languages">
                {['English', 'العربية', 'Español', 'Français', 'Deutsch', '中文', 'Русский', '日本語', 'Türkçe'].map((lang) => (
                  <li key={lang} style={{ opacity: lang === 'English' && 1 }}>
                    {lang}
                  </li>
                ))}
              </ul>}
            </li>

            <li className="booknow">
              <Link href={'/book-appointment'}>Book now</Link>
            </li>

          </ul>

        </div>}

      </div>

    </div>

  )
};

export default Header;
