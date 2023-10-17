import React from 'react';

const User = ({user}) => {
    let {name, status, species,gender, image} = user;
    return (
        <div>
            <p>{name}</p>
            <p>{status}</p>
            <p>{species}</p>
            <p>{gender}</p>
            <img src={image} alt={name}/>
        </div>
    );
};

export default User;