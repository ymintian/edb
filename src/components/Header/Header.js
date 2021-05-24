import { Link } from "react-router-dom";
import { StyledLinkWrapper,StyledHomeLinkWrapper } from "./index.styled";


export const Header = () => {
    return <div style={{display:'flex',justifyContent:'space-between',width: '100%',alignItems:'center',flexWrap:'wrap',padding:'40px 0'}}>
        <StyledHomeLinkWrapper>
            <Link to="/">Home</Link>
        </StyledHomeLinkWrapper>
        <StyledLinkWrapper>
            <Link to="/employee" style={{textDecoration:'none'}}>&#43; Add employee</Link>
        </StyledLinkWrapper>
    </div>
}