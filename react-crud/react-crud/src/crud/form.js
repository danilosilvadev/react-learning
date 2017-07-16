import React, { Component } from 'react'

let _counter = 1;

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

    incrementCounter() {
        return String(_counter++);
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
            this.setState({ list: [...this.state.list, { item: item, id: this.incrementCounter() }] });
        }
    }

    loadList(list) {
        const itensList = list.map((list) => {
            return <li key={list.id}>
                <span>{list.id} - {list.item}</span><br />
                <button onClick={() => this.handleReplace(list.id)}>Replace</button>
                <button onClick={() => this.handleDelete(list.id)}>Delete</button>
            </li>;
        });
        if (itensList === null || itensList === "" || itensList === undefined) {
            return <li>empty</li>;
        } else {
            return itensList;
        }
    }

    handleReplace(id) {
         console.log('replace ' + id);
            
    }

    handleDelete(id) {
        console.log('delete ' + id);
        this.setState(state => {
            const filteredList = state.list.filter(item => item.id !== id);
            return { list: filteredList };
        });
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