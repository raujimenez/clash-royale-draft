import React, { useEffect } from 'react';

import getPlayerCardInfo from "../services/getPlayersInfo";
import CardInfo from './inputs/CardInfo';

export default function PlayerXDraft(props) {
    const player1Deck = props.player1Deck;
    return (
        <div>
            {player1Deck.map(card => (
                <CardInfo imageUrl={card.iconUrls.medium} cardName={card.name} />
            ))}
        </div>
    )
}