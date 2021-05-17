import React from "react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useParams, Redirect, useHistory } from "react-router-dom";

function User(props){
    const {setEmployees, employees, id} = props;
    const currentEmployee = employees.filter((item)=>item.id === +id);
    console.log('user init', props , currentEmployee)
    const {name, surname,phone, age,position} = currentEmployee[0];
    const [nameValue, setName] = useState(name);
    const [ageValue, setAge] = useState(age);
    const [surnameValue, setSurname] = useState(surname)
    const [positionValue, setPosition] = useState(position);
    const [phoneValue, setPhone] = useState(phone);
    const history = useHistory();
    
    function handleSubmit(e){
        e.preventDefault();
        console.log('submit user', e);
        const resEmployees = editUserById(employees,id);
        setEmployees(resEmployees);
        history.push('/');
    }

    function editUserById(arr,id){
        return arr.map((item)=>{
            if(item.id === +id) {
                const newItem = {...item, name: nameValue,age: ageValue,phone:phoneValue,surname:surnameValue,position:positionValue};
                return newItem;
            }
            else{
                return item
            }
        })
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
    
    console.log('user',props)
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={nameValue} onChange={handleNameChange} required />
            <input type="text" name="surname" value={surnameValue} onChange={handleSurnameChange} required />
            <input type="text" name="age" value={ageValue} onChange={handleAgeChange} required />
            <input type="text" name="phone" value={phoneValue} onChange={handlePhoneChange} required />
            select position<select value={positionValue} name="position" onChange={handlePositionChange} required>
                <option value="">select position</option>
                <option value="be">BE</option>
                <option value="fe">FE</option>
                <option value="qa">QA</option>
                <option value="pm">PM</option>
                <option value="aqa">AQA</option>
            </select>
            <button type="submit">save</button>
        </form>
    )
}



export default User;
