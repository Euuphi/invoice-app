import Image from "next/image";
import styled from "styled-components";
// Illustration
import illustrationUrl from "images/svgs/illustration-empty.svg?url";
// Components
import H2Secondary from "components/headings/H2Secondary";
import ParagraphMd from "components/text/ParagraphMd";

const ImageBox = styled.div`
    margin: 10rem 0 6.4rem;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    text-align: center;
    width: 22rem;
`;

const NoInvoices = () => {
    return (
        <>
            <ImageBox>
                <Image
                    src={illustrationUrl}
                    alt="Illustration of woman holding mail"
                    height={200}
                    width={242}
                />
            </ImageBox>
            <TextContainer>
                <H2Secondary>There is nothing here</H2Secondary>
                <ParagraphMd>
                    Create an invoice by clicking the{" "}
                    <strong>New Invoice</strong> button and get started
                </ParagraphMd>
            </TextContainer>
        </>
    );
};

export default NoInvoices;
