import styled from 'styled-components';

export const StyledInput = styled.input`
    display: block; 
    width: 100%;
    max-width: 400px;
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