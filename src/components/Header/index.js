import { Link, useLocation } from "react-router-dom";
import { StyledLinkWrapper, StyledHomeLinkWrapper, StyledHeaderWrapper } from "./index.styled";


export const Header = () => {
    const { pathname } = useLocation();

    return (
        <StyledHeaderWrapper>
            <StyledHomeLinkWrapper>
                <Link to="/">Home</Link>
            </StyledHomeLinkWrapper>
            {pathname === '/' && 
                <StyledLinkWrapper>
                    <Link to="/employee">&#43; Add employee</Link>
                </StyledLinkWrapper>
            }
        </StyledHeaderWrapper>
    );
}