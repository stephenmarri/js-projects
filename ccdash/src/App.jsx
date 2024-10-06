import React, { useState, useEffect } from 'react';
import { format, set } from 'date-fns';
import Weights from './components/Weights';
import Distance from './components/Distance';
import Temperature from './components/Temperature';

function App() {

  const [exchangeRate, setExchangeRate] = useState(1);
  const [indianTime, setIndianTime] = useState();
  const [americanTime, setAmericanTime] = useState();
  const [indianAmount, setIndianAmount] = useState(1)
  const [americanAmount, setAmericanAmount] = useState(1)

  const updateRates = (changed) => {
    if (changed == "INR") {
      // since INR is changed we'll updated USD
      setAmericanAmount(indianAmount * exchangeRate)
    }
    if (changed == "USD") {
      setIndianAmount(americanAmount / exchangeRate)
    }
  }

  const updateINR = (e) => {
    let amount = e.target.value
    setIndianAmount(amount)
    setAmericanAmount(parseInt(amount / exchangeRate))
  }
  const updateUSD = (e) => {
    let amount = e.target.value
    setAmericanAmount(amount)
    setIndianAmount(parseInt(amount * exchangeRate))
  }

  useEffect(() => {
    // time
    const interval = setInterval(() => {
      setIndianTime(getTime("India"))
      setAmericanTime(getTime("America"))
    }, 1000);

    const fetchExchangeRate = async () => {
      const rate = await getExc();
      setExchangeRate(rate);
      setIndianAmount(parseFloat(americanAmount * rate).toFixed(2))
    };
    fetchExchangeRate();
  }, []);


  const getExc = async () => {
    let rate = "0.00"
    try {
      const response = await fetch('https://v6.exchangerate-api.com/v6/cf3d1208cf5670b708431280/pair/USD/INR');
      const data = await response.json()
      rate = data.conversion_rate
      console.log(rate)
    } catch (error) {
      console.log(error)
    }
    return rate
  }

  const getTime = (country) => {

    function getLocalTime(timeZone) {
      const now = new Date();
      const utcOffset = now.getTimezoneOffset() / 60;
      const localDate = new Date(now.getTime() + (utcOffset + timeZoneOffset[timeZone]) * 60 * 60 * 1000);
      let hours = String(localDate.getHours()).padStart(2, '0');
      const minutes = String(localDate.getMinutes()).padStart(2, '0');
      const seconds = String(localDate.getSeconds()).padStart(2, '0');

      const ampm = parseInt(hours) > 12 ? "PM" : "AM"
      hours = hours % 12 || 12; // Converts 0 to 12 for midnight
      return `${hours}:${minutes}:${seconds} ${ampm}`;
    }

    const timeZoneOffset = {
      'Asia/Kolkata': 5.5,
      'America/Chicago': -4,
    };

    const times = {
      India: getLocalTime('Asia/Kolkata'),
      America: getLocalTime('America/Chicago')
    }

    return times[country]

  }



  return (
    <div id='main_container'>
      <h1 className="text-6xl text-center pt-5 pb-5">Other Side</h1>
      <h6>TIME</h6>
      <div className="dual_container fr" id="time_container">
        <div className="single_card fc">
          <span>India</span>
          <span className='time_text'>{indianTime}</span>
        </div>
        <div className="single_card fc">
          <span>America - East</span>
          <span className='time_text'>{americanTime}</span>
        </div>
      </div>
      <br />
      <h6>EXCHANGE</h6>
      <div className="dual_container fr" id="currency_container">
        <div className="single_card fc">
          <span>Dollars</span>
          <span className='fr justify-between w-full gap-1'>
            <span>$</span>
            <input type="number" onChange={updateUSD} value={americanAmount} />
          </span>
        </div>
        <div className="single_card fc">
          <span>Rupees</span>
          <span className='fr justify-between w-full gap-1'>

            <span>&#8377;</span>
            <input type="number" onChange={updateINR} value={indianAmount} />
          </span>
        </div>
      </div>

    <Weights />
    <Distance />
    <Temperature />

    </div>
  )
}

export default App
