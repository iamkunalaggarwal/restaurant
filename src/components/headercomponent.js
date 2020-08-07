import React, {Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler,  Collapse, NavItem, Jumbotron } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{

    constructor(props){

        super(props);
        this.state = {

            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);

    }

    toggleNav(){

        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return (
            <>
             <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav}/>
                <NavbarBrand className="mr-auto" href="/">
                    
                    <img src="assets/images/logo.png" height="30" width="41"
                        alt="hello there!"
                    />

                </NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/home">
                            <span className="fa fa-home fa-lg"></span>Home
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink className="nav-link" to="/aboutus">
                            <span className="fa fa-info fa-lg"></span>about us
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink className="nav-link" to="/menu">
                            <span className="fa fa-list fa-lg"></span>menu
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink className="nav-link" to="/contactus">
                            <span className="fa fa-address da-lg"></span>contact us
                        </NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </div>
        </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>qwertyui yas fhwogow geroghero gheruogh eoghroeroghruofghefoh eoo uoghor</p>
                            </div>
                        </div>
                    </div>


                </Jumbotron>
            </>

        );
    }

}

export default Header;