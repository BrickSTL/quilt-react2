import React from 'react';





const ArtFrame = props => {
  const { item, savedItem } = props;
  return (
    <div>
      <a href={item.url} target="">
        <div className="card-image">
          <img src={item.urlToImage} alt="" />

        </div>
        <div className="article-text text-left">
          <span style={{ fontSize: '22px' }} className="row">
            {item.title}
          </span>
          <span className="row">
            <p className="sourceDisplay">{item.source.name}</p>
          </span>
          <span className="row">{item.author}</span>
          <span className="row">{item.publishedAt}</span>
        </div>
      </a>
      <span> <button className="row" onClick={() => savedItem(item)}>
        <i className="row" /> Save Article
      </button></span>
    </div>
  );
};

export default ArtFrame;
