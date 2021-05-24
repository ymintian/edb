import styled from 'styled-components';

export const StyledButton = styled.button`
    width: 250px;
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

export const StyledInput = styled.input`
    display:block; 
    width:300px;
    max-width:250px;
    margin: 10px 0;
    height: 45px;
    padding: 0px 16px;
    border: 2px solid transparent;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    background-color: wheat;
    color: #282828;
    outline: none;
    box-sizing:border-box;
    &.error{
        border-color: red;
    }
`;

export const StyledSelect = styled.select`
    display:block; 
    width:250px;
    max-width:100%;
    margin: 15px 0;
    height: 45px;
    padding: 0px 16px;
    font-size: 16px;
    box-sizing:border-box;
    margin: 10px 0;
    background-color:wheat;
    border-radius:4px;
`;

export const StyledFilterList = styled.div`
    position:absolute;
    top:100%;
    width: 250px;
    padding: 15px;
    background-color:#fff;
    color:#000;
    border-radius: 4px;
    box-sizing:border-box;
`;
