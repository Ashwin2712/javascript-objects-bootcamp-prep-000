var playlist = { altJ : 'Taro'}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  var playlist = { altJ : 'Taro'}
  delete playlist.artistName;
  return playlist
}
