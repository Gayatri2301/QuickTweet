import React, { useState } from 'react'
import Login from './Components/Login'


const App = () => {

  const [isOpen, setIsOpen] = useState(false);
  const options = ['Profile','Settings','Logout']

  return (
    <div className='h-40'>
      <p className='text-white font-bold h-12'><img className='h-12 block inline' src='logo.jpg'></img> QuickTweet </p>
      <div>
      <button onClick={() => setIsOpen(!isOpen)}><img className='absolute top-0 right-0 h-14 w-14 mr-10 mt-12 border rounded-full cursor-pointer' src='profile.jpg'></img></button>
      </div>
      {isOpen &&
      <div className='border rounded bg-white absolute top-[110px] right-5 w-24'>
        {options && options.map((option) => {
          return <div className='border-b px-4 py-2 hover:bg-gray-300'>{option}</div>
        })}
      </div>
    }
    </div>
  )
}

export default App
