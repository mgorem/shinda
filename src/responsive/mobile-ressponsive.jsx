// Responsive upto 1045 * 812
import {css} from 'styled-components'

export const mobile = (props) => {
    return css`
    // 1052 - 475px for devices larger than a mobile
        @media only screen and (max-width: 475px) {
            ${props}
        }
    `
}