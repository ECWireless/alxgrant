import { useState } from 'react'
import Head from 'next/head'
import styled, { css } from 'styled-components'
import Fade from 'react-reveal/Fade'
import groq from 'groq'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'
import respondTo from '../components/Breakpoints'

// Components
import { colors, shadows } from '../components/theme'
import { Box2, Box3 } from '../components/Boxes'
import { Container, Flex } from '../components/Containers'
import PhotoGallery from '../components/PhotoGallery'
import { H2 } from '../components/Typography'

const realEstate = ({
    realEstateHeading,
    realEstateBodyText,
    realEstateImage1,
    realEstateImage2,
    realEstateImage3,
    realEstateImage4,
    realEstateImage5,
    realEstateImage6,
}) => {
    const [gallery, setGallery] = useState(false)
    const [galleryNumber, setGalleryNumber] = useState(0)

    const photos = [
        urlFor(realEstateImage1),
        urlFor(realEstateImage2),
        urlFor(realEstateImage3),
        urlFor(realEstateImage4),
        urlFor(realEstateImage5),
        urlFor(realEstateImage6),
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
                <title>Weddings | Alx Photography</title>
            </Head>
            <Container>
                <Box2 marginTop={50} marginBottom={50}>
                    <Flex respondFlip justify={'space-between'} align={'flex-start'}>
                        <Box3 width={660}>
                            <Flex wrap='true'>
                                {photos.map((photo, index) => (
                                    <Fade delay={100 * (index+1)} key={index} ssrFadout>
                                        <Photo style={{ backgroundImage: `url(${photo})`}} onClick={() => selectPhoto(index)} />
                                    </Fade>
                                ))}
                            </Flex>
                        </Box3>
                        <Flex direction={'column'}>
                            <Box3 marginBottom={50}>
                                <Fade ssrFadout>
                                    <H2 color={colors.black} uppercase>
                                        {realEstateHeading}
                                    </H2>
                                </Fade>
                            </Box3>
                            <Fade delay={200} ssrFadout>
                                <Box2 width={500}>
                                    <Box3 marginBottom={75}>
                                        <P3BlockStyle>
                                            <BlockContent
                                                blocks={realEstateBodyText}
                                            />
                                        </P3BlockStyle>
                                    </Box3>
                                </Box2>
                            </Fade>
                        </Flex>
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
        height: 30rem;
        width: 30rem;
    `}

    ${respondTo.xl`
        height: 30rem;
        width: 30rem;
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

realEstate.getInitialProps = async () => {
    return await client.fetch(groq`*[_type == "realEstate" && slug.current == "v1"][0]{
            realEstateHeading,
            realEstateBodyText,
            realEstateImage1,
            realEstateImage2,
            realEstateImage3,
            realEstateImage4,
            realEstateImage5,
            realEstateImage6,
        }
    `)
}

export default realEstate
