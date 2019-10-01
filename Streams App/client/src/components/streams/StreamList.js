import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStreams } from '../../actions';

class StreamList extends Component {

  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList() {
    return this.props.streams.map( stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderActions(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{ stream.description }</div>
          </div>
        </div>
      );
    });
  }

  renderActions(stream) {
    const { currentUserId } = this.props;
    if(stream.userId === currentUserId) {
      return (
        <div className="right floated content">
          <Link 
            to={`/streams/edit/${stream.id}`} 
            className="ui button primary"
          >Edit</Link>
          <button className="ui button negative">Delete</button>
        </div>
      )
    }
  }

  renderCreate() {
    if(this.props.isSignedIn) {
      return (
        <div style={{ "textAlign": "right" }}>
          <Link to='/streams/new' className="ui button primary">Create Stream</Link>
        </div>
      )
    }

    return null;
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          { this.renderList() }
        </div>
        { this.renderCreate() }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);