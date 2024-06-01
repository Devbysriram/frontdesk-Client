import React from 'react'
import { Link } from 'react-router-dom'

const DashHeader = () => {
  return (
    <div>
      <Link to='/dash/notes'>
        <p className='text-2xl'>TechNotes</p>
      </Link>
    </div>
  )
}

export default DashHeader
