import '@styles/HeroLandingSection.css';
import Image from 'next/image';
import PreviewImage from '@assets/images/hero_landing_image.jpg';

const HeroLandingSection = () => {
  return (

    <div className='HeroLanding'>

        <div className='texts'>

            <h2>Welcome to Dentistalgia! We are dedicated to providing exceptional dental care tailored to your unique needs.</h2>

            <p>Our team of skilled dentists and friendly staff are committed to creating a comfortable and welcoming environment where you can feel relaxed and at ease. From routine check-ups to cosmetic procedures, we offer a comprehensive range of services to help you achieve and maintain a healthy, beautiful smile.</p>
        
            <button>View details</button>

        </div>

        <div className='picture'>
            <Image src={PreviewImage} alt='Dentistalgia hero image'/>
        </div>
      
    </div>

  )
}

export default HeroLandingSection
