import styled from 'styled-components'
import Form from 'react-bootstrap/Form'
import type { FormControlProps } from 'react-bootstrap'

export const HomeTextInput = styled(Form.Control)<FormControlProps>`
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
