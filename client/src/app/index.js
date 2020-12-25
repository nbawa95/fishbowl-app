import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { TopicsList, TopicsInsert, TopicsUpdate, Answers } from '../pages'
import fishLogo from '../images/fishAndBubbles.png';
import seaweed from '../images/seaweed.png';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
          <div id="A">
            <h1 style={{textAlign: "center", fontSize: '60px', color: "#F0953D", fontFamily: "FindetNemo"}}>fiShBoWl.</h1>
          </div>

            <Switch>
                <Route path="/" exact component={TopicsList} />
                <Route path="/topics/getTopics" exact component={TopicsList} />
                <Route path="/topics/create" exact component={TopicsInsert} />
                <Route
                    path="/answers/:id"
                    exact
                    component={Answers}
                />
            </Switch>
            <img src={seaweed} style={{height: '300px', bottom: '0', left: '0', position: 'fixed', paddingRight: '20px', zIndex: -1}}/>
            <img src={fishLogo} style={{width: '100px', bottom: '0', right: '0', position: 'fixed', paddingRight: '20px', zIndex: -1}}/>
            <div style={{color: "#3D5A80", textAlign: "center", fontSize: '15px', padding: "15px"}}>
              Copyright © Nikita Bawa 2020
            </div>
        </Router>
    )
}

export default App
