import React, { Component } from 'react';
import ReactTable from 'react-table-6';

import styled from 'styled-components'

import 'react-table-6/react-table.css'
import { Card, CardDeck, Button, Form } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

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
            question: ''
        }
    }

    componentDidMount = async () => {
        this.setState({
          isLoading: true,
          questionId: window.location.href.split("answers/")[1]
        });

        axios.get('/api/answers/' + window.location.href.split("answers/")[1]).then(answers => {
          if (answers.data != null) {
            this.setState({
                answers: answers.data,
                isLoading: false,
            })
          }
        });

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
      .then(res => console.log(res.data));

      axios.get('/api/answers/' + window.location.href.split("answers/")[1]).then(answers => {
        if (answers.data != null) {
          this.setState({
              answers: answers.data,
              isLoading: false,
          })
        }
      });

      // await api.addAnswer(payload).then(res => {
      //     window.alert(`Answer inserted successfully`)
      //     // this.setState({
      //     //     question: '',
      //     //     name: ''
      //     // })
      // });

      console.log(payload);

    }

    // handleChangeInputName = async event => {
    //     const name = event.target.value
    //
    //     this.setState({
    //       name: event.target.value
    //     });
    // }
    //
    // handleChangeInputAnswer = async event => {
    //     const answer = event.target.value
    //
    //     this.setState({
    //       answer: event.target.value
    //     });
    // }

    render() {
        const { answers } = this.state.answers;

        return (
            <Wrapper>
              <h1 style={{color: "#274c77", textAlign: "center", paddingBottom: "10px"}}>{this.state.question}</h1>
              <ListGroup variant="flush" style={{paddingBottom: "30px"}}>
              { this.state.answers.map((answer, key) =>
                <ListGroup.Item style={{backgroundColor: "white", color: "#1b2845", paddingBottom: "10px"}}><b>{answer.name}:</b> {answer.answer}</ListGroup.Item>
              )}
              </ListGroup>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Control onChange={this.handleChangeInputName} id="name" type="name" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formBasicAnswer">
                  <Form.Control onChange={this.handleChangeInputAnswer} id="answer" as="textarea" rows="3" placeholder="Type your answer" />
                </Form.Group>
                <Button style={{backgroundColor: "#E66F5F", border: "none"}} onClick={this.submitAnswer} variant="primary">
                  Submit your answer
                </Button>
              </Form>
            </Wrapper>
        )
    }
}

export default Answers
