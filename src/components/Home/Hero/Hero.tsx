import Button from '../ui/Button/Button'
import Divider from '../ui/Divider/Divider'
import { HeroContainer, HeroDescription, HeroSection, HeroTitle } from './style'
const Hero: React.FC = () => {
  return (
    <HeroContainer $fluid className='d-flex align-items-center text-light'>
      <HeroSection className='p-3 ms-lg-5'>
        <HeroTitle>Welcome To Our Company Website</HeroTitle>
        <Divider />
        <HeroDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur debitis deleniti ab numquam vero, totam, fugit rerum deserunt nesciunt exercitationem sapiente eveniet, odit delectus neque error libero porro ipsam asperiores.</HeroDescription>
        <Button> See More</Button>
      </HeroSection>
    </HeroContainer>
  )
}

export default Hero
