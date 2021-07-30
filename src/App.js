import React from 'react'
import withAuthenticationRequired from './components/Auth0/withAuthenticationRequired';
import LeftBar from './components/LeftBar';
import { SearchBar } from './components/searchBar';
import styled from "styled-components";
import ListProjects from './components/Projects/ListProjects';
import { Route, Switch } from "react-router-dom";
import ListCourses from './components/Projects/ListCourses';
import Profile from './components/Auth0/user';
import Posts from './components/Auth0/posts';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import ListNews from './components/Projects/ListNews';



const AppContainer = styled.div`
  ${'' /* width: 95%; */}
  height: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 15%;
  left: 35%;
`;

const App = () => {

  return (
    <div className="theApp">
    
        <LeftBar />
        <ListNews />
        <Switch>
          <Route exact path={["/projects"]} component={ListProjects} />
          <Route exact path={["/courses"]} component={ListCourses} />
          <Route exact path={["/profile"]} component={Profile} />
          <Route exact path={["/posts"]} component={Posts} />

        </Switch>
        <AppContainer>
          <SearchBar />
        </AppContainer>
    </div>
  )
}

export default App
