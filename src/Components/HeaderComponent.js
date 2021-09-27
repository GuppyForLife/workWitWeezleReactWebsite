import React from "react";
import { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return(
            <>
            <Navbar light expand='md'>
                <NavbarBrand>
                    <img src='Images/WorkWitWeezleLogo.png' width='120'/>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggleNav} />
                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar className='m-auto'>
                        <NavItem>
                            <NavLink className='nav-link' to='/home'>
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/videos'>
                                Videos
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/photos'>
                                Photos
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/promo_visuals'>
                                Promo Visuals
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/content'>
                                Content
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/contact'>
                                Contact
                            </NavLink>
                        </NavItem>
                    </Nav><br/>
                    <a className="btn btn-social-icon" href="http://instagram.com/workwitweezle/"><i className="fa fa-instagram" /></a>{' '}
                    <a className="btn btn-social-icon" href="http://www.facebook.com/WorkWitWeezle/"><i className="fa fa-facebook" /></a>{' '}
                    <a className="btn btn-social-icon" href="https://www.youtube.com/channel/UCtrfvwT8Z45tX-XSjnoPJBQ"><i className="fa fa-youtube-play" /></a>
                </Collapse>
            </Navbar>
            </>
        );
    }
}

export default Header;