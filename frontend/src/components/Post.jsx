import React from 'react'
import { BsDot } from 'react-icons/bs'
import { BiUpvote } from 'react-icons/bi'
import { BiDownvote } from 'react-icons/bi'
import { BiComment } from 'react-icons/bi'
import TimeConverter from '../common/TimeConverter'
const Post = ({ post }) => {
    return (
        <div className=' shadow-2xl border border-neutral-700 lg:w-[50%] md:w-[70%] sm:w-[80%] mx-auto mt-5 rounded-lg'>
            <div className='p-5 flex flex-col gap-3'>
                <div className='flex gap-5'>
                    <div >
                        <img src={post.authorProfile} alt="profile" className='w-[40px] rounded-full' />
                    </div>
                    <div className='flex items-center gap-1'>
                        <p className='text-white  '>{post.author}</p>
                        <BsDot />
                        {/* <ReactTimeAgo date={post.date} /> */}
                        <TimeConverter date={post.date} />
                    </div>
                </div>
                <div className='border border-neutral-600'>

                </div>
                <div className=''>
                    <p className='text-white text-lg font-semibold'>{post.title}</p>
                    <p className='mt-3 text-neutral-300 text-justify'>{post.content}</p>
                </div>
            </div>

            <div className='bg-base-200 p-3 flex justify-between rounded-b-lg'>
                <div className='flex items-center gap-2'>
                    <BiUpvote size={20} />
                    <p className='text-white'>{post.likes - post.dislikes}</p>
                    <BiDownvote size={20} />
                </div>
                <div className='flex items-center gap-1'>
                    <BiComment size={20} />
                    <p className='text-white'>{post.comments.length}</p>
                    <p className='text-white'>Comments</p>
                </div>
            </div>
        </div>
    )
}

export default Post