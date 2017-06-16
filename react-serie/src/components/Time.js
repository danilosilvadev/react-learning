import React from 'react'

import BotaoGol from './BotaoGol'

export default class Time extends React.Component {

    render() {

        const { nome, gols, marcarGol } = this.props;

        return (
            <div>
                <h1>{nome}</h1>
                <h2>{gols}</h2>
                <BotaoGol marcarGol={marcarGol} />
            </div>
        )
    }
}