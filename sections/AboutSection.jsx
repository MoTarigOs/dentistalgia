'use client';

import ServiceCard from '@components/ServiceCard';
import '@styles/AboutSection.css';
import { servicesArray } from '@utils/Constants';
import { Context } from '@utils/Context';
import AboutImage from '@assets/images/about_section_image.jpg';
import Image from 'next/image';
import { useContext } from 'react';

const AboutSection = () => {

    const { isArabic } = useContext(Context);
    const items = servicesArray.slice(0, 3);

    return (

        <div className='aboutSection'>

            <div className='texts'>

                <h2>Discover comprehensive dental solutions.</h2>
            
                <p>At Dentistalgia, we offer comprehensive dental solutions designed to meet the unique needs of your family. From routine check-ups to advanced treatments, our skilled team is committed to ensuring your smiles remain healthy and radiant. With a focus on gentle care and patient satisfaction, we create a welcoming environment where every visit is comfortable and stress-free.</p>
            
                <button>More About us</button>

                <ul>

                    {items.map((item) => (
                        <ServiceCard key={item._id} item={item} isArabic={isArabic} isDesc={true}/>
                    ))}
                
                </ul>

            </div>

            <div className='picture'>
                <Image src={AboutImage} alt='hero about section image'/>
            </div>
        
        </div>

    )
}

export default AboutSection
