import React from 'react'
import './Request.css'

const Requests = () => {
  return (
    <>
      <div id='request_container' className=
        {'page_container fc'}
      >
        <div id="line_one" className='fr'>
          <input type="text" name="" id="username" required placeholder='Name'/>
          <input type="email" name="" id="useremail" required placeholder='Email'/>
          <input type="number" name="" id="userphone" required placeholder='Phone'/>
        </div>
        <textarea name="" id="message" rows={10} required 
         placeholder='Write your message here'
        ></textarea>
        <button>Send Request</button>

      </div>
    </>
  )
}

export default Requests