import React from 'react'
import { Html } from '@react-three/drei'
const Loader = () => {
  return (
    <Html>
      <div className='flex items-center justify-center'>
        <div className='w-20 h-20 border-2 border-blue-500 border-t-blue-500 border-opacity-20 rounded-full animate-spin'></div>
      </div>
    </Html>
  )
}

export default Loader
