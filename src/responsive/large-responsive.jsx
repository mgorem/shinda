// Responsive upto 1045 * 812
import {css} from 'styled-components'

export const large = (props) => {
    return css`
    // 1609 - 1052px for devices larger than a tablet
        @media only screen and (max-width: 1609px) {
            ${props}
        }
    `
}