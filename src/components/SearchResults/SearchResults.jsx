

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { API_KEY } from "../../data"; 
import "./SearchResults.css";

const SearchResults = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${API_KEY}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setResults(data.items || []);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };
    fetchSearchResults();
  }, [query]);

  return (
    <div className="search-results">
      <h2>Search Results for "{query}"</h2>
      <div className="results-list">
        {results.map((item) => (
          <div key={item.id.videoId} className="result-item">
            <Link to={`/video/${item.snippet.channelId}/${item.id.videoId}`}>
              <img
                src={item.snippet.thumbnails.medium.url}
                alt={item.snippet.title}
              />
              <div>
                <h3>{item.snippet.title}</h3>
                <p>{item.snippet.channelTitle}</p>
                <p>{item.snippet.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;

