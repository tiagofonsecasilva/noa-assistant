import React from 'react';

import axios from 'axios';

export default class GitPullRequest extends React.Component {
  state = {
    authors: []
  }

  componentDidMount() {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=989b144b80a349acbf503349fc783ad9`)
      .then(res => {
        const authors = res.data;
        this.setState({ authors });
      })
  }

  render() {
    return (
      <ul>
        { this.state.articles.map(authors => <li>{authors.articles.author}</li>)}
      </ul>
    )
  }
}