import Image from "next/image";
import styled from "styled-components";
// Redux
import { useDispatch } from "react-redux";
import { toggleDarkTheme } from "actions/preferencesActions";
// Icons
import Light from "images/svgs/icon-sun.svg";
import Dark from "images/svgs/icon-moon.svg";

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
            <Dark />
        </Button>
    );
};

export default ThemeSwitchButton;
