import Form from 'react-bootstrap/Form'
import TextInput from '../ui/TextInput/TextInput'
import Button from '../ui/Button/Button'
import TextArea from '../ui/TextArea/TextArea'
const ContactForm: React.FC = () => {
  return (
    <Form className='d-flex flex-column gap-3 text-light'>
      <h2>Contact Us</h2>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <TextInput type="text" placeholder="Allucard Tepes" name='name' />
      </Form.Group>
      <Form.Group>
        <Form.Label>Mail</Form.Label>
        <TextInput type="email" placeholder="allucard@mail.com" name='email' />
      </Form.Group>
      <Form.Group>
        <Form.Label>Message</Form.Label>
        <TextArea name='message' placeholder="Allucard Tepes" rows={5} />
      </Form.Group>
      <Button>Send</Button>
    </Form>
  )
}

export default ContactForm
