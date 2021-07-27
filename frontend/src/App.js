import React, { useEffect, useState } from 'react'
import axios from 'axios';
import NavBar from './components/NavBar'
import WeatherList from './components/Weather';
import GitPullRequest from './components/GitHub';
import withAuthenticationRequired from './components/Auth0/withAuthenticationRequired';
import { Container, Row, Col } from 'reactstrap';
import LeftBar from './components/LeftBar';
import { SearchBar } from './components/searchBar';
import styled from "styled-components";
import ListProjects from './components/Projects/ListProjects';
import { Route, Switch } from "react-router-dom";
import ListCourses from './components/Projects/ListCourses';

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
  const [users, setUsers] = useState([])
  const getData = async () => {
    const res = await axios.get('/api/users')
    setUsers(res.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
    <Switch>
    <Route exact path={["/projects"]} component={ListProjects} />
    <Route exact path={["/courses"]} component={ListCourses} />

    </Switch>
          <AppContainer>
      <SearchBar />
    </AppContainer>
      <LeftBar />

    </>
  )
}

export default App
