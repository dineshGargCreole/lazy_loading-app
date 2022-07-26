import './App.css';
import Posts from './components/Posts';
import React, {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then((res) => setPosts(res.data))
  }, [])
  console.log('qq', posts)
  return (
    <div>
      {
        posts && <Posts posts={posts} />
      }
    </div>
  );
}

export default App;
