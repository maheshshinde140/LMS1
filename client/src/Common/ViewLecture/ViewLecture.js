import React, { useState } from "react";
import ReactPlayer from "react-player";
import Comment from "../../Tabs/Comment";
import Attachment from "../../Tabs/Attachment";
import Doubts from "../../Tabs/Doubts";
import Refrence from "../../Tabs/Refrence";

function ViewLecture() {
  const dummyData = [
    {
      title: "video1",
      description: "this is a very useful video",
      channel: "sushant01",
      thumbnail: "./logo192.png",
      url: "https://youtu.be/YDH7f9dTXAs?si=a76QL1swf1dLRYmv",
    },
    {
      title: "video2",
      description: "this is a very very useful video",
      channel: "sushant01",
      thumbnail: "./logo192.png",
      url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    },
    {
      title: "video2",
      description: "this is a very very useful video",
      channel: "sushant01",
      thumbnail: "./logo192.png",
      url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    },
    {
      title: "video2",
      description: "this is a very very useful video",
      channel: "sushant01",
      thumbnail: "./logo192.png",
      url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    },
    {
      title: "video2",
      description: "this is a very very useful video",
      channel: "sushant01",
      thumbnail: "./logo192.png",
      url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    },
    {
      title: "video2",
      description: "this is a very very useful video",
      channel: "sushant01",
      thumbnail: "./logo192.png",
      url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    },
    {
      title: "video2",
      description: "this is a very very useful video",
      channel: "sushant01",
      thumbnail: "./logo192.png",
      url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    },
    // Add more videos as needed
  ];

  const [activeVideo, setActiveVideo] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  const playVideo = (video) => {
    setActiveVideo(video);
    setPlaying(true);
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleSeek = (seconds) => {
    setPlaying(false);
    setTimeout(() => setPlaying(true), 100);
    activeVideo.ref.seekTo(seconds, "seconds");
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  
  const [lectureDetails , setLectureDetails]= useState([{
      
    }]);








  return (
    <div className="flex  flex-col md:flex-row">
      {activeVideo && (
        <div className="w-full md:w-3/4 flex flex-col items-center bg-gray-900 p-5">
          <div className="w-full w-full md:h-96">
            <ReactPlayer
              ref={(player) => {
                activeVideo.ref = player;
              }}
              url={activeVideo.url}
              playing={playing}
              controls
              width="100%"
              height="100%"
              className="rounded"
            />
          </div>
          <div className="mt-5 flex space-x-4">
            <button
              onClick={handlePlayPause}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              {playing ? "Pause" : "Play"}
            </button>
            <button
              onClick={() => handleSeek(activeVideo.ref.getCurrentTime() - 5)}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              -5s
            </button>
            <button
              onClick={() => handleSeek(activeVideo.ref.getCurrentTime() + 5)}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              +5s
            </button>
          </div>

         <ul className="text-white flex flex-col md:flex-row gap-2 md:gap-5 py-5 md:py-10">
  <li className="flex-1 text-center">
    <button
      className="p-2 w-full cursor-pointer tracking-wider hover:text-slate-300"
      onClick={() => handleTabChange("comments")}
    >
      Comments
    </button>
  </li>
  <li className="flex-1 text-center">
    <button
      className="p-2 w-full cursor-pointer tracking-wider hover:text-slate-300"
      onClick={() => handleTabChange("attachments")}
    >
      Attachments
    </button>
  </li>
  <li className="flex-1 text-center">
    <button
      className="p-2 w-full cursor-pointer tracking-wider hover:text-slate-300"
      onClick={() => handleTabChange("doubts")}
    >
      Doubts
    </button>
  </li>
  <li className="flex-1 text-center">
    <button
      className="p-2 w-full cursor-pointer tracking-wider hover:text-slate-300"
      onClick={() => handleTabChange("refrence")}
    >
      Refrence
    </button>
  </li>
</ul>


          <div className="w-full">
            {activeTab === "comments" && <Comment />}
            {activeTab === "attachments" && <Attachment />}
            {activeTab === "doubts" && <Doubts />}
            {activeTab === "refrence" && <Refrence />}
          </div>
        </div>
      )}

      <ul className="space-y-5 py-5 mx-auto md:w-1/4 w-full max-w-screen-md">
        {dummyData.map((data, i) => (
          <li
            key={i}
            className="flex flex-col md:flex-row items-center shadow-lg gap-5 md:gap-10 px-5 md:px-10 bg-gray-800 rounded-lg hover:bg-slate-400"
          >
            <div className="flex-shrink-0">
              <button onClick={() => playVideo(data)}>
                <img
                  src={data.thumbnail}
                  alt={data.title}
                  className="w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-0 rounded"
                />
              </button>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-medium mb-2 text-white">
                {data.title}
              </h3>
              <h5 className="text-gray-100 mb-2 text-lg md:text-xl">
                {data.description}
              </h5>
              <p className="text-gray-500">{data.channel}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewLecture;
