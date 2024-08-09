import React from 'react'
  
const Login = () => {
  return (
    <div className="flex justify-center items-center py-52">
    <div className='border rounded-lg p-20 bg-gray-200'>
        <div>
        <h1 className='font-bold mb-3 text-2xl flex justify-center h-10'>Login</h1>
        <div>
          <input className='border rounded border-gray-500 mb-2 w-64' name='email' placeholder='Email'></input>
        </div>
        <div>
          <input className='border rounded border-gray-500 mb-3 w-64' name='password' placeholder='Password'></input>
        </div>
        <div>
          <button className='border rounded bg-[#22376E] w-full text-white'>Login</button>
        </div>
        <p>Don't have an account?<span></span></p>
      </div>
    </div>
    </div>
  )
}


export default Login
