function songs(input) {
  class Song {
    constructor(songType, name, time) {
      this.songType = songType;
      this.name = name;
      this.time = time;
    }
    showSongs() {
      if (this.songType === type || type === "all") {
        console.log(this.name);
      }
    }
  }

  let counter = input.shift();
  let type = input.pop();

  for (const line of input) {
    let [songType, name, time] = line.split("_");
    let song = new Song(songType, name, time);
    song.showSongs();
  }
}
