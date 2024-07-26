import React from "react";

function category() {
  const category = [
    {
      id: 1,
      image:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/41/4d3d7c05fb42729c9d90352e072ca3/1060x596_GCC-photos_Karrim.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=320&h=180&fit=crop&q=50&crop=faces", // Replace with actual image URLs
      title: "Data Science & Analytics",
      description:
        "Become expert at drawing intelligence from data and get noticed by top companies",
      languges: "Html, css, javascript, react",
    },
    {
      id: 2,
      image:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/41/4d3d7c05fb42729c9d90352e072ca3/1060x596_GCC-photos_Karrim.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=320&h=180&fit=crop&q=50&crop=faces", // Replace with actual image URLs
      title: "Data Science & Analytics",
      description:
        "Become expert at drawing intelligence from data and get noticed by top companies",
      languges: "Html css javascript react",
    },
    {
      id: 3,
      image:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/41/4d3d7c05fb42729c9d90352e072ca3/1060x596_GCC-photos_Karrim.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=320&h=180&fit=crop&q=50&crop=faces", // Replace with actual image URLs
      title: "Data Science & Analytics",
      description:
        "Become expert at drawing intelligence from data and get noticed by top companies",
      languges: "Html css javascript react",
    },
    {
      id: 4,
      image:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/41/4d3d7c05fb42729c9d90352e072ca3/1060x596_GCC-photos_Karrim.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=320&h=180&fit=crop&q=50&crop=faces", // Replace with actual image URLs
      title: "Data Science & Analytics",
      description:
        "Become expert at drawing intelligence from data and get noticed by top companies",
      languges: "Html css javascript react",
    },
    {
      id: 5,
      image:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/41/4d3d7c05fb42729c9d90352e072ca3/1060x596_GCC-photos_Karrim.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=320&h=180&fit=crop&q=50&crop=faces", // Replace with actual image URLs
      title: "Data Science & Analytics",
      description:
        "Become expert at drawing intelligence from data and get noticed by top companies",
      languges: "Html css javascript react",
    },

    // Add more categorys as needed
  ];

  return (
    <div>
      <div className="min-h-screen  p-10">
        <h1 className="text-white text-6xl ml-20 font-bold mb-10">
        Explore Our Categories
        
        </h1>
        <span className="text-white text-2xl  ml-20 font-bold  ">Discover Your Passion</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-20">
          {category.map((category) => (
            <div
              key={category.id}
              className=" bg-gradient-to-b shadow-slate-800 hover:shadow-slate-500 text-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* <img
                src={category.image}
                alt={category.title}
                className="w-full h-20 object-cover"
              /> */}
              <div className="p-5">
                <h2 className="text-2xl font-bold mt-4 mb-2">{category.title}</h2>
                <p className="text-gray-400 mb-5">{category.description}</p>
                <hr />
                <button className="text-cyan-400 mt-7 font-semibold text-xl ">
                  {category.languges}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default category;
