import React from "react";
import Header from "@components/layout/header/Header";
import Typography from "@components/ui/typography/Typography";
import Box from "@components/core/Box/Box";
import { layout } from "@styles/DesignVariables";
import Generator from "@components/layout/generator/Generator";
import Content from "@components/layout/content/Content";

const PasswordGenerator = () => {
    return (
        <React.Fragment>
            <Header />
            <Box
                maxwidth={layout.maxWidth}
                margin="24px auto"
                justifycontent="center"
                alignitems="center"
                textalign="center"
            >
                <Typography variant="noticeText" as="p">
                    Our readers help us create quality content. If you purchase
                    via links on our site, we may receive affiliate commissions.{" "}
                    <span>Learn more</span>
                </Typography>
            </Box>
            <Box maxwidth={layout.maxWidth} margin="0 auto">
                <Generator />
            </Box>

            <Content
                $containerWidth={50}
                imageUrl="/images/secure-computer.png"
                imageAlt="Password Generator"
                headline="What is a password generator?"
                firstParagraph="A password generator is a tool that automatically generates strong,
        secure passwords. With its help, you don’t need to come up with your
        own passwords ever again."
                secondParagraph=" A single mouse click will generate you a sequence of random symbols.
        Copy and use it as a password for your device, email, social media
        account, or anything else that requires restricted access."
                thirdParagraph="Also, don’t use the same password for more than one account. Each time
        you need to sign up, create a new password using this free password
        generator. In this way, your data will be safer than ever before."
            />
            <Content
                $containerWidth={70}
                $flexReverse={true}
                imageUrl="/images/password-strength.png"
                imageAlt="Password Generator"
                headline="How does our password generator tool work?"
                firstParagraph="To create a truly unique character combination, this online password generator tool goes through random sequences of 26 uppercase letters, 26 lowercase letters, 10 numeric digits, and 32 special symbols. The result is a unique 12-character sequence. This number of characters makes your future password downright unbreakable, taking 1.4 billion years for a brute-force attack to crack it."
                secondParagraph="This free password generator is compatible with Windows, Linux, and Mac operating systems, as well as with Android and iOS devices."
            />
        </React.Fragment>
    );
};

export default PasswordGenerator;
