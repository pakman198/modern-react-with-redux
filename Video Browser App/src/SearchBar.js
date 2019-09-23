import React, { Component } from 'react';

class SearchBar extends Component {

  state = {
    term: ''
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    const { term } = this.state;

    this.props.onFormSubmit(term);
  }

  onInputChange = (e) => {
    const { value } = e.target;
    this.setState({ term: value })
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={ this.onFormSubmit }>
          <div className="field">
            <label>Image search</label>
            <input 
              type="text" 
              value={ this.state.term  } 
              onChange={ this.onInputChange } />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;