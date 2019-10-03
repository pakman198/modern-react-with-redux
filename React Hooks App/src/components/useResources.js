import { useState, useEffect } from 'react'
import axios from 'axios';

const useResources = (resource) => {
  const [ resources, setResources ] = useState([])

  const fetchResource = async () => {
    const response = await axios.get(`http://jsonplaceholder.typicode.com/${resource}`);
    setResources(response.data);
  }

  // whenever the value of resource changes, useEffect gets called again,
  // it basically implements the componentDidMount and componentDidUpdate
  // lifecycle hooks
  useEffect(() => {
    fetchResource(resource);
  }, [resource])

  return resources;
}

export default useResources;