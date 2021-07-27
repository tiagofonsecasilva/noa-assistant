import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import queryString from 'query-string';
import { getAllProjects } from '../../api';
export default class ListProjects extends Component {
    state = {
        projects: [],
        filteredProjects: [],
        searchKeyword:'',
    };
    async componentDidMount() {
       const response = await getAllProjects();
       this.setState({
           projects: response.data,
           filteredProjects: response.data
       });
     const values = queryString.parse(this.props.location.search);
     if (values.search) {
           this.setState({
               searchKeyword: values.search,
               filteredProjects: this.state.projects.filter((proj)=> 
               proj.title.toLowerCase()
               .includes(values.search.toLowerCase()))
               });
       }
    }
    handleChange = (event) => {
        this.setState({
          searchKeyword: event.target.value,
          filteredProjects: this.state.projects.filter((proj)=> 
          proj.title.toLowerCase()
          .includes(event.target.value.toLowerCase()))
          });
       }
    render() {
        return (
            <>
           <h2> Projects List </h2>
          <input name="searchKeyword" onChange={this.handleChange} value={this.state.searchKeyword} type="text" placeholder="Search" />
                {this.state.filteredProjects.map((proj) => {
                    return (
                        <h3 key={proj._id}> <NavLink to={`/projects/${proj._id}`}> {proj.title} </NavLink> <img src={proj.imageUrl} alt="" /> </h3>,
                        <h3 key={proj._id}> <NavLink to={`/projects/${proj._id}`}> {proj.title} </NavLink> <img src='{proj.imageUrl}' alt="" /> </h3> 

                    )
                })}
            </>
        );
    }
}