import React, { Component } from 'react';
import './UserInput.css'

const userInput = ( props ) => {
    return (
        <div className="UserInput">
            <input type="text" 
                placeholder="Enter text..." 
                onChange={props.changed} 
                value={props.username}>
            </input>
        </div>
    );
}

export default userInput;