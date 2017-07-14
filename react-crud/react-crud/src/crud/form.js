import React from 'react';

import React, { Component } from 'react'

import Styled from 'styled-components'

import ValidatingFields from '../utils/validating-fields'

const Label = Styled.label`
            display: -webkit-flex;
            display: flex;
            margin-top: 15px;
            justify-content: center;
            font-size: 200%;
            color:  #f9a19f;
            font-weight: bold;
            display: block;

`

const Input = Styled.input`
            border: none;
            border-radius: 1px;
            border-bottom: 1px solid #f9a19f;
            outline: none;
            font-size: 80%;
            background: none;
            width: 90%;
            display: -webkit-flex;
            display: flex;
            justify-content: flex-start;
`
const Textarea = Styled.textarea`
                border: none;
                border-radius: 3px;
                border-bottom: 2px solid  #f9a19f;
                outline: none;
                width: 90%;
                font-size: 100%;
                display: -webkit-flex;
                display: flex;
                justify-content: flex-start;
`

const Form = Styled.form`
            align-items: center;
            margin-top: 10%;
`
const Span = Styled.span`
            display: -webkit-flex;
            display: flex;
            justify-content: flex-start;
`

const Button = Styled.input`
            background: none;
            border: 1px solid #f9a19f;
            color: #f9a19f;
            border-radius: 3px;
            font-size: 200%;
            display: -webkit-flex;
            display: flex;
            justify-content: flex-start;
            outline: none;
`

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }

    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    handleChangeMessage(event) {
        this.setState({ message: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (ValidatingFields.isEmptyOrNull(this.state.name, this.state.email, this.state.message)) {
            return alert('Preencha os campos');
        } else {
            alert('Nome: ' + this.state.name);
            alert('Email: ' + this.state.email);
            alert('Message: ' + this.state.message);
        }
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Label>
                    <Span>Qual o seu nome?</Span>
                    <Input type="text" onChange={this.handleChangeName} />
                </Label><Label>
                    <Span>Me diz um e-mail seu pra retorno:</Span>
                    <Input type="text" onChange={this.handleChangeEmail} /></Label><Label>
                    <Span>Escreva sua mensagem:</Span>
                    <Textarea onChange={this.handleChangeMessage} />
                </Label><br />
                <Button type="submit" value="Enviar" />
            </Form>
        )
    }
}

export default Form

<h3>{id} - {item}</h3>
            <button onClick={handleReplace()}>Replace</button>
            <button onClick={handleDelete()}>Delete</button>