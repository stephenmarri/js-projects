import React, { useState } from 'react'

const Distance = () => {
    const rate = 1.60934
    const [mile, setMile] = useState(1);
    const [kms, setKms] = useState(parseFloat(1 * rate).toFixed(2));



    const onChangeMiles = (e) => {
        setMile(e.target.value)
        setKms(parseFloat(rate * e.target.value).toFixed(2))
    }

    const onChangeKms = (e) => {
        setKms(e.target.value)
        setMile(parseFloat(e.target.value / rate).toFixed(2))
     }

    return (
        <>
            <br />
            <h6>DISTANCE</h6>
            <div className="dual_container fr" id="currency_container">
                <div className="single_card fc">
                    <span>Miles</span>
                    <span className='fr justify-between w-full gap-1'>

                        <input type="number" onChange={onChangeMiles} value={(mile)} />
                    </span>
                </div>
                <div className="single_card fc">
                    <span>KMs</span>
                    <span className='fr justify-between w-full gap-1'>
                        <input type="number" onChange={onChangeKms} value={kms} />
                    </span>
                </div>
            </div>
        </>
    )
}

export default Distance