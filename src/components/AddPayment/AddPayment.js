import React from 'react';
import './AddPayment.css'
const AddPayment = () => {

    const handlePaymentBtn = (e) => {
        alert("payment cannot submit right now")
        e.preventDefault()
    }



    return (
        <div>
            <section className='payTitle'>
                <p >Add Student Payment</p>
            </section>
            <section className='paymentForm'>
                <form onSubmit={handlePaymentBtn} >
                    {/* student id section */}
                    {/* <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                        <p style={{ fontWeight: '600', backgroundColor: 'orange', border: '2px solid orange', padding: '4px', borderRadius: '5px 0 5px 0', width: '100px' }}>Student Id:</p><input type="number" className='idInputpay' placeholder='Please Enter Id' style={{ marginLeft: '-4px' }} />
                    </div> */}
                    <div className='sameLinePay'>
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                            <p style={{ fontWeight: '600', backgroundColor: 'orange', border: '2px solid orange', padding: '4px', borderRadius: '5px 0 5px 0' }}>Student Id:</p><input type="number" className='idInput' placeholder='Please Enter Id' style={{ marginLeft: '-4px' }} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                            <p style={{ marginLeft: '10px', fontWeight: '600', backgroundColor: 'orange', border: '2px solid orange', padding: '4px', borderRadius: '5px 0 5px 0' }}>Date of Payment:</p><input type="date" className='idInput' style={{ marginLeft: '-4px', height: '32px' }} />
                        </div>
                    </div>

                    {/* student name section */}
                    <div className='sameLinePay'>
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', width: '70%' }}>
                            <p style={{ fontWeight: '600', backgroundColor: 'orange', border: '2px solid orange', padding: '4px', borderRadius: '5px 0 5px 0', width: '100px' }}>Name:</p><input type="text" className='idInput' placeholder='Please Enter Name' style={{ marginLeft: '-4px', width: '100%' }} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', width: '30%' }}>
                            <p style={{ marginLeft: '10px', fontWeight: '600', backgroundColor: 'orange', border: '2px solid orange', padding: '5px', borderRadius: '5px 0 5px 0', width: '180px' }}>Month's Name:</p><input type="text" placeholder='Enter Month' className='idInput' style={{ marginLeft: '-4px', height: '32px' }} />
                        </div>
                    </div>

                    {/* class and amount section */}
                    <div className='sameLinePay'>
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                            <p style={{ fontWeight: '600', backgroundColor: 'orange', border: '2px solid orange', padding: '4px', borderRadius: '5px 0 5px 0', width: '100px' }}>Class:</p><input type="text" className='idInput' placeholder='Please Enter Class' style={{ marginLeft: '-4px' }} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                            <p style={{ marginLeft: '10px', fontWeight: '600', backgroundColor: 'orange', border: '2px solid orange', padding: '5px', borderRadius: '5px 0 5px 0', width: '100px' }}>Amount:</p><input type="number" placeholder='Enter Amount' className='idInput' style={{ marginLeft: '-4px', height: '32px' }} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                        <p style={{ fontWeight: '600', backgroundColor: 'orange', border: '2px solid orange', padding: '4px', borderRadius: '5px 0 5px 0', width: '280px' }}>Name of Reference Teacher:</p><input type="text" className='namerefInputpay' placeholder='Please Enter Reference Teacher Name' style={{ marginLeft: '-4px' }} />
                    </div>
                    <div className='paymentbtn'>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </section>

        </div>
    );
};

export default AddPayment;