import '@styles/components/ServicePageCard.css';
import Image from 'next/image';
import Link from 'next/link';

const ServicePageCard = ({ item }) => {

    return (

        <div className='ServicePageCard'>

            <Link href={`/services/${item.title.replaceAll(' ', '-').toLowerCase()}`}>

                <Image src={item.pic}/>

                <h1>{item.title}</h1>

                <p>{item.desc}</p>

                <button>View details</button>

            </Link>

        </div>
        
    )
};

export default ServicePageCard;
