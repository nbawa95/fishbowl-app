import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Links from './Links'

const Container = styled.div.attrs({
    className: 'container',
})``

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark',
})`
    margin-bottom: 20 px;
    display: block;
    color: #274c77;
`

class NavBar extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    <h1 style={{textAlign: "center", color: "#E66F5F", fontFamily: "FindetNemo"}}>fiShBoWl.</h1>
                    <Links style={{display: "flex"}} />
                </Nav>
            </Container>
        )
    }
}

export default NavBar
