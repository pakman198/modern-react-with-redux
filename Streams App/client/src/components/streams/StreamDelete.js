import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Modal from '../Modal';
import { fetchStream, deleteStream } from '../../actions';

import history from '../../history'; 

class StreamDelete extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <Fragment>
        <button 
          className="ui button negative"
          onClick={() => this.props.deleteStream(id)}>Delete</button>
        <Link to="/" className="ui button">Cancel</Link>
      </Fragment>
    );
  } 

  renderContent() {
    const { stream } = this.props;

    if(!stream) {
      return "Are you sure you want to delete this stream?"
    }

    return `Are you sure you want to delete stream: ${stream.title}`
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { 
  fetchStream, 
  deleteStream 
})(StreamDelete);