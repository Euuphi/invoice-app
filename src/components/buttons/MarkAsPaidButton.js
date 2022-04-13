import { BASE_URL } from "../../../config";
import { useRouter } from "next/router";
import styled from "styled-components";
import PrimaryButtonStyle from "styles/buttons/PrimaryButtonStyle";

const Button = styled.button`
    ${PrimaryButtonStyle}
`;

const MarkAsPaidButton = ({ status }) => {
    const router = useRouter();

    const invoiceId = router.query.invoiceId;
    const markAs = status === "paid" ? "pending" : "paid";
    const buttonText = `Mark as ${markAs[0].toUpperCase() + markAs.slice(1)}`;

    const onClickHandler = async () => {
        try {
            const res = await fetch(`${BASE_URL}/api/invoices/${invoiceId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: markAs }),
            });
            // Reload page data
            router.replace(router.asPath);
        } catch (error) {
            console.log(error);
        }
    };

    return <Button onClick={onClickHandler}>{buttonText}</Button>;
};

export default MarkAsPaidButton;
