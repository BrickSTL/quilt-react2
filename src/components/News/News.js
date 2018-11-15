import React, { Component } from 'react';
import NewSingle from './NewSingle';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }
  // Recieve API From News API
  componentDidMount() {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=774beda1345847508da686c538fe6698';
    //Fetch returns JSON response to confirm everything is good to go
    fetch(url)
      .then((response) => {
        return response.json();
      })
      //Fetch then uses setState to send recieved api data to news array in state
      .then((data) => {
        this.setState({
          news: data.articles
        })
      })
      //Error catch
      .catch((error) => console.log(error));
  }
  // Function creating invidual news articles
  renderItems() {
    //Maps each article
    return this.state.news.map((item) => (
      //
      <NewSingle key={item.url} item={item} />
    ));
  }
  //Runs renderItems function to create all articles and sends to DOM
  render() {
    return (
      <div className="row">
        {this.renderItems()}
      </div>
    );
  }
}

export default News;
