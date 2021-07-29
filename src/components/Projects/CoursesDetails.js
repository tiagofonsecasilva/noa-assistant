import React, { Component } from "react";
import { getCourse, deleteCourse } from "../../api";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

export default class CourseDetails extends Component {
  state = {
    id: "",
    name: "",
    courseType: "",
    slug: "",
  };

  async componentDidMount() {
    const response = await getCourse(this.props.match.params.id);
    this.setState({
      id: response.data._id,
      name: response.data.name,
      courseType: response.data.courseType,
      slug: response.data.slug,
    });
  }

  handleDeleteProject = async () => {
    await deleteCourse(this.state.id);
    toast.success("Course deleted.");
    this.props.history.push("/");
  };

  render() {
    const { id, name, courseType, slug } = this.state;
    return (
      <>
        <h2>{name}</h2>
        <p>{courseType}</p>
        {slug && (
          <img style={{ width: "100px" }} src={slug} alt="project" />
        )}
        <div>
          <button onClick={this.handleDeleteProject}>Delete</button>
          <button
            onClick={() => {
              this.props.history.push(`/courses/${id}/edit`);
            }}
          >
            Edit
          </button>
          <NavLink to={`/courses/${id}/edit`}>Edit</NavLink>
        </div>
      </>
    );
  }
}