import React, { Component } from 'react';

const userInput = ( props ) => {
    return (
        <div>
            <input type="text" placeholder="Enter text..." onChange={props.changed}></input>
        </div>
    );
}

export default userInput;