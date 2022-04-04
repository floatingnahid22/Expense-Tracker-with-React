import React, {useState} from 'react'

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    return (
        <>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlfor="text">Text</label>
                    <input type="text" value={text} onchange={(e) => setText(e.target.value)} placeholder="Enter text..."/>
                </div>
                <div className="form-control">
                    <label htmlfor="amount">Amount <br />
                    (negative - expense, positive - income)</label>
                    <input type="number" value={amount} onchange={(e) => setAmount(e.target.value)} placeholder="Enter amount..."/>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    )
}
