import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const styleGenerator = (isHover) => {
    return {
        backgroundColor: (isHover) ? 'black' : '#302e57',
        textAlign: 'center',
        fontSize: '1.75em',
        borderRadius: '2vw',
        padding: '4vh',
        color: '#ccdded',
        margin: 'auto',
        marginBottom: '2vh',
        width: '70%'
    }
}

const linkStyle = {
    textDecoration: 'none',
    textAlign: 'center',
    width: '100%',
}

export default function LinkButton(props) {
    const buttonTitle = props.title;
    const toLocation = props.toLocation;
    
    const [isHover, setIsHover] = useState(false);

    return (
        <Link 
            to={toLocation} 
            style={linkStyle}
            onMouseEnter={_ => setIsHover(true)} 
            onMouseLeave={_ => setIsHover(false)}
        >
            <div style={styleGenerator(isHover)} >
                {buttonTitle}
            </div>
        </Link>
    )
}