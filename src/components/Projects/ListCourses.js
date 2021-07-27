import React from "react";
import { NavLink } from "react-router-dom";
import { getAllCourses } from "../../api";

export default class ListCourses extends React.Component {
  state = {
    courses: [],
  };

  async componentDidMount() {
    const response = await getAllCourses();
    this.setState({
      courses: response.data,
    });
  }

  render() {
    return (
      <>
        <h2>List of Courses</h2>
        <ul>
          {this.state.courses.map((course) => {
            return (
              <li key={course._id}>
                <NavLink to={`/courses/${course._id}`}>
                  {course.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}