import React, { Component } from 'react';

const userInput = ( props ) => {
    return (
        <div>
            <input type="text" 
                placeholder="Enter text..." 
                onChange={props.changed} 
                value={props.username}>
            </input>
        </div>
    );
}

export default userInput;