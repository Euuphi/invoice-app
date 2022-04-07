import { useRouter } from "next/router";
import styled from "styled-components";
import PrimaryButtonStyle from "styles/buttons/PrimaryButtonStyle";

const Button = styled.button`
    ${PrimaryButtonStyle}
`;

const MarkAsPaidButton = () => {
    const router = useRouter();

    const invoiceId = router.query.invoiceId;

    const onClickHandler = async () => {
        try {
            const res = await fetch(
                `http://localhost:3000/api/invoices/${invoiceId}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ status: "paid" }),
                }
            );
            // Reload page data
            router.replace(router.asPath);
        } catch (error) {
            console.log(error);
        }
    };

    return <Button onClick={onClickHandler}>Mark as Paid</Button>;
};

export default MarkAsPaidButton;
