import { useState } from "react";
import { Switch,Route } from "react-router-dom";
import { EmployeeList } from "./components/EmployeeList/index";
import { EmployeeForm } from "./components/EmployeeForm/index";
import { initialEmployeeList } from './mocks';
import { Header } from "./components/Header/index";

const App = () => {

  const [employees, setEmployees] = useState(initialEmployeeList);
  const [currentEmployee, setCurrentEmployee] = useState({});
  
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/employee">
          <EmployeeForm 
            currentEmployee={currentEmployee} 
            employees={employees} 
            setCurrentEmployee={setCurrentEmployee} 
            setEmployees={setEmployees} />
        </Route>
        <Route exact path="/">
          <EmployeeList 
            setEmployees={setEmployees} 
            setCurrentEmployee={setCurrentEmployee} 
            employees={employees} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
