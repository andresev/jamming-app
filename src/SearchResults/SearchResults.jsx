import React from 'react';
import TrackList from '../TrackList/TrackList';

import './SearchResults.css';

const SearchResults = ({ music }) => {
  music.forEach(() => console.log(1));
  return (
    <div className="SearchResults">
      <h2>Results</h2>

      {/* <!-- Add a TrackList component --> */}
      <TrackList music={music} />
    </div>
  );
};

export default SearchResults;
