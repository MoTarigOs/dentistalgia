'use client';

import Image from 'next/image';
import './Book.css';
import AppointImage from '@assets/images/dentist_work.png';
import { useContext, useEffect } from 'react';
import { Context } from '@utils/Context';

const page = () => {

    const { setSelectedRouter } = useContext(Context);

    useEffect(() => {
        setSelectedRouter('Book Appointment');
    }, []);

    return (

        <div className='book'>


            <div className='form'>

                <h1>Book An Appointment</h1>

                <form>

                    <input placeholder='Name'/>

                    <input placeholder='Email' type='email'/>

                    <input placeholder='Phone' type='number'/>
                    
                    <select>
                        <option value="" disabled selected hidden>Select Branch</option>
                        <option>Khartoum</option>
                        <option>Cairo</option>
                        <option>Dubai</option>
                    </select>

                    <textarea placeholder='Why you want to visit us?' rows={7}/>

                    <button>Send</button>

                </form>

            </div>

            <div className='landing'>
                <Image src={AppointImage}/>
            </div>
        
        </div>

    )
};

export default page;
