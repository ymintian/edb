import styled from 'styled-components';

export const StyledWrapper = styled.div`
    width: 100%;
    max-width: 200px;
    padding: 20px;
    margin: 10px 15px 10px 0;
    border-radius: 4px;
    border: 1px solid;
    text-align:center;
    background-color: gray;
    div {
        margin: 5px 0;
    }
`;

export const StyledButton = styled.button`
    width: 100%;
    padding: 10px 15px;
    background: #fff;
    color:#000;
    text-transform: capitalize;
    margin: 10px;
    border:none;
    font-size:16px;
    font-weight:600;
    border-radius:4px;
    cursor:pointer;
    background-color: ${props => props.color};
    &:hover {
        box-shadow: rgba(255, 255, 255, 0.11) 0px 10px 20px, rgba(255, 255, 255, 0.13) 0px 6px 6px;
        cursor:pointer;
    }
`;

export const StyledButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
`;