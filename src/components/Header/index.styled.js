import styled from 'styled-components';

export const StyledLinkWrapper = styled.div`
    background:#76e176;
    text-align:center;
    border-radius:4px;
    &:hover {
        box-shadow: rgba(255, 255, 255, 0.11) 0px 10px 20px, rgba(255, 255, 255, 0.13) 0px 6px 6px;
        cursor:pointer;
    }
    a{
        display: block;
        width:100%;
        height:100%;
        padding: 10px 15px;
        box-sizing:border-box;
        color:#000;
        font-weight: 600;
    }
`;

export const StyledHomeLinkWrapper = styled.div`
    a {
        color: #fff;
        font-size: 24px;
        font-weight:600;
        text-decoration:none;
    }
`;

export const StyledHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
    padding: 40px 0;
    a {
        text-decoration: none;
    }
`;

