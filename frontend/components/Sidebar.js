import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import respondTo from '../components/Breakpoints'

// Components
import { colors, shadows } from './theme'
import { Box1 } from './Boxes'
import { Flex } from './Containers'
import { H2, H4, P2, P4 } from './Typography'

const Sidebar = ({ sidebar, setSidebar }) => {
    const router = useRouter()
    
    return (
        <SidebarContainer open={sidebar}>
            <SidebarTop>
                <Flex style={{height: '100%'}} align={'center'} justify={'space-around'}>
                    <Link href="/">
                        <Flex direction={'column'} onClick={() => setSidebar(false)}>
                            <H2 style={{letterSpacing: '1px'}} uppercase color={colors.primaryBlue}>
                                Alx
                            </H2>
                            <P4 style={{letterSpacing: '1px'}} uppercase color={colors.primaryBlue}>
                                Photography
                            </P4>
                        </Flex>
                    </Link>
                    <CloseContainer onClick={() => setSidebar(false)}>
                        <p>&times;</p>
                    </CloseContainer>
                </Flex>
            </SidebarTop>
            <Link href="/real-estate">
                <SidebarOption onClick={() => setSidebar(false)} active={router.pathname === '/real-estate' ? true : false}>
                    <Flex justify={'flex-start'} align={'center'} style={{ height: '100%' }}>
                        <P2 style={{marginLeft: '2rem'}} color={colors.black}>Real Estate Photography</P2>
                    </Flex>
                </SidebarOption>
            </Link>
            <Link href="/artists">
                <SidebarOption onClick={() => setSidebar(false)} active={router.pathname === '/artists' ? true : false}>
                    <Flex justify={'flex-start'} align={'center'} style={{ height: '100%' }}>
                        <P2 style={{marginLeft: '2rem'}} color={colors.black}>Photography for Artists</P2>
                    </Flex>
                </SidebarOption>
            </Link>
            <Link href="/prints">
                <SidebarOption onClick={() => setSidebar(false)} active={router.pathname === '/prints' ? true : false}>
                    <Flex justify={'flex-start'} align={'center'} style={{ height: '100%' }}>
                        <P2 style={{marginLeft: '2rem'}} color={colors.black}>Prints for Sale</P2>
                    </Flex>
                </SidebarOption>
            </Link>
            <Link href="/gallery">
                <SidebarOption onClick={() => setSidebar(false)} active={router.pathname === '/gallery' ? true : false}>
                    <Flex justify={'flex-start'} align={'center'} style={{ height: '100%' }}>
                        <P2 style={{marginLeft: '2rem'}} color={colors.black}>Gallery</P2>
                    </Flex>
                </SidebarOption>
            </Link>
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 25rem;
	height: 100%;
	background: ${colors.grey};
	z-index: 1000;
	box-shadow: ${shadows.sidebar};
	transform: translateX(-30rem);
    transition: all .5s ease;

    ${respondTo.md`
        width: 30rem;
    `}

    ${respondTo.xl`
        width: 35rem;
        transform: translateX(-40rem);

        ${props => props.open && css`
            transform: translateX(0rem);
            box-shadow: none;
        `}
    `}

	${props => props.open && css`
		transform: translateX(0rem);
        box-shadow: none;
    `}
`

const SidebarTop = styled.div`
	height: 8rem;
	width: 100%;
    border-bottom: solid 1px rgba(117, 117, 117, .2);
    
    ${respondTo.xl`
	    height: 10rem;
    `}
`

const CloseContainer = styled.div`
    width: 50px;
    height: 50px;
    background: ${colors.white};
    border: 1px solid ${colors.gold};
    border-radius: 50%;
    position: relative;
    transition: all .5s ease;
	
	p {
        position: absolute;
        top: 38%;
        left: 50%;
        line-height: 0;
        transform: translate(-50%, -50%);
		color: ${colors.gold};
		font-size: 5rem;
        font-weight: 100;

        ${respondTo.md`
            top: 35%;
        `}
	}

    ${respondTo.xs`
        width: 50px;
        height: 50px;
    `}

    ${respondTo.sm`
        width: 60px;
        height: 60px;
    `}

    ${respondTo.md`
        p {
            font-size: 6rem;
            margin-bottom: 12px;
        }
    `}

    &:hover,
    &:focus,
    &:active {
		background: ${colors.gold};
        cursor: pointer;
    }
`

const SidebarOption = styled.div`
    height: 6rem;
    border-bottom: solid 1px rgba(117, 117, 117, .2);
    border-right: 5px solid transparent;
    transition: all .3s ease;

    ${respondTo.md`
	    height: 7rem;
    `}

    ${respondTo.xl`
	    height: 7.5rem;
    `}
    
    &:hover {
        cursor: pointer;
        background: #EFEFEF;
    }

    ${props => props.active && css`
        border-right: 5px solid ${colors.gold};
        background: #EFEFEF;
    `}
`
