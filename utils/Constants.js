import DentalCleaning from '@assets/images/dental_cleaning.png';
import ToothExtraxtion from '@assets/images/tooth_extraction.png';
import RootCananl from '@assets/images/root_canal.png';
import DentalImplants from '@assets/images/dental_implant.png';
import Fillings  from '@assets/images/fillings.png';
import TeethWhitening from '@assets/images/tooth_wightening.png';
import DentalCrowns from '@assets/images/dental_crown.png';
import OrthodonticTreatment from '@assets/images/orthodox_treat.png';
import PeriodontalTreatment from '@assets/images/peridontal_treat.png';
import DentalBridges from '@assets/images/dental_bridge.png';
import OralSurgery from '@assets/images/dentist_work.png';
import SedationDentistry from '@assets/images/sedation.png';
import DentalVeneers from '@assets/images/dental_vaneers.png';
import FluorideTreatment from '@assets/images/flouride_treat.png';
import PediatricDentistry from '@assets/images/pediaritic_dentistry.png';
import TMJTreatment from '@assets/images/tmj_treat.png';
import CosmeticDentistry from '@assets/images/cosmetic_dentistry.png';
import DigitalDentalImpressions from '@assets/images/online_appoint.png';
import GumReshaping from '@assets/images/gum_reshaping.png';
import DentalBonding from '@assets/images/dental_bonding.png';
import ToothContouring from '@assets/images/tooth_coutorine.png';
import Nightguards from '@assets/images/nightguards.png';
import BruxismTreatment from '@assets/images/cosmetic_dentistry.png';

import Doctor1 from '@assets/doctors/doctor3.png';
import Doctor2 from '@assets/doctors/doctor2.png';
import Doctor3 from '@assets/doctors/doctor1.png';
import Doctor4 from '@assets/doctors/doctor4.png';
import Doctor5 from '@assets/images/smile_white_person.png';
import Doctor6 from '@assets/doctors/doctor5.png';
import Doctor7 from '@assets/doctors/doctor7.png';

