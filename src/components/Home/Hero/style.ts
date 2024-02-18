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
    width: 65%
  }
  @media(min-width: 1440px) {
    width: 60%
  }
`
export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  @media(min-width: 768px) {
    font-size: 3rem;
  }
  @media(min-width: 1024px) {
    font-size: 4rem;
  }
  @media(min-width: 1440px) {
    font-size: 5rem;
  }
`
export const HeroDescription = styled.p`
font-size: 1.25rem;
 @media(min-width: 1024px) {
    font-size: 1.7rem;
  }
`
export const HeroButton = styled(Button)`
  background-color: #ECF39E;
  border-color: #132A13;
  color: #132A13;
  padding: 0.75rem 1.75rem;
  &:hover, :not(&-check)+&:active, &:focus-visible {
    background-color: #132A13 ;
    border-color: #ECF39E ;
    color: #ECF39E;
    box-shadow: none;
  }
  @media(min-width: 1024px) {
    font-size: 1.7rem;
  }
`
export const HeroDivider = styled.hr`
  width: 30%;
  height: 10px;
  background: #ECF39E;
  opacity: 1;
`
