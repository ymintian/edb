import React from 'react';
import  avatar from "../../assets/images/avatar.svg";

export const Avatar = () => {
    return (
        <div>
            <img src={avatar} width="100px" alt="avatar" />
        </div>
    );
}