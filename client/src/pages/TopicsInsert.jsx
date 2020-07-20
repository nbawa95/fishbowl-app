import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

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
          active: 'N'
        }

        await api.insertTopic(payload).then(res => {
            window.alert(`Topic inserted successfully`)
            this.setState({
                question: '',
                name: ''
            })
        })
    }

    render() {
        const { question, name } = this.state
        return (
            <Wrapper>
                <Title>Have an idea for a topic? Submit it Below!</Title>

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

                <Button onClick={this.handleAddMovie}>Submit Topic</Button>
                <CancelButton href={'/topics/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default TopicsInsert
