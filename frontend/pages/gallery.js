import { useState } from 'react'
import Head from 'next/head'
import styled, { css } from 'styled-components'
import Fade from 'react-reveal/Fade'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'
import respondTo from '../components/Breakpoints'

// Components
import { colors, shadows } from '../components/theme'
import { Box2 } from '../components/Boxes'
import { Container, Flex } from '../components/Containers'
import PhotoGallery from '../components/PhotoGallery'

const gallery = ({
    galleryImage1,
    galleryImage2,
    galleryImage3,
    galleryImage4,
    galleryImage5,
    galleryImage6,
    galleryImage7,
    galleryImage8,
    galleryImage9,
    galleryImage10,
    galleryImage11,
    galleryImage12,
    galleryImage13,
    galleryImage14,
    galleryImage15,
    galleryImage16,
    galleryImage17,
    galleryImage18,
}) => {
    const [gallery, setGallery] = useState(false)
    const [galleryNumber, setGalleryNumber] = useState(0)

    const photos = [
        urlFor(galleryImage1),
        urlFor(galleryImage2),
        urlFor(galleryImage3),
        urlFor(galleryImage4),
        urlFor(galleryImage5),
        urlFor(galleryImage6),
        urlFor(galleryImage7),
        urlFor(galleryImage8),
        urlFor(galleryImage9),
        urlFor(galleryImage10),
        urlFor(galleryImage11),
        urlFor(galleryImage12),
        urlFor(galleryImage13),
        urlFor(galleryImage14),
        urlFor(galleryImage15),
        urlFor(galleryImage16),
        urlFor(galleryImage17),
        urlFor(galleryImage18),
    ]

    const selectPhoto = (photoNumber) => {
        setGallery(true)
        setGalleryNumber(photoNumber)
    }

    const toggleRightArrow = () => {
        if (galleryNumber >= photos.length-1) {
            setGalleryNumber(0)
        } else {
            setGalleryNumber(galleryNumber + 1)
        }
    }

    const toggleLeftArrow = () => {
        if (galleryNumber == 0) {
            setGalleryNumber(photos.length-1)
        } else {
            setGalleryNumber(galleryNumber - 1)
        }
    }

    return (
        <>
            <Head>
                <title>Gallery | Alx Photography</title>
            </Head>
            <Container>
                <Box2 marginTop={50} marginBottom={50}>
                    <Flex style={{ justifyContent: 'center'}} wrap='true'>
                        {photos.map((photo, index) => (
                            <Fade delay={100 * (index+1)} key={index} ssrFadout>
                                <Photo style={{ backgroundImage: `url(${photo})`}} onClick={() => selectPhoto(index)} />
                            </Fade>
                        ))}
                    </Flex>
                </Box2>
            </Container>
            <Backdrop onClick={() => setGallery(false)} open={gallery} />
            {gallery && <PhotoGallery
                photos={photos}
                toggleLeftArrow={toggleLeftArrow} toggleRightArrow={toggleRightArrow}
                galleryNumber={galleryNumber}
            />}
        </>
    )
}

function urlFor(source) {
    return imageUrlBuilder(client).image(source)
}

const Backdrop = styled.div`
	position: fixed;
    top: 0;
    left: 0;
	height: 100vh;
	width: 100%;
	background: #000;
	z-index: -1;
	opacity: 0;
	transition: all .5s ease;

	${props => props.open && css`
		z-index: 999;
		opacity: .8;
	`}
`

const Photo = styled.div`
    height: 30rem;
    width: 30rem;
    background-position: center;
    background-size: cover;
    border: 1px solid transparent;
    box-shadow: ${shadows.card};
    transition: all .5s ease;
    margin-bottom: 2rem;

    ${respondTo.xs`
        height: 35rem;
        width: 35rem;
    `}

    ${respondTo.sm`
        height: 24rem;
        width: 24rem;
        margin-right: 2rem;
    `}

    ${respondTo.lg`
        height: 35rem;
        width: 35rem;
    `}

    ${respondTo.xl`
        height: 50rem;
        width: 50rem;
        margin-right: 3rem;
        margin-bottom: 3rem;
    `}

    &:hover {
        border: 1px solid ${colors.gold};
        box-shadow: none;
        cursor: pointer;
    }
`

const P3BlockStyle = styled.div`
    font-size: 1.5rem;
    line-height: 20px;
    letter-spacing: .5px;
    font-family: acumin-pro-condensed,sans-serif;
    font-weight: light;

    ${respondTo.sm`
        font-size: 1.6rem;
    `}

    ${respondTo.md`
        font-size: 1.8rem;
    `}

    ${respondTo.xl`
        font-size: 3rem;
        line-height: 38px;
    `}
`

gallery.getInitialProps = async () => {
    return await client.fetch(groq`*[_type == "gallery" && slug.current == "v1"][0]{
            galleryImage1,
            galleryImage2,
            galleryImage3,
            galleryImage4,
            galleryImage5,
            galleryImage6,
            galleryImage7,
            galleryImage8,
            galleryImage9,
            galleryImage10,
            galleryImage11,
            galleryImage12,
            galleryImage13,
            galleryImage14,
            galleryImage15,
            galleryImage16,
            galleryImage17,
            galleryImage18,
        }
    `)
}

export default gallery
