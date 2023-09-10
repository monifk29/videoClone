import React, { useState, useEffect } from "react";
import { fetchVideos } from "./api";
import Video from "./components/Video";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchVideos(page);
        console.log(data.data.posts);
        setVideos(data.data.posts);
        setError(null); // Reset error on success
      } catch (error) {
        console.error("Error fetching videos:", error);
        setError("An error occurred while fetching videos.");
      }
    }

    fetchData();
  }, [page]);

  return (
    <div className="App">
      <h1 className="Title">Video Clone</h1>
      <div className="pagination">
        <button
          onClick={() => setPage((prevPage) => prevPage - 1)}
          disabled={page === 0}
        >
          Previous Page
        </button>
        <p>Page {page + 1}</p>
        <button
          onClick={() => setPage((prevPage) => prevPage + 1)}
          // Disable if no more videos disabled={videos.length === 0}
        >
          Next Page
        </button>
      </div>
      {error && <p className="error">{error}</p>}
      <div className="video-list">
        {videos?.map((video) => (
          <Video key={video.postId} video={video} />
        ))}
      </div>
    </div>
  );
}

export default App;
