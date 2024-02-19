import { HomeTextInput } from './style'
import type { FormControlProps } from 'react-bootstrap/FormControl'

interface Props extends FormControlProps {
}
const TextInput: React.FC<Props> = (attributes) => {
  return (
    <HomeTextInput {...attributes} />
  )
}

export default TextInput
