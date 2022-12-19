import React from 'react';
import './OverView.css';
import PieChart from '../Shared/PieChart/PieChart';
const OverView = () => {
    return (
        <div style={{ height: '100vh' }}>
            {/* first cont section here */}
            <section className='firstCont'>
                {/* total student section here */}
                <div className='TsCountT'>
                    <h3>Running Total Students</h3>
                </div>
                <div className='TsCountD'>
                    <h1>21</h1>
                </div>

            </section>
            <section className='firstCont'>
                {/* total student section here */}
                <div className='TsCountT'>
                    <h3>Payment Dues</h3>
                </div>
                <div className='TsCountD'>
                    <h1>00</h1>
                </div>

            </section>

        </div>
    );
};

export default OverView;