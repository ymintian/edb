import { useState } from "react";
import {EmployeeItem} from "../EmployeeItem";
import { StyledButton,StyledInput,StyledSelect,StyledFilterList } from "./index.styled";

export const EmployeeList = (props) => {
  const {employees} = props;
  const [filters,setFilters] = useState({be:false,fe:false,qa:false,aqa:false,pm:false,other:false});
  const [sort,setSort] = useState('relevance');
  const [search,setSearch] = useState('');
  const [isFilterShown, setIsFilterShown] = useState(false);

  const processEmployees = (employees)=>{
    const filtersMap = Object.entries(filters).filter((item)=>item[1]);
    const filtersArr = filtersMap.reduce((acc, item)=>{acc.push(item[0]);return acc }, [])
    
    if(sort === 'relevance' && !filtersArr.length) {
      return employees;
    }
    const filteredEmployees = filtersArr.length ? employees.filter((item)=>filtersArr.includes(item.position)) : employees;
    
    function compare( a, b ) {      
      const aName = a.name.toLowerCase();
      const bName = b.name.toLowerCase();

      if ( aName < bName ){
        return sort === 'asc' ? -1 : 1;
      }
      if ( aName > bName ){
        return sort === 'asc' ? 1 : -1;
      }
      return 0;
    }

    const sortedEmployees = sort !=='relevance' ? filteredEmployees.sort(compare) : filteredEmployees;

    if(search) {
      const searchedEmployees = sortedEmployees.filter((item)=>item.name.toLowerCase().includes(search));
      return searchedEmployees;
    }

    return sortedEmployees;
  }

  const handleSearchChange = (e)=>{
    setSearch(e.target.value);
  }

  const removeAllFilters = ()=>{
    setFilters({be:false,fe:false,qa:false,aqa:false,pm:false,other:false});
    setIsFilterShown(false);
  }

  const handleFilterChange = (e)=>{
    const checked = e.target.checked;
    const name = e.target.name;
    setFilters({...filters, [name]:checked});
  }

  const handleSortChange = (e)=>{
    setSort(e.target.value);
  }

  const toggleFilter = ()=>{
    setIsFilterShown(!isFilterShown);
  }

  const processedEmployees = processEmployees(employees);

  return <div>
      <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',alignItems:'flex-end',marginBottom:'30px'}}>
        <StyledInput type="text" value={search} placeholder="Search by name..." onChange={handleSearchChange} maxLength="30" />
        <div style={{display:'flex',flexDirection:'column',alignItems:'space-around',justifyContent:'center'}}>
          <div>sort by</div>
          <StyledSelect value={sort} onChange={handleSortChange}>
                <option value="relevance">relevance</option>
                <option value="asc">name &#8593;</option>
                <option value="desc">name &#8595;</option>
          </StyledSelect>
        </div>
            <div>
              <StyledButton onClick={toggleFilter}>Filter by position</StyledButton>
              {isFilterShown && 
                <div style={{position:"relative"}}>
                  <StyledFilterList>
                    <div>
                      <input type="checkbox" id="be" name="be" value="be" onChange={handleFilterChange} /><label for="be">be</label>
                    </div>
                    <div>
                      <input type="checkbox" id="fe" name="fe" value="fe" onChange={handleFilterChange} /><label for="fe">fe</label>
                    </div>
                    <div>
                      <input type="checkbox" id="qa" name="qa" value="qa" onChange={handleFilterChange} /><label for="qa"l>qa</label>
                    </div>
                    <div>
                      <input type="checkbox" name="pm" id="pm" value="pm" onChange={handleFilterChange} /><label for="pm">pm</label>
                    </div>
                    <div>
                      <input type="checkbox" name="aqa" id="aqa" value="aqa" onChange={handleFilterChange} /><label for="aqa">aqa</label>
                    </div>
                    <div>
                      <input type="checkbox" id="other" name="other" value="other" onChange={handleFilterChange} /><label for="other">other</label>
                    </div>
                    <div><StyledButton onClick={removeAllFilters} color="red">Remove filters</StyledButton></div> 
                  </StyledFilterList>
                </div>
              }
            </div>
      </div>
      <div style={{display: 'flex',justifyContent: 'flex-start', flexWrap: 'wrap'}}>
        {processedEmployees.length ? processedEmployees.map((item, i) => <EmployeeItem key={i} {...props}  data={{...item}} />) : <h1>No results</h1>}
      </div>
  </div>;
}
