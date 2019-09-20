import React, { Component } from 'react';

class SearchBar extends Component {

  state = {
    term: ''
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    const { term } = this.state;

    this.props.onSubmit(term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={ this.onFormSubmit }>
          <div className="field">
            <label>Image search</label>
            <input 
              type="text" 
              value={ this.state.term} 
              onChange={ e => this.setState({ term: e.target.value })} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;