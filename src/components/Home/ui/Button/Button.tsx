import { HomeButton } from './style'

interface Props {
  children: React.ReactNode
}
const Button: React.FC<Props> = ({ children }) => {
  return <HomeButton>{children}</HomeButton>
}

export default Button
