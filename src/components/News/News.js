import React, { Component } from 'react';
import NewSingle from './NewSingle';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }
//nav. location to get users current location take location and put in API lat and long. 
  componentDidMount() {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&category={}&apiKey=process.env.NEWS_API_KEY';
        //convert this to ES7 async await fun project 
    fetch(url)
      .then((response) => {
        return response.json();   //axios allows you to remove this JSON return as it all ready formats to JSON 
                                  //post request, put, delete, etc. 
      })
      .then((data) => {
        this.setState({
          news: data.articles
        })
      })
      .catch((error) => console.log(error));
  }

  renderItems() {
    return this.state.news.map((item) => (
      <NewSingle key={item.url} item={item} />
    ));
  }

  render() {
    return (
      <div className="row">
        {this.renderItems()}
      </div>
    );
  }
}

export default News;