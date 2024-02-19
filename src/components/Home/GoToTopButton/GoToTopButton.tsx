import { GoToTopBtn } from './style'
import { FaArrowUp } from 'react-icons/fa'
import useGoToTop from '../../../hook/useGoToTop'

const GoToTopButton: React.FC = () => {
  const [isVisible, scrollToTop] = useGoToTop()
  return (
    <>
      <GoToTopBtn onClick={scrollToTop} $isVisible={isVisible}>
        <FaArrowUp className="icon" />
      </GoToTopBtn>
    </>
  )
}

export default GoToTopButton
