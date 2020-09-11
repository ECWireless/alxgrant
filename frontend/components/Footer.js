import styled from 'styled-components'
import respondTo from './Breakpoints'

// Components
import { colors } from './theme'
import { Box2 } from './Boxes'
import { Container, Flex } from './Containers'
import { CustomLink } from './Links'
import { P5 } from './Typography'

const Footer = () => {
    return (
        <Container>
            <FooterContainer>
                <DesktopFooter />
                <MobileFooter />
            </FooterContainer>
            <Flex align={'center'} justify={'center'}>
                <EtsyLogo />
            </Flex>
        </Container>
    )
}

const DesktopFooter = () => {
    return (
        <DesktopFlex justify={'space-between'} align={'center'}>
            <CustomLink
                href='https://parishdigital.com'
                target='_blank' rel='noopener noreferrer'
                color={colors.black}
            >
                <P5 uppercase>
                    Looking for corporate, marketing or industrial videos?
                </P5>
            </CustomLink>
            <Dot />
            <CustomLink
                href='mailto: alex@alxgrant.com'
                color={colors.black}
            >
                <P5 bold uppercase>
                    Alex@alxgrant.com
                </P5>
            </CustomLink>
            <CustomLink
                href='tel: 724-713-0611'
                color={colors.black}
            >
                <P5 bold uppercase>
                    724-713-0611
                </P5>
            </CustomLink>
            <Dot />
            <CustomLink
                href='https://valtechcreative.com'
                target='_blank' rel='noopener noreferrer'
                color={colors.black}
            >
                <P5 uppercase>
                    Website powered by Valtech Creative
                </P5>
            </CustomLink>
        </DesktopFlex>
    )
}

const MobileFooter = () => {
    return (
        <MobileFlex respond justify={'center'} align={'center'}>
            <CustomLink
                href='https://parishdigital.com'
                target='_blank' rel='noopener noreferrer'
                color={colors.black}
            >
                <P5 center uppercase>
                    Looking for corporate, marketing or industrial videos?
                </P5>
            </CustomLink>
            <Box2 style={{ width: '100%'}} marginTop={50} marginBottom={50}>
                <Flex style={{ width: '100%'}} align={'center'} justify={'space-between'}>
                        <Dot />
                    <CustomLink
                        href='mailto: alex@alxgrant.com'
                        color={colors.black}
                    >
                        <P5 bold uppercase>
                            Alex@alxgrant.com
                        </P5>
                    </CustomLink>
                    <CustomLink
                        href='tel: 724-713-0611'
                        color={colors.black}
                    >
                        <P5 bold uppercase>
                            724-713-0611
                        </P5>
                    </CustomLink>
                        <Dot />
                </Flex>
            </Box2>
            <CustomLink
                href='https://valtechcreative.com'
                target='_blank' rel='noopener noreferrer'
                color={colors.black}
            >
                <P5 uppercase>
                    Website powered by Valtech Creative
                </P5>
            </CustomLink>
        </MobileFlex>
    )
}

export default Footer

const DesktopFlex = styled(Flex)`
    display: none;

    ${respondTo.lg`
        display: flex;
    `}
`

const MobileFlex = styled(Flex)`
    display: flex;

    ${respondTo.lg`
        display: none;
    `}
`

const FooterContainer = styled.div`
    border-top: 2px solid ${colors.gold};
    height: 18rem;
    padding-top: 2rem;

    ${respondTo.sm`
        height: 22rem;
    `}

    ${respondTo.md`
        height: 24rem;
    `}

    ${respondTo.lg`
        height: 10rem;
    `}

    ${respondTo.xl`
        border-top: 3px solid ${colors.gold};
        height: 12rem;
        padding-top: 3rem;
    `}
`

const Dot = styled.div`
    height: 4px;
    width: 4px;
    background: ${colors.gold};

    ${respondTo.xl`
        height: 6px;
        width: 6px;
    `}
`

const EtsyLogo = styled.div`
    background-image: url(/static/etsy-logo.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 4rem;
    width: 8rem;
    margin-bottom: 5rem;

    ${respondTo.md`
        height: 5rem;
        width: 10rem;
    `}
`
