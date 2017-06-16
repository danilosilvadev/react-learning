import React from 'react'

export default class extends React.Component {

    handleClick(event) {
        event.preventDefault();
        this.props.marcarGol();
    }

    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>Gol</button>
        );
    }
}

