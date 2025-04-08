import Image from "next/image";
import {
    ContentWrapper,
    ImageContainer,
    TextContainer,
} from "./content.styled";
import Typography from "@components/ui/typography/Typography";
import Spacer from "@components/core/Spacer/Spacer";

interface ContentProps {
    headline: string;
    imageUrl: string;
    imageAlt: string;
    imageHeight?: number;
    imageWidth?: number;
    firstParagraph?: string;
    secondParagraph?: string;
    thirdParagraph?: string;
    $flexReverse?: boolean;
    $containerWidth?: number;
}

const Content = ({
    imageUrl,
    imageAlt = "Content Image",
    headline,
    firstParagraph,
    imageHeight = 225,
    imageWidth = 225,
    secondParagraph,
    thirdParagraph,
    $flexReverse = false,
    $containerWidth = 100,
}: ContentProps) => {
    return (
        <ContentWrapper $flexReverse={$flexReverse}>
            <ImageContainer $containerWidth={$containerWidth}>
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    width={imageWidth}
                    height={imageHeight}
                    priority
                />
            </ImageContainer>

            <TextContainer $containerWidth={$containerWidth}>
                <Typography as="h4" variant="heading">
                    {headline}
                </Typography>
                <Spacer $margin="16px 0">
                    {firstParagraph && (
                        <Typography as="p" variant="paragraph">
                            {firstParagraph}
                        </Typography>
                    )}
                </Spacer>
                <Spacer $margin="16px 0">
                    {secondParagraph && (
                        <Typography as="p" variant="paragraph">
                            {secondParagraph}
                        </Typography>
                    )}
                </Spacer>
                <Spacer $margin="16px 0">
                    {thirdParagraph && (
                        <Typography as="p" variant="paragraph">
                            {thirdParagraph}
                        </Typography>
                    )}
                </Spacer>
            </TextContainer>
        </ContentWrapper>
    );
};

export default Content;
