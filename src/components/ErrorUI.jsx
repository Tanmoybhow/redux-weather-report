import React from 'react'
import { useSelector } from 'react-redux'

const ErrorUI = () => {
  const error = useSelector(state=> state.weatherReducer.error);
  return (
    <div className='w-full h-75 flex items-center justify-center'>
      <h1 className='text-center text-red-800'>{error}</h1>
    </div>
  )
}

export default ErrorUI
