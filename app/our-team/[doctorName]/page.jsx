'use client';

import './DoctorDetails.css';
import { getDoctorDetails } from '@utils/Logic';
import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { Context } from '@utils/Context';
import Loading from '@components/Loading';

const page = ({ params }) => {

    const [doctor, setDoctor] = useState(null);
    const { doctorName } = params;
    const { isArabic, setSelectedRouter } = useContext(Context);

    useEffect(() => {
        setSelectedRouter('Doctor profile');
    }, []);

    useEffect(() => {
        const fetched = getDoctorDetails(doctorName);
        setDoctor(fetched);
    }, []);

    const getAbout = () => {

        const nameSplit = doctor.name.split(' ');
        
        const x = nameSplit[0] + '. ' + nameSplit[1];

        return `${x} a dedicated dentist, resides in the vibrant city of Khartoum, Sudan. Amidst the bustling streets and vibrant culture of the capital, ${x} serves his community with unwavering commitment and compassion. His days are filled with the challenges and triumphs of modern dental care, as he navigates the intricacies of oral health in a rapidly evolving society. From the corridors of busy dental clinics to the serene offices nestled within Khartoum's neighborhoods, ${x}'s expertise and empathy touch the lives of countless patients. In his pursuit of healthy smiles and wellness, he embodies the spirit of resilience that defines both Khartoum and its people, fostering dental health and confidence in the heart of Sudan's capital. ${x}'s gentle demeanor and skillful hands make him a trusted figure among his patients, who seek his care for routine check-ups, dental cleanings, and complex procedures alike. His commitment to continuous learning and innovation ensures that his practice remains at the forefront of modern dentistry in Khartoum. Beyond his professional endeavors, ${x} is an active member of the community, participating in outreach programs and initiatives to promote oral health education and awareness. In the rich tapestry of Khartoum's diverse population, ${x} finds inspiration and purpose, forging connections that transcend the boundaries of his dental practice. Through his tireless dedication and compassionate approach, ${x} leaves an indelible mark on the smiles and lives of those he serves, embodying the spirit of healing and hope in the heart of Sudan's capital city.`
    };

    if(!doctor){
        return <div className='DoctorDetails'><Loading /></div>
    };

    return (

        <div className='DoctorDetails'>

            <div className='landingDoctorDetails'>

                <div>
                    <h1>{doctor.name}</h1>
                    <p>{doctor.detailedRole}</p>
                </div>

                <Image src={doctor.pic}/>

            </div>

            <label>Education</label>
            <ul className='education'>
                {doctor.education.map((edu) => (
                    <li>{edu}</li>
                ))}
            </ul>

            <label>Experience</label>
            <ul className='experience'>
                {doctor.exp.map((ex) => (
                    <li>{ex}</li>
                ))}
            </ul>

            <label>About {doctor.name.replace('Dr', 'Dr.')}</label>
            <p className='aboutTheDoctor'>{getAbout()}</p>
        
        </div>

    )
};

export default page;
