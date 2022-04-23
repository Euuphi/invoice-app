import styled from "styled-components";
import screen from "styles/mediaQuery/screens";
import { useMediaQuery } from "@mui/material";
// Components
import Logo from "./Logo";
import ThemeSwitchButton from "components/buttons/ThemeSwitchButton";
import ProfilePicture from "./ProfilePicture";

const NavBar = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.nav};
    border-radius: 0 20px 20px 0;
    overflow: hidden;
    height: 100vh;
    position: fixed;
    width: 10.3rem;
    z-index: 999;

    @media ${screen.tabletL} {
        position: relative;
        border-radius: 0;
        flex-direction: row;
        height: 8rem;
        width: 100%;
    }
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.6rem;
    width: 100%;

    @media ${screen.tabletL} {
        flex-direction: row;
        gap: 3.2rem;
        height: 100%;
        width: auto;
    }
`;

const Nav = () => {
    const tabletL = useMediaQuery(screen.tabletL);
    return (
        <header>
            <NavBar>
                <Logo size={tabletL ? 80 : 103} />
                <Container>
                    <ThemeSwitchButton />
                    <ProfilePicture />
                </Container>
            </NavBar>
        </header>
    );
};

export default Nav;
