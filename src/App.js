import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Social from './Social';
import Music from './Music';
import Gallery from './Gallery';
import Contact from './Contact';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Router>
              <div className="container-fluid">
                  <Navbar color="blue" dark expand="md" scrolling>
                      <NavbarBrand>
                          <strong>MySite</strong>
                      </NavbarBrand>
                      { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                      <Collapse isOpen = { this.state.collapse } navbar>
                          <NavbarNav left>
                            <NavItem>
                                <NavLink to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/social">Social</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/music">Music</NavLink>
                            </NavItem>
                            <NavItem>
                                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle nav caret>Gallery</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem href="/gallery">Folder 1</DropdownItem>
                                    <DropdownItem href="/gallery/folder2">Folder 2</DropdownItem>
                                    <DropdownItem href="/gallery/folder3">Folder 3</DropdownItem>
                                    <DropdownItem href="/gallery/folder4">Folder 4</DropdownItem>
                                </DropdownMenu>
                                </Dropdown>
                            </NavItem>
                          </NavbarNav>
                          <NavbarNav right>
                            <NavItem>
                              <NavLink to="/contact">Contact</NavLink>
                            </NavItem>
                          </NavbarNav>
                      </Collapse>
                  </Navbar>
                
                <div>
                  <Route exact path="/" component={Home}/>
                  <Route path="/social" component={Social}/>
                  <Route path="/music" component={Music}/>
                  <Route path="/gallery" component={Gallery}/>
                  <Route path="/contact" component={Contact}/>
                </div>
              </div>
            </Router>
        );
    }
}

export default App;