import styled, { css } from 'styled-components'
import Fade from 'react-reveal/Fade'
import respondTo from './Breakpoints'

// Components
import { colors, shadows } from './theme'

const PhotoGallery = ({
    photos,
    galleryNumber,
    toggleLeftArrow,
    toggleRightArrow,
}) => {
    return (
        <>
            <SVGLeft onClick={toggleLeftArrow} version="1.1" fill={colors.white} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <title>circle-left</title>
                <path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13z"></path>
                <path d="M20.914 9.914l-2.829-2.829-8.914 8.914 8.914 8.914 2.828-2.828-6.086-6.086z"></path>
            </SVGLeft>
            <GalleryContainer>
                <Fade ssrFadeout>
                    <Photo photos={photos} galleryNumber={galleryNumber} />
                </Fade>
            </GalleryContainer>
            <SVGRight onClick={toggleRightArrow} version="1.1" fill={colors.white} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <title>circle-right</title>
                <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path>
                <path d="M11.086 22.086l2.829 2.829 8.914-8.914-8.914-8.914-2.828 2.828 6.086 6.086z"></path>
            </SVGRight>
        </>
    )
}

export default PhotoGallery

const GalleryContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
`

const Photo = styled.div`
    height: 22rem;
    width: 22rem;
    background-position: center;
    background-size: cover;
    box-shadow: ${shadows.card};
    border: 2px solid ${colors.gold};

    ${respondTo.xs`
        height: 32rem;
        width: 32rem;
    `}

    ${respondTo.sm`
        height: 40rem;
        width: 50rem;
    `}

    ${respondTo.md`
        height: 50rem;
        width: 70rem;
    `}

    ${respondTo.lg`
        height: 50rem;
        width: 80rem;
    `}

    ${respondTo.xl`
        height: 80rem;
        width: 120rem;
    `}

    ${props => css`
        background-image: url(${props.photos[props.galleryNumber]});
    `}
`

const SVGLeft = styled.svg`
    position: fixed;
    left: 1rem;
    top: 50%;
    transform: scale(1);
    z-index: 1001;
    width: 3rem;
    height: 3rem;
    transition: all .3s ease;

    ${respondTo.xs`
        left: 2rem;
        width: 4rem;
        height: 4rem;
    `}

    ${respondTo.sm`
        left: 6rem;
        width: 5rem;
        height: 5rem;
    `}

    ${respondTo.lg`
        left: 10rem;
    `}

    ${respondTo.xl`
        left: 15rem;
        width: 7rem;
        height: 7rem;
    `}

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
`

const SVGRight = styled.svg`
    position: fixed;
    right: 1rem;
    top: 50%;
    transform: scale(1);
    z-index: 1001;
    width: 3rem;
    height: 3rem;
    transition: all .3s ease;

    ${respondTo.xs`
        right: 2rem;
        width: 4rem;
        height: 4rem;
    `}

    ${respondTo.sm`
        right: 6rem;
        width: 5rem;
        height: 5rem;
    `}

    ${respondTo.lg`
        right: 10rem;
    `}

    ${respondTo.xl`
        right: 15rem;
        width: 7rem;
        height: 7rem;
    `}

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
`
