'use client';

import '@styles/components/DoctorCard.css';
import Image from 'next/image';
import Svgs from '@utils/Svgs';
import { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Context } from '@utils/Context';

const DoctorCard = ({ item }) => {

    const [isHovered, setIsHovered] = useState(false);
    const { isMobile } = useContext(Context);

    return (

        <li className='doctorCard' onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            <Link href={`/our-team/${item.name.replaceAll(' ', '-').toLowerCase()}`}>
        
                <div className='pic'>
                    <Image src={item.pic}/>
                </div>

                <div className='details'>

                    <h2>{item.name.replace('Dr', 'Dr.')}</h2>

                    <p>{item.role}</p>

                </div>

                <motion.div className='profile'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : isMobile ? 1 : 0 }}
                >

                    <Svgs name={'visit'}/>

                    <span>Visit Profile</span>

                </motion.div>

            </Link>

        </li>

    )
};

export default DoctorCard;
