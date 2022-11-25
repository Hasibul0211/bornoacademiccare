import React, { useState } from 'react';
import './DebitCredit.css'
const DebitCredit = () => {
    const [dc, setDc] = useState(true)

    const useDebit = () => {
        setDc(true)
    }
    const useCredit = () => {
        setDc(false)
    }


    return (
        <div>
            <section>
                <div className='topButton'>
                    <div onClick={useDebit}>
                        <p>Debit</p>
                    </div>
                    <div onClick={useCredit}>
                        <p>Credit</p>
                    </div>
                </div>
                <div>
                    <form style={{ width: '70%', margin: '1px auto' }} onSubmit={() => alert("sumit button clicked")}>
                        <div style={{ display: 'flex' }}>

                            {/* date */}
                            <input type="text" placeholder='Enter date' style={{ height: '40px', margin: '5px', border: '1px solid blue', borderRadius: '5px' }} />

                            {/* specification */}
                            <input type="text" placeholder='Enter specification' style={{ height: '40px', margin: '5px', border: '1px solid blue', borderRadius: '5px' }} />

                            {
                                dc ?
                                    < input type="text" placeholder='Enter Debit amount' style={{ height: '40px', margin: '5px', border: '1px solid blue', borderRadius: '5px' }} /> :
                                    <input type="text" placeholder='Enter Credit amount' style={{ height: '40px', margin: '5px', border: '1px solid blue', borderRadius: '5px' }} />

                            }






                            {/* button  */}
                            <input type="button" value="Submit" placeholder='Enter Debit amount' style={{ height: '43px', margin: '5px', border: '1px solid blue', borderRadius: '5px', width: '80px', backgroundColor: 'green', color: 'white', fontWeight: '700', cursor: 'pointer' }} />
                        </div>
                    </form>
                </div>
                <div className='snackBar'>
                    {
                        dc ? <p>Debit Activate</p> : <p>Credit Activate</p>
                    }
                </div>
                <div className='netamountBar'>
                    <p>Net Balance: 50000</p>

                </div>
            </section>

            {/* data inserted filed */}
            <section>
                <div className='amountHeader'>
                    <div><p>Date</p></div>
                    <div><p>Specification</p></div>
                    <div><p>Amount</p></div>
                    <div><p>Debit</p></div>
                    <div><p>Credit</p></div>
                    <div><p>Net Balance</p></div>
                </div>
                <hr />
                <hr />
                <div className='amountData'>
                    <div><p>22Nov,2022</p></div>
                    <div><p>website build cost</p></div>
                    <div><p>50000</p></div>
                    <div><p>00</p></div>
                    <div><p>50000</p></div>
                    <div><p>50000</p></div>
                </div>
                <div className='amountData'>
                    <div><p>22Nov,2022</p></div>
                    <div><p>website build cost</p></div>
                    <div><p>50000</p></div>
                    <div><p>00</p></div>
                    <div><p>50000</p></div>
                    <div><p>50000</p></div>
                </div>
                <div className='amountData'>
                    <div><p>22Nov,2022</p></div>
                    <div><p>website build cost</p></div>
                    <div><p>50000</p></div>
                    <div><p>00</p></div>
                    <div><p>50000</p></div>
                    <div><p>50000</p></div>
                </div>
                <div className='amountData'>
                    <div><p>22Nov,2022</p></div>
                    <div><p>website build cost</p></div>
                    <div><p>50000</p></div>
                    <div><p>00</p></div>
                    <div><p>50000</p></div>
                    <div><p>50000</p></div>
                </div>
                <div className='amountData'>
                    <div><p>22Nov,2022</p></div>
                    <div><p>website build cost</p></div>
                    <div><p>50000</p></div>
                    <div><p>00</p></div>
                    <div><p>50000</p></div>
                    <div><p>50000</p></div>
                </div>
                <div className='amountData'>
                    <div><p>22Nov,2022</p></div>
                    <div><p>website build cost</p></div>
                    <div><p>50000</p></div>
                    <div><p>00</p></div>
                    <div><p>50000</p></div>
                    <div><p>50000</p></div>
                </div>
                <div className='amountData'>
                    <div><p>22Nov,2022</p></div>
                    <div><p>website build cost</p></div>
                    <div><p>50000</p></div>
                    <div><p>00</p></div>
                    <div><p>50000</p></div>
                    <div><p>50000</p></div>
                </div>
                <div className='amountData'>
                    <div><p>22Nov,2022</p></div>
                    <div><p>website build cost</p></div>
                    <div><p>50000</p></div>
                    <div><p>00</p></div>
                    <div><p>50000</p></div>
                    <div><p>50000</p></div>
                </div>
                <div className='amountData'>
                    <div><p>22Nov,2022</p></div>
                    <div><p>website build cost</p></div>
                    <div><p>50000</p></div>
                    <div><p>00</p></div>
                    <div><p>50000</p></div>
                    <div><p>50000</p></div>
                </div>
                <div className='amountData'>
                    <div><p>22Nov,2022</p></div>
                    <div><p>website build cost</p></div>
                    <div><p>50000</p></div>
                    <div><p>00</p></div>
                    <div><p>50000</p></div>
                    <div><p>50000</p></div>
                </div>
                <div className='amountData'>
                    <div><p>22Nov,2022</p></div>
                    <div><p>website build cost</p></div>
                    <div><p>50000</p></div>
                    <div><p>00</p></div>
                    <div><p>50000</p></div>
                    <div><p>50000</p></div>
                </div>
                <div className='amountData'>
                    <div><p>22Nov,2022</p></div>
                    <div><p>website build cost</p></div>
                    <div><p>50000</p></div>
                    <div><p>00</p></div>
                    <div><p>50000</p></div>
                    <div><p>50000</p></div>
                </div>
                <div className='amountData'>
                    <div><p>22Nov,2022</p></div>
                    <div><p>website build cost</p></div>
                    <div><p>50000</p></div>
                    <div><p>00</p></div>
                    <div><p>50000</p></div>
                    <div><p>50000</p></div>
                </div>
            </section>
        </div>
    );
};

export default DebitCredit;