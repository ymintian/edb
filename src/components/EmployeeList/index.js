import { useMemo, useState } from "react";
import { EmployeeItem } from "../EmployeeItem";
import { 
  StyledButton, 
  StyledInput, 
  StyledSelect, 
  StyledFilterList, 
  StyledListWrapper,
  StyledSortWrapper,
  StyledFiltersWrapper,
  StyledItemsWrapper
} from "./index.styled";
import { filtersInitialState, positions } from "../../mocks/index";
import { processEmployees } from "../../utils/index";

export const EmployeeList = (props) => {
  const { employees, setCurrentEmployee, setEmployees } = props;
  const [filters, setFilters] = useState(filtersInitialState);
  const [sort, setSort] = useState('relevance');
  const [search, setSearch] = useState('');
  const [isFilterShown, setIsFilterShown] = useState(false);
  
  // const processEmployees = () => {
  //   const employeesCopy = [...employees];
  //   const filtersMap = Object.entries(filters).filter((item) => item[1]);
  //   const filtersArr = filtersMap.reduce((acc, item) => [...acc, item[0]], []);
    
  //   if(sort === 'relevance' && !filtersArr.length && !search) {
  //     return employeesCopy;
  //   }
    
  //   const filteredEmployees = filtersArr.length ? employeesCopy.filter((item) => filtersArr.includes(item.position)) : employeesCopy;
  //   const sortedEmployees = sort !=='relevance' ?  sortArrayBy(filteredEmployees, sort, 'name') : filteredEmployees;

  //   if(search) {
  //     const searchedEmployees = sortedEmployees.filter((item) => item.name.toLowerCase().includes(search));
  //     return searchedEmployees;
  //   }

  //   return sortedEmployees;
  // }

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
        <StyledInput type="text" value={search} placeholder="Search by name..." onChange={handleSearchChange} maxLength="30" />
        <StyledSortWrapper>
          <div>sort by</div>
          <StyledSelect value={sort} onChange={handleSortChange}>
                <option value="relevance">relevance</option>
                <option value="asc">name &#8593;</option>
                <option value="desc">name &#8595;</option>
          </StyledSelect>
        </StyledSortWrapper>
            <div>
              <StyledButton onClick={toggleFilter}>Filter by position</StyledButton>
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
                      <StyledButton onClick={removeAllFilters} color="red">Remove filters</StyledButton>
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
