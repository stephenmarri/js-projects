import React, { useEffect, useState } from 'react'
import ShowSingleQuestion from './ShowSingleQuestion'
import questionsObject from '../assets/Questions.js'

const View = ({ isUserAuthenticated = false, userId }) => {

    const [questionsObj, setquestionsObj] = useState(questionsObject);
    const [showUserWishes, setShowUserWishes] = useState();
    const [respondedUsers, setRespondedUsers] = useState();
    const [allResponses, setAllResponses] = useState();




    const getAllWishes = async () => {
        const url = "http://localhost:8000/wishes/" + userId
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
            },
        })

        const rawResponse = await response.json()
        console.log(rawResponse)
        let respondedUsers = []
        Object.entries(rawResponse).forEach(([key, value]) => {
            respondedUsers.push({
                "name": value.createdByUser,
                "id": value.createdBy
            })
        })
        setAllResponses(rawResponse)
        setRespondedUsers(respondedUsers)
    }

    const createAnswers = (cratedById) => {
        console.log(cratedById)
        const singleResponse = Object.entries(allResponses)
            .filter(([key, value]) => value.createdBy == cratedById)
            .reduce((acc, [key, value]) => {
                acc[key] = value;
                return acc;
            }, {});
        
        let singleReponseObj = {...questionsObj}
        const firstKey = Object.keys(singleResponse)[0]
        console.log(singleResponse[firstKey])
        Array.from(Object.entries(questionsObj)).forEach(([key,value])=>{
            singleReponseObj[key]["answer"] = singleResponse[firstKey][key]
        })
        setquestionsObj(singleReponseObj)
        setShowUserWishes(true)
    }


    useEffect(() => {
        async function fetchData() {
            await getAllWishes();
        }
        fetchData()
    }, []);

    const allQuestions = () => {
        return Object.entries(questionsObj).map(([key, value]) => {
            return <ShowSingleQuestion key={key} questionKey={key} questionText={value.question} type={value.type} answer={value.answer}/>
        })
    }

    const onClickBack = () => {
        setShowUserWishes(false)
    }

    const showWishesHTML = () => {
        return <div id='view_container'>
            {allQuestions()}
            <button onClick={onClickBack} type="submit" id='btnSendWishes'>Back</button>
        </div>
    }

    const showInitialPageHTML = () => {
        if (!respondedUsers) return null;
        console.log(respondedUsers)
        return <div id='view_container'>
            <div id='responded_users' className='fr'>
                {
                    Array.from(respondedUsers).map(x =>
                        <p onClick={()=>createAnswers(x.id)} key={x.id}>{x.name}</p>
                    )
                }
            </div>
        </div>
    }

    return (
        <>
            {
                isUserAuthenticated ?
                    showUserWishes  ?
                        showWishesHTML() :
                        showInitialPageHTML() :
                    <div>Invalid View</div>
            }
        </>
    )
}


export default View