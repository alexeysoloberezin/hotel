import React from 'react';

function TestVideos(props) {
  return (
    <div>
      <div>
        <div>
          <span>Name: текущий</span>
          <span>Весит: 21мб</span>
          <video className={"w-screen aspect-video"} controls src="/videoplayback.mp4"></video>
        </div>

        <div>
          <span>Name: test 1</span>
          <span>Весит: 14мб</span>
          <video className={"w-screen aspect-video"} controls src="/examples/videoplayback.mp4"></video>
        </div>

        <div>
          <span>Name: test 2 _ medium</span>
          <span>Весит: 11мб</span>
          <video className={"w-screen aspect-video"} controls src="/examples/videoplayback_medium.mp4"></video>
        </div>

        <div>
          <span>Name: test 2 _ medium</span>
          <span>Весит: 11мб</span>
          <video className={"w-screen aspect-video"} controls src="/examples/videoplayback.webm"></video>
        </div>
      </div>
    </div>
  );
}

export default TestVideos;