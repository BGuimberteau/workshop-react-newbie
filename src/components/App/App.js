import React, { Component } from 'react';
import Quote from '../Quote/Quote';
import QuoteData from '../../data/quote.const.js';
import Button from '../Button/Button';
import './App.css';


class App extends Component {
  state = {
    theQuote: QuoteData[Math.floor(Math.random() * QuoteData.length)]
  };

  nextQuote = () => {
    this.setState({theQuote: QuoteData[Math.floor(Math.random() * QuoteData.length)]})
  };

  render() {
    return (
      <div className="app">
        <div className="app-main">
          <Quote author={this.state.theQuote.author}>
            {this.state.theQuote.text}
          </Quote>
        </div>
        <div className="app-footer">
          <Button text="Click here for next quote" onClick={ this.nextQuote } />
        </div>
      </div>
    );
  }
}

App.propTypes = {};

export default App;
