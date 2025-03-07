import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import Fade from 'react-reveal/Fade'
import groq from 'groq'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'
import respondTo from '../components/Breakpoints'

// Components
import { colors, shadows } from '../components/theme'
import { Box1, Box2, Box3 } from '../components/Boxes'
import { Container, Flex } from '../components/Containers'
import PhotoGallery from '../components/PhotoGallery'
import { H2, H4 } from '../components/Typography'

const index = ({
    homeHeading,
    homeLink1,
    homeLink2,
    homeLink3,
    homeBodyText,
    homeImage1,
    homeImage2,
    homeImage3,
}) => {
    const [gallery, setGallery] = useState(false)
    const [galleryNumber, setGalleryNumber] = useState(0)

    const photos = [
        urlFor(homeImage1),
        urlFor(homeImage2),
        urlFor(homeImage3),
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
                <title>Alx Photography</title>
            </Head>
            <Container>
                <Box2 marginTop={50} marginBottom={50}>
                    <Flex respondFlip justify={'space-between'} align={'center'}>
                        <Flex direction={'column'}>
                            <Box3 marginBottom={50}>
                                <Fade ssrFadout>
                                    <Photo style={{ backgroundImage: `url(${photos[0]})`}} onClick={() => selectPhoto(0)} />
                                </Fade>
                            </Box3>
                            <Box3 marginBottom={50}>
                                <Fade delay={200} ssrFadout>
                                    <Photo style={{ backgroundImage: `url(${photos[1]})`}} onClick={() => selectPhoto(1)} />
                                </Fade>
                            </Box3>
                            <Box3 marginBottom={50}>
                                <Fade delay={400} ssrFadout>
                                    <Photo style={{ backgroundImage: `url(${photos[2]})`}} onClick={() => selectPhoto(2)} />
                                </Fade>
                            </Box3>
                        </Flex>
                        <Flex direction={'column'}>
                            <Box3 marginBottom={25}>
                                <Fade ssrFadout>
                                    <H2 color={colors.black} uppercase>
                                        {homeHeading}
                                    </H2>
                                </Fade>
                            </Box3>
                            <Fade delay={200} ssrFadout>
                                <Flex>
                                    <Box2 marginRight={75}>
                                        <Link href='/weddings'>
                                            <a style={{textDecoration: 'none'}}>
                                                <H4 color={colors.gold} uppercase>
                                                    {homeLink1}
                                                </H4>
                                            </a>
                                        </Link>
                                    </Box2>
                                    <Box2 marginRight={75}>
                                        <Link href='/photography'>
                                            <a style={{textDecoration: 'none'}}>
                                                <H4 color={colors.gold} uppercase>
                                                    {homeLink2}
                                                </H4>
                                            </a>
                                        </Link>
                                    </Box2>
                                    <Link href='/prints'>
                                        <a style={{textDecoration: 'none'}}>
                                            <H4 color={colors.gold} uppercase>
                                                {homeLink3}
                                            </H4>
                                        </a>
                                    </Link>
                                </Flex>
                            </Fade>
                            <Fade delay={400} ssrFadout>
                                <Box1 width={700} marginTop={75}>
                                    <Box3 marginBottom={75}>
                                        <P3BlockStyle>
                                            <BlockContent
                                                blocks={homeBodyText}
                                            />
                                        </P3BlockStyle>
                                    </Box3>
                                </Box1>
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
    height: 15rem;
    width: 30rem;
    background-position: center;
    background-size: cover;
    border: 1px solid transparent;
    box-shadow: ${shadows.card};
    transition: all .5s ease;

    ${respondTo.xs`
        height: 20rem;
        width: 40rem;
    `}

    ${respondTo.xl`
        height: 30rem;
        width: 70rem;
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

index.getInitialProps = async () => {
    return await client.fetch(groq`*[_type == "home" && slug.current == "v1"][0]{
            homeHeading,
            homeLink1,
            homeLink2,
            homeLink3,
            homeBodyText,
            homeImage1,
            homeImage2,
            homeImage3,
        }
    `)
}

export default index
