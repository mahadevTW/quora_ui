import React from 'react'
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'
import Badge from 'react-bootstrap/lib/Badge'
import Button from 'react-bootstrap/lib/Button'
import FormControl from 'react-bootstrap/lib/FormControl'
import AppActions from '../actions/AppActions'

export default class MyNavBar extends React.Component {
  handleUserClick = () => {
    AppActions.showLoginPopup();
  };

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Quora</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Home
              </NavItem>
              <NavItem eventKey={2} href="#">
                Answer
              </NavItem>
              <NavItem eventKey={2} href="#">
                Notification<Badge>42</Badge>
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                <FormControl type="text" placeholder="Search anything"/>
              </NavItem>
              <NavItem eventKey={1} href="#">
                <Button bsStyle="primary" disabled={false} onClick={this.handleUserClick}>USER</Button>
              </NavItem>
              <NavItem eventKey={2} href="#">
                <Button bsStyle="warning" disabled={false} onClick={this.handleOnclick}>Add Question</Button>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


      </div>
    )
  }
}