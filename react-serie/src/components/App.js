import React from 'react';

import PlacarContainer from './Placar';

const dados = {
    partida: {
        estadio: "Arruda",
        data: "12/03/2018",
        horario: "19hrs"
    },
    casa: {
        nome: "náutico",
    },
    visitante: {
        nome: "sport"
    }
};

export default class App extends React.Component {
    render() {
        return (
            <div>
                <PlacarContainer {...dados} />
            </div>);
    }
}