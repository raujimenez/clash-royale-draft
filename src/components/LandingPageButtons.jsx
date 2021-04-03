import React from 'react';

const inputStyles = {
    height: '10vh',
    marginBottom: '2vh',
    borderRadius: '10px',
    width: '80%',
    fontSize: '2em',
    color: 'white',
    backgroundColor: '#2b203d',
    borderStyle: 'solid',
    textTransform: 'uppercase'
}

const outContainerStyle = {
    textAlign: 'center',
    fontSize: '1.5rem'
}

export default function LandingPageButtons() {
    
    
    return (
        <div style={outContainerStyle}>
            <div>
                <input style={inputStyles} placeholder="Player 1 ID" maxLength={8}/>
            </div>
            <div>
                <input style={inputStyles} placeholder="Player 2 ID" maxLength={8}/>
            </div>
            Do not include the #
        </div>
    )
}