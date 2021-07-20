import React, {useEffect, useState} from 'react'
import axios from 'axios'

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
    <div style={{backgroundImage: "url(https://placekitten.com/1600/800)", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", height: "1080px"}}>
      {users.map(u => <h4 key={u._id}>userName : {u.userName}</h4>)}
    </div>
  )
}

export default App
