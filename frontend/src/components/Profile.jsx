import React from 'react'

const Profile = () => {
  return (
    <div className='min-h-screen pt-20 w-full flex flex-col gap-8'>
      <p className='text-white text-4xl font-bold text-center'>YOUR PROFILE </p>

      <div className='mx-auto flex justify-center '>
        <div className='flex flex-col gap-5'>
          <div className='bg-base-200 p-4 flex flex-col gap-3'>
            <p className='text-lg font-bold'>Update Username</p>
            <input type="text" placeholder="previous username ayega yaha pe" className="input input-bordered input-primary w-full max-w-xs" />
            <button className="btn btn-neutral">Update</button>
          </div>
          <div className='flex flex-col gap-3 bg-base-200 rounded-lg p-4 '>
            <p>Update Password</p>
            <input type="text" placeholder="previous password" className="input input-bordered input-primary w-full max-w-xs" />
            <input type="text" placeholder="new password" className="input input-bordered input-primary w-full max-w-xs" />
            <input type="text" placeholder="confirm new password" className="input input-bordered input-primary w-full max-w-xs" />
            <button className="btn btn-neutral">Update</button>
          </div>

        </div>
      </div>



    </div>
  )
}

export default Profile