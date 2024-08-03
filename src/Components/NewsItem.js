// import React from 'react';
// import image from '../Assets/image.jpg';

// const NewsItem = ({ title, description, src, url }) => {
//   return (
//     <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "340px" }}>
//       <img src={src ? src : image} style={{ height: "200px", width: "320px" }} className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">{title.slice(0, 50)}</h5>
//         <p className="card-text">
//           {description ? description.slice(0, 90) : "News is get from curren event. It is information about something that has just happended."}
//         </p>
//         <a href={url} className="btn btn-primary">Read More</a>
//         <div className="mt-2">
//           <a href={`https://twitter.com/share?url=${url}`} className="btn btn-info me-2" target="_blank" rel="noopener noreferrer">
//             <i className="fa-brands fa-x-twitter"></i> 
//           </a>
//           <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} className="btn btn-primary me-2" target="_blank" rel="noopener noreferrer">
//             <i className="fa-brands fa-facebook-f"></i> 
//           </a>
//           <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
//             <i className="fa-brands fa-linkedin"></i> 
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NewsItem;


import React from 'react';
import image from '../Assets/image.jpg';

const NewsItem = ({ title, description, src, url }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: description,
        url: url,
      })
      .then(() => console.log('Successfully shared'))
      .catch(error => console.error('Error sharing', error));
    } else {
      alert('Share API is not supported in your browser.');
    }
  };

  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "340px" }}>
      <img src={src ? src : image} style={{ height: "200px", width: "320px" }} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : "News is get from curren event. It is information about something that has just happended."}
        </p>
        <a href={url} className="btn btn-primary">Read More</a>
        <div className="mt-2">
          <button className="btn btn-success me-2" onClick={handleShare}>
            <i className="fa-solid fa-share-nodes"></i> Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

