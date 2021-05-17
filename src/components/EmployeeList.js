import { useState } from "react";
import EmployeeItem from "./EmployeeItem";

function EmployeeList(props) {
  const {employees} = props;
  const [filter,setFilter] = useState({be:false,fe:false,qa:false,aqa:false,pm:false,other:false});
  const [sort,setSort] = useState('relevance');
  // const [isFiltered, setIsFiltered] = useState(false);
  const [search,setSearch] = useState('');
  console.log('list',{employees});

  function processEmployees(employees){
    const filtersMap = Object.entries(filter).filter((item)=>item[1]);
    const filtersArr = filtersMap.reduce((acc, item)=>{acc.push(item[0]);return acc }, [])
    
    if(sort === 'relevance' && !filtersArr.length && !sort) {
      console.log('if', sort,filtersArr.length)
      return employees;
    }
    const filteredEmployees = filtersArr.length ? employees.filter((item)=>filtersArr.includes(item.position)) : employees;
    
    function compare( a, b ) {
      // if(sort==='relevance') return 0;
      
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
      console.log('search',search,searchedEmployees)
      return searchedEmployees;
    }

    return sortedEmployees;
  }

  function handleSearchChange(e){
    setSearch(e.target.value);
  }

  function handleFilterChange(e){
    const checked = e.target.checked;
    const name = e.target.name;
    // setIsFiltered(true);
    setFilter({...filter, [name]:checked});
  }

  function handleSortChange(e){
    setSort(e.target.value);
  }

  const processedEmployees = processEmployees(employees);

  return <div>
      <input type="text" value={search} placeholder="Search..." onChange={handleSearchChange} />
      sort by
      <select value={sort} onChange={handleSortChange}>
            <option value="relevance">relevance</option>
            <option value="asc">name &#8593;</option>
            <option value="desc">name &#8595;</option>
      </select>
      <div>
            <p>filter</p>
            be<input type="checkbox" name="be" value="be" onChange={handleFilterChange} />
            fe<input type="checkbox" name="fe" value="fe" onChange={handleFilterChange} />
            qa<input type="checkbox" name="qa" value="qa" onChange={handleFilterChange} />
            pm<input type="checkbox" name="pm" value="pm" onChange={handleFilterChange} />
            aqa<input type="checkbox" name="aqa" value="aqa" onChange={handleFilterChange} />
            other<input type="checkbox" name="other" value="other" onChange={handleFilterChange} />
      </div>
      <div style={{display: 'flex',justifyContent: 'flex-start', flexWrap: 'wrap'}}>
        {processedEmployees && processedEmployees.map((item, i) => <EmployeeItem key={i} {...props}  data={{...item}} />)}
      </div>
  </div>;
}

export default EmployeeList;
