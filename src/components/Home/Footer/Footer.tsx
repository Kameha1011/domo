import ContactForm from '../ContactForm/ContactForm'
import { Col, Row } from 'react-bootstrap'
import { FooterContainer, FooterEnd } from './style'
import SocialLinks from '../SocialLinks/SocialLinks'

const Footer: React.FC = () => {
  return (
    <FooterContainer className="pt-5">
      <Row className="m-0 gap-3 gap-lg-0">
        <Col xs={12} lg={6}>
          <ContactForm />
        </Col>
        <Col xs={12} lg={6} className="d-flex flex-column justify-content-center align-items-center">
          <SocialLinks />
          <ul className='list-unstyled text-light text-center '>
              <li className='fw-bold fs-5'>Navigation Links</li>
              <li>Home</li>
              <li>Services</li>
              <li>Projects</li>
          </ul>
        </Col>
        <Col xs={12} className="p-0">
          <FooterEnd className="text-light text-center p-3">
            <p className="m-0">© 2024. WebSite made by Omar Flores 🤓</p>
          </FooterEnd>
        </Col>
      </Row>
    </FooterContainer>
  )
}

export default Footer
