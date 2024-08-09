import React from 'react'

const Signup = () => {
  return (
    <div>
      <div className='flex justify-center item-center py-52'>
      <div className='border rounded-lg bg-gray-200 p-20'>
        <h1 className='font-bold mb-3 text-2xl flex justify-center h-10'>SignUp</h1>
        <div>
          <input className='border rounded mb-3 w-64' name='email' placeholder='Email' required></input>
        </div>
        <div>
          <input className='border rounded mb-3 w-64' name='password' placeholder='Password' required></input>
        </div>
        <div>
          <input className='border rounded mb-3 w-64' name='password' placeholder='Confirm Password' required></input>
        </div>
        <div>
          <input className='border rounded mb-4 w-64' name='text' placeholder='Username' required></input>
        </div>
        <div>
        <button className='border rounded bg-[#22376E] text-white w-full'>SignUp</button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Signup
