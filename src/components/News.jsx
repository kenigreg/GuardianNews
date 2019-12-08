import React, { Component } from 'react';
import { getNews } from '../api.js';
import NewsList from './NewsList';

class News extends Component {
  state = {
    newsStories: []
  };

  componentDidMount() {
    getNews().then(results => {
      this.setState({ newsStories: results });
    });
  }

  render() {
    const { newsStories } = this.state;

    return (
      <div>
        {newsStories && (
          <ul>
            <NewsList newsStories={newsStories} />
          </ul>
        )}
      </div>
    );
  }
}

export default News;
