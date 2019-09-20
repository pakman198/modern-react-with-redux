import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component {

  async onSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com//search/photos', {
      params: {
        query: term 
      },
      headers: {
        Authorization: 'Client-ID ed278a199ad7de1f764618b22c840f8d8f854882728eccc910e97c28def89d50'
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
