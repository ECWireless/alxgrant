import styled, { css } from 'styled-components'
import respondTo from '../components/Breakpoints'

export const H1 = styled.h1`
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 35px;
    letter-spacing: 3px;
    font-family: 'Overpass', sans-serif;

    ${respondTo.xs`
        line-height: 40px;
        font-size: 3.4rem;
    `}

    ${respondTo.sm`
        font-size: 5.2rem;
        line-height: 70px;
    `}

    ${respondTo.md`
        font-size: 6.5rem;
    `}

    ${respondTo.lg`
        font-size: 7rem;
    `}

    ${respondTo.xl`
        font-size: 8.5rem;
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}


    ${props => css`
        color: ${props.color}
    `}
`

export const H2 = styled.h2`
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 35px;
    letter-spacing: 3px;
    font-family: 'Overpass', sans-serif;

    ${respondTo.xs`
        font-size: 3.5rem;
        line-height: 45px;
    `}

    ${respondTo.sm`
        font-size: 4rem;
    `}

    ${respondTo.md`
        font-size: 4.5rem;
    `}

    ${respondTo.lg`
        font-size: 5rem;
    `}

    ${respondTo.xl`
        font-size: 5.5rem;
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}


    ${props => css`
        color: ${props.color}
    `}
`

export const H3 = styled.h3`
    font-size: 2rem;
    font-weight: 600;
    line-height: 25px;
    letter-spacing: 2px;
    font-family: 'Overpass', sans-serif;

    ${respondTo.xs`
        font-size: 2.2rem;
        line-height: 35px;
    `}

    ${respondTo.sm`
        font-size: 2.6rem;
    `}

    ${respondTo.md`
        font-size: 3rem;
    `}

    ${respondTo.lg`
        font-size: 3.5rem;
    `}

    ${respondTo.xl`
        font-size: 4rem;
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}

    ${props => css`
        color: ${props.color}
    `}
`

export const H4 = styled.h4`
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 1px;
    font-family: 'Overpass', sans-serif;

    ${respondTo.sm`
        font-size: 2rem;
    `}

    ${respondTo.md`
        font-size: 2.2rem;
    `}

    ${respondTo.lg`
        font-size: 2.5rem;
    `}

    ${respondTo.xl`
        font-size: 3.2rem;
        line-height: 40px;
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}


    ${props => css`
        color: ${props.color}
    `}
`

export const P1 = styled.p`
    font-size: 1.4rem;
    line-height: 20px;
    letter-spacing: 1px;
    font-family: 'Heebo', sans-serif;

    ${respondTo.xs`
        font-size: 1.6rem;
    `}

    ${respondTo.sm`
        font-size: 1.8rem;
    `}

    ${respondTo.md`
        font-size: 2rem;
    `}

    ${respondTo.lg`
        font-size: 2.2rem;
        line-height: 25px;
    `}

    ${respondTo.xl`
        font-size: 2.8rem;
        line-height: 25px;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => css`
        color: ${props.color}
    `}
`

export const P2 = styled.p`
    font-size: 1.6rem;
    line-height: 20px;
    letter-spacing: .5px;
    font-family: 'Heebo', sans-serif;

    ${respondTo.sm`
        font-size: 1.8rem;
    `}

    ${respondTo.md`
        font-size: 2rem;
        line-height: 25px;
    `}

    ${respondTo.xl`
        font-size: 2.6rem;
        line-height: 30px;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => css`
        color: ${props.color}
    `}
`

export const P3 = styled.p`
    font-size: 1.5rem;
    line-height: 20px;
    letter-spacing: .5px;
    font-family: 'Heebo', sans-serif;

    ${respondTo.sm`
        font-size: 1.6rem;
    `}

    ${respondTo.md`
        font-size: 1.8rem;
    `}

    ${respondTo.xl`
        font-size: 2.4rem;
        line-height: 25px;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => css`
        color: ${props.color}
    `}
`

export const P4 = styled.p`
    font-size: 1.4rem;
    line-height: 20px;
    letter-spacing: .5px;
    font-family: 'Heebo', sans-serif;

    ${respondTo.xs`
    `}

    ${respondTo.sm`
        font-size: 1.5rem;
    `}

    ${respondTo.md`
        font-size: 1.6rem;
    `}

    ${respondTo.xl`
        font-size: 2.2rem;
        line-height: 27px;
    `}

    ${props => props.uppercase && css`
        text-transform: uppercase;
    `}

    ${props => props.center && css`
        text-align: center;
    `}

    ${props => css`
        color: ${props.color}
    `}
`
