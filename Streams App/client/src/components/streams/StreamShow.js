import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchStream } from '../../actions';

class StreamShow extends Component {

  componentDidMount() {
    const { match: { params }, fetchStream } = this.props;

    fetchStream(params.id);
  }

  render() {
    const { stream } = this.props;
    if(!stream) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h1>{ stream.title }</h1>
        <h5>{ stream.description }</h5>
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

export default connect(mapStateToProps, { fetchStream })(StreamShow);