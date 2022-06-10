// Media Query
import { useMediaQuery } from "@mui/material";
import screen from "styles/mediaQuery/screens";
// Components
import Card from "components/layout/Card";
import StatusBar from "./StatusBar";
import ActionButtons from "./ActionButtons";

const ActionBar = ({ status }) => {
    const tabletScreen = useMediaQuery(screen.tablet);

    return (
        <Card justifyContent="space-between">
            <StatusBar status={status} />
            {!tabletScreen && <ActionButtons status={status} />}
        </Card>
    );
};

export default ActionBar;
