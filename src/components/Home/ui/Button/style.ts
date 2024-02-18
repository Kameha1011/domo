import styled from 'styled-components'
import { Button } from 'react-bootstrap'

export const HomeButton = styled(Button)`
  background-color: #ecf39e;
  border-color: #132a13;
  color: #132a13;
  padding: 0.75rem 1.75rem;
  &:hover,
  :not(&-check) + &:active,
  &:focus-visible {
    background-color: #132a13;
    border-color: #ecf39e;
    color: #ecf39e;
    box-shadow: none;
  }
  @media (min-width: 1024px) {
    font-size: 1.7rem;
  }
`
