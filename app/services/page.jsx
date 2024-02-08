'use client';

import { servicesArray } from '@utils/Constants';
import './Services.css';
import ServicePageCard from '@components/ServicePageCard';
import { useContext, useEffect } from 'react';
import { Context } from '@utils/Context';

const page = () => {

    const { isArabic, setSelectedRouter } = useContext(Context);

    useEffect(() => {
        setSelectedRouter('Services');
    }, []);

    return (

        <div className='Services'>

            <div className='ServicesLanding'>

                <h1>Explore Our Range of Dental Services</h1>

                <p>Welcome to Our Comprehensive Suite of Professional Dental Care Services and Treatments, Individually Tailored for Your Needs and Preferences.</p>
            
            </div>

            <h1 id='servicesWord'>Services</h1>

            <ul>

                {servicesArray.map((item) => (
                    <ServicePageCard key={item._id} item={item}/>
                ))}
            </ul>
        
        </div>

    )

};

export default page;
