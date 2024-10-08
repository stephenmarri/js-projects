import React, { useState } from 'react'

const Signup = () => {

    const [username, setUsername] = useState("");
    const [userpin, setUserpin] = useState("");
    const [message, setMessage] = useState();
    
    const onChangeUserName = (e) => setUsername(e.target.value)
    const onChangeUserPin = (e) => setUserpin(e.target.value)

    const addUser = async () => {
        const url = import.meta.env.VITE_API_URL + "users"
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
    }

    return (
        <div className='fc' id='signup_container'>
            <div className='fc signupAndEnter' id='signup'>
                <input onChange={onChangeUserName} type="text" name="" id="username" value={username} placeholder='USERNAME' />
                <input onChange={onChangeUserPin} type="number" name="" id="userpin" value={userpin} placeholder='PIN' />
                <input onClick={addUser} type="submit" readOnly value="Add User" />
                <div id='message'>
                    <p>{message}</p>
                </div>
            </div>
        </div>
    )
}

export default Signup