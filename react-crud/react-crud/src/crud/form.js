import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
        this.handleReplace = this.handleReplace.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ item: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        let item = this.state.item;
        if (item === null || item === "" || item === undefined) {
            return alert('Preencha os campos');
        } else {
            this.setState({ list: [...this.state.list, { item: item, id: Math.random() }] });
        }
    }

    loadList(list) {
        const itensList = list.map((list) => {
            return <li key={list.id}>
                <span>{list.id} - {list.item}</span><br />
                <button onClick={this.handleReplace()}>Replace</button>
                <button onClick={this.handleDelete()}>Delete</button>
            </li>;
        });
        if (itensList === null || itensList === "" || itensList === undefined) {
            return <li>empty</li>;
        } else {
            return itensList;
        }
    }

    handleReplace() {

    }

    handleDelete() {

    }

    render() {

        const { list } = this.state;
        return (
            <div><form onSubmit={this.handleSubmit}>
                <label>
                    <span>Add item</span>
                    <input type="text" onChange={this.handleChange} />
                </label>
                <input type="submit" value="Adicionar" />
            </form>
                <ul>{this.loadList(list)}</ul>
            </div>
        )
    }
}

export default Form