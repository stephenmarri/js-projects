import React, { useState } from 'react'
import SingleQuestion from './SingleQuestion'
import questionsObject from '../assets/Questions.js'

const SendWishes = ({ isUserAuthenticated = false, createdByUserID, createdForUserID = "66c2629962fe2938fdd88cda" }) => {

    const [questionsObj, setquestionsObj] = useState(questionsObject);
    const [respMessage, setRespMessage] = useState();
    
    
    const handleInputChange = (e) => {
        const { name, value} = e.target;
        let modifiedChild = questionsObj[name]
        modifiedChild["answer"] = value        
        setquestionsObj({
          ...questionsObj,
          [name]: modifiedChild,
        });
      };

    const onClickSendWishes = (e) => {
        e.preventDefault();
        
        const areAllAnswered =  Object.entries(questionsObj).every( ([key,value]) => {
            return value.answer.length > 0
        })
        
        if(areAllAnswered){            
            sendWishesRequest()
        }
    }

    const prepareResponseObject = () => {
        let responseObject = {}
        Object.entries(questionsObj).forEach(([key, value]) => {
            responseObject[key] = value.answer
        })
        return responseObject
    }

    const sendWishesRequest = async () => {
        const responseObject = prepareResponseObject()
        const body = JSON.stringify(
            {
                "createdBy": createdByUserID,
                "createdFor": createdForUserID,
                ...responseObject
            }
        )        

        const url = import.meta.env.VITE_API_URL + "wishes"                
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body
        })

                
        const rawResponse = await response.json()
        console.log(rawResponse)        
        setRespMessage(rawResponse.message)
    }

    const allQuestions = () => {
        return Object.entries(questionsObj).map(([key, value]) => {
            return <SingleQuestion key={key} questionKey={key} questionText={value.question} handleInputChange={handleInputChange} type={value.type} />
        })
    }

    const sendWishesHTML = () => {
        return <div id='wishes_container'>
            <form onSubmit={onClickSendWishes}>
                {allQuestions()}
                <button type="submit" id='btnSendWishes'>Send Wishes</button>
            </form>
        </div>
    }

    return (
        <>
            {
                 respMessage ? 
                 <div>{respMessage}</div> :
                        isUserAuthenticated || true?
                        sendWishesHTML() :                       
                        <div>Invalid View</div>
            }
        </>
    )
}

export default SendWishes