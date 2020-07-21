import React, { Component } from 'react';
//import './App.css';
import './Navigation.css';

class Navigation extends Component {
    render() {
        const sections = ['Home', 'About', 'Portfolio', 'Contact'];
        const navLinks = sections.map((section) => <li><a href={'#'+ section}>{section}</a></li>)
        return (
            <nav>
                <div className='logo'>{this.props.LogoTitle}</div>
                <ul>
                    {navLinks}
                </ul>
            </nav>
        );
    }
}

export default Navigation;
