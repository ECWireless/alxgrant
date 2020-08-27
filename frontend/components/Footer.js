import { useRouter } from 'next/router'
import Link from 'next/link'
import styled, { css } from 'styled-components'
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
                href='https://parishdigital.com'
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
        <Flex justify={'space-between'} align={'center'}>
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
                href='https://parishdigital.com'
                target='_blank' rel='noopener noreferrer'
                color={colors.black}
            >
                <P5 uppercase>
                    Website powered by Valtech Creative
                </P5>
            </CustomLink>
        </Flex>
    )
}

export default Footer

const DesktopFlex = styled(Flex)`
    display: none;

    ${respondTo.lg`
        display: flex;
    `}
`

const FooterContainer = styled.div`
    border-top: 2px solid ${colors.gold};
    height: 10rem;
    padding-top: 2rem;

    ${respondTo.xl`
        border-top: 3px solid ${colors.gold};
        height: 6rem;
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
    height: 5rem;
    width: 10rem;
    margin-bottom: 5rem;
`
