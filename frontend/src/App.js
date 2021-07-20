import React, {useEffect, useState} from 'react'
import axios from 'axios';
import NavBar from './components/NavBar'

const App = () => {
  const [users, setUsers] = useState([])
  const getData = async() => {
    const res = await axios.get('/api/users')
    setUsers(res.data)
  }

  useEffect(() => {
    getData()
  }, [])
 
  return (
    <>
    <NavBar />
    </>
  )
}

export default App
