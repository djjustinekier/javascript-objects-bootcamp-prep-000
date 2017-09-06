var playlist = {
  Paramore : 'After Laughter',
  Avicii : 'Wake me UP',
  Kungs : 'This Girl'
}

function updatePlaylist(obj, artistName, songTitle) {
  Object.assign(obj, {[artistName] : songTitle});
  return obj;
}

function removeFromPlaylist(obj, art) {
  delete obj.art, function () {
    return obj;
  }
}
console.log(removeFromPlaylist(playlist, 'Paramore'))
