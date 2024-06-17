import React from 'react';
import image from '../Assets/image.jpg';

const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"340px"}}>
  <img src={src?src:image} style={{height:"200px",width:"320px"}} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"News is get from curren event. It is information about something that has just happended."}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  );
}

export default NewsItem;