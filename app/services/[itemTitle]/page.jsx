'use client';

import { useContext, useEffect, useState } from 'react';
import './Details.css';
import { getServiceDetails, testImage } from '@utils/Logic';
import Image from 'next/image';
import { Context } from '@utils/Context';
import Loading from '@components/Loading';

const page = ({ params }) => {

    const [item, setItem] = useState(null);
    const [treatments, setTreatments] = useState([]);
    const { itemTitle } = params;    
    const { isArabic, setSelectedRouter } = useContext(Context);

    useEffect(() => {
        setSelectedRouter('Service details');
    }, []);

    useEffect(() => {

        const fetchedItem = getServiceDetails(itemTitle);

        setItem(fetchedItem);

        const t = fetchedItem.treatmentOptions.replaceAll(', ', '-').split('-');

        setTreatments(t);

    }, []);

    if(!item){
        return <div className='Details'><Loading /></div>
    };

    return (

        <div className='Details'>   

            <div className='left'>

                <h1>{item.title.toUpperCase()}</h1>

                <Image src={item.pic}/>

                <label>Description</label>

                <p>{item.desc}</p>

                <label>Treatment options</label>

                <p>Standard root canal, Retreatment root canal, Apicoectomy</p>

            </div>

            <div className='right'>

                <div className='cost'>
                    <h2>Cost</h2>
                    <strong>${item.price}</strong>
                </div>

                <hr />

                <h3>Book</h3>

                <label>Treatment options</label>

                <select>
                    {treatments.map((treat) => (
                        <option key={treat}>{treat}</option>
                    ))}
                </select>
                
                <label>Select Branch</label>

                <select>
                    {['Khartoum', 'Cairo', 'Portsudan', 'Dubai'].map((loc) => (
                        <option key={loc}>{loc}</option>
                    ))}
                </select>

                <label>Name</label>
                <input placeholder='Enter your Name'/>

                <label>Phone</label>
                <input placeholder='Enter your Phone'/>
                
                <label>Email</label>
                <input placeholder='Enter your Email'/>

                <button>Book</button>

            </div>

        </div>

    )

};

export default page;
