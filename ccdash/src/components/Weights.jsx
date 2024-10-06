import React, { useState } from 'react'

const Weights = () => {
    const rate = 0.453592
    const [pounds, setPounds] = useState(1);
    const [kgs, setKgs] = useState(parseFloat(1 * rate).toFixed(2));



    const onChangePounds = (e) => {
        setPounds(e.target.value)
        setKgs(parseFloat(rate * e.target.value).toFixed(2))
    }

    const onChangeKgs = (e) => {
        setKgs(e.target.value)
        setPounds(parseFloat(e.target.value / rate).toFixed(2))
     }

    return (
        <>
            <br />
            <h6>WEIGHTS</h6>
            <div className="dual_container fr" id="currency_container">
                <div className="single_card fc">
                    <span>Pounds</span>
                    <span className='fr justify-between w-full gap-1'>

                        <input type="number" onChange={onChangePounds} value={(pounds)} />
                    </span>
                </div>
                <div className="single_card fc">
                    <span>KGs</span>
                    <span className='fr justify-between w-full gap-1'>
                        <input type="number" onChange={onChangeKgs} value={kgs} />
                    </span>
                </div>
            </div>
        </>
    )
}

export default Weights