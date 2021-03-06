import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Container } from 'mdbreact';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Social from './Social';
import Music from './Music';
import GalleryPage from './GalleryPage';
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

    // <NavItem>
    //     <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
    //     <DropdownToggle nav caret>Gallery</DropdownToggle>
    //     <DropdownMenu>
    //         <DropdownItem href="/gallery">Folder 1</DropdownItem>
    //         <DropdownItem href="/gallery/folder2">Folder 2</DropdownItem>
    //         <DropdownItem href="/gallery/folder3">Folder 3</DropdownItem>
    //         <DropdownItem href="/gallery/folder4">Folder 4</DropdownItem>
    //     </DropdownMenu>
    //     </Dropdown>
    // </NavItem>

    // enableCookiesRender(){
    //    return(
    //     <div>
    //         <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalCookie">Cookies</button>

            
    //         <div className="modal fade top" id="modalCookie" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"
    //             data-backdrop="false">
    //             <div className="modal-dialog modal-frame modal-top modal-notify modal-info" role="document">
                   
    //                 <div className="modal-content">
                       
    //                     <div className="modal-body">
    //                         <div className="row d-flex justify-content-center align-items-center">

    //                             <p className="pt-3 pr-2">We use cookies to improve your website experience</p>

    //                             <a type="button" className="btn btn-primary">Learn more <i className="fa fa-book ml-1"></i></a>
    //                             <a type="button" className="btn btn-outline-primary waves-effect" data-dismiss="modal">Ok, thanks</a>
    //                         </div>
    //                     </div>
    //                 </div>
                    
    //             </div>
    //         </div>
    //     </div>
    //    );
    // }

    render() {
        return (
            <Router>
              <div className="container-fluid">
                  <Navbar color="cyan" dark expand="md" scrolling>
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
                                <NavLink to="/gallery">Gallery</NavLink>
                            </NavItem>
                          </NavbarNav>
                          <NavbarNav right>
                            <NavItem>
                              <NavLink to="/contact">Contact</NavLink>
                            </NavItem>
                          </NavbarNav>
                      </Collapse>
                  </Navbar>
                
                <Container>
                  <Route exact path="/" component={Home}/>
                  <Route path="/social" component={Social}/>
                  <Route path="/music" component={Music}/>
                  <Route path="/gallery" component={GalleryPage}/>
                  <Route path="/contact" component={Contact}/>
                </Container>

                

              </div>
            </Router>
        );
    }
}

export default App;