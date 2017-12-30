import React, { Component } from 'react';


const userOutput = (props) => {
    return (
        <div>   
            <p style={props.style}>{props.username}</p>
            <p>Hi!</p>
        </div>
    );
}

export default userOutput;