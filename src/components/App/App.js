import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
// import { threadId } from "worker_threads";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { id: 1, name: "track1", artist: "author1", album: "album1" },
        { id: 2, name: "track2", artist: "author2", album: "album2" },
        { id: 3, name: "track3", artist: "author3", album: "album3" }
      ],
      playlistName: "Atmospheric",
      playlistTracks: [
        {
          id: 21,
          name: "Dreaming of Fiji",
          artist: "Philip Glass",
          album: "The Truman Show"
        },
        {
          id: 32,
          name: "Prophecy Theme",
          artist: "Toto",
          album: "Dune"
        },
        {
          id: 7,
          name: "Earth",
          artist: "Mark Streitenfeld",
          album: "Prometheus"
        }
      ]
    };

    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      this.state.playlistTracks.push(track);
    }
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