export const servicesArray = [
    {
        _id: '1', 
        title: 'Dental cleaning', 
        desc: 'Comprehensive cleaning to remove plaque and tartar buildup, promoting oral health and preventing cavities and gum disease.', 
        pic: DentalCleaning,
        price: 40,
        treatmentOptions: 'Regular dental cleanings, Scaling and root planing'
    },
    {
        _id: '2', 
        title: 'Tooth extraction', 
        desc: 'Safe removal of damaged or decayed teeth, relieving pain and preventing further oral health issues.', 
        pic: ToothExtraxtion,
        price: 75,
        treatmentOptions: 'Simple extraction, Surgical extraction'
    },
    {
        _id: '3', 
        title: 'Root canal treatment', 
        desc: 'Treatment to remove infected pulp, alleviate pain, and save a severely damaged tooth from extraction.', 
        pic: RootCananl,
        price: 90,
        treatmentOptions: 'Root canal therapy, Endodontic retreatment'
    },
    {
        _id: '4', 
        title: 'Dental implants', 
        desc: 'Surgical procedure to replace missing teeth with artificial tooth roots, providing a strong foundation for replacement teeth.', 
        pic: DentalImplants,
        price: 125,
        treatmentOptions: 'Single tooth implant, Implant-supported bridge'
    },
    {
        _id: '5', 
        title: 'Fillings', 
        desc: 'Restoration of decayed teeth with durable filling materials, preserving tooth structure and preventing further decay.', 
        pic: Fillings,
        price: 50,
        treatmentOptions: 'Composite fillings, Amalgam fillings'
    },
    {
        _id: '6', 
        title: 'Teeth whitening', 
        desc: 'Professional whitening treatment to remove stains and discoloration, enhancing the brightness of your smile.', 
        pic: TeethWhitening,
        price: 80,
        treatmentOptions: 'In-office whitening, At-home whitening kits'
    },
    {
        _id: '7', 
        title: 'Dental crowns', 
        desc: 'Custom-made caps to cover damaged or weakened teeth, restoring their shape, size, and strength.', 
        pic: DentalCrowns,
        price: 150,
        treatmentOptions: 'Porcelain crowns, Metal crowns'
    },
    {
        _id: '8', 
        title: 'Orthodontic treatment', 
        desc: 'Correction of misaligned teeth and jaws using braces or aligners, improving dental health and enhancing smile aesthetics.', 
        pic: OrthodonticTreatment,
        price: 200,
        treatmentOptions: 'Traditional braces, Invisalign'
    },
    {
        _id: '9', 
        title: 'Periodontal treatment', 
        desc: 'Treatment for gum disease, including scaling, root planing, and other procedures to restore gum health and prevent tooth loss.', 
        pic: PeriodontalTreatment,
        price: 120,
        treatmentOptions: 'Scaling and root planing, Periodontal surgery'
    },
    {
        _id: '10', 
        title: 'Dental bridges', 
        desc: 'Fixed dental prostheses to replace missing teeth, restoring your smile appearance and function.', 
        pic: DentalBridges,
        price: 250,
        treatmentOptions: 'Traditional bridges, Cantilever bridges'
    },
    {
        _id: '11', 
        title: 'Oral surgery', 
        desc: 'Surgical procedures to address various dental issues, including tooth extraction, dental implants, and jaw surgeries.', 
        pic: OralSurgery,
        price: 360,
        treatmentOptions: 'Tooth extraction, Dental implants, Jaw surgeries'
    },
    {
        _id: '12', 
        title: 'Sedation dentistry', 
        desc: 'Techniques to help patients relax and feel comfortable during dental procedures, reducing anxiety and discomfort.', 
        pic: SedationDentistry,
        price: 120,
        treatmentOptions: 'Nitrous oxide, Oral sedatives'
    },
    {
        _id: '13', 
        title: 'Dental veneers', 
        desc: 'Thin shells bonded to the front of teeth to improve their appearance, covering stains, chips, or other imperfections.', 
        pic: DentalVeneers,
        price: 200,
        treatmentOptions: 'Porcelain veneers, Composite veneers'
    },
    {
        _id: '14', 
        title: 'Fluoride treatment', 
        desc: 'Application of fluoride to strengthen tooth enamel and prevent tooth decay, especially in children and adults at risk for cavities.', 
        pic: FluorideTreatment,
        price: 90,
        treatmentOptions: 'Topical fluoride, Fluoride varnish'
    },
    {
        _id: '15', 
        title: 'TMJ treatment', 
        desc: 'Treatment for temporomandibular joint disorders, including exercises, medications, and dental devices to alleviate pain and discomfort.', 
        pic: TMJTreatment,
        price: 180,
        treatmentOptions: 'Mouthguards, Physical therapy'
    },
    {
        _id: '16', 
        title: 'Pediatric dentistry', 
        desc: 'Dental care for children, including preventive services, restorative treatments, and education to promote lifelong oral health.', 
        pic: PediatricDentistry,
        price: 200,
        treatmentOptions: 'Dental exams, Fluoride treatments, Sealants'
    },
    {
        _id: '17', 
        title: 'Cosmetic dentistry', 
        desc: 'Aesthetic dental treatments to enhance the appearance of teeth and smile, including whitening, veneers, and bonding.', 
        pic: CosmeticDentistry,
        price: 140,
        treatmentOptions: 'Teeth whitening, Dental veneers, Dental bonding'
    },
    {
        _id: '18', 
        title: 'Endodontic treatment', 
        desc: 'Treatment for infected tooth pulp, including root canal therapy to remove the infected tissue and restore tooth health.', 
        pic: RootCananl,
        price: 100,
        treatmentOptions: 'Root canal therapy, Apicoectomy'
    },
    {
        _id: '19', 
        title: 'Digital dental impressions', 
        desc: 'Precise digital impressions of teeth and oral structures for various dental procedures, ensuring accurate treatment planning and outcomes.', 
        pic: DigitalDentalImpressions,
        price: 30,
        treatmentOptions: 'Intraoral scanning, 3D imaging'
    },
    {
        _id: '20', 
        title: 'Gum reshaping', 
        desc: 'Surgical or non-surgical procedures to reshape gum tissue, enhancing the appearance of the smile and improving periodontal health.', 
        pic: GumReshaping,
        price: 50,
        treatmentOptions: 'Gingivectomy, Gum grafting'
    },
    {
        _id: '21', 
        title: 'Dental bonding', 
        desc: 'Application of tooth-colored resin to repair chips, cracks, or gaps in teeth, restoring their appearance and function.', 
        pic: DentalBonding,
        price: 35,
        treatmentOptions: 'Direct bonding, Indirect bonding'
    },
    {
        _id: '22', 
        title: 'Tooth contouring', 
        desc: 'Subtle reshaping of tooth enamel to improve tooth appearance and alignment, often combined with dental bonding or veneers.', 
        pic: ToothContouring,
        price: 140,
        treatmentOptions: 'Enameloplasty, Contouring and reshaping'
    },
    {
        _id: '23', 
        title: 'Nightguards', 
        desc: 'Custom-fitted oral appliances worn during sleep to protect teeth from grinding (bruxism) and reduce related symptoms such as jaw pain and headaches.', 
        pic: Nightguards,
        price: 165,
        treatmentOptions: 'Custom-fitted nightguards'
    },
    {
        _id: '24', 
        title: 'Bruxism treatment', 
        desc: 'Therapies and interventions to address teeth grinding and clenching, including lifestyle changes, dental appliances, and stress management techniques.', 
        pic: BruxismTreatment,
        price: 100,
        treatmentOptions: 'Mouthguards, Stress management, Orthodontic treatment'
    }
];

