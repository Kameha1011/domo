import { HomeButton } from './style'
import type { ButtonProps } from 'react-bootstrap/Button'

interface Props extends ButtonProps {
  children: React.ReactNode
}
const Button: React.FC<Props> = ({ children, ...attributes }) => {
  return <HomeButton {...attributes as ButtonProps}>{children}</HomeButton>
}

export default Button
