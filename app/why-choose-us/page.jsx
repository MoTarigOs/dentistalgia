'use client';

import './WhyChooseUs.css';
import ServiceCard from '@components/ServiceCard';
import { useContext, useEffect, useState } from 'react';
import { Context } from '@utils/Context';
import HeroCard from '@components/HeroCard';
import ExpertiseImage from '@assets/doctors/doctor2.png';
import CareImage from '@assets/images/care_image.jpg';
import TechImage from '@assets/images/about_section_image.jpg';

const page = () => {

    const { isArabic, setSelectedRouter } = useContext(Context);
    const [reasons, setReasons] = useState([
        { _id: '1', title: 'Expertise', desc: 'Our team comprises skilled dentists committed to delivering high-quality care with the latest advancements in dental technology.' },
        { _id: '2', title: 'Patient-Centered', desc: 'We prioritize your comfort, offering personalized treatment plans tailored to your unique needs and concerns.' },
        { _id: '3', title: 'Complete care', desc: 'From routine check-ups to advanced procedures, we provide a wide range of services to address all your dental needs.' }
    ]);

    useEffect(() => {
        setSelectedRouter('Why choose us');
    }, []);

    return (


        <div className='container'>

            <h1>Why Choose us</h1>

            <ul className='reasons'>
                {reasons.map((item) => (
                    <ServiceCard key={item._id} isDesc={true} 
                    isArabic={isArabic} item={item} isNotColored={item._id !== '2' && true}/>
                ))}
            </ul>

            <hr />

            <ul className='cards'>

                <HeroCard pic={ExpertiseImage} isNotBook={true}
                detailLink={'/about'} item={{
                    title: 'Expertise: Skilled Dentists Dedicated to Your Dental Health.',
                    desc: 'Our team of skilled dentists brings years of experience and expertise to every patients dental journey. With advanced training and a commitment to staying updated with the latest industry trends, we deliver high-quality care that you can trust. From routine check-ups to complex procedures, our dentists provide personalized treatment plans tailored to address your specific needs and concerns. With a focus on patient education and communication, we empower you to make informed decisions about your dental health. Experience the difference of expert care.'
                }}/>

                <HeroCard pic={CareImage} isObjectFitCover={true} isReversed={true} isNotBook={true}
                detailLink={'/about'} item={{
                    title: 'Personalized Care: Tailored Treatments for Your Unique Smile Needs.',
                    desc: 'We understand that every smile is unique, which is why we offer personalized care that caters to your individual needs and preferences. Our dedicated team takes the time to listen to your concerns, understand your goals, and develop customized treatment plans that prioritize your dental health and overall well-being. From the moment you step into our office, youll experience a warm and welcoming atmosphere where youre treated like family. With a focus on comfort and compassion, we strive to make every visit a positive and stress-free experience. Choose personalized care at Dentistalgia for a smile thats as unique as you are.'
                }}/>

                <HeroCard pic={TechImage} isNotBook={true} isObjectFitCover={true}
                detailLink={'/about'} item={{
                    title: 'Advanced Technology: State-of-the-Art Solutions for Optimal Dental Wellness.',
                    desc: 'We believe in harnessing the power of advanced technology to provide our patients with the highest standard of care. Our state-of-the-art facility is equipped with cutting-edge equipment and tools that enable us to deliver precise diagnostics and innovative treatments. From digital X-rays and intraoral cameras to laser dentistry and CAD/CAM technology, we leverage the latest advancements to enhance your dental experience and ensure optimal outcomes. With a focus on efficiency and precision, we strive to minimize discomfort and downtime while maximizing results. Experience the benefits of advanced technology at Dentistalgia for a healthier, happier smile.'
                }}/>

            </ul>
        
        </div>

    )

};

export default page;
