import React from "react";
import { NavLink } from "react-router-dom";
import { getAllCourses } from "../../api";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';


export default class ListCourses extends React.Component {
  state = {
    courses: [],
  };

  async componentDidMount() {
    const response = await getAllCourses();
    this.setState({
      courses: response.data,
      
    });      console.log(response.data.courseType)
  }

  render() {
    
    return (

      <>
        {
          this.state.courses.map((course) => {
            return (

              <CardGroup>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Text
                      key={course._id}>
                      <NavLink to={`/courses/${course._id}`}>
                        {course.name}
                      </NavLink>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>

                    <Card.Text
                      key={course._id}>
                      <NavLink to={`/courses/${course._id}`}>
                        {course.name}
                      </NavLink>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Text
                      key={course._id}>
                      <NavLink to={`/courses/${course._id}`}>
                        {course.name}
                      </NavLink>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>

            )

          }
          )}
       
      </>
    );
    
 }      
} 









          
      
       
      {/*   <Row style={{ display: "flex", flexDirection: "row", flexWrap: 'wrap', margin: '100px 0 0 200px', paddingTop: "127px"}}>
          {this.state.courses.map((course) => {
            return (
              <Card border="warning" style={{ width: '18rem' }}>
                <Card.Body style={{ display: "flex", flexDirection: "row" }}>
                  <Card.Text
                     key={course._id}>
                      <NavLink to={`/courses/${course._id}`}>
                        {course.name}
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
} */}

{/* <Row xs={1} md={2} className="g-4">
  {Array.counter({ length: 4 }).map((course, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
      
          <Card.Text
            key={course._id}>
            <NavLink to={`/courses/${course._id}`}>
              {course.name}
            </NavLink>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
      </>
    );
  }
}  */}