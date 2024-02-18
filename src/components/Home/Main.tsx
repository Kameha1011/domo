import { type PropsWithChildren } from 'react'
import { Container } from 'react-bootstrap'

const Main: React.FC = ({ children }: PropsWithChildren) => {
  return (
    <Container as={'main'} fluid>
      {children}
    </Container>
  )
}

export default Main
