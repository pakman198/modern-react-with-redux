import React, { Component } from 'react';

import youtube from './apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {

  state = {
    videos: [],
    selectedVideo: null
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    const { items } = response.data;
    this.setState({ 
      videos: items,
      selectedVideo: items[0]
    });
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  componentDidMount() {
    this.onTermSubmit('react js');
  }

  render() {
    const { videos, selectedVideo } = this.state;

    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;