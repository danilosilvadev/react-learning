import React, { Component } from 'react'

const List = () => {

}

const Update = () => {

}

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            showForm: false,
            counter: 0,
            idMirror: null,
            newItem: ''
        };
        this.handleReplace = this.handleReplace.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.cancelUpdate = this.cancelUpdate.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleChange(event) {
        this.setState({ item: event.target.value });
        //console.log(event.target.value)
    }

    handleSubmit(event) {
        event.preventDefault();
        let item = this.state.item;
        if (item === null || item === "" || item === undefined) {
            return alert('Writte something');
        } else {
            const counter = this.state.counter + 1
            this.setState({
                list: [
                    ...this.state.list,
                    { item: item, id: counter }
                ],
                counter
            });
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
        this.setState({ idMirror: id })
        this.setState({ showForm: true });
    }

    handleDelete(id) {
        console.log('delete ' + id);
        this.setState(state => {
            const filteredList = state.list.filter(item => item.id !== id);
            return { list: filteredList };
        });
    }

    cancelUpdate(e) {
        e.preventDefault();
        return this.setState({ showForm: false });
    }

    loadFields() {
        if (this.state.showForm === false) {
            return <div></div>
        }
        return <div>
            <label>
                <input type="text" onChange={this.handleChange} />
            </label>
            <label>
                <input type="submit" value="Update" />
            </label>
            <button onClick={this.cancelUpdate}> Cancel </button>
        </div>
    }

    handleUpdate(e) {
        e.preventDefault();
        let item = this.state.item;
        let list = this.state.list;
        let idMirror = this.state.idMirror;
        if (item === null || item === "" || item === undefined) {
            return alert('Writte something');
        } else {
            let index = list.findIndex(x => x.id==idMirror);
            list.splice(index, list[index] = {id: idMirror, item: this.state.item})
            console.log(index);
        }
    }

    render() {

        const { list } = this.state;
        return (
            <div><form onSubmit={this.handleSubmit}>
                <label>
                    <span>Add item</span>
                    <input type="text" onChange={this.handleChange} />
                </label>
                <input type="submit" value="Add" />
            </form>
                <ul>{this.loadList(list)}</ul>
                <form onSubmit={this.handleUpdate}>{this.loadFields()}</form>
            </div>
        )
    }
}

export default Form