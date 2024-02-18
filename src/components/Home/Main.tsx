import { Container } from 'react-bootstrap'

interface Props {
  children: React.ReactNode
}
const Main: React.FC<Props> = ({ children }) => {
  return (
    <Container as={'main'} fluid className='p-0'>
      {children}
    </Container>
  )
}

export default Main
