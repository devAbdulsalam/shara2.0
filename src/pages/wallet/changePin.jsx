import React from 'react'
import { useState } from 'react';


const changePin = () => {
    const [pin, setPin] = useState
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {pin, password}
        login(user)
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                className=""
                id="pin"
                name="pin"
                onChange={()=> setPin(e.target.value)}
                value={pin}
            />
        </form>
    </div>
  )
}

export default changePin