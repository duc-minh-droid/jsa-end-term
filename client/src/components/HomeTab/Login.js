import React from "react";

const AUTH_URL = (env) => {
  console.log(env);
  let url = "https://asteroidz.netlify.app";
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development")
    url = "http://localhost:3000";

  return `https://accounts.spotify.com/authorize?client_id=2adb8aafcdf54b30a8caee191d58ff23&response_type=code&redirect_uri=${url}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-recently-played%20playlist-read-collaborative%20user-top-read%20playlist-read-private%20user-follow-read`;
};

export default function Login() {
  return (
    <div>
      <a
        className="btn btn-success btn-lg"
        href={AUTH_URL(process.env.NODE_ENV)}
      >
        Login With Spotify
      </a>
    </div>
  );
}
