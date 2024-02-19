import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavbarContainer } from './style'
const Navbar: React.FC = () => {
  return (
    <NavbarContainer data-bs-theme="dark" expand="md">
      <Container>
        <NavbarContainer.Brand href="#home">Company Name</NavbarContainer.Brand>
        <NavbarContainer.Toggle aria-controls="navbarScroll" />
        <NavbarContainer.Collapse id="navbarScroll">
          <Nav className="ms-auto">
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </NavbarContainer.Collapse>
      </Container>
    </NavbarContainer>
  )
}

export default Navbar
