import { useHistory } from 'react-router-dom';
import { StyledWrapper, StyledButtonsWrapper } from "./index.styled";
import { Avatar } from "../Avatar/index";
import { Button } from "../common/Button";

export const EmployeeItem = ({data = {}, setCurrentEmployee, employees, setEmployees}) => {
  
    const { name, surname, phone, position, age, email, id } = data;
    const url = 'employee';
    const history = useHistory();


    const handleEditClick = () => {
        history.push(url);
        setCurrentEmployee(data);
    }

    const handleRemoveClick = () => {
        const filteredEmployyes = employees.filter((item) => item.id !== id)
        setEmployees(filteredEmployyes);
    }

    return (
        <StyledWrapper>
                <Avatar />
                <div>First Name: {name}</div>
                <div>Last Name: {surname}</div>
                <div>Age: {age}</div>
                <div>Phone: {phone}</div>
                <div>Email: {email}</div>
                <div>Position: {position ? position.toUpperCase() : 'n/a'}</div>
                <StyledButtonsWrapper>
                    <Button onClick={handleEditClick} color="blue">edit</Button>
                    <Button onClick={handleRemoveClick} color="red">remove</Button>
                </StyledButtonsWrapper>
        </StyledWrapper>
    )
}