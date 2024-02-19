import Button from '../../ui/Button/Button'
import Divider from '../../ui/Divider/Divider'
import { Col, Row } from 'react-bootstrap'
import { ServiceContainer, ServiceDescription, ServiceImage, ServiceTitle } from './style'
import { type Service as ServiceType } from '../../../../types'

interface Props extends ServiceType {
  index: number
}
const Service: React.FC<Props> = ({ index, title, description, src }) => {
  return (
    <ServiceContainer className="py-md-5 text-light" $isEven={index % 2 === 0}>
      <Row className="m-0 justify-content-between">
        <Col xs={12} md={6} lg={7} className="p-4">
          <ServiceTitle>{title}</ServiceTitle>
          <Divider />
          <ServiceDescription className='lead'>{description}</ServiceDescription>
          <Button>See More</Button>
        </Col>
        <Col
          xs={12}
          md={5}
          lg={4}
          className="p-0 pb-md-4 d-flex align-items-end"
        >
          <ServiceImage src={src} alt={title} />
        </Col>
      </Row>
    </ServiceContainer>
  )
}

export default Service
