import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import './DebitCredit.css'
const DebitCredit = () => {
    const [dc, setDc] = useState(true)

    const useDebit = () => {
        setDc(true)
    }
    const useCredit = () => {
        setDc(false)
    }

    // debit credit field gain 
    const [dateF, setDateF] = useState('')
    const [specificationF, setspecificationF] = useState('')
    const [debiAmount, setDebiAmount] = useState()
    const [crediAmount, setCrediAmount] = useState()

    const dateField = useRef()
    const specificationField = useRef()
    const debitAmount = useRef()
    const creditAmount = useRef()

    const debitCreditChange = () => {
        setDateF(dateField.current.value)
        setspecificationF(specificationField.current.value)
        setDebiAmount(debitAmount.current?.value)
        setCrediAmount(creditAmount.current?.value)

        // console.log("debit value", debitAmount.current?.value);
        // console.log("credit value", creditAmount.current?.value);
    }


    const debitCliked = (e) => {
        alert('debit button clicked')
        const debitDetails = {
            date: dateF,
            specification: specificationF,
            amounts: debiAmount,
            status: 'debit'
        }
        e.preventDefault();

        fetch('https://bornoacademiccare.up.railway.app/debit-credit', {
            method: 'POST',
            headers: {
                'content-type': 'Application/json'
            },
            body: JSON.stringify(debitDetails)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Debit amount added successfully')
                    refreshPage();
                }
            })
        console.log(debitDetails);
    }





    const creditCliked = (e) => {
        alert('credit button clicked')

        const creditDetails = {
            date: dateF,
            specification: specificationF,
            amounts: crediAmount,
            status: 'credit'
        }
        fetch('https://bornoacademiccare.up.railway.app/debit-credit', {
            method: 'POST',
            headers: {
                'content-type': 'Application/json'
            },
            body: JSON.stringify(creditDetails)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Credit amount added successfully')
                    refreshPage();
                }
            })

        console.log(creditDetails);
        e.preventDefault();

    }

    function refreshPage() {
        window.location.reload(false);
    }

    // if (data.data.deletedCount > 0) {
    //     toast(data.message);
    //     refreshPage()
    // } else {
    //     toast(data.message);
    // }
    const [dcDatas, setDcDatas] = useState([])

    useEffect(() => {
        fetch('https://bornoacademiccare.up.railway.app/debit-credit')
            .then(res => res.json())
            .then(data => setDcDatas(data))
    }, [])

    // dcDatas.map(dcData => console.log(dcData))


    const handleDcDeleteBtn = (id) => {
        console.log('data id is', id);
        fetch(`https://bornoacademiccare.up.railway.app/debit-credit/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully')
                    const remainDc = dcDatas.filter(dcDa => dcDa._id !== id)
                    setDcDatas(remainDc)
                    // console.log(remainDc);

                }
            })
    }


    const [dcTotal, setdcTotal] = useState()

    useEffect(() => {
        dcDatas.map(dcD => setdcTotal(dcD?.totalAmount))
        console.log('get dc total', dcTotal);
    }, [dcDatas])


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

                    {
                        dc ? <form style={{ width: '70%', margin: '1px auto' }}>
                            <div style={{ display: 'flex' }}>
                                {/* date */}
                                <input type="text" placeholder='Enter date' style={{ height: '40px', margin: '5px', border: '1px solid blue', borderRadius: '5px' }} ref={dateField} onChange={debitCreditChange} />

                                {/* specification */}
                                <input type="text" placeholder='Enter specification' style={{ height: '40px', margin: '5px', border: '1px solid blue', borderRadius: '5px' }} ref={specificationField} onChange={debitCreditChange} />


                                < input type="text" placeholder='Enter Debit amount' style={{ height: '40px', margin: '5px', border: '1px solid blue', borderRadius: '5px' }} ref={debitAmount} onChange={debitCreditChange} />



                                {/* button  */}

                                <input type="button" value="Submit Debit" style={{ height: '43px', margin: '5px', border: '1px solid blue', borderRadius: '5px', width: '110px', backgroundColor: 'green', color: 'white', fontWeight: '700', cursor: 'pointer' }} onClick={debitCliked} />



                            </div>
                        </form>
                            :
                            <form style={{ width: '70%', margin: '1px auto' }}>
                                <div style={{ display: 'flex' }}>
                                    {/* date */}
                                    <input type="text" placeholder='Enter date' style={{ height: '40px', margin: '5px', border: '1px solid blue', borderRadius: '5px' }} ref={dateField} onChange={debitCreditChange} />

                                    {/* specification */}
                                    <input type="text" placeholder='Enter specification' style={{ height: '40px', margin: '5px', border: '1px solid blue', borderRadius: '5px' }} ref={specificationField} onChange={debitCreditChange} />


                                    < input type="text" placeholder='Enter Credit amount' style={{ height: '40px', margin: '5px', border: '1px solid blue', borderRadius: '5px' }} ref={creditAmount} onChange={debitCreditChange} />

                                    {/* button  */}
                                    <input type="button" value="Submit Credit" style={{ height: '43px', margin: '5px', border: '1px solid blue', borderRadius: '5px', width: '113px', backgroundColor: 'green', color: 'white', fontWeight: '700', cursor: 'pointer' }} onClick={creditCliked} />



                                </div>
                            </form>
                    }
                    {/* debit form */}

                    {/* credit form */}

                </div>
                <div className='snackBar'>
                    {
                        dc ? <p>Debit Activate</p> : <p>Credit Activate</p>
                    }
                </div>
                <div className='netamountBar'>
                    <p>Net Balance: {dcTotal} </p>

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
                    <div><p>Remove</p></div>
                </div>
                <hr />
                <hr />


                {
                    dcDatas.map(dcData => <div className='amountData'>
                        <div><p>{dcData.date}</p></div>
                        <div><p>{dcData.specification}</p></div>
                        <div><p>{dcData.amounts}</p></div>
                        <div><p>{dcData.status === "debit" ? dcData.amounts : "00"}</p></div>
                        <div><p>{dcData.status === "credit" ? dcData.amounts : "00"}</p></div>

                        <div><p>{dcData.totalAmount}</p></div>
                        <div onClick={() => handleDcDeleteBtn(dcData._id)}><p style={{ backgroundColor: 'black', borderRadius: '22px', margin: '8px 4px 0 4px', padding: '4px', cursor: 'pointer' }}>Delete</p></div>
                    </div>)
                }

            </section>
        </div>
    );
};

export default DebitCredit;