import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { getAllNews } from "../../api";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class ListNews extends Component {
  state = {
    news: [],
  };

  async componentDidMount() {
    const response = await getAllNews();
    this.setState({
      news: response.data,
    });
  }

  render() {
    
    return (

      <>
        
      
       
          {this.state.news.map((news) => {
            return (
              <>
                <h1>News List</h1>
                <p>{news.author}</p>
                </>
            );
          })}
      </>
    );
  }
}

