'use client';

import DoctorCard from '@components/DoctorCard';
import './OurTeam.css';
import { doctors } from '@utils/Constants';
import { useContext, useEffect } from 'react';
import { Context } from '@utils/Context';

const page = () => {

    const { isArabic, setSelectedRouter } = useContext(Context);

    useEffect(() => {
        setSelectedRouter('Our team');
    }, []);

    return (

        <div className='OurTeam'>

            <h1>Our Team</h1>

            <ul>
                {doctors.map((item) => (
                    <DoctorCard key={item._id} item={item}/>
                ))}
            </ul>
        
        </div>

    )
}

export default page
