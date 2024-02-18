import { type LinkBox as LinkBoxType } from '../../../../types'
import Col from 'react-bootstrap/Col'
import {
  LinkBoxContainer,
  LinkBoxDescription,
  LinkBoxIcon,
  LinkBoxTitle
} from './style'

interface Props extends LinkBoxType {
  index: number
}
const LinkBox: React.FC<Props> = ({ title, description, index }) => {
  return (
    <Col xs={12} sm={6} lg={3} className="p-0">
      <LinkBoxContainer
        className="d-flex flex-column gap-3 text-light"
        $isEven={index % 2 === 0}
      >
        <LinkBoxTitle>{title}</LinkBoxTitle>
        <LinkBoxDescription>{description}</LinkBoxDescription>
        <LinkBoxIcon className="align-self-end" type="button" $isEven={index % 2 === 0}/>
      </LinkBoxContainer>
    </Col>
  )
}

export default LinkBox
