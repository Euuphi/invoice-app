import Image from "next/image";
import styled from "styled-components";
// Icons
import light from "images/icon-sun.svg";
import dark from "images/icon-moon.svg";

const Button = styled.button`
    background-color: transparent;
    border: none;
    margin-top: auto;
    height: 4rem;
    width: 4rem;
`;

const ThemeSwitchButton = () => {
    //TODO: Add theme switching functionality
    const clickHandler = () => {
        console.log("Clicked");
    };

    return (
        <Button onClick={clickHandler}>
            <Image src={dark} alt="Moon Icon" />
        </Button>
    );
};

export default ThemeSwitchButton;
