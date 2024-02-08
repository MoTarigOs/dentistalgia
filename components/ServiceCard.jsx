import Link from "next/link";
import { getConstName } from "@utils/getLangItems";
import '@styles/components/ServiceCard.css';
import Svgs from "@utils/Svgs";

const ServiceCard = ({ item, isArabic, isDesc, isNotColored }) => {
  return (

    <li className="ServiceCard" style={{ background: isNotColored && 'white' }}>

        <Link href={`/services/${item.title.replaceAll(' ', '-').toLowerCase()}`}>

            <Svgs name={'teethicon'}/>
            
            <h2 style={{ color: isNotColored && 'var(--mainColor)' }}>{getConstName(item.title, isArabic)}{item.title}</h2>

            {isDesc && <p>{item.desc}</p>}

        </Link>

    </li>

  )
};

export default ServiceCard;
