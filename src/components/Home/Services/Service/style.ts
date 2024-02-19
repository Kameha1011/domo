import styled from 'styled-components'

interface ServiceContainerProps {
  $isEven: boolean
}

export const ServiceContainer = styled.section`
  width: 100%;
  background-color: ${({ $isEven }: ServiceContainerProps) => ($isEven ? '#132a13' : '#31572C')};
`
export const ServiceTitle = styled.h2`
font-size: 2.5rem;
  @media(min-width: 1024px) {
    font-size: 3.5rem;
  }
`
export const ServiceDescription = styled.p`
   @media(min-width: 1024px) {
    font-size: 1.5rem;
  }
`
export const ServiceImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  @media(min-width: 768px) {
    height: 300px;
  }
`
