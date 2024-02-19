import { HomeButton } from './style'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}
const Button: React.FC<Props> = ({ children, ...attributes }) => {
  return <HomeButton {...attributes}>{children}</HomeButton>
}

export default Button
