import React from 'react'

export default class extends React.Component {
    render() {

        const { estadio, data, horario } = this.props;

        return (
            <div>
                <h2>{estadio}</h2>
                <span>{data}</span>
                <span>{horario}</span>
            </div>
        );
    }
}