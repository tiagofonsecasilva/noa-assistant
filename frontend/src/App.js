import React, { useEffect, useState } from 'react'
import axios from 'axios';
import NavBar from './components/NavBar'
import WeatherList from './components/Weather';
import GitPullRequest from './components/GitHub';
import withAuthenticationRequired from './components/Auth0/withAuthenticationRequired';
import { Container, Row, Col } from 'reactstrap';
import LeftBar from './components/LeftBar';



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
      <LeftBar />
    </>
  )
}

export default App
