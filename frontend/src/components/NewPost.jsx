import React from 'react'

const NewPost = () => {
    return (
        <div className='min-h-screen pt-20 '>
            <p className='text-white text-4xl font-bold text-center'>NEW POST </p>
            <div className='flex flex-col gap-5 items-center bg-base-200 lg:w-[50%]'>
                <div className='flex flex-col gap-3'>
                    <p>Title</p>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full  " />
                </div>
                <div className='flex flex-col gap-3'>
                    <p>Content</p>
                    <textarea placeholder="Type here" className="textarea textarea-lg textarea-bordered w-full max-w-xs" />
                </div>
                <div className='w-full'>
                    <button className="btn btn-primary w-full">Post</button>
                </div>
            </div>
        </div>
    )
}

export default NewPost