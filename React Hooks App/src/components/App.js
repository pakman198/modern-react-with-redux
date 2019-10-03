import React, { useState } from 'react';

import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {

  const [ resource, setResource ] = useState('posts');

  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <UserList />
      <ResourceList resource={resource} />
    </div>
  );  
}

/* class App extends Component {

  state = {
    resource: 'posts'
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.setState({ resource: 'posts'})}>Posts</button>
          <button onClick={() => this.setState({ resource: 'todos'})}>Todos</button>
        </div>
        {this.state.resource}
      </div>
    )
  }
} */

export default App;