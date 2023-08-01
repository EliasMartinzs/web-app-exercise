'use client';

import ReactPlayer from 'react-player';

export default function ReactPlay({ url }) {
  return (
    <ReactPlayer
      url={url}
      width="100%"
      height="100%"
      playing={true}
      loop={true}
      muted={true}
    />
  );
}
