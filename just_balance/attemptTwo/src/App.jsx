import { parse } from "postcss";
import { useEffect, useState } from "react";

function App() {

  const [totalBalance, setTotalBalance] = useState(0);
  const [inputAmount, setInputAmount] = useState(0);
  const [inputAccount, setInputAccount] = useState('cash');
  
  
  const onInputAmountChange = (e) => setInputAmount(e.target.value)

  const userId = "66c7a517da573dbcaf6699d5";
  const getAllTransactions = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/transactions`)
    console.log(response)
    const reponseBody = await response.json()
    console.log(reponseBody)   
    
    setTotalBalance(calculateBalance(reponseBody).toFixed(2))
  }

  useEffect(()=>{
    getAllTransactions()
  },[])

  const addTransaction = async () => {
    const body = JSON.stringify({
      createdBy: userId,
      amount: parseInt(inputAmount).toFixed(2),
      account: inputAccount.toUpperCase(),
      isCredit: true
    })
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/transactions`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body
      }
    )

    const responseBody = await response.json()
    console.log(responseBody)
    
    await getAllTransactions()
  }

  const calculateBalance = (data) => {
    data = Object.entries(data).reduce((acc,[key,value])=>{
      acc.push(value)
      return acc
    }, [])
    let total = data.map(x => {
      return x["amount"] * (x["isCredit"] ? 1 : -1)
    })
    total = total.reduce((a,b)=> a + b, 0)
    return total
  }

  return (
    <div id="app_container" className="fc">
      <div id="header_container">
        <p>JUST BALANCE</p>
      </div>

      <div id="balance_container" className="fc">
        <div id="main_balance">
          <span id="balance_amount">
            {totalBalance}
          </span>
        </div>
        <div id="account_balance" className="fr">
          <div id="acct_one"><span>cash</span><span>123.45</span></div>
          <div id="acct_two"><span>chase</span><span>123.45</span></div>
          <div id="acct_three"><span>forex</span><span>123.45</span></div>
        </div>

      </div>

      <div id="add_container" className="fc">
        <input step="0.01" onChange={onInputAmountChange} type="number" name="add_amount" id="add_amount" value={inputAmount}/>
        <div id="transaction_type" className="fr">
          <button>Add</button>
          <button className="selected">Subtract</button>
        </div>
        <div id="account_type" className="fr">
          <button className="selected">CHASE</button>
          <button>FOREX</button>
          <button>CASH</button>
        </div>
        <button onClick={addTransaction} className="selected" id="register">REGISTER</button>
      </div>

      <div id="controls_container" className="fr">
        <button>SETTINGS</button>
        <button>TRANSACTIONS</button>
      </div>
    </div>
  )

}

export default App;
