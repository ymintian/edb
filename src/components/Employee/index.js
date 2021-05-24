import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {AddUserItem} from '../AddUserItem/index';
import {User} from '../User/index';

export const Employee = (props) => {
    const {employees, setCurrentEmployee} = props;

    useEffect(()=>{
        return ()=>{
            setCurrentEmployee(null)
        }
    })

    let { id } = useParams();
    const employee = employees.find((el) => {console.log('test', el.id ,id);return el.id === +id});

    return id ? <User {...props} id={id} /> : <AddUserItem {...props} />
}

