export const validateInputChange = (item) => {
    const name = item.name;
    const value = item.value;
    const regExp = {
        name: /^[a-z ,.'-]+$/i,
        surname: /^[a-z ,.'-]+$/i,
        email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        age:/^[1-9]?[0-9]{1}$|^100$/,
        phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        position: /^[a-z ,.'-]+$/i
    };

    return regExp[name].test(value);
};

export const sortArrayBy = (arr, sorting, name) => {
    
    const compare = ( a, b ) => {   
        const aValue = typeof a[name] === 'string' ? a[name].toLowerCase() : a[name];
        const bValue = typeof b[name] === 'string' ? b[name].toLowerCase() : b[name];
        
        if ( aValue < bValue ){
          return sorting === 'asc' ? -1 : 1;
        }
        if ( aValue > bValue ){
          return sorting === 'asc' ? 1 : -1;
        }
        return 0;
    };

    return arr.sort(compare);
}


export const processEmployees = (employees, filters, sort, search) => {
    const employeesCopy = [...employees];
    const filtersMap = Object.entries(filters).filter((item) => item[1]);
    const filtersArr = filtersMap.reduce((acc, item) => [...acc, item[0]], []);
    
    if(sort === 'relevance' && !filtersArr.length && !search) {
      return employeesCopy;
    }
    
    const filteredEmployees = filtersArr.length ? employeesCopy.filter((item) => filtersArr.includes(item.position)) : employeesCopy;
    const sortedEmployees = sort !=='relevance' ?  sortArrayBy(filteredEmployees, sort, 'name') : filteredEmployees;

    if(search) {
      const searchedEmployees = sortedEmployees.filter((item) => item.name.toLowerCase().includes(search));
      return searchedEmployees;
    }

    return sortedEmployees;
  }