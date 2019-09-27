import _ from 'lodash';

import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data
    });
  }
}

export const fetchUser = (userId) => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get(`/users/${userId}`);

    dispatch({
      type: 'FETCH_USER',
      payload: response.data
    });
  }
}

export const fetchPostsAndUsers = () => {
  
  return async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const users = _.uniq(_.map(getState().posts, 'userId'));

    users.forEach( userId => dispatch(fetchUser(userId)) );

    // al syntax
    /* _.chain(getState().posts)
      .map('userId')
      .uniq()
      .forEach( userId => dispatch(fetchUser(userId)) )
      .value(); */
  }

}