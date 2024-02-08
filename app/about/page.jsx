'use client';

import { useContext, useEffect } from 'react';
import './About.css';
import { Context } from '@utils/Context';
import Image from 'next/image';
import AboutImage1 from '@assets/images/xray.jpg';
import AboutImage2 from '@assets/images/about_section_image.jpg';
import FacebookIcon from '@assets/icons/facebook.svg';
import InstagramIcon from '@assets/icons/instagram.svg';
import LinkedInIcon from '@assets/icons/linkedin.svg';
import WhatsappIcon from '@assets/icons/whatsapp.svg';

const page = () => {

    const { setSelectedRouter } = useContext(Context);
    const developerFacebookUrl = 'https://www.facebook.com/elgade.websites';
    const developerLinkedInUrl = 'https://www.linkedin.com/in/elgade/';

    useEffect(() => {
        setSelectedRouter('About');
    }, []);

    return (

        <div className='About'>
            
            <h1>About Us</h1>

            <p>Dentistalgia stands as a cornerstone of oral health and wellness in our community. Our team of dedicated dental professionals redefines the dental experience with compassion, trust, and personalized care. We believe in empowering smiles and fostering lifelong dental well-being. At Dentistalgia, excellence is our standard, and we strive to instill confidence in every patient we serve. Join us as we embark on this journey toward brighter, healthier smiles. With Dentistalgia, your oral health is our priority, and we are committed to enriching lives one patient at a time. Our clinic prides itself on a warm and welcoming environment, where patients feel valued and respected. We prioritize patient education, ensuring each individual understands their treatment options and oral health needs. Dentistalgia combines cutting-edge technology with compassionate care, delivering exceptional dental services tailored to meet your unique needs. From routine check-ups to complex procedures, we offer comprehensive dental solutions to address all your oral health concerns. Our team stays abreast of the latest advancements in dentistry to provide you with the highest standard of care. At Dentistalgia, your smile is our passion, and we are honored to be your partner in oral health. Schedule your appointment today and experience the Dentistalgia difference firsthand.</p>

            <div className='images'>

                <Image className='img1' src={AboutImage1}/>

                <Image className='img2' src={AboutImage2}/>

            </div>

            <h3>Did you like our website?</h3>

            <label>Contact the developer & Get your own website</label>

            <ul>
                <li onClick={() => window.open(developerFacebookUrl)}><Image src={FacebookIcon}/></li>
                <li><Image src={InstagramIcon}/></li>
                <li onClick={() => window.open(developerLinkedInUrl)}><Image src={LinkedInIcon}/></li>
                <li><Image src={WhatsappIcon}/></li>
            </ul>

        </div>

    )

};

export default page;
