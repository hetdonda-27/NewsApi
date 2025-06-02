import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let styl =
    {
      position: "absolute",
      top: "10px",
      right: "10px",
      backgroundColor: "#0d6efd",
      color: "#fff",
      padding: "6px 10px",
      borderRadius: "12px",
      fontSize: "0.75rem",
      fontWeight: "600",
      boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
      zIndex: 1
    };
    let { title, description, urltoimage, newsurl, author, date, source } = this.props;

    return (
      <div>
        <div className="card" style={{ width: "18rem", position: 'relative', overflow: 'hidden' }}>

          <span className="badge" style={styl}>
            {source}
          </span>
          <img src={!urltoimage ? "https://demofree.sirv.com/nope-not-here.jpg?w=150" : urltoimage}
            className="card-img-top"
            alt="news"
            style={{ height: '180px', objectFit: 'cover' }}
          />

          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-primary">
              More About
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
