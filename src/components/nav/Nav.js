import styled from "styled-components";
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
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3.2rem;
    width: 100%;
`;

const Nav = () => {
    return (
        <header>
            <NavBar>
                <Logo />
                <Container>
                    <ThemeSwitchButton />
                    <ProfilePicture />
                </Container>
            </NavBar>
        </header>
    );
};

export default Nav;
