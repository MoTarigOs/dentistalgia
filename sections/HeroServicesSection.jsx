'use client'

import ServiceCard from '@components/ServiceCard';
import '@styles/HeroServicesSection.css';
import { servicesArray } from '@utils/Constants';
import { Context } from '@utils/Context';
import Link from 'next/link';
import { useContext, useEffect } from 'react';

const HeroServicesSection = () => {

    const { isArabic, setSelectedRouter } = useContext(Context);
    const services = servicesArray.slice(0, 8);

    useEffect(() => {
        setSelectedRouter('Home');
    }, []);

    return (

        <div className='HeroServices'>

            <h3>Our Services</h3>

            <ul>
                {services.map((item) => (
                    <ServiceCard key={item._id} item={item} isArabic={isArabic}/>
                ))}
            </ul>

            <Link href={"/services"}>More Services</Link>

        </div>

    )
};

export default HeroServicesSection;
