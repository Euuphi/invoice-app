import Image from "next/image";
import styled from "styled-components";
// Redux
import { useDispatch } from "react-redux";
import { toggleDarkTheme } from "actions/preferencesActions";
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
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(toggleDarkTheme());
    };

    return (
        <Button onClick={clickHandler}>
            <Image src={dark} alt="Moon Icon" />
        </Button>
    );
};

export default ThemeSwitchButton;
