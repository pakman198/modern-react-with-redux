import React, { Component } from 'react';
import { connect } from 'react-redux';

import StreamForm from './StreamForm';

import { fetchStream, editStream } from '../../actions';

class StreamEdit extends Component {

  componentDidMount() {
    const { match: { params }, fetchStream } = this.props;

    fetchStream(params.id)
  }

  onSubmit = (formValues) => {
    const { match: { params }, editStream } = this.props;

    editStream(params.id, formValues);
  }

  render() {
    const { stream } = this.props;
    if(!stream) {
      return <div>Loading...</div>
    }

    const initialValues = {
      title: stream.title,
      description: stream.description
    }

    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm initialValues={initialValues} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;

  return {
    stream: state.streams[id]
  }
}

export default connect(mapStateToProps, { 
  fetchStream, 
  editStream 
})(StreamEdit);