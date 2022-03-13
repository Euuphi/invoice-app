import styled from "styled-components";
// Logo
import LogoSVG from "images/svgs/logo.svg";
// Colors
import { colors } from "themes/colors";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${colors.main.primary};
    border-radius: 0 0 20px 0;
    height: 10.3rem;
    overflow: hidden;
    width: 100%;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;

        background-color: ${colors.main.tint};
        border-radius: 20px 0 0 0;
        height: 50%;
        width: 100%;
    }
`;

const LogoIcon = styled(LogoSVG)`
    z-index: 1;
`;

const Logo = () => {
    return (
        <Container>
            <LogoIcon height={40} width={43} />
        </Container>
    );
};

export default Logo;
