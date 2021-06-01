import styled from 'styled-components';

export const StyledButton = styled.button`
    width: ${props => props.customWidth || '250px'};
    height:45px;
    max-width:100%;
    padding: 10px 15px;
    background: #fff;
    color:#000;
    text-transform: capitalize;
    margin: 10px 0;
    border:none;
    font-size:16px;
    font-weight:600;
    border-radius:4px;
    cursor:pointer;
    background-color: ${props => props.color || 'wheat'};
    &:hover {
        box-shadow: rgba(255, 255, 255, 0.11) 0px 10px 20px, rgba(255, 255, 255, 0.13) 0px 6px 6px;
        cursor:pointer;
    }
`;