export const doctors = [
    {
        id: '0',
        name: 'Dr Mark Roberts',
        pic: Doctor1,
        role: 'Orthodontist',
        detailedRole: 'Specializes in orthodontic treatments, including braces and Invisalign, to align teeth and correct bites.',
        education: ['DMD, Harvard School of Dental Medicine'],
        exp: ['15 years experience in orthodontic practice', 'Member of American Association of Orthodontists']
    },
    {
        id: '1',
        name: 'Dr Michael Adam',
        pic: Doctor2,
        role: 'Endodontist',
        detailedRole: 'Specializes in root canal therapy and treatment of dental pulp diseases.',
        education: ['DDS, University of Michigan School of Dentistry'],
        exp: ['10 years experience in endodontic practice', 'Member of American Association of Endodontists']
    },
    {
        id: '2',
        name: 'Dr David Wilson',
        pic: Doctor3,
        role: 'Oral Surgeon',
        detailedRole: 'Performs surgical procedures involving the teeth, mouth, and jaws.',
        education: ['DMD, Columbia University College of Dental Medicine'],
        exp: ['15 years experience in oral surgery', 'Fellow of the American Association of Oral and Maxillofacial Surgeons']
    },
    {
        id: '3',
        name: 'Dr Johnson Brown',
        pic: Doctor4,
        role: 'Prosthodontist',
        detailedRole: 'Specializes in the restoration and replacement of missing teeth and oral structures.',
        education: ['DDS, University of Pennsylvania School of Dental Medicine'],
        exp: ['20 years experience in prosthodontic practice', 'Diplomate of the American Board of Prosthodontics']
    },
    {
        id: '4',
        name: 'Dr Ryan Patel',
        pic: Doctor5,
        role: 'Pediatric Dentist',
        detailedRole: 'Dedicated to providing gentle and compassionate dental care for children and adolescents.',
        education: ['DMD, Boston University Henry M. Goldman School of Dental Medicine'],
        exp: ['10 years experience in pediatric dentistry', 'Member of American Academy of Pediatric Dentistry']
    },
    {
        id: '5',
        name: 'Dr Ethan Nguyen',
        pic: Doctor6,
        role: 'General Dentist',
        detailedRole: 'Offers a wide range of dental services, including cleanings, fillings, and oral health screenings.',
        education: ['DDS, University of Washington School of Dentistry'],
        exp: ['20 years experience in general dentistry', 'Member of Academy of General Dentistry']
    },
    {
        id: '6',
        name: 'Dr Steven Davis',
        pic: Doctor7,
        role: 'Oral Surgeon',
        detailedRole: 'Performs surgical procedures involving the teeth, mouth, and jaws.',
        education: ['DMD, Columbia University College of Dental Medicine'],
        exp: ['17 years experience in oral surgery', 'Fellow of the American Association of Oral and Maxillofacial Surgeons']
    }
];

export const aboutUsDetails = (type, isArabic) => {

    switch (type){
        case 'home-page-paragraph':
            return isArabic ? "مهاب هي شركة ديناميكية متخصصة في مجموعة شاملة من الخدمات بما في ذلك حلول الطباعة والتصميم والإعلان. مع الالتزام بالتميز والابتكار، تستفيد موهاب من التكنولوجيا المتطورة والخبرة الإبداعية لتقديم نتائج لا مثيل لها لعملائها. بدءًا من تطوير المفهوم وحتى التنفيذ النهائي، يعمل فريق موهاب المتفاني بشكل وثيق مع العملاء لتحقيق رؤيتهم على أرض الواقع، سواء من خلال التصميمات الجذابة أو الطباعة عالية الجودة أو الحملات الإعلانية المؤثرة. مع التركيز على رضا العملاء والاهتمام بالتفاصيل، يضمن موهاب تنفيذ كل مشروع بدقة واحترافية، مما يجعلهم شريكًا موثوقًا للشركات والمؤسسات التي تسعى إلى حلول تسويقية وعلامات تجارية عالية المستوى." : "Mohab is a dynamic company specializing in a comprehensive range of services including printing, designing, and advertising solutions. With a commitment to excellence and innovation, Mohab leverages cutting-edge technology and creative expertise to deliver unparalleled results to its clients. From concept development to final execution, Mohab's dedicated team works closely with customers to bring their visions to life, whether through eye-catching designs, high-quality printing, or impactful advertising campaigns. With a focus on customer satisfaction and attention to detail, Mohab ensures that each project is executed with precision and professionalism, making them a trusted partner for businesses and organizations seeking top-tier marketing and branding solutions."
        case 'home-page-short':
            return isArabic ? "تقدم مهاب خدمات الطباعة والتصميم والإعلان من الدرجة الأولى، حيث تمزج بين الابتكار والدقة لإضفاء الحيوية على رؤى العملاء." : "Mohab offers top-notch printing, design, and advertising services, blending innovation with precision to bring clients' visions to life."
        case 'home-page-landing':
            return !isArabic ? "Mohab offers top-notch printing, design, and advertising services, blending innovation with precision to bring clients' visions to life. Trusted for quality and creativity, Mohab stands as a premier partner for businesses seeking impactful marketing solutions." : "تقدم مهاب خدمات الطباعة والتصميم والإعلان من الدرجة الأولى، حيث تمزج بين الابتكار والدقة لإضفاء الحيوية على رؤى العملاء. نظرًا لثقته في الجودة والإبداع، يعد مهاب شريكًا رئيسيًا للشركات التي تبحث عن حلول تسويقية مؤثرة."
        case 'about-page-1':
            return isArabic ? "مهاب هي وجهتك الشاملة لاحتياجات الطباعة والتصميم والإعلان. مع التركيز على التميز ورضا العملاء، نقوم بتحويل الأفكار إلى صور جذابة وحملات تسويقية فعالة، مما يجعلنا الخيار المفضل للشركات التي تهدف إلى إحداث تأثير دائم." : "Mohab is your one-stop destination for printing, design, and advertising needs. With a focus on excellence and client satisfaction, we transform ideas into captivating visuals and effective marketing campaigns, making us the preferred choice for businesses aiming to make a lasting impact."
        case 'about-page-2':
            return isArabic ? "في مهاب، نتميز في خدمات الطباعة والتصميم والإعلان، حيث ندمج الإبداع مع الخبرة لتقديم نتائج استثنائية. تحظى بثقة الشركات من جميع الأحجام، ونحن نرفع مستوى العلامات التجارية من خلال الحلول المبتكرة والاهتمام الشخصي، ونضع معايير جديدة في الصناعة." : "At Mohab, we excel in printing, designing, and advertising services, merging creativity with expertise to deliver exceptional results. Trusted by businesses of all sizes, we elevate brands through innovative solutions and personalized attention, setting new standards in the industry."    
        case 'about-page-3':
            return isArabic ? "مهاب: حيث تجتمع الطباعة والتصميم والإعلان مع التميز. ارفع مستوى علامتك التجارية من خلال حلولنا المبتكرة وخدماتنا الشخصية." : "Mohab: Where printing, design, and advertising meet excellence. Elevate your brand with our innovative solutions and personalized service."    
    
    }
};

export const catagoriesArray = [
    'Print', 'Design', 'Ads'
];

export const getServiceSaleBgColor = (type) => {
    switch (type){
        case 'Hot':
            return 'red';
        case 'New':
            return '#98eb00';   
        default:
            return 'orange';
    }
};