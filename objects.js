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
  var newObj = obj;
  delete obj.art;
  return newObj;
}

console.log(removeFromPlaylist(playlist, 'Paramore'))
