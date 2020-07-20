import React, { Component } from 'react';
//import './App.css';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <nav>
                <div className='logo'>React Project</div>
                <ul>
                    <li><a href='a'Home/></li>
                    <li><a href='a'About/></li>
                    <li><a href='a'Portfolio/></li>
                    <li><a href='a'Contact/></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;
