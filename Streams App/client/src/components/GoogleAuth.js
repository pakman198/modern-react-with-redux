import React, { Component } from 'react';

class GoogleAuth extends Component {
  auth = {};
  state = {
    isSignedIn: null
  }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:  '724677594371-78q3pjovd6bur3fl323obbrg6fqlafj7.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange();
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = () => {
    this.setState({
      isSignedIn: this.auth.isSignedIn.get()
    })
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    const { isSignedIn } = this.state;

    if ( isSignedIn === null ) {
      return null;
    } else if ( isSignedIn ) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick} >
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.onSignInClick} >
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return (
      <div>{ this.renderAuthButton() }</div>
    )
  }
}

export default GoogleAuth;