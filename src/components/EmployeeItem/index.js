import {useHistory} from 'react-router-dom';
import { StyledWrapper, StyledButton } from "./index.styled";
import { Avatar } from "../Avatar/index";

export const EmployeeItem = ({data={}, setCurrentEmployee,employees,setEmployees}) => {
  
    const {name,surname,id,phone,position,age,email} = data;
    const url = `employee/${id}`;
    const history = useHistory();


    const handleEditClick = ()=>{
        history.push(url);
        setCurrentEmployee(data);
    }

    const handleRemoveClick = ()=>{
        const filteredEmployyes = employees.filter((item)=>{
            return item.id !== id;
        })
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
                <div style={{display: 'flex',flexDirection:'column',alignItems:'center',flexWrap:'wrap'}}>
                    <StyledButton onClick={handleEditClick} color="blue">edit</StyledButton>
                    <StyledButton onClick={handleRemoveClick} color="red">remove</StyledButton>
                </div>
        </StyledWrapper>
    )
}