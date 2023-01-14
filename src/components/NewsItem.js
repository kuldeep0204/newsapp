import React, { Component } from 'react'


export class NewsItem extends Component {
    render() {
      let {title, description, imageUrl, url } = this.props;
    return (
      <div>
        <div className="card" style={{width: '19rem'}}>
        <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a rel="noreferrer" href={url} target="_blank" className="btn btn-primary">Read Full Article</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
