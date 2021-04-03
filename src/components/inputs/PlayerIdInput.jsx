import React from 'react';

const inputStyles = {
    height: '10vh',
    marginBottom: '2vh',
    border: '0px',
    borderRadius: '10px',
    width: '80%',
    fontSize: '1.75em',
    color: '#ccdded',
    backgroundColor: '#2b203d',
    borderStyle: 'solid',
    textTransform: 'uppercase'
}

const outContainerStyle = {
    textAlign: 'center',
    fontSize: '1.5em'
}

export default function PlayerIdInput(props) {
    const setPlayerId = props.setPlayerId;

    return (
        <div style={outContainerStyle}>
            <input 
                style={inputStyles} 
                placeholder="Player ID" 
                maxLength={8} 
                onChange={(val) => setPlayerId(val)} 
            />
        </div>
    )
}