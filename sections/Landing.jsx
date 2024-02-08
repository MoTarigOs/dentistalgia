import Image from "next/image";
import '@styles/Landing.css';
import LandingImage from '@assets/images/landing_image.png';

const Landing = () => {
    
    const services = [
        {_id: '0', title: 'Teeth brek', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae,'},
        {_id: '1', title: 'Teeth brek', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae,'},
        {_id: '2', title: 'Teeth brek', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae,'}
    ];

  return (

    <div className="LandingSection">

        <div className="topLanding"><h1>Your Smile Our Priority</h1></div>

        <div className="bottomLanding">

            <div className="landing_services_div">

                <ul>
                    {['Meet', 'Treat', 'Smile'].map((item) => (
                        <li key={item}>
                            {item}
                        </li>
                    ))}
                </ul>

            </div>
            
            
            <div className="landingImage">
                <Image src={LandingImage} alt="Dentistalgia landing page image"/>
            </div>

        </div>
      
    </div>

  )

};

export default Landing;
