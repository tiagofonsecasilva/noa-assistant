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
        <Row style={{ display: "flex", flexDirection: "row", flexWrap: 'wrap', margin: '100px 0 0 200px', paddingTop: "127px" }}>
          {this.state.news.map((obj) => {
            return (
              <Card border="warning" style={{ width: '18rem' }}>
                <Card.Body style={{ display: "flex", flexDirection: "row" }}>
                  <Card.Text
                    key={obj.source._id}>
                    <NavLink to={`/news/${obj._id}`}>
                      {obj.name}
                    </NavLink>

                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </>
    );
  }
}

