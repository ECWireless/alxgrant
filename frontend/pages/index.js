import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import groq from 'groq'
import client from '../client'
import respondTo from '../components/Breakpoints'

// Components
import { colors, shadows } from '../components/theme'
import { Box1, Box2, Box3 } from '../components/Boxes'
import { Container, Flex } from '../components/Containers'
import { H2, H4, P3 } from '../components/Typography'

const index = () => {
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
                                    <Photo />
                                </Fade>
                            </Box3>
                            <Box3 marginBottom={50}>
                                <Fade delay={200} ssrFadout>
                                    <Photo />
                                </Fade>
                            </Box3>
                            <Box3 marginBottom={50}>
                                <Fade delay={400} ssrFadout>
                                    <Photo />
                                </Fade>
                            </Box3>
                        </Flex>
                        <Flex direction={'column'}>
                            <Box3 marginBottom={25}>
                                <Fade ssrFadout>
                                    <H2 color={colors.black} uppercase>Pittsburgh Photography</H2>
                                </Fade>
                            </Box3>
                            <Fade delay={200} ssrFadout>
                                <Flex>
                                    <Box2 marginRight={75}>
                                        <Link href='/real-estate'>
                                            <a style={{textDecoration: 'none'}}>
                                                <H4 color={colors.gold} uppercase>Real Estate</H4>
                                            </a>
                                        </Link>
                                    </Box2>
                                    <Box2 marginRight={75}>
                                        <Link href='/artists'>
                                            <a style={{textDecoration: 'none'}}>
                                                <H4 color={colors.gold} uppercase>For Artists</H4>
                                            </a>
                                        </Link>
                                    </Box2>
                                    <Link href='/prints'>
                                        <a style={{textDecoration: 'none'}}>
                                            <H4 color={colors.gold} uppercase>Prints</H4>
                                        </a>
                                    </Link>
                                </Flex>
                            </Fade>
                            <Fade delay={400} ssrFadout>
                                <Box1 width={700} marginTop={75}>
                                    <Box3 marginBottom={25}>
                                        <P3>
                                            Welcome! My name is Alex Grant and I like hiking, dogs, talking, cooking, reading, and, of course, photography. I come from a family passionate about photography, nature, and exploring the great outdoors. Photography has always been a part of my life and I’m very grateful for the opportunity to be a professional Pittsburgh photographer.
                                        </P3>
                                    </Box3>
                                    <Box3 marginBottom={25}>
                                        <P3>
                                            I am multi-faceted; I take a ton of corporate photography, headshots, product photography, and landscape photography. My specialty is photography for artists; photos of paintings and other 2D mediums, sculptures and other 3D mediums, and research photography. I also do Pittsburgh real estate photography!
                                        </P3>
                                    </Box3>
                                    <Box3 marginBottom={25}>
                                        <P3>
                                            If you’d like to collaborate please reach out at alex@alxgrant.com or 724-713-0611. I look forward to working with you.
                                        </P3>
                                    </Box3>
                                    <Box3 marginBottom={25}>
                                        <P3>
                                            I graduated from Ohio University with a specialty in Integrated Media and I am currently pursuing an MBA at Point Park University. I work full-time for Parish Digital, a video production company specializing in video for business.
                                        </P3>
                                    </Box3>
                                    <Box3 marginBottom={50}>
                                        <P3>
                                            Full disclosure: I run my photography business in my free time, juggling a full-time job and grad school. Because of this I mostly schedule shoots on the weekends. That being said, I will always go the extra mile to complete your project on time. I have never missed a deadline. I just ask for your accommodation from time to time.
                                        </P3>
                                    </Box3>
                                </Box1>
                            </Fade>
                        </Flex>
                    </Flex>
                </Box2>
            </Container>
        </>
    )
}

export default index

const Photo = styled.div`
    height: 15rem;
    width: 30rem;
    background-image: url(/static/photo1.jpg);
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
        height: 20rem;
        width: 70rem;
    `}

    &:hover {
        border: 1px solid ${colors.gold};
        box-shadow: none;
        cursor: pointer;
    }
`
