import React from "react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useParams, Redirect, useHistory } from "react-router-dom";

function AddUserItem(props){
    const {setEmployees, employees} = props;
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [surname, setSurname] = useState('');
    const [position, setPosition] = useState('');
    const [phone, setPhone] = useState('');
    const history = useHistory();
    
    function handleSubmit(e){
        e.preventDefault();
        console.log('submit', e)
        setEmployees([...employees, {name,age,phone,surname,position, id: employees.length}]);
        history.push('/');
    }

    function handleNameChange(e){
        setName(e.target.value);
    }
    function handlePositionChange(e){
        setPosition(e.target.value);
    }
    function handlePhoneChange(e){
        setPhone(e.target.value);
    }
    function handleSurnameChange(e){
        setSurname(e.target.value);
    }
    function handleAgeChange(e){
        setAge(e.target.value);
    }
    
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="firs name" value={name} onChange={handleNameChange} required />
            <input type="text" name="surname" placeholder="last name" value={surname} onChange={handleSurnameChange} required />
            <input type="text" name="age" placeholder="age" value={age} onChange={handleAgeChange} required />
            <input type="text" name="phone" placeholder="phone" value={phone} onChange={handlePhoneChange} required />
            select position<select value={position} name="position" onChange={handlePositionChange} required>
                <option value="">select position</option>
                <option value="be">BE</option>
                <option value="fe">FE</option>
                <option value="qa">QA</option>
                <option value="pm">PM</option>
                <option value="aqa">AQA</option>
                <option value="other">Other</option>
            </select>
            <button type="submit">add user</button>
        </form>
    )
}



export default AddUserItem;
