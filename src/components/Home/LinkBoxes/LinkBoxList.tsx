import { linkBoxes } from '../../../constants/LinkBoxes'
import Row from 'react-bootstrap/Row'
import LinkBox from './LinkBox/LinkBox'
import { LinkBoxListContainer } from './style'
const LinkBoxList: React.FC = () => {
  return (
    <LinkBoxListContainer>
        <Row className='m-0'>
            {linkBoxes.map((linkBox, index) => (
                <LinkBox {...linkBox} index={index} key={index} />
            ))}
        </Row>
    </LinkBoxListContainer>
  )
}

export default LinkBoxList
