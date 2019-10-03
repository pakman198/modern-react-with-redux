import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const App = () => {
  const [ lat, setLat ] = useState(null);
  const [ errorMessage, setErrorMessage ] = useState('')
  
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    )
  }, []);

  let content;
  if(errorMessage) {
    content = <div>Error: {errorMessage}</div>
  } else if(lat ) {
    content = <SeasonDisplay lat={lat} />
  } else {
    content = <Spinner />
  }

  return (
    <div className="border red">{ content }</div>
  );
}

/* class _App extends React.Component {
  
  state = {
    lat: null,
    errorMessage: ''
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({lat: position.coords.latitude})
      },
      (err) => {
        this.setState({ errorMessage: err.message })
      }
    )
  }

  renderContent() {
    const { errorMessage, lat } = this.state;

    if (errorMessage && !lat) {
      return <div>Error: {errorMessage}</div>

    } else if (!errorMessage && lat) {
      return <SeasonDisplay lat={lat} />
    }

    return <Spinner />
  }

  render() {
    return (
      <div>
        { this.renderContent() }
      </div>
    );
  }
} */



ReactDOM.render(<App />, document.getElementById('root'))