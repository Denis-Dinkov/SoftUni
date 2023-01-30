function movies(input) {
  let movies = [];

  for (const line of input) {
    if (line.includes("addMovie")) {
      let name = line.split("addMovie ")[1];
      movies.push({ name });
    } else if (line.includes("directedBy")) {
      let [movieName, director] = line.split(" directedBy ");
      let include = movies.find((name) => name.name == movieName);
      if (include) {
        include["director"] = director;
      }
    } else if (line.includes("onDate")) {
      let [name, date] = line.split(" onDate ");
      let include = movies.find((line) => line.name == name);

      if (include) {
        include.date = date;
      }
    }
  }

  for (const movie of movies) {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie))
    }
  }
}

movies([
  "addMovie Fast and Furious",

  "addMovie Godfather",

  "Inception directedBy Christopher Nolan",

  "Godfather directedBy Francis Ford Coppola",

  "Godfather onDate 29.07.2018",

  "Fast and Furious onDate 30.07.2018",

  "Batman onDate 01.08.2018",

  "Fast and Furious directedBy Rob Cohen",
]);
