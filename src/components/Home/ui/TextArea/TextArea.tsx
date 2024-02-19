import { HomeTextArea } from './style'

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {

}
const TextArea: React.FC<Props> = (attributes) => {
  return (
    <HomeTextArea as="textarea" className="form-control" {...attributes} />
  )
}

export default TextArea
