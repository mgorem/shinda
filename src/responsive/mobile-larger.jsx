import {css} from 'styled-components'

export const mobileLarger = (props) => {
    return css`
    // 1052 - 475px for devices larger than a mobile
        @media only screen and (max-width: 635px) {
            ${props}
        }
    `
}