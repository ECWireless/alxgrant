import styled, { css } from 'styled-components'
import { colors, shadows } from './theme'
import respondTo from './Breakpoints'
import { Box3 } from './Boxes'
import { Flex } from './Containers'

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
// onClick={() => setSidebar(true)}
export const ButtonMenu = () => {
    return (
        <ButtonContainer >
            <Flex direction={'column'} justify={'space-between'}>
                <Box3>
                    <ButtonMenuLine width={35} color={'white'} />
                </Box3>
                <Box3 marginTop={8}>
                    <ButtonMenuLine width={35} color={'white'} />
                </Box3>
                <Box3 marginTop={8}>
                    <ButtonMenuLine width={35} color={'white'} />
                </Box3>
            </Flex>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
    position: absolute;
    left: 2rem;
    top: 1.5rem;
    width: 50px;
    height: 50px;
    background: ${colors.white};
    border-radius: 50%;
    display: flex;
    flex-direction: column;
	justify-content: center;
    transition: all .5s ease;
    z-index: 101;

    &:hover,
    &:focus,
    &:active {
		background: ${colors.greyHover};
        cursor: pointer;
    }

    ${respondTo.xs`
        top: 1.2rem;
        left: 4rem;
        width: 55px;
        height: 55px;
    `}

    ${respondTo.sm`
        top: 2rem;
        width: 60px;
        height: 60px;
    `}

    ${respondTo.md`
        top: 4rem;
    `}

    ${respondTo.lg`
        display: none;
    `}
`

const ButtonMenuLine = styled.div`
    background: ${colors.gold};

    ${props => css`
        width: ${props.width * .8}px;
        height: 2px;
        margin: 0 auto;

        ${respondTo.xs`
            width: ${props.width * .9}px;
            height: 2px;
            margin: 0 auto;
        `}

        ${respondTo.sm`
            width: ${props.width}px;
            height: 3px;
            margin: 0 auto;
        `}
    `};
`
