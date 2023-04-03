function gramophone(band, album, song) {
  let songDuration = (band.length * album.length * song.length) / 2;
  let rotations = Math.ceil(songDuration / 2.5);
  console.log(`The plate was rotated ${rotations} times.`);
}
gramophone("Black Sabbath", "Paranoid", "War Pigs");
