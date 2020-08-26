import { useRouter } from 'next/router'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import respondTo from './Breakpoints'

// Components
import { colors, shadows } from './theme'
import { Container } from './Containers'
import { ButtonMenu } from './Buttons'

const Navigation = ({ setSidebar }) => {
    const router = useRouter()

    return (
        <NavBar>
            <ButtonMenu setSidebar={setSidebar} />
            <NavBarContainer>
                <Link href='/'>
                    <Logo>
                        <LogoAlx>ALX</LogoAlx>
                        <LogoPhotography>Photography</LogoPhotography>
                    </Logo>
                </Link>
                <NavMenu>
                    <ul>
                        <Link href='/real-estate'>
                            <NavMenuItem active={router.pathname === '/real-estate' ? true : false}>
                                Real estate photography
                            </NavMenuItem>
                        </Link>
                        <Link href='/artists'>
                            <NavMenuItem active={router.pathname === '/artists' ? true : false}>
                                Photography for artists
                            </NavMenuItem>
                        </Link>
                        <Link href='/prints'>
                            <NavMenuItem active={router.pathname === '/prints' ? true : false}>
                                Prints for sale
                            </NavMenuItem>
                        </Link>
                        <Link href='/gallery'>
                            <NavMenuItem active={router.pathname === '/gallery' ? true : false}>
                                Gallery
                            </NavMenuItem>
                        </Link>
                    </ul>
                </NavMenu>
            </NavBarContainer>
        </NavBar>
    )
}

export default Navigation

const NavBar = styled.div`
    height: 7rem;
    width: 100%;
    background: ${colors.white};
    z-index: 100;
    box-shadow: ${shadows.navigation};
    position: relative;

    ${respondTo.xs`
        height: 8rem;
    `}

    ${respondTo.sm`
        height: 10rem;
    `}

    ${respondTo.md`
        height: 15rem;
    `}

    ${respondTo.lg`
        box-shadow: none;
        height: 20rem;
    `}

    ${respondTo.xl`
        height: 25rem;
    `}
`

const NavBarContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    ${respondTo.lg`
        justify-content: space-between;
    `}
`

const Logo = styled.div`
    display: flex;
    margin-bottom: 0;

    ${respondTo.xs`
        margin-bottom: 1rem;
    `}

    ${respondTo.md`
        margin-bottom: 0;
    `}

    &:hover {
        cursor: pointer;
    }
`

const LogoAlx = styled.div`
    text-transform: uppercase;
    font-weight: 700;
    font-size: 5rem;
    line-height: 1rem;

    ${respondTo.xs`
        font-size: 7rem;
        line-height: 1rem;
    `}

    ${respondTo.sm`
        font-size: 8rem;
    `}

    ${respondTo.md`
        font-size: 10rem;
        line-height: 5.3rem;
    `}

    ${respondTo.xl`
        font-size: 14rem;
    `}
`

const LogoPhotography = styled.div`
    text-transform: lowercase;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 0;
    margin-left: 1rem;
    margin-top: -0.5rem;

    ${respondTo.xs`
        font-size: 2rem;
        margin-left: 1rem;
        margin-top: -1;
    `}

    ${respondTo.sm`
        font-size: 2.5rem;
        margin-top: -1;
    `}

    ${respondTo.md`
        font-size: 3.5rem;
        margin-left: 1.5rem;
        line-height: 2rem;
        margin-top: 0;
    `}

    ${respondTo.xl`
        font-size: 4rem;
        line-height: 0;
    `}
`

const NavMenu = styled.nav`
    display: none;

    ${respondTo.lg`
        display: inline-block;
        border-top: 2px solid ${colors.gold};
        height: 5rem;
        padding-top: 2rem;
    `}

    ${respondTo.xl`
        border-top: 3px solid ${colors.gold};
        height: 6rem;
        padding-top: 3rem;
    `}

    ul {
        display: flex;
        font-size: 1.4rem;
        font-weight: light;
        color: ${colors.black};

        ${respondTo.xl`
            font-size: 2.4rem;
        `}
    }
`

const NavMenuItem = styled.li`
    transition: all .3s ease;

    &:hover {
        color: ${colors.gold};
        cursor: pointer;
    }

    &:not(:last-child) {
        margin-right: 8rem;

        ${respondTo.xl`
            margin-right: 12rem;
        `}
    }

    ${props => props.active && css`
        color: ${colors.gold};
    `}
`
