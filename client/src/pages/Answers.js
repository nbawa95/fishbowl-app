import React, { Component } from 'react';
import ReactTable from 'react-table-6';

import styled from 'styled-components'

import 'react-table-6/react-table.css'
import { Card, CardDeck, Button, Form } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import './Answers.css';
import plusWhiteIcon from '../images/plus-white.png';
import backArrow from '../images/back-arrow.png';
import deleteButton from '../images/delete.png';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

import axios from 'axios';

const Wrapper = styled.div`
padding: 0 100px 40px 100px;
`

class Answers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questionId: '',
            answers: [],
            isLoading: false,
            question: '',
            name: '',
            answer: '',
            isDialogOpen: false,
            answerToBeDeleted: ''
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.deleteAnswer = this.deleteAnswer.bind(this);
        this.getAnswers = this.getAnswers.bind(this);
    }

    componentDidMount = async () => {
        this.setState({
            isLoading: true,
            questionId: window.location.href.split("answers/")[1]
        });

        this.getAnswers();

        axios.get('/api/topics/' + window.location.href.split("answers/")[1]).then(question => {
            this.setState({
                question: question.data.question
            })
        });
    }

    submitAnswer = async () => {

        console.log(document.getElementById("name").value);
        const payload = {
            questionId: this.state.questionId,
            name: document.getElementById("name").value,
            answer: document.getElementById("answer").value
        }

        axios.post('/api/answers/add', payload)
        .then(res => {
            console.log(res.data);
            document.getElementById("name").value = "";
            document.getElementById("answer").value = "";

            axios.get('/api/answers/' + window.location.href.split("answers/")[1]).then(answers => {
                if (answers.data != null) {
                    this.setState({
                        answers: answers.data,
                        isLoading: false,
                    })
                }
            });
        }
    );

    console.log(payload);

}

getAnswers() {
    axios.get('/api/answers/' + window.location.href.split("answers/")[1]).then(answers => {
        if (answers.data != null) {
            console.log(answers.data);
            this.setState({
                answers: answers.data,
                isLoading: false,
            })
        }
    });
}

handleShow(e) {
    this.setState({
        isDialogOpen: true,
        answerToBeDeleted: e.target.name
     })

}
handleClose() {
    this.setState({
        isDialogOpen: false,
        answerToBeDeleted: ''
     })
}

deleteAnswer() {
    this.setState({ isDialogOpen: false});
    axios.delete('/api/answers/deleteAnswer/' + this.state.answerToBeDeleted)
        .then( answers => {
            this.getAnswers();
        });

}


render() {
    const { answers } = this.state.answers;


    return (
        <Wrapper className='theAnswers'>
            <a className="backArrow animate-left-to-right" href='/'>
                <img className="arrowImage" src={backArrow}/>
            </a>
            <h1 className="questionTitle" style={{color: "#F0953D", textAlign: "center", margin: "50px"}}>{this.state.question}</h1>
            <ListGroup className="answerContainer" variant="flush" style={{paddingBottom: "30px"}}>
                { this.state.answers.map((answer, key) =>
                    <ListGroup.Item className="answerCard" key={answer._id}>
                        <div className="textDiv">
                            <b>{answer.name}:</b> {answer.answer}
                        </div>
                        <div className="deleteDiv">
                            <a className="deleteButton" onClick={this.handleShow}>
                                <img className="trashCan"src={deleteButton} name={answer._id}></img>
                            </a>
                        </div>
                    </ListGroup.Item>
                )}
                    <ListGroup.Item className="answerCard">
                        <Form className="inputAnswerCard">
                            <Form.Group className="nameInput" controlId="formBasicName">
                                <Form.Control onChange={this.handleChangeInputName} id="name" type="name" placeholder="Enter your name" />
                            </Form.Group>

                            <Form.Group className="answerInput" controlId="formBasicAnswer">
                                <Form.Control onChange={this.handleChangeInputAnswer} id="answer" as="textarea" rows="4" placeholder="Type your answer" />
                            </Form.Group>
                            <Button className="submitButton" style={{backgroundColor: "#F0953D", border: "none"}} onClick={this.submitAnswer} variant="primary">
                                <img src={plusWhiteIcon} style={{width: '100%'}}/>
                            </Button>
                        </Form>
                    </ListGroup.Item>
                </ListGroup>

                <Modal show={this.state.isDialogOpen} onHide={this.handleClose}>
                    <Modal.Body>Are you sure you want to delete this answer?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.deleteAnswer}>
                            Yes
                        </Button>
                        <Button variant="secondary" onClick={this.handleClose}>
                            No
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Wrapper>
        )
    }
}

export default Answers
