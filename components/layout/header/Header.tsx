import Box from "@components/core/Box/Box";
import { HeaderStyled } from "./header.styled";
import CyberNews from "@assets/icons/CyberNews";
import { layout } from "@styles/DesignVariables";

const Header = () => {
    return (
        <HeaderStyled>
            <Box display="flex" width="100%" maxwidth={layout.maxWidth} padding={layout.padding}>
                <CyberNews />
            </Box>
        </HeaderStyled>
    );
};

export default Header;
