// Responsive upto 1045 * 812
import {css} from 'styled-components'

export const smallerTablet = (props) => {
    return css`
    // 775 - 475px for smaller tablets
        @media only screen and (max-width: 775px) {
            ${props}
        }
    `
}