import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder();

    dispatch( {
      type: 'FETCH_POSTS',
      payload: response
    });
  }
}