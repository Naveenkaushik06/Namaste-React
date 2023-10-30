import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className='font-bold text-3xl p-4 m-4'>Contact Us Page</h1>
      <form>
        <input type='text' placeholder='Name' className='border border-black m-2 p-2' />
        <input type='text' placeholder='Message' className='border border-black m-2 p-2' />
        <button className='border border-black m-2 p-2 bg-gray-200 rounded-lg'>Submit</button>
      </form>
    </div>
  )
}
export default Contact
