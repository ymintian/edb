import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {StyledInput,StyledSelect,StyledButton} from './index.styled';
import {NoMatch} from "../NoMatch/index.js";
import { validateInputChange } from "../../utils";

export const User = (props) => {
    const {setEmployees, employees, id} = props;
    const currentEmployee = employees.filter((item)=>item.id === +id)[0] || {};
    const [formFieldsValidation,setFormFieldsValidation] = useState(
        {
            name: true,
            surname: true,
            email: true,
            age: true,
            phone: true
        }
    );
    
    const {name, surname,phone, age,position,email} = currentEmployee;
    const [nameValue, setName] = useState(name);
    const [ageValue, setAge] = useState(age);
    const [surnameValue, setSurname] = useState(surname)
    const [positionValue, setPosition] = useState(position);
    const [phoneValue, setPhone] = useState(phone);
    const [emailValue, setEmail] = useState(email);
    const history = useHistory();
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        const newEmployees = editUserById(employees,id);
        if(isFormValid()) {
            setEmployees(newEmployees);
            history.push('/');
        }
    }

    const editUserById = (arr,id)=>{
        return arr.map((item)=>{
            if(item.id === +id) {
                const newItem = {...item, name: nameValue,age: ageValue,phone:phoneValue,surname:surnameValue,position:positionValue};
                return newItem;
            }
            else{
                return item
            }
        })
    };

    const isFormValid = () => {
        return Object.values(formFieldsValidation).every((value)=>value);
    }

    const handleNameChange = (e)=>{
        setName(e.target.value);
        const inputName = e.target.name;
        const isInputValid = validateInputChange(e.target);
        setFormFieldsValidation({...formFieldsValidation,[inputName]:isInputValid})
    }
    const handlePositionChange = (e)=>{
        setPosition(e.target.value);
    }
    const handlePhoneChange = (e)=>{
        setPhone(e.target.value);
        const inputName = e.target.name;
        const isInputValid = validateInputChange(e.target);
        setFormFieldsValidation({...formFieldsValidation,[inputName]:isInputValid})
    }
    const handleSurnameChange = (e)=>{
        setSurname(e.target.value);
        const inputName = e.target.name;
        const isInputValid = validateInputChange(e.target);
        setFormFieldsValidation({...formFieldsValidation,[inputName]:isInputValid})
    }
    const handleAgeChange = (e)=>{
        setAge(e.target.value);
        const inputName = e.target.name;
        const isInputValid = validateInputChange(e.target);
        setFormFieldsValidation({...formFieldsValidation,[inputName]:isInputValid})
    }
    const handleEmailChange = (e)=>{
        setEmail(e.target.value);
        const inputName = e.target.name;
        const isInputValid = validateInputChange(e.target);
        setFormFieldsValidation({...formFieldsValidation,[inputName]:isInputValid})
    }

    return Object.keys(currentEmployee).length ? (
        <form onSubmit={handleSubmit}>
            <StyledInput type="text" name="name" value={nameValue} onChange={handleNameChange} className={formFieldsValidation.name ? '' : 'error' } required maxLength="30"></StyledInput>
            <StyledInput type="text" name="surname" value={surnameValue} onChange={handleSurnameChange} className={formFieldsValidation.surname ? '' : 'error' } required maxLength="30"></StyledInput>
            <StyledInput type="text" name="age" value={ageValue} onChange={handleAgeChange} className={formFieldsValidation.age ? '' : 'error' } required maxLength="30"></StyledInput>
            <StyledInput type="text" name="phone" value={phoneValue} onChange={handlePhoneChange} className={formFieldsValidation.phone ? '' : 'error' } required maxLength="30"></StyledInput>
            <StyledInput type="text" name="email" value={emailValue} onChange={handleEmailChange} className={formFieldsValidation.email ? '' : 'error' } required maxLength="30"></StyledInput>
            <div>
                <p>Select position:</p>
                <StyledSelect value={positionValue} name="position" onChange={handlePositionChange} required>
                    <option value="">select position</option>
                    <option value="be">BE</option>
                    <option value="fe">FE</option>
                    <option value="qa">QA</option>
                    <option value="pm">PM</option>
                    <option value="aqa">AQA</option>
                    <option value="other">Other</option>
                </StyledSelect>
            </div>
            <StyledButton type="submit" color="#76e176">save</StyledButton>
        </form>
    ) : <NoMatch />
}