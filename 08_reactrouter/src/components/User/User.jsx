import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {Userid} = useParams()
  return (
    <div className='bg-gray-600 text-center p-4 text-black text-3xl'>
      User: {Userid}
    </div>
  )
}

export default User
