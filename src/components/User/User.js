import React from 'react';

const User = ({user}) => {
    let {name, status, species,gender, image} = user;
    return (

        <div className="user">

            <hr/>
            <p>Name - {name}</p>
            <p>Status - {status}</p>
            <p>Species - {species}</p>
            <p>Gender - {gender}</p>
            <p>Photo person</p>
            <img src={image} alt={name}/>
            <hr/>

        </div>


    );
};



export default User;