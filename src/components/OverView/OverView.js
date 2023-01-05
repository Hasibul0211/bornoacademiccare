import React, { useEffect, useState } from 'react';
import './OverView.css';

const OverView = ({ dcTotal }) => {

    const [totalStudent, setTotalStudent] = useState({})

    useEffect(() => {
        fetch('https://bornoacademiccare.up.railway.app/student-count')
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
                        <p style={{ fontWeight: 'bold', fontSize: '25px', margin: '0', paddingLeft: '10px' }}></p>
                    </div>
                    <div>
                        <p style={{ textTransform: 'capitalize', fontWeight: '700' }}>payment due</p>
                        <p style={{ fontWeight: 'bold', fontSize: '25px', margin: '0', paddingLeft: '10px' }}></p>
                    </div>
                </div>
            </section>
            <section className='stuOverview'>
                <h3>Debit Credit Overviews</h3>
                <div className='stuOveDiv'>
                    <div>
                        <p style={{ textTransform: 'capitalize', fontWeight: '700' }}>Debit Total</p>
                        <p style={{ fontWeight: 'bold', fontSize: '25px', margin: '0', paddingLeft: '10px' }}></p>
                    </div>
                    <div>
                        <p style={{ textTransform: 'capitalize', fontWeight: '700' }}>Credit Total</p>
                        <p style={{ fontWeight: 'bold', fontSize: '25px', margin: '0', paddingLeft: '10px' }}></p>
                    </div>
                    <div>
                        <p style={{ textTransform: 'capitalize', fontWeight: '700' }}>Net Profits</p>
                        <p style={{ fontWeight: 'bold', fontSize: '25px', margin: '0', paddingLeft: '10px' }}>{dcTotal} Tk</p>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default OverView;