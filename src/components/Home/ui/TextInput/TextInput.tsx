import { HomeTextInput } from './style'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
}
const TextInput: React.FC<Props> = (attributes) => {
  return (
    <HomeTextInput {...attributes} />
  )
}

export default TextInput
