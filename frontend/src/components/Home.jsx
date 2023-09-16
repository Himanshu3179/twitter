/* eslint-disable no-unused-vars */
import React from 'react'
import { items } from '../data'
import Post from './Post';

import { IoAddOutline } from 'react-icons/io5'


const Home = () => {
  const [posts, setPosts] = React.useState(items);
  return (
    <div className='pt-20 p-2 min-h-screen pb-10 '>
      {
        posts.map((post, i) => {
          return (
            <Post key={i} post={post} />
          )
        })
      }
      <div className='fixed bottom-4 right-4 p-4 bg-[#1DA1F2] rounded-full shadow-md shadow-blue-400'>
        {/* <IoAddCircleSharp size={50} color='' /> */}
        <IoAddOutline color='white' size={30}/>
      </div>
    </div>
  )
}

export default Home