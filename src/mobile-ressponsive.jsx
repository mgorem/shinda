// Responsive upto 1045 * 812
import {css} from 'styled-components'

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 448px) {
            ${props}
        }
    `
}