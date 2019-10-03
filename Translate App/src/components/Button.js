import React,  { Component } from 'react';

import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {
  static contextType = LanguageContext;

  render() {
    // console.log('context:', this.context)

    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
        {
          (context) => context === 'english' ? 'Submit' : 'Voorleggen'
        }
      </LanguageContext.Consumer>
      </button>
    )
  }
}

export default Button;