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
  return delete obj.art;
}

console.log(removeFromPlaylist(playlist, 'Paramore'))
