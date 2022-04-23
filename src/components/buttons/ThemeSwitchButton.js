import styled from "styled-components";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkTheme } from "stores/actions/preferencesActions";
// Icons
import Sun from "images/svgs/icon-sun.svg";
import Moon from "images/svgs/icon-moon.svg";

const Button = styled.button`
    background-color: transparent;
    border: none;
    height: 4rem;
    width: 4rem;

    /* Sun and Moon icons selector when button is hovered */
    &:hover svg {
        color: #dfe3fa;
    }
`;

const SunIcon = styled(Sun)`
    color: #858bb2;
    font-size: 3rem;
`;

const MoonIcon = styled(Moon)`
    color: #7e88c3;
    font-size: 2.4rem;
`;

const ThemeSwitchButton = () => {
    const dispatch = useDispatch();
    // Extract dark theme state
    const darkTheme = useSelector(
        (state) => state.preferences.darkThemeEnabled
    );

    const clickHandler = () => {
        dispatch(toggleDarkTheme());
    };

    return (
        <Button onClick={clickHandler}>
            {darkTheme ? <SunIcon /> : <MoonIcon />}
        </Button>
    );
};

export default ThemeSwitchButton;
