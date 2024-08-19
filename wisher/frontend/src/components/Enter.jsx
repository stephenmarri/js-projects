import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Enter = ({ setIsUserAuthenicated, setcreatedByUserID }) => {

    const [isValidUser, setisValidUser] = useState(false);


    const [username, setUsername] = useState("");
    const [userpin, setUserpin] = useState("");
    const [message, setMessage] = useState();

    const onChangeUserName = (e) => setUsername(e.target.value)
    const onChangeUserPin = (e) => setUserpin(e.target.value)

    const authenticate = async () => {
        const url = "http://localhost:8000/users/authenticate"
        const body = JSON.stringify(
            {
                "username": username,
                "password": userpin
            }
        )
        console.log(body)
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body
        })


        console.log(response.status)
        const rawResponse = await response.json()
        console.log(rawResponse)
        setMessage(rawResponse.message)
        if (String(rawResponse.message).toLowerCase().trim() == "user authenticated") {
            setIsUserAuthenicated(true)
            setisValidUser(true)
            setcreatedByUserID(rawResponse.createdByUserID)
        }
    }

    return (
        <div className='fc' id='enter_container'>
            <div className='fc signupAndEnter' id='enter'>
                <input onChange={onChangeUserName} type="text" name="" id="username" value={username} placeholder='USERNAME' />
                <input onChange={onChangeUserPin} type="number" name="" id="userpin" value={userpin} placeholder='PIN' />
                <input onClick={authenticate} type="submit" readOnly value="Enter" />
                {
                    isValidUser ?

                        <>
                            <Link to="/send">Send Wishes</Link>
                            <Link to="/view">View Wishes</Link>
                        </>
                        : null
                }
                {
                    message &&
                    <div id='message'>
                        <p>{message}</p>
                    </div>
                }

            </div>
        </div>
    )
}

export default Enter