import { useState } from "react";
import { Switch,Route } from "react-router-dom";
import {EmployeeList} from "./components/EmployeeList/index";
import {Employee} from "./components/Employee/index";
import {NoMatch} from "./components/NoMatch/index.js";
import {employeeList} from './mocks';
import { Header } from "./components/Header/index";

const App = () => {

  const [employees, setEmployees] = useState(employeeList);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  
  return (
    <div style={{width:'90%',margin: '0 auto'}}>
      <Header/>
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
