import React, { Component } from 'react'
import styled from 'styled-components'

import axios from 'axios';
import { Card, CardDeck } from 'react-bootstrap';
import './TopicsInsert.css';
import backArrow from '../images/back-arrow.png';


const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class TopicsInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            question: '',
            name: ''
        }
    }

    handleChangeInputQuestion = async event => {
        const question = event.target.value
        this.setState({ question: question })
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name: name })
    }

    handleAddMovie = async () => {
        const { question } = this.state
        // const arrayTime = time.split('/')
        const payload = {
          question: this.state.question,
          name: this.state.name,
        }

        axios.post('/api/topics/create', payload)
        .then(res => {
          console.log(res.data)
          setTimeout(() => {
            window.location.href='/topics/getTopics';
          }, 1000);
        });

    }

    render() {
        const { question, name } = this.state
        return (
            <Wrapper>
              <a className="backArrow animate-left-to-right" href='/'>
                <img className="arrowImage" src={backArrow}/>
              </a>
              <div className="addQuestionContainer">
                <Card className="addQuestionCard" style={{border: "none", borderLeftColor: "#F0953D", borderLeftWidth: "4px"}}>
                <div id="C">
                  <Card.Body className="questionBodyAdd">
                    <Card.Title style={{color: "#F0953D"}}>Add a question to the fishbowl!</Card.Title>
                    <textarea
                        type="text"
                        value={question}
                        onChange={this.handleChangeInputQuestion}
                        placeholder="Enter your question here"
                        style={{
                          width: '100%',
                          height: '100px',
                          border: '1px solid #ced4da',
                          padding: '.375rem .75rem',
                          fontSize: '1rem',
                          fontWeight: '400',
                          lineHeight: '1.5',
                          color: '#495057'
                        }}
                    />
                    <InputText
                        type="text"
                        value={name}
                        onChange={this.handleChangeInputName}
                        placeholder="Enter your name (leave blank to remain anonymous)"
                    />
                  </Card.Body>
                  </div>
                  <Button className="submitQuestion" onClick={this.handleAddMovie}>
                  <div id="D">
                    Submit
                  </div>
                  </Button>
                </Card>
              </div>
            </Wrapper>
        )
    }
}

export default TopicsInsert
