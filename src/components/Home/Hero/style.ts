import styled from 'styled-components'
import { Button, Container } from 'react-bootstrap'
import HeroBg from '../../../assets/images/banner.jpg'

// Styles are Mobile First

// I'm using transient props for $fluid to avoid warnings
interface HeroContainerProps {
  readonly $fluid: boolean
}
export const HeroContainer = styled(Container).attrs<HeroContainerProps>(
  (props: HeroContainerProps) => ({
    className: `${props.$fluid ? 'container-fluid' : 'container'}`,
    as: 'header'
  })
)`
  height: 100vh;
  position: relative;
  &:before {
    content: " ";
    z-index: -1;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),  url(${HeroBg});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    background-position: center;
  }
  @media(min-width: 768px) {
    height: 60vh;
  }
  @media(min-width: 1024px) {
    height: 90vh;
  }
`
export const HeroSection = styled.section`
  width: 100%;
  @media(min-width: 768px) {
    width: 80%
  }
  @media(min-width: 1024px) {
    width: 60%
  }
`
export const HeroButton = styled(Button)`
  background-color: #ECF39E;
  border-color: #132A13;
  color: #132A13;
  &:hover, :not(&-check)+&:active, &:focus-visible {
    background-color: #132A13 ;
    border-color: #ECF39E ;
    color: #ECF39E;
    box-shadow: none;
  }
`
export const HeroDivider = styled.hr`
  width: 30%;
  height: 10px;
  background: #ECF39E;
  opacity: 1;
`
