import styled, { css } from 'styled-components'
import respondTo from './Breakpoints'
import { colors, shadows } from './theme'

export const Button1 = styled.button`
    padding: 0 4rem;
    height: 4rem;
    border: none;
    border-radius: 10px;
    box-shadow: ${shadows.button};
    color: ${colors.white};
    background: ${colors.secondaryGreen};
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 1px;
    transition: all .3s ease;
    font-family: 'Overpass', sans-serif;
    font-weight: 700;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ${respondTo.xs`
        height: 4.5rem;
        font-size: 1.4rem;
        letter-spacing: 3px;
    `}

    ${respondTo.sm`
        height: 4.5rem;
        font-size: 1.4rem;
    `}

    ${respondTo.md`
        height: 5rem;
    `}

    ${respondTo.xl`
        height: 6rem;
        font-size: 1.8rem;
    `}

    &:hover {
        background: ${colors.secondaryBlue};
        color: ${colors.white};
        box-shadow: ${shadows.card};
        transform: scale(1.02);
        cursor: pointer;
    }

    ${props => props.active && css`
        background: ${colors.secondaryBlue};
        color: ${colors.white};
    `}
`

export const Button2 = styled.button`
    padding: 0 4rem;
    height: 4rem;
    border: none;
    border-radius: 10px;
    box-shadow: ${shadows.button};
    color: ${colors.primaryBlack};
    background: ${colors.white};
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 1px;
    transition: all .3s ease;
    font-family: 'Overpass', sans-serif;
    font-weight: 700;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ${respondTo.xs`
        height: 4.5rem;
        font-size: 1.4rem;
        letter-spacing: 3px;
    `}

    ${respondTo.sm`
        height: 4.5rem;
        font-size: 1.4rem;
    `}

    ${respondTo.md`
        height: 5rem;
    `}

    ${respondTo.xl`
        height: 6rem;
        font-size: 1.8rem;
    `}

    &:hover {
        background: ${colors.secondaryBlue};
        color: ${colors.white};
        box-shadow: ${shadows.card};
        transform: scale(1.02);
        cursor: pointer;
    }

    ${props => props.active && css`
        background: ${colors.secondaryBlue};
        color: ${colors.white};
    `}
`
