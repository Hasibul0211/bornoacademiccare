import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import './OverView.css';

const OverView = ({ dcTotal }) => {

    const [totalStudent, setTotalStudent] = useState({})

    useEffect(() => {
        fetch('https://bornoacademiccare.up.railway.app/student-count')
            .then(res => res.json())
            .then(data => setTotalStudent(data))
    }, [])


    const [notic, setNotic] = useState([]);
    useEffect(() => {
        fetch('https://bornoacademiccare.up.railway.app/notice').then(res => res.json()).then(data => setNotic(data))
    }, [])


    return (
        <div style={{ height: '100vh', backgroundColor: '#F0F2F5' }}>
            <section className='dashTop'>
                <h3>welcome to professional dashboard</h3>
                <p>all management tool- in one place</p>
            </section>

            <section className='extad'>
                <div>

                </div>
                <div className='extadD2'>
                    <p>upcoming Notice</p>
                    <marquee behavior="" direction="up" truespeed="50" height="80%" scrollamount="3">
                        {
                            notic.map(notice =>
                                <p style={{ marginBottom: '30px' }}>{notice.description} on {notice.date}</p>
                            )
                        }
                        {/* <p style={{ marginBottom: '30px' }}>upcoming exam is close to hand</p>
                        <p style={{ marginBottom: '30px' }}>make the routine immediately</p>
                        <p style={{ marginBottom: '30px' }}>make the routine immediately</p>
                        <p style={{ marginBottom: '30px' }}>make the routine immediately</p>
                        <p style={{ marginBottom: '30px' }}>make the routine immediately</p>
                        <p style={{ marginBottom: '30px' }}>make the routine immediately</p>
                        <p style={{ marginBottom: '30px' }}>make the routine immediately</p> */}
                    </marquee>
                </div>
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
                <h3>Monthly total class taken of any individual teacher</h3>
                <div className='stuOveDiv'>
                    <div>
                        <p style={{ textTransform: 'capitalize', fontWeight: '700', fontSize: '20px' }}>Raj Sir</p>
                        <p style={{ fontWeight: 'bold', fontSize: '22px', margin: '0', paddingLeft: '10px' }}>Total Taken: 00</p>
                    </div>
                    <div>
                        <p style={{ textTransform: 'capitalize', fontWeight: '700', fontSize: '20px' }}>Shanto Sir</p>
                        <p style={{ fontWeight: 'bold', fontSize: '22px', margin: '0', paddingLeft: '10px' }}>Total Taken: 00</p>
                    </div>
                    <div>
                        <p style={{ textTransform: 'capitalize', fontWeight: '700', fontSize: '20px' }}>Sohel Sir</p>
                        <p style={{ fontWeight: 'bold', fontSize: '22px', margin: '0', paddingLeft: '10px' }}>Total Taken: 00</p>
                    </div>
                    <div>
                        <p style={{ textTransform: 'capitalize', fontWeight: '700', fontSize: '20px' }}>Pranto Sir</p>
                        <p style={{ fontWeight: 'bold', fontSize: '22px', margin: '0', paddingLeft: '10px' }}>Total Taken: 00</p>
                    </div>
                    <div>
                        <p style={{ textTransform: 'capitalize', fontWeight: '700', fontSize: '20px' }}>Masum Sir</p>
                        <p style={{ fontWeight: 'bold', fontSize: '22px', margin: '0', paddingLeft: '10px' }}>Total Taken: 00</p>
                    </div>
                    <div>
                        <p style={{ textTransform: 'capitalize', fontWeight: '700', fontSize: '20px' }}></p>
                        <p style={{ fontWeight: 'bold', fontSize: '22px', margin: '0', paddingLeft: '10px' }}></p>
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




            <section>
                <p style={{
                    textAlign: 'center', fontSize: '25px', padding:
                        '10px', fontFamily: 'cursive', backgroundColor: "green"
                }}>another section coming soon</p>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default OverView;