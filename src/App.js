import { useEffect, useState } from "react";
import { Switch,Route,Link } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import Employee from "./components/Employee";
import NoMatch from "./components/NoMatch";

function App() {

  const employeeList = [
    {name: 'Andrii', surname:'Ivanov', age:20, position: 'be', phone: '3809999999', id:0},
    {name: 'Oleh', surname:'Petrov', age:21, position: 'fe', phone: '3809999999', id:1},
    {name: 'Taras', surname:'Shevchenko', age:29, position: 'fe', phone: '3809999999', id:2},
    {name: 'Roman', surname:'Shevchenko', age:29, position: 'qa', phone: '3809999999', id:3},
    {name: 'Anatolii', surname:'Shevchenko', age:19, position: 'be', phone: '3809999999', id:4}
  ];
    const [employees, setEmployees] = useState(employeeList);
    const [currentEmployee, setCurrentEmployee] = useState(null);
    
    useEffect(()=>{
      console.log('effect', employees, currentEmployee)
    }, [employees, currentEmployee]);

    console.log('render app', {employees})
  
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/employee" >Add employee</Link>

      <Switch>
          <Route path="/employee/:id">
            <Employee currentEmployee={currentEmployee} employees={employees} setCurrentEmployee={setCurrentEmployee} setEmployees={setEmployees} />
          </Route>
          <Route path="/employee">
            <Employee currentEmployee={currentEmployee} employees={employees} setCurrentEmployee={setCurrentEmployee} setEmployees={setEmployees} />
          </Route>
          <Route exact path="/">
            <EmployeeList setEmployees={setEmployees} setCurrentEmployee={setCurrentEmployee} employees={employees} />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
