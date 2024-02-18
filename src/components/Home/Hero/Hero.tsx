import { HeroButton, HeroContainer, HeroDivider, HeroSection } from './style'
const Hero: React.FC = () => {
  return (
    <HeroContainer $fluid className='d-flex flex-column justify-content-center text-light'>
      <HeroSection className='p-3'>
        <h1 className='display-3'>Welcome To Our Company Website</h1>
        <HeroDivider/>
        <p className='lead fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur debitis deleniti ab numquam vero, totam, fugit rerum deserunt nesciunt exercitationem sapiente eveniet, odit delectus neque error libero porro ipsam asperiores.</p>
        <HeroButton> See More</HeroButton>
      </HeroSection>
    </HeroContainer>
  )
}

export default Hero
