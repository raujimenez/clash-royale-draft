import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LinkButton from './inputs/LinkButton';

import PlayerIdInput from './inputs/PlayerIdInput';
import PlayerXDraft from './PlayerXDraft';

export default function PlayerDraftInput(props) {
    const [player1Id, setPlayer1Id] = useState('');
    const [player2Id, setPlayer2id] = useState('');

    return (
        <Router>
            <Switch>
                <Route path="/playerdraft/samedevice" exact>
                    <PlayerIdInput setPlayerId={setPlayer1Id} />
                    <PlayerIdInput setPlayerId={setPlayer2id} />
                    <LinkButton title="Start Draft" toLocation="/playerdraft/samedevice/start"/>
                </Route>
                <Route path="/playerdraft/samedevice/start" exact>
                    <PlayerXDraft player1Id={player1Id} player2Id={player2Id}/>
                </Route>
            </Switch>
        </Router>
    )
}