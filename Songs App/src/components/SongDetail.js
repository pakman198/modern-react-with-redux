import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {

  if(!song) {
    return <div>Select a song</div>
  }

  return (
    <div className="item">
      <div className="content">
        <h3 className="header">Details for:</h3>
        <div className="description">
          <p>Title: { song.title }</p>
        </div>
        <div className="extra">
          Duration: { song.duration }
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong
  }
}

export default connect(mapStateToProps)(SongDetail);