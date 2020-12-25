import React, { Component } from 'react';
import ReactTable from 'react-table-6';

import styled from 'styled-components'

import 'react-table-6/react-table.css'
import { Card, CardDeck, Button, Form } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import './Answers.css';
import plusWhiteIcon from '../images/plus-white.png';
import backArrow from '../images/back-arrow.png';

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
            answer: ''
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
              <a className="backArrow animate-left-to-right" href='/'>
                <img className="arrowImage" src={backArrow}/>
              </a>
              <h1 style={{color: "#F0953D", textAlign: "center", margin: "50px"}}>{this.state.question}</h1>
              <ListGroup className="answerContainer" variant="flush" style={{paddingBottom: "30px"}}>
              { this.state.answers.map((answer, key) =>
                <ListGroup.Item className="answerCard"><b>{answer.name}:</b> {answer.answer}</ListGroup.Item>
              )}
              <ListGroup.Item className="answerCard">
                <Form className="inputAnswerCard">
                  <Form.Group className="nameInput" controlId="formBasicName">
                    <Form.Control onChange={this.handleChangeInputName} id="name" type="name" placeholder="Enter your name" />
                  </Form.Group>

                  <Form.Group className="answerInput" controlId="formBasicAnswer">
                    <Form.Control onChange={this.handleChangeInputAnswer} id="answer" as="textarea" rows="1" placeholder="Type your answer" />
                  </Form.Group>
                  <Button className="submitButton" style={{backgroundColor: "#F0953D", border: "none"}} onClick={this.submitAnswer} variant="primary">
                    <img src={plusWhiteIcon} style={{width: '100%'}}/>
                  </Button>
                </Form>
              </ListGroup.Item>
              </ListGroup>
            </Wrapper>
        )
    }
}

export default Answers
