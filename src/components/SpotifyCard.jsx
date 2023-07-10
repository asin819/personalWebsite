import React from "react";
import { Spotify } from "react-spotify-embed";
import './SpotifyCard.css'

const SpotifyCard = () => {
  return (
    <div className="SpotifyContainer">
        <div className="SpotifyText">Here's what I <span className="customFont customColor">listen</span> to 🎧</div>
    <Spotify
      className="SpotifyPlayer"
      link="https://open.spotify.com/playlist/41VAFy2alm71P5kyFckLdW?si=19179be7676e4505"
    />
    
    </div>
  );
};

export default SpotifyCard;
