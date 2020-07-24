import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { TopicsList, TopicsInsert, TopicsUpdate, Answers } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <hr />
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
        </Router>
    )
}

export default App
