export const selectSong = (song) => {
  return {
    action: 'SONG_SELECTED',
    payload: song
  }
}