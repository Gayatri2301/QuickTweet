import React from 'react'
import Login from './Components/Login'


const App = () => {


  return (
    <div className='h-40'>
      <p className='text-white font-bold h-12'><img className='h-12 block inline' src='logo.jpg'></img> QuickTweet </p>
      <div>
      <img className='absolute top-0 right-0 h-14 w-14 mr-10 mt-12 border rounded-full cursor-pointer' src='profile.jpg'></img>
      </div>
      <div className='border rounded bg-white absolute top-[110px] right-5 w-24'>
        <ul>
          <li className='p-2 mb-1 h-8 text-lg cursor-pointer hover:bg-gray-300'>Profile</li>
          <li className='p-2 mb-1 h-8 text-lg cursor-pointer hover:bg-gray-300'>Settings</li><hr></hr>
          <li className='p-2 mb-1 h-8 text-lg cursor-pointer hover:bg-gray-300'>Logout</li>
        </ul>
      </div>
    </div>
  )
}

export default App
