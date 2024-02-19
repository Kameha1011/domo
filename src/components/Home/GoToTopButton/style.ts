import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
    0% {
        display: none;
        opacity: 0;
    }
    100% {
        display: block;
        opacity: 1;
    }
`
const fadeOut = keyframes`
    0% {
        display: block;
        opacity: 1;
    }
    100% {
        display: none;
        opacity: 0;
    }
`

interface GoToTopBtnProps {
  $isVisible: boolean
}
export const GoToTopBtn = styled.button<GoToTopBtnProps>`
  animation: ${({ $isVisible }) => ($isVisible ? fadeIn : fadeOut)}
    0.5s ease-in-out forwards;
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: #132a13;
  background-color: #ecf39e;
  border: none;
  border-radius: 3rem;
  padding: 10px;
  .icon {
    font-size: 3rem;
  }
`
