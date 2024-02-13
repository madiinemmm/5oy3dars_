class Music {
    constructor(id, name, author, genre, releaseYear, reissuedBy, durationInSeconds) {
      this.id = id;
      this.name = name;
      this.author = author;
      this.genre = genre;
      this.releaseYear = releaseYear;
      this.reissuedBy = reissuedBy;
      this.durationInSeconds = durationInSeconds;
    }
  }
  

  function createMusicList(musicDataArray) {
    const musicList = new Set();
    musicDataArray.forEach((musicData, index) => {
      const { name, author, genre, releaseYear, reissuedBy, durationInSeconds } = musicData;
      const id = index + 1;
      const music = new Music(id, name, author, genre, releaseYear, reissuedBy, durationInSeconds);
      musicList.add(music);
    });
    return musicList;
  }
  

  function removeDuplicates(musicList) {
    const uniqueMusicList = new Set();
    musicList.forEach(music => {
      uniqueMusicList.add(music.name);
    });
    return Array.from(uniqueMusicList);
  }
  

  const musicData = [
    { name: 'Song1', author: 'Author1', genre: 'Genre1', releaseYear: 2000, reissuedBy: ['Artist1', 'Artist2'], durationInSeconds: 300 },
    { name: 'Song2', author: 'Author2', genre: 'Genre2', releaseYear: 2005, reissuedBy: ['Artist3'], durationInSeconds: 240 },
    { name: 'Song1', author: 'Author3', genre: 'Genre3', releaseYear: 2010, reissuedBy: ['Artist1'], durationInSeconds: 180 },
  ];
  

  const musicList = createMusicList(musicData);
  console.log('Musiqalar ro\'yxati:');
  musicList.forEach(music => {
    console.log(`
      ID: ${music.id}
      Name: ${music.name}
      Author: ${music.author}
      Genre: ${music.genre}
      Release Year: ${music.releaseYear}
      Reissued By: ${music.reissuedBy.join(', ')}
      Duration: ${music.durationInSeconds} seconds
    `);
  });
  

  const uniqueNames = removeDuplicates(musicList);
  console.log('Takrorlangan nomlar:', uniqueNames);


//   2 vazifa 

// function removeDuplicates(arr) {
//     return Array.from(new Set(arr));
// }

// // Test
// let arr = [1, 2, 2, 3, 4, 4, 5];
// let newArr = removeDuplicates(arr);
// console.log(newArr);




