import React, { Component } from 'react';
import Background from './img/space.jpg'
import './Header.css';
class Header extends Component {
    render() {
        const myStyles = {
             'backgroundImage': `url(${Background})`,
             'height': '80vh',
             'backgroundSize': 'cover',
             'color': 'white'
        }

        return (
            <header style= {myStyles}>
                <h1>{this.props.title}</h1>
                <p>My React Portfolio Projects Helping The Tech World</p>
                <a href='#button'>{this.props.button}</a>
            </header>
        );
    }
};

export default Header;