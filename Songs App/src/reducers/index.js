import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Shoot to thrill', duration: '4:18' },
    { title: 'Everybody', duration: '3:45' },
    { title: 'All Star', duration: '2:31' },
    { title: 'Californication', duration: '5:04' },
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  } 

  return selectedSong;
}

// the keys on this object define the properties on the app state:

//  state = {
//    songs: [], 
//    selectedSong: null
//  }

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});