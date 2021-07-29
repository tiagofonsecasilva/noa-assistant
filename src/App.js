import React from 'react'
import withAuthenticationRequired from './components/Auth0/withAuthenticationRequired';
import { Container, Row, Col } from 'reactstrap';
import LeftBar from './components/LeftBar';
import { SearchBar } from './components/searchBar';
import styled from "styled-components";
import ListProjects from './components/Projects/ListProjects';
import { Route, Switch } from "react-router-dom";
import ListCourses from './components/Projects/ListCourses';
import Profile from './components/Auth0/user';
import Posts from './components/Auth0/posts';
import CourseDetails from './components/Projects/CoursesDetails';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: fixed; /* or absolute */
  top: 40%;
  left: 10%;

`;

const App = () => {

  return (
    <>
      <LeftBar />
      <Switch>
        <Route exact path={["/projects"]} component={ListProjects} />
        <Route exact path={["/courses"]} component={ListCourses} />
        <Route exact path="/courses/:id" component={CourseDetails} />
        <Route exact path={["/profile"]} component={Profile} />
        <Route exact path={["/posts"]} component={Posts} />

      </Switch>
      <AppContainer>
        <SearchBar />
      </AppContainer>


    </>
  )
}

export default App
