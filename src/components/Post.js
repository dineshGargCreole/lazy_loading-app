import React from 'react'
import '../App.css';

function Post({post}) {
    console.log('ss', post)
  return (
    <div className='one'>
        <img src='https://via.placeholder.com/600/92c952' alt='img' />
        <p>{post?.title}</p>
    </div>
  )
}

export default Post