import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  const music = [
    {
      id: 1,
      name: 'Bad Bunny',
      artist: 'Bad Bunny',
      album: 'Perrera',
    },
    {
      id: 2,
      name: 'Prince Royce',
      artist: 'Prince Royce',
      album: 'Calor',
    },
    {
      id: 3,
      name: 'Nicky Jam',
      artist: 'Nicky Jam',
      album: 'Atreve',
    },
  ];
  //const [searchResult, setSearchResult] = useState(results);

  //console.log(searchResult);

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        {/* <!-- Add a SearchBar component --> */}
        <SearchBar />
        <div className="App-playlist">
          {/* <!-- Add a SearchResults component --> */}
          <SearchResults music={music} />
          {/* <!-- Add a Playlist component --> */}
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
