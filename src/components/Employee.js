import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddUserItem from './AddUserItem';
import User from './User';

function Employee(props){
    const {employees, setCurrentEmployee} = props;

    useEffect(()=>{
        return ()=>{
            setCurrentEmployee(null)
        }
    })
    let { id } = useParams();
    const employee = employees.find((el) => {console.log('test', el.id ,id);return el.id === +id});
    console.log('employee props',{props})
    return id ? <User {...props} id={id} /> : <AddUserItem {...props} />
}



export default Employee;
