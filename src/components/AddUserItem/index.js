import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {StyledInput,StyledSelect,StyledButton} from "./index.styled";

export const AddUserItem = (props) => {
    const {setEmployees, employees} = props;
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [surname, setSurname] = useState('');
    const [position, setPosition] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory();

    const [formFieldsValidation,setFormFieldsValidation] = useState(
        {
            name: true,
            surname: true,
            email: true,
            age: true,
            phone: true
        }
    );
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        const lastElementId = employees[employees.length-1].id;
        if(isFormValid()) {
            setEmployees([...employees, {name,age,phone,surname,position,email, id: lastElementId + 1}]);
            history.push('/');
        }
    }

    const validateInputChange = (item) => {
        const name = item.name;
        const value = item.value;
        const regExp = {
            name: /^[a-z ,.'-]+$/i,
            surname: /^[a-z ,.'-]+$/i,
            email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            age:/^[1-9]?[0-9]{1}$|^100$/,
            phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        };

        if(regExp[name].test(value)) {
            setFormFieldsValidation({...formFieldsValidation,[name]:true})
        } else {
            setFormFieldsValidation({...formFieldsValidation,[name]:false})
        }
    };

    const isFormValid = () => {
        return Object.values(formFieldsValidation).every((value)=>value);
    }

    const handleNameChange = (e)=>{
        setName(e.target.value);
        validateInputChange(e.target);
    }
    const handlePositionChange = (e)=>{
        setPosition(e.target.value);
    }
    const handlePhoneChange = (e)=>{
        setPhone(e.target.value);
        validateInputChange(e.target);
    }
    const handleSurnameChange = (e)=>{
        setSurname(e.target.value);
        validateInputChange(e.target);
    }
    const handleAgeChange = (e)=>{
        setAge(e.target.value);
        validateInputChange(e.target);
    }
    const handleEmailChange = (e)=>{
        setEmail(e.target.value);
        validateInputChange(e.target);
    }
    
    
    return (
        <form onSubmit={handleSubmit}>
            <StyledInput type="text" name="name" placeholder="first name" value={name} onChange={handleNameChange} className={formFieldsValidation.name ? '' : 'error' } required maxLength="30"/>
            <StyledInput type="text" name="surname" placeholder="last name" value={surname} onChange={handleSurnameChange} className={formFieldsValidation.surname ? '' : 'error' } required maxLength="30" />
            <StyledInput type="text" name="age" placeholder="age" value={age} onChange={handleAgeChange} className={formFieldsValidation.age ? '' : 'error' } required maxLength="30" />
            <StyledInput type="text" name="phone" placeholder="phone" value={phone} onChange={handlePhoneChange} className={formFieldsValidation.phone ? '' : 'error' } required maxLength="30" />
            <StyledInput type="text" name="email" placeholder="email" value={email} onChange={handleEmailChange} className={formFieldsValidation.email ? '' : 'error' } required maxLength="30" />
            <div>
                <div>Select position:</div>
                <StyledSelect value={position} name="position" onChange={handlePositionChange} required>
                    <option value="">select position</option>
                    <option value="be">BE</option>
                    <option value="fe">FE</option>
                    <option value="qa">QA</option>
                    <option value="pm">PM</option>
                    <option value="aqa">AQA</option>
                    <option value="other">Other</option>
                </StyledSelect>
            </div>
            <StyledButton type="submit" color="#76e176">Add user</StyledButton>
        </form>
    )
}