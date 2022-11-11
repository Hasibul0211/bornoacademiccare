import React from 'react';
import './OverView.css';
import PieChart from '../Shared/PieChart/PieChart';
const OverView = () => {
    return (
        <div>
            <section style={{ width: '100%', display: 'flex' }}>
                {/* total student section here */}
                <div className='pieChart'>
                    <PieChart></PieChart>
                </div>
                <div className='TsCountD'>
                    <h3>Running Total Students</h3>
                    <h1>21</h1>
                </div>

            </section>
            <section style={{ width: '100%' }}>
                <div className='TsCountD'>
                    <h3>Current Payment Remain</h3>
                    <h1>21</h1>
                </div>
            </section>

        </div>
    );
};

export default OverView;