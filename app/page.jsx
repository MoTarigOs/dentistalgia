import Landing from "@sections/Landing"
import './Home.css';
import HeroSection from "@sections/HeroSection";

const page = () => {
  return (

    <div className="HomeContainer">

      <div className="Home">
          
          <Landing />

          <HeroSection />

      </div>

    </div>

  )
}

export default page
