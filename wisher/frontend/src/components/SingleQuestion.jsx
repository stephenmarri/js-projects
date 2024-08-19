import React from 'react'

const SingleQuestion = ({questionKey, questionText, type, handleInputChange}) => {
  return (
    <div id='singleQuestion' className='fc'>
        <label htmlFor="">{questionText}</label>
        {
            type == "text" ? 
            <input type="text" name={questionKey} id="" onChange={handleInputChange} required placeholder='...' /> 
            : null
        }
        {
            type == "textarea" ? 
            <textarea name={questionKey} id="" onChange={handleInputChange}  required rows={4} placeholder='...' ></textarea>
            : null
        }
        
    </div>
  )
}

export default SingleQuestion
