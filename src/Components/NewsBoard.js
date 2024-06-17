import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {
  
  const [articles, setArticles] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    if (apiKey) {
      const url = `https://newsapi.org/v2/everything?q=indian&apiKey=${apiKey}`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.articles) {
            setArticles(data.articles);
          } else {
            console.error('No articles found in response', data);
          }
        })
        .catch(error => console.error('Error fetching news:', error));
    } else {
      console.error('API Key is not defined');
    }
  }, [apiKey]);

  useEffect(() => {
    if (apiKey) {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.articles) {
            setArticles(data.articles);
          } else {
            console.error('No articles found in response', data);
          }
        })
        .catch(error => console.error('Error fetching news:', error));
    } else {
      console.error('API Key is not defined');
    }
  }, [category, apiKey]);

  console.log("API Key:", apiKey);

  return (
    <div>
      <h2 className='text-center'>LATEST <span className='badge bg-danger'>NEWS</span></h2>
      {articles && articles.length > 0 ? (
        articles.map((news, index) => (
          <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        ))
      ) : (
        <p>No news available</p>
      )}
    </div>
  );
}

export default NewsBoard;
