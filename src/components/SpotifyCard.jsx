import React from "react";
import { Spotify } from "react-spotify-embed";
import './SpotifyCard.css'

const SpotifyCard = () => {
  return (
    <div className="SpotifyContainer">
    <Spotify
      className="SpotifyPlayer"
      style={{ width: "500px" }}
      link="https://open.spotify.com/playlist/37i9dQZF1F0sijgNaJdgit?si=bc35987cd23a4afa"
    />
    <div className="SpotifyText">Here's what I listen to 🎧</div>
    </div>
  );
};

export default SpotifyCard;
