import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
    id: 'navBar'
})`
  margin: 0 auto !important;
  align-items: center !important;
  width: 50%;
  @media screen and (max-width: 480px) {
      margin: 0 auto !important;
      align-items: center !important;
      width: unset;
    }
  }
`

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})`
  align-items: center;
  width: 50%;
  margin: 0 auto;
`

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})`
  color: #6096ba;
`

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/topics/getTopics" className="nav-link">
                                List Topics
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/topics/create" className="nav-link">
                                Create Topic
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links
