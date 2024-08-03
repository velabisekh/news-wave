// // import React, { useState, useEffect } from 'react';
// // import NewsItem from './NewsItem';

// // const NewsBoard = ({ category }) => {
  
// //   const [articles, setArticles] = useState([]);
// //   const apiKey = process.env.REACT_APP_API_KEY;

// //   useEffect(() => {
// //     if (apiKey) {
// //       const url = `https://newsapi.org/v2/everything?q=indian&apiKey=${apiKey}`;
// //       fetch(url)
// //         .then(response => response.json())
// //         .then(data => {
// //           if (data.articles) {
// //             setArticles(data.articles);
// //           } else {
// //             console.error('No articles found in response', data);
// //           }
// //         })
// //         .catch(error => console.error('Error fetching news:', error));
// //     } else {
// //       console.error('API Key is not defined');
// //     }
// //   }, [apiKey]);

// //   useEffect(() => {
// //     if (apiKey) {
// //       const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`;
// //       fetch(url)
// //         .then(response => response.json())
// //         .then(data => {
// //           if (data.articles) {
// //             setArticles(data.articles);
// //           } else {
// //             console.error('No articles found in response', data);
// //           }
// //         })
// //         .catch(error => console.error('Error fetching news:', error));
// //     } else {
// //       console.error('API Key is not defined');
// //     }
// //   }, [category, apiKey]);

// //   console.log("API Key:", apiKey);

// //   return (
// //     <div>
// //       <h2 className='text-center'>LATEST <span className='badge bg-danger'>NEWS</span></h2>
// //       {articles && articles.length > 0 ? (
// //         articles.map((news, index) => (
// //           <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
// //         ))
// //       ) : (
// //         <p>No news available</p>
// //       )}
// //     </div>
// //   );
// // }

// // export default NewsBoard;



// import React, { useState, useEffect } from 'react';
// import NewsItem from './NewsItem';

// const NewsBoard = ({ category }) => {
//   const [articles, setArticles] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchMode, setSearchMode] = useState(false);
//   const apiKey = process.env.REACT_APP_API_KEY;

//   useEffect(() => {
//     setPage(1);
//     fetchArticles(1, true);
//   }, [category, searchQuery]);

//   const fetchArticles = async (page, reset = false) => {
//     if (!apiKey) {
//       console.error('API Key is not defined');
//       return;
//     }

//     setLoading(true);

//     const url = searchMode && searchQuery
//       ? `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=20&page=${page}&apiKey=${apiKey}`
//       : category
//         ? `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=20&page=${page}&apiKey=${apiKey}`
//         : `https://newsapi.org/v2/top-headlines?country=in&pageSize=20&page=${page}&apiKey=${apiKey}`;

//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       if (data.articles) {
//         setArticles(reset ? data.articles : [...articles, ...data.articles]);
//       } else {
//         console.error('No articles found in response', data);
//       }
//     } catch (error) {
//       console.error('Error fetching news:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const loadMore = () => {
//     const nextPage = page + 1;
//     setPage(nextPage);
//     fetchArticles(nextPage);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     setSearchMode(true);
//     setPage(1);
//     fetchArticles(1, true);
//   };

//   return (
//     <div>
//       <h2 className='text-center'>LATEST <span className='badge bg-danger'>NEWS</span></h2>
//       <form onSubmit={handleSearch} className="d-flex justify-content-center mb-4">
//         <input
//           type="text"
//           className="form-control w-50"
//           placeholder="Search news..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button type="submit" className="btn btn-primary ml-2">Search</button>
//       </form>
//       {articles.length > 0 ? (
//         articles.map((news, index) => (
//           <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
//         ))
//       ) : (
//         <p>No news available</p>
//       )}
//       {loading && <p>Loading...</p>}
//       {!loading && articles.length % 20 === 0 && (
//         <div className="text-center mt-3">
//           <button className="btn btn-primary" onClick={loadMore}>Load More News</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NewsBoard;

import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMode, setSearchMode] = useState(false);
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    setPage(1);
    fetchArticles(1, true);
  }, [category, searchQuery]);

  const fetchArticles = async (page, reset = false) => {
    if (!apiKey) {
      console.error('API Key is not defined');
      return;
    }

    setLoading(true);

    const url = searchMode && searchQuery
      ? `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=20&page=${page}&apiKey=${apiKey}`
        : category
          ? `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=20&page=${page}&apiKey=${apiKey}`
          : `https://newsapi.org/v2/top-headlines?country=in&pageSize=20&page=${page}&apiKey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.articles) {
        setArticles(reset ? data.articles : [...articles, ...data.articles]);
      } else {
        console.error('No articles found in response', data);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchArticles(nextPage);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchMode(true);
    setPage(1);
    fetchArticles(1, true);
  };

  return (
    <div>
      <h2 className='text-center'>LATEST <span className='badge bg-danger'>NEWS</span></h2>
      <form onSubmit={handleSearch} className="d-flex justify-content-center mb-4">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search news..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-primary ml-2">Search</button>
      </form>
      {articles.length > 0 ? (
        articles.map((news, index) => (
          <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        ))
      ) : (
        <p>No news available</p>
      )}
      {loading && <p>Loading...</p>}
      {!loading && articles.length % 20 === 0 && (
        <div className="text-center mt-3">
          <button className="btn btn-primary" onClick={loadMore}>Load More News</button>
        </div>
      )}
    </div>
  );
};

export default NewsBoard;

