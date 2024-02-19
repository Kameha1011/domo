import styled from 'styled-components'
import Form from 'react-bootstrap/Form'

export const HomeTextInput = styled(Form.Control)`
    background-color: #132a13;
    border-color: #ecf39e;
    color: #ecf39e;
    &:hover,
    :not(&-check) + &:active,
    &:focus-visible {
        background-color: #132a13;
        border-color: #ecf39e;
        color: #ecf39e;
        box-shadow: none;
    }
`
