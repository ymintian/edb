import { useMemo, useState } from "react";
import { EmployeeItem } from "../EmployeeItem";
import {   
  StyledFilterList, 
  StyledListWrapper,
  StyledSortWrapper,
  StyledFiltersWrapper,
  StyledItemsWrapper
} from "./index.styled";
import { filtersInitialState, positions } from "../../mocks/index";
import { processEmployees } from "../../utils/index";
import { Input } from "../common/Input";
import { Select } from "../common/Select";
import { Button } from "../common/Button";

export const EmployeeList = (props) => {
  const { employees, setCurrentEmployee, setEmployees } = props;
  const [filters, setFilters] = useState(filtersInitialState);
  const [sort, setSort] = useState('relevance');
  const [search, setSearch] = useState('');
  const [isFilterShown, setIsFilterShown] = useState(false);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  }

  const handleFilterChange = (e) => {
    const checked = e.target.checked;
    const name = e.target.name;
    setFilters({...filters, [name]:checked});
  }

  const handleSortChange = (e) => {
    setSort(e.target.value);
  }

  const toggleFilter = () => {
    setIsFilterShown(!isFilterShown);
  }

  const removeAllFilters = () => {
    setFilters(filtersInitialState);
    toggleFilter();
  }

  const processedEmployees = useMemo(() => processEmployees(employees, filters, sort, search), [employees, filters, sort, search]);

  return <div>
      <StyledListWrapper>
        <Input value={search} placeholder="Search by name..." onChange={handleSearchChange} maxLength="30" />
        <StyledSortWrapper>
          <div>sort by</div>
          <Select value={sort} onChange={handleSortChange}>
                <option value="relevance">relevance</option>
                <option value="asc">name &#8593;</option>
                <option value="desc">name &#8595;</option>
          </Select>
        </StyledSortWrapper>
            <div>
              <Button onClick={toggleFilter}>Filter by position</Button>
              {isFilterShown && 
                <StyledFiltersWrapper>
                  <StyledFilterList>
                    {
                      positions.map((item) => {
                        return (
                          <div key={item}>
                            <input type="checkbox" id={item} name={item} value={item} onChange={handleFilterChange} /><label htmlFor={item}>{item.toUpperCase()}</label>
                          </div>
                        )
                      })
                    }
                    <div>
                      <Button onClick={removeAllFilters} color="red">Remove filters</Button>
                    </div> 
                  </StyledFilterList>
                </StyledFiltersWrapper>
              }
            </div>
      </StyledListWrapper>
      <StyledItemsWrapper>
        {processedEmployees.length ? processedEmployees.map((item, i) => (
          <EmployeeItem 
              key={i} 
              setCurrentEmployee={setCurrentEmployee} 
              employees={employees} 
              setEmployees={setEmployees}  
              data={{...item}} />)
          ) : <h1>No results</h1>
        }
      </StyledItemsWrapper>
  </div>;
}
