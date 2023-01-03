import React, { useEffect, useState } from 'react';
import './OverView.css';

const OverView = () => {

    const [totalStudent, setTotalStudent] = useState({})

    useEffect(() => {
        fetch('http://localhost:5000/student-count')
            .then(res => res.json())
            .then(data => setTotalStudent(data))
    }, [])






    return (
        <div style={{ height: '100vh', backgroundColor: '#F0F2F5' }}>
            <section className='dashTop'>
                <h3>welcome to professional dashboard</h3>
                <p>all management tool- in one place</p>
            </section>
            <section className='stuOverview'>
                <h3>student's overviews</h3>
                <div className='stuOveDiv'>
                    <div>
                        <p style={{ textTransform: 'capitalize', fontWeight: '700' }}>total student's</p>
                        <p style={{ fontWeight: 'bold', fontSize: '25px', margin: '0', paddingLeft: '10px' }}>{totalStudent?.count}</p>
                    </div>
                    <div>
                        <p style={{ textTransform: 'capitalize', fontWeight: '700' }}>payment completed</p>
                        <p style={{ fontWeight: 'bold', fontSize: '25px', margin: '0', paddingLeft: '10px' }}>10</p>
                    </div>
                    <div>
                        <p style={{ textTransform: 'capitalize', fontWeight: '700' }}>payment due</p>
                        <p style={{ fontWeight: 'bold', fontSize: '25px', margin: '0', paddingLeft: '10px' }}>11</p>
                    </div>
                </div>
            </section>
            <section className='stuOverview'>
                <h3>Debit Credit Overviews</h3>
                <div className='stuOveDiv'>
                    <div>
                        <p style={{ textTransform: 'capitalize', fontWeight: '700' }}>Debit Total</p>
                        <p style={{ fontWeight: 'bold', fontSize: '25px', margin: '0', paddingLeft: '10px' }}>21Tk</p>
                    </div>
                    <div>
                        <p style={{ textTransform: 'capitalize', fontWeight: '700' }}>Credit Total</p>
                        <p style={{ fontWeight: 'bold', fontSize: '25px', margin: '0', paddingLeft: '10px' }}>10Tk</p>
                    </div>
                    <div>
                        <p style={{ textTransform: 'capitalize', fontWeight: '700' }}>Net Profits</p>
                        <p style={{ fontWeight: 'bold', fontSize: '25px', margin: '0', paddingLeft: '10px' }}>11Tk</p>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default OverView;