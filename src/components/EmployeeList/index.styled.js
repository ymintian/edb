import styled from 'styled-components';

export const StyledFilterList = styled.div`
    position: absolute;
    top: 100%;
    width: 250px;
    padding: 15px;
    background-color: #fff;
    color: #000;
    border-radius: 4px;
    box-sizing: border-box;
`;

export const StyledListWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: flex-end;
    flex-wrap: wrap;
    margin-bottom: 30px;
`;

export const StyledSortWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-around;
    justify-content: center;
`;

export const StyledFiltersWrapper = styled.div`
    position: relative;
`;

export const StyledItemsWrapper = styled.div`
    display: flex;
    justify-content: flex-center;
    flex-wrap: wrap;
`;