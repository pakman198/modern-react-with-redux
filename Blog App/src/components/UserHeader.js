import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions';

class UserHeader extends Component {
  
  componentDidMount() {
    const { userId, fetchUser } = this.props;
    fetchUser(userId);
  }

  render() {
    const { users, userId } = this.props;
    const user = users.find(user => userId === user.id)

    return user ? <div className="header">{user.name}</div> : null;
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);