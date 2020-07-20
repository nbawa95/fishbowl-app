
import React, { Component } from 'react';
import ReactTable from 'react-table-6';
import api from '../api/index.js';

import styled from 'styled-components'

import 'react-table-6/react-table.css'
import { Card, CardDeck } from 'react-bootstrap';

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class TopicAnswers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topicId: [],
            answers: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true });

        // await api.getAllTopics().then(topics => {
        //     this.setState({
        //         topics: topics.data.data,
        //         isLoading: false,
        //     })
        // });
    }

    render() {
        const { answers, isLoading } = this.state
        console.log('TCL: TopicsList -> render -> topics', topics)



        let showList = true
        if (!answers.length) {
            showList = false
        }

        return (
            <Wrapper>
              <ListGroup variant="flush">
                { answers.map((theAnswer, key) =>
                  <ListGroup.Item>{theAnswer.name:} {theAnswer.answer}</ListGroup.Item>
              </ListGroup>
            </Wrapper>
        )
    }
}

export default TopicAnswer
