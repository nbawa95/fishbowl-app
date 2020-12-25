import React, { Component } from 'react';
import ReactTable from 'react-table-6';

import styled from 'styled-components'

import 'react-table-6/react-table.css'
import { Card, CardDeck } from 'react-bootstrap';
import './TopicsAnswers.css';

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
              <div className="container">
                { answers.map((theAnswer, key) =>
                  <Card>{theAnswer.name:}hi {theAnswer.answer}</Card>
                }
              </div>
            </Wrapper>
        )
    }
}

export default TopicAnswer
