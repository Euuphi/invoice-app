import NextImage from "next/image";
import styled from "styled-components";
// Logo
import logo from "images/logo.svg";
// Colors
import { colors } from "themes/colors";

const Block = styled.div`
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

const Image = styled(NextImage)`
    z-index: 1;
`;

const Logo = () => {
    return (
        <Block>
            <Image src={logo} alt="Logo" height={40} width={43} />
        </Block>
    );
};

export default Logo;
