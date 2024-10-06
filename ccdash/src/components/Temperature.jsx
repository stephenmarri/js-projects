import React, { useState } from 'react'

const Temperature = () => {
    const fToC = (deg) => (deg - 32) * (5/9)
    const cToF = (deg) => (deg * 9/5) + 32
    const [fah, setFah] = useState(75);
    const [cel, setCel] = useState(parseFloat(fToC(fah)).toFixed(2));


    const onChangeFahs = (e) => {
        setFah(e.target.value)
        setCel(parseFloat(fToC(e.target.value)).toFixed(2))
    }

    const onChangeCel = (e) => {
        setCel(e.target.value)
        setFah(parseFloat(cToF(e.target.value)).toFixed(2))
     }

    return (
        <>
            <br />
            <h6>TEMPERATURE</h6>
            <div className="dual_container fr" id="currency_container">
                <div className="single_card fc">
                    <span>Fahs</span>
                    <span className='fr justify-between w-full gap-1'>

                        <input type="number" onChange={onChangeFahs} value={(fah)} />
                    </span>
                </div>
                <div className="single_card fc">
                    <span>Cel</span>
                    <span className='fr justify-between w-full gap-1'>
                        <input type="number" onChange={onChangeCel} value={cel} />
                    </span>
                </div>
            </div>
        </>
    )
}

export default Temperature