import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LinkButton from './inputs/LinkButton';

import PlayerIdInput from './inputs/PlayerIdInput';
import PlayerXDraft from './PlayerXDraft';

export default function PlayerDraftInput(props) {
    const [player1Id, setPlayer1Id] = useState('');
    const [player2Id, setPlayer2Id] = useState('');

    const [player1Deck, setPlayer1Deck] = useState(null);
    const [player2Deck, setPlayer2Deck] = useState(null);

    return (
        <Router>
            <Switch>
                <Route path="/playerdraft/samedevice" exact>
                    <PlayerIdInput setPlayerId={setPlayer1Id} />
                    <PlayerIdInput setPlayerId={setPlayer2Id} />
                    <LinkButton title="Start Draft" toLocation="/playerdraft/samedevice/start" />
                </Route>
                <Route path="/playerdraft/samedevice/start" exact>
                    <PlayerXDraft />
                </Route>
            </Switch>
        </Router>
    )
}