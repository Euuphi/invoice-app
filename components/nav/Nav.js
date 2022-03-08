import styled from "styled-components";

const NavBar = styled.nav`
    background-color: ${({ theme }) => theme.light.nav};
    border-radius: 0 15px 15px 0;
    overflow: hideen;
    height: 100vh;
    position: fixed;
    width: 8rem;
    z-index: 999;
`;

const Nav = () => {
    return <NavBar></NavBar>;
};

export default Nav;
