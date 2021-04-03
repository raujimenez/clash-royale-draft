import React from 'react';
import LinkButton from './inputs/LinkButton';

const questionStyle = { 
    fontSize: '1.75em', 
    textAlign: 'center', 
    marginBottom: '2vh' 
}

export default function PlayerDraftChooser(props) {
    return (
        <div>
            <div style={questionStyle}>
                Where are you going to do the draft?
            </div>
            <LinkButton 
                title="Same Device" 
                toLocation="/playerdraft/samedevice" 
            />
            <LinkButton 
                title="Seperate Devices" 
                toLocation="/playerdraft/differentDevice" 
            />
        </div>
    )
}