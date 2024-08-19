import React from 'react'

const ShowSingleQuestion = ({questionKey, questionText, type, handleInputChange, answer}) => {
  return (
    <div id='singleQuestion' className='fc'>
        <label htmlFor="">{questionText}</label>
        {
            type == "text" ? 
            <input readOnly type="text" name={questionKey} id="" onChange={handleInputChange} required placeholder='Write here' value={answer || ''}/> 
            : null
        }
        {
            type == "textarea" ? 
            <textarea readOnly name={questionKey} id="" onChange={handleInputChange}  required rows={4} placeholder='Write here' value={answer || ''}></textarea>
            : null
        }
        
    </div>
  )
}

export default ShowSingleQuestion
