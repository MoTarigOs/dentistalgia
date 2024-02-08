import '@styles/HeroContentSection.css';
import HeroCard from '@components/HeroCard';
import SmilePerson from '@assets/images/smile_black_person.png';
import SmilePerson2 from '@assets/images/smile_white_person.png';
import SmilePerson3 from '@assets/images/three_kids.png';

const HeroContentSection = () => {

    return (

        <div className='Content'>
            
            <HeroCard pic={SmilePerson} detailLink={'/services'} item={{
                linkTitle: 'Smile Renewal',
                title: 'Smile Renewal: Expert Dental Care Services',
                desc: 'offers comprehensive solutions for your dental needs. From routine check-ups to advanced cosmetic procedures, our skilled team is dedicated to revitalizing your smile. Using state-of-the-art technology and personalized treatment plans, we ensure optimal oral health outcomes. With a focus on comfort and satisfaction, our welcoming environment guarantees a positive experience at every visit. Schedule your appointment today and embark on your journey to a radiant, confident smile.'
            }}/>

            <hr />

            <HeroCard pic={SmilePerson2} detailLink={'/services'} isReversed={true} item={{
                linkTitle: 'Brilliant Smiles',
                title: 'Brilliant Smiles: Advanced Dental Solutions',
                desc: 'Experience exceptional dental care with "Brilliant Smiles: Advanced Dental Solutions." Our practice offers cutting-edge treatments tailored to enhance your oral health and confidence. From preventive dentistry to transformative cosmetic procedures, our skilled team prioritizes your comfort and satisfaction. With state-of-the-art facilities and personalized care, we strive to exceed your expectations at every visit. Discover the difference with "Brilliant Smiles" and unlock the radiant smile you deserve. Schedule your appointment today and embark on your journey to optimal dental wellness.'
            }}/>
            
            <hr />
            
            <HeroCard pic={SmilePerson3} detailLink={'/services'} item={{
                linkTitle: 'Sparkle Bright',
                title: 'Sparkle Bright: Family Dentistry Excellence',
                desc: 'Where we prioritize your familys dental health with top-notch care and compassion. Our comprehensive services cover everything from routine check-ups to specialized treatments, ensuring smiles of all ages shine with confidence. With a focus on gentle techniques and personalized attention, our experienced team creates a warm and inviting atmosphere for every patient. Experience the difference with Sparkle Bright as we strive to make dental visits stress-free and enjoyable for the whole family. Schedule an appointment today and discover the joy of healthy, radiant smiles.'
            }}/>

        </div>
        
    )
}

export default HeroContentSection;
