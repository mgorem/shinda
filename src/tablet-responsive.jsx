// Responsive upto 1045 * 812
import {css} from 'styled-components'

export const tablet = (props) => {
    return css`
        @media only screen and (max-width: 1052px) {
            ${props}
        }
    `
}