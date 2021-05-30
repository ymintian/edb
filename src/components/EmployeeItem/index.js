import { useHistory } from 'react-router-dom';
import { StyledWrapper, StyledButton, StyledButtonsWrapper } from "./index.styled";
import { Avatar } from "../Avatar/index";

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
                    <StyledButton onClick={handleEditClick} color="blue">edit</StyledButton>
                    <StyledButton onClick={handleRemoveClick} color="red">remove</StyledButton>
                </StyledButtonsWrapper>
        </StyledWrapper>
    )
}