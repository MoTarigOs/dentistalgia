import '@styles/HeroSection.css';
import HeroLandingSection from './HeroLandingSection';
import HeroServicesSection from './HeroServicesSection';
import HeroContentSection from './HeroContentSection';
import AboutSection from './AboutSection';

const HeroSection = () => {

    return (

        <div className='Hero'>
        
            <HeroLandingSection />

            <HeroServicesSection />

            <HeroContentSection />

            <AboutSection />

        </div>

    )
};

export default HeroSection;
