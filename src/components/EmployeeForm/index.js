import React from "react";
import { useState, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { StyledInput, StyledSelect, StyledButton } from './index.styled';
import { validateInputChange } from "../../utils";
import { positions } from "../../mocks";

export const EmployeeForm = (props) => {
    const { setEmployees, employees, currentEmployee = {}, setCurrentEmployee } = props;

    useEffect(() => {
        return function(){
            setCurrentEmployee({});
        }
    }, [currentEmployee, setCurrentEmployee]);

    const {name = '', surname = '', phone = '', age = '', position = '', email = '', id = ''} = currentEmployee;
    const [formValues, setFormValues] = useState({ 
        name: {value: name, isValid: true}, 
        surname: {value: surname, isValid: true},
        phone: {value: phone, isValid: true},
        email: {value: email, isValid: true},
        age: {value: age, isValid: true},
        position: {value: position, isValid: true},
    });
    const history = useHistory();

    const isAllFieldsValid = () => Object.values(formValues).every((value) => value.isValid);

    const isFormValid = useMemo(() => isAllFieldsValid(), [formValues]);

    const findUserById = (arr, id) => {
        return arr.map((item) => {
            if(item.id === id) {
                const newItem = {
                    id: item.id, 
                    name: formValues.name.value, 
                    age: Number(formValues.age.value), 
                    phone: formValues.phone.value, 
                    surname: formValues.surname.value, 
                    position: formValues.position.value,
                    email: formValues.email.value
                };
                return newItem;
            }
            else{
                return item;
            }
        })
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const lastElementId = Number(employees[employees.length - 1].id);
        const employeeData = {
            id: String(lastElementId + 1),
            name: formValues.name.value, 
            age: Number(formValues.age.value), 
            phone: formValues.phone.value, 
            surname: formValues.surname.value, 
            position: formValues.position.value,
            email: formValues.email.value
        }

        const newEmployees = id ? 
            findUserById(employees, id) : 
            [...employees, employeeData];

        if(isFormValid) {
            setEmployees(newEmployees);
            history.push('/');
        }
    };


    const handleChange = (e) => {
        const inputName = e.target.name;
        const isValid = validateInputChange(e.target);
        const inputValue = e.target.value;
        
        setFormValues({...formValues, 
            [inputName]: { 
                value: inputValue, 
                isValid 
            }
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <StyledInput  
                name="name" 
                value={formValues.name.value} 
                placeholder="name" 
                onChange={handleChange} 
                className={formValues.name.isValid ? '' : 'error' } 
                required 
                maxLength="30" />
            <StyledInput 
                name="surname" 
                value={formValues.surname.value} 
                placeholder="surname" 
                onChange={handleChange} 
                className={formValues.surname.isValid ? '' : 'error' } 
                required 
                maxLength="30" />
            <StyledInput  
                name="age" 
                value={formValues.age.value} 
                placeholder="age" onChange={handleChange} 
                className={formValues.age.isValid ? '' : 'error' } 
                required 
                maxLength="30" />
            <StyledInput  
                name="phone" 
                value={formValues.phone.value} 
                placeholder="phone" 
                onChange={handleChange} 
                className={formValues.phone.isValid ? '' : 'error' } 
                required 
                maxLength="30" />
            <StyledInput 
                name="email"
                value={formValues.email.value} 
                placeholder="email" 
                onChange={handleChange} 
                className={formValues.email.isValid ? '' : 'error' } 
                required 
                maxLength="30" />
            <div>
                <p>Select position:</p>
                <StyledSelect value={formValues.position.value} name="position" onChange={handleChange} required>
                    <option value='' disabled>Select position</option>
                    {
                        positions.map((item) => {
                            return (
                                <option key={item} value={item}>{item.toUpperCase()}</option>
                            )
                        })
                    }
                </StyledSelect>
            </div>
            <StyledButton type="submit" color="#76e176">save</StyledButton>
        </form>
    );
}