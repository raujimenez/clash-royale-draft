import React from 'react';
import LinkButton from './inputs/LinkButton';

const styles = {
    textAlign: 'center'
}

export default function LandingPageNavigation(props) {
    return (
        <div style={styles}>
            <LinkButton 
                title="Draft with all cards" 
                toLocation="/alldraft"
            />
            <LinkButton 
                title="Use Player's ID" 
                toLocation="/playerdraft/chooser"
            />
        </div>
    )
}