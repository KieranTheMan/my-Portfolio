import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Header from './Header.js';
import Navigation from './Navigation.js';
import * as serviceWorker from './serviceWorker';

class App extends Component {
  render() {
    return (
      <>
        <Navigation LogoTitle='React Portfolio'/>
        <Header title='Stylish Portfolio' button='Discover More'/>
      </>
    );
  }

}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
