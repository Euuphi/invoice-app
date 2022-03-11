import styled from "styled-components";
// Redux
import { useDispatch, useSelector } from "react-redux";
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

const DarkIcon = styled(Dark)`
    font-size: 2.4rem;
`;

const LightIcon = styled(Light)`
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
            {darkTheme ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
};

export default ThemeSwitchButton;
