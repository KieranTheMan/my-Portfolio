import React, { Component } from 'react';
//import './App.css';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <nav>
                <div className='logo'>React Project</div>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Portfolio</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;
