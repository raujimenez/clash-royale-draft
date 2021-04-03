import React from 'react';

export default function CardInfo(props) {
    const imageUrl = props.imageUrl;
    const cardName = props.cardName;
    
    return (
        <div>
            <img src={imageUrl}/>
            {cardName}
        </div>
    )
}