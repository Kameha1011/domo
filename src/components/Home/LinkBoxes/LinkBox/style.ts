import styled from 'styled-components'
import { BsArrowRightSquareFill } from 'react-icons/bs'

interface LinkBoxContainerProps {
  readonly $isEven: boolean
}
interface LinkBoxIconProps extends LinkBoxContainerProps {
}
export const LinkBoxContainer = styled.article`
  padding: 1rem;
  background-color: ${({ $isEven }: LinkBoxContainerProps) => ($isEven ? '#132a13' : '#31572C')};
  height: 300px;
  max-width: 100%;
`
export const LinkBoxTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
`
export const LinkBoxDescription = styled.p`
  font-size: 1rem;
`
export const LinkBoxIcon = styled(BsArrowRightSquareFill)`
  font-size: 3rem;
  color: ${({ $isEven }: LinkBoxIconProps) => ($isEven ? '#90A955' : '#ecf39e')};
  border-radius: 0.5rem;
  &:hover {
    background-color: ${({ $isEven }: LinkBoxIconProps) => ($isEven ? '#90A95C' : '#ecf39e')};
    color: ${({ $isEven }: LinkBoxIconProps) => ($isEven ? '#ecf39e' : '#90A95C')};
    transition: all 0.3s ease-out;
  }
`
