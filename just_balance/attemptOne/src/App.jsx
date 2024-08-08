import { useState, useEffect } from "react";

function App() {

  const [acct, setAcct] = useState('chase');
  const [transferType, setTransferType] = useState("debit");

  const [bal_chase, setBal_chase] = useState(18.36);
  const [bal_forex, setBal_forex] = useState(51.02);
  const [bal_cash, setBal_cash] = useState(1023.35);

  const [bal_total, setBal_total] = useState(bal_chase + bal_forex + bal_cash);
  const [tranAmount, setTranAmount] = useState('');


  const record = () => {
    if(tranAmount && tranAmount > 0){
      const symbol = transferType == 'debit' ? '-' : '+';
      if(acct == 'chase') setBal_chase(eval(bal_chase + symbol + tranAmount))
      if(acct == 'forex') setBal_forex(eval(bal_forex + symbol + tranAmount))
      if(acct == 'cash') setBal_cash(eval(bal_cash + symbol + tranAmount))
        setTranAmount('')
      }
  }
  
  useEffect(() => {
    setBal_total(bal_chase + bal_forex + bal_cash)
    
  }, [bal_chase ,bal_forex ,bal_cash]);

  return (
    <>
      <h1 className="text-4xl text-center text-gray-700 pt-5 font-bold">
        Just Balance
      </h1>

      <section>
        <div id="balance" className="fr">
          <span className="text-blue-950">{bal_total.toFixed(2)}</span>
        </div>
        <div id="balance_labels" className="fr">
          <span className="">Chase</span>
          <span className="">Forex</span>
          <span className="">Cash</span>
        </div>
        <div id="balance_three" className="fr">
          <span className="text-center py-1 px-1 font-bold text-blue-800">{bal_chase.toFixed(2)}</span>
          <span className="text-center py-1 px-1 font-bold text-blue-800">{bal_forex.toFixed(2)}</span>
          <span className="text-center py-1 px-1 font-bold text-blue-800">{bal_cash.toFixed(2)}</span>
        </div>
      </section>

      <section>
        <div id="controls">
          <input onChange={e=>setTranAmount(e.target.value)} className="pl-3" type="number" name="input_amount" id="input_amount" placeholder="Enter Amount..." value={tranAmount}/>
          <div id="control_type" className="control_buttons fr">
            <button style={{ width: '47%' }} className=
              {`py-1 px-2 ${transferType == 'credit' ? "selected" : ""}`}
              onClick={() => setTransferType('credit')}
            >+</button>
            <button style={{ width: '47%' }} className=
              {`py-1 px-2 ${transferType == 'debit' ? "selected" : ""}`}
              onClick={() => setTransferType('debit')}
            >-</button>
          </div>
          <div id="control_account" className="control_buttons fr">
            <button
              className={`w-3/11 py-2 px-5 ${acct == "chase" ? "selected" : ""}`}
              onClick={() => setAcct('chase')}
            >Chase</button>
            <button
              className={`w-3/11 py-2 px-5 ${acct == "forex" ? "selected" : ""}`}
              onClick={() => setAcct('forex')}
            >Forex</button>
            <button
              className={`w-3/11 py-2 px-5 ${acct == "cash" ? "selected" : ""}`}
              onClick={() => setAcct('cash')}
            >Cash</button>
          </div>
          <button onClick={record} className="font-bold uppercase">Record</button>
        </div>
      </section>
    </>
  )
}
export default App
