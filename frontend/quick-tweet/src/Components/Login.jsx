import React from 'react'

const Login = () => {
  return (
    <div className=''>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='mb-5 font-bold'>Login</h1>
        <div>
            <input className='border bg-grey-500 mb-2' type='email' name='email' placeholder='Email'></input>
        </div>
        <div>
            <input className='border bg-grey-500 mb-2' type='password' name='password' placeholder='Password'></input>
        </div>
        <div>
            <button className='border rounded w-full bg-green-500 mt-2 p-2'>Login</button>
        </div>
        </div>
            <p>Don't have an account?</p><span><button>Register</button></span>
        </div>
  )
}

export default Login
