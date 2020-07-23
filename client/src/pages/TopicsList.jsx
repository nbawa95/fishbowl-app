import React, { Component } from 'react';
import ReactTable from 'react-table-6';

import styled from 'styled-components'

import 'react-table-6/react-table.css'
import { Card, CardDeck } from 'react-bootstrap';

import axios from 'axios';

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

        axios.get('/topics/getTopics')
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

        // await api.getAllTopics().then(topics => {
        //     this.setState({
        //         topics: topics.data.data,
        //         isLoading: false,
        //     })
        // });
    }

    seeAnswers(key) {
      console.log(key);
    }


    render() {
        const { topics, isLoading } = this.state

        return (
            <Wrapper>

                <CardDeck>
                  <Card style={{borderColor: "#a3cef1", borderWidth: "4px"}}>
                    <Card.Body>
                      <Card.Title>Create a Topic</Card.Title>
                      <Card.Text>
                        <Card.Link href="/topics/create">Click Here</Card.Link>
                      </Card.Text>
                    </Card.Body>
                  </Card>

                  { topics.map((theTopic, key) =>
                    <Card key={key} style={{borderTopColor: "#a3cef1", borderTopWidth: "4px"}}>
                      <Card.Body style={{textAlign: "center"}}>
                        <Card.Title style={{color: "#274c77"}}>{theTopic.question}</Card.Title>
                        <Card.Text style={{color: "#8b8c89"}}>
                          Submitted by {theTopic.name == "" ? 'Anonymous' : theTopic.name}
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <Card.Link href={"/answers/" + theTopic._id} onClick={this.seeAnswers(theTopic._id)}>See Responses</Card.Link>
                      </Card.Footer>
                    </Card>
                  )}
                </CardDeck>
            </Wrapper>
        )
    }
}

export default TopicsList
