import React, { Component } from 'react'
import styled from 'styled-components'

import axios from 'axios';

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
        .then(res => console.log(res.data));

        window.location.href='/topics/getTopics'

    }

    render() {
        const { question, name } = this.state
        return (
            <Wrapper>
                <Title style={{color: "#274c77"}}>Have an idea for a topic? Submit it Below!</Title>

                <Label>Topic: </Label>
                <InputText
                    type="text"
                    value={question}
                    onChange={this.handleChangeInputQuestion}
                />
                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                    placeholder="Leave this blank to remain anonymous"
                />

                <Button onClick={this.handleAddMovie} style={{backgroundColor: "#E66F5F", border: "none"}}>Submit Topic</Button>
                <CancelButton id="cancelButton" style={{backgroundColor: "#274c77", border: "none"}} href={'/'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default TopicsInsert
