var playlist = {
  Paramore : 'After Laughter',
  Avicii : 'Wake me UP',
  Kungs : 'This Girl'
}
delete playlist.['Paramore'];
console.log(playlist)
function updatePlaylist(obj, artistName, songTitle) {
  Object.assign(obj, {[artistName] : songTitle});
  return obj;
}

function removeFromPlaylist(obj, art) {
  return obj;
  return delete obj.art;
  return Obj;
}

(removeFromPlaylist(playlist, 'Paramore'))
