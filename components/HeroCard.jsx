'use client';

import '@styles/components/HeroCard.css';
import { Context } from '@utils/Context';
import Svgs from '@utils/Svgs';
import { getConstName } from '@utils/getLangItems';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';

const HeroCard = ({ pic, isReversed, item, detailLink, isNotBook, isObjectFitCover }) => {

    const { isArabic } = useContext(Context);

    return (

        <div className='card' style={{
            flexDirection: isReversed && 'row-reverse' 
        }}>

            <div className='texts'>

                <h2>{item.title}</h2>

                <p>{item.desc}</p>

                <div className='buttons'>
                    <Link href={detailLink ? detailLink : item.itemTitle ? `/services/${item.itemTitle}` : ''}>{getConstName('View details', isArabic)}</Link>
                    {!isNotBook && <Link id='book' href={'/book-appointment'}>Book now <Svgs name={'arrow'}/></Link>}
                </div>

            </div>

            <div className='vector'>
                <Image src={pic} style={{
                    objectFit: isObjectFitCover && 'cover'
                }}/>
            </div>

        </div>

    )
};

export default HeroCard;
