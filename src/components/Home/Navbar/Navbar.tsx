import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { Navbar as BsNavbar } from 'react-bootstrap'
import './style.css'
const Navbar: React.FC = () => {
  return (
    <BsNavbar data-bs-theme="dark" expand="md">
      <Container>
        <BsNavbar.Brand href="#home">Company Name</BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="navbarScroll" />
        <BsNavbar.Collapse id="navbarScroll">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  )
}

export default Navbar
