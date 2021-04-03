import React from 'react';
import LandingPageButton from './inputs/LandingPageButton';

const styles = {
    textAlign: 'center'
}

export default function LandingPageNavigation(props) {
    return (
        <div style={styles}>
            <LandingPageButton 
                title="Draft with all cards" 
                toLocation="/alldraft"
            />
            <LandingPageButton 
                title="Use Player's ID" 
                toLocation="/playerdraft"
            />
        </div>
    )
}