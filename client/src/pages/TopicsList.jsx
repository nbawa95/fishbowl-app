import React, { Component } from 'react';
import ReactTable from 'react-table-6';

import styled from 'styled-components'

import 'react-table-6/react-table.css'
import { Card, CardDeck } from 'react-bootstrap';
import plus from "../images/plus.png";

import axios from 'axios';
import './TopicsList.css';

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class TopicsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topics: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true });

        axios.get('/api/topics/getTopics')
          .then(response => {
            if (response.data.length > 0 && response.data != null) {
              console.log(response);
              this.setState({
                topics: response.data,
              });
            }
          })
          .catch((error) => {
            console.log(error);
          })
    }

    seeAnswers(key) {
      console.log(key);
    }


    render() {
        const { topics, isLoading } = this.state

        return (
            <Wrapper>
              <div className="container">
                <Card.Link className="questionLink" href="/topics/create">
                  <Card className="questionCard" style={{border: "none", borderLeftColor: "#F0953D", borderLeftWidth: "4px"}}>
                    <Card.Body className="questionBodyAdd">
                      <img src={plus} />
                      <Card.Title style={{color: "#F0953D"}}>Add a question to the fishbowl</Card.Title>
                    </Card.Body>
                  </Card>
                </Card.Link>
                { topics.map((theTopic, key) =>
                  <Card.Link key={theTopic._id} className="questionLink" href={"/answers/" + theTopic._id} onClick={this.seeAnswers(theTopic._id)}>
                  <Card className="questionCard" key={theTopic._id} style={{border: "none", borderLeftColor: "#F0953D", borderLeftWidth: "4px"}}>
                  <div id="C">
                    <Card.Body className="questionBody" style={{height: '200px'}}>
                      <Card.Title style={{color: "#F0953D"}}>{theTopic.question}</Card.Title>
                    </Card.Body>
                    </div>
                    <div id="D">
                      Asked by {theTopic.name == "" ? 'Anonymous' : theTopic.name}
                    </div>
                  </Card>
                  </Card.Link>
                )}
              </div>
            </Wrapper>
        )
    }
}

export default TopicsList
