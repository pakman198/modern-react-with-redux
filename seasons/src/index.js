import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  
  constructor(props){
    super(props)

    this.state = {
      lat: null,
      errorMessage: ''
    }

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
        this.setState({lat: position.coords.latitude})
      },
      (err) => {
        this.setState({ errorMessage: err.message })
      }
    )
  }

  render() {
    const { errorMessage, lat } = this.state;

    if (errorMessage && !lat) {
      return <div>Error: {errorMessage}</div>

    } else if (!errorMessage && lat) {
      return <div>Latitude: {lat}</div>
    }

    return <div>Loading...</div>
  }
}



ReactDOM.render(<App />, document.getElementById('root'))