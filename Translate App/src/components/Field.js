import React, { Component } from 'react';

class Field extends Component {
  render() {
    return (
      <div className="ui field">
        <label htmlFor="">Name</label>
        <input type="text"/>
      </div>
    );
  }
}

export default Field;
