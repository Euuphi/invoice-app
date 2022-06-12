// Media Query
import { useMediaQuery } from "@mui/material";
import screen from "styles/mediaQuery/screens";
// Components
import FormGroup from "components/forms/FormGroup";
import FormGroupTitle from "components/forms/FormGroupTitle";
import InputField from "components/forms/InputField";

const BillFrom = () => {
    const tabletSmallScreen = useMediaQuery(screen.tabletS);

    return (
        <FormGroup columns={!tabletSmallScreen ? "1fr 1fr 1fr" : "1fr 1fr"}>
            <FormGroupTitle>Bill From</FormGroupTitle>
            <InputField
                inputType="text"
                name="street"
                label="Street Address"
                formGroup="senderAddress"
                Group="senderAddress"
                fullGridColumn
            />
            <InputField
                inputType="text"
                name="city"
                label="City"
                formGroup="senderAddress"
            />
            <InputField
                inputType="text"
                name="postCode"
                label="Post Code"
                formGroup="senderAddress"
            />
            <InputField
                inputType="text"
                name="country"
                label="Country"
                formGroup="senderAddress"
                fullGridColumn={tabletSmallScreen}
            />
        </FormGroup>
    );
};

export default BillFrom;
