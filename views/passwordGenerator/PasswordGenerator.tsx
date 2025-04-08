import React from "react";
import Header from "@components/layout/header/Header";
import Typography from "@components/ui/typography/Typography";
import Box from "@components/core/Box/Box";
import { layout } from "@styles/DesignVariables";
import Generator from "@components/layout/generator/Generator";

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
                    Our readers help us create quality content. If you purchase via links on our site, we may receive
                    affiliate commissions. <span>Learn more</span>
                </Typography>
            </Box>
            <Box maxwidth={layout.maxWidth} margin="0 auto">
                <Generator />
            </Box>
        </React.Fragment>
    );
};

export default PasswordGenerator;
