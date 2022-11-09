import React from 'react';
import { useState } from 'react';
import './StudentDetails.css';
import loading from '../../photos/loading.gif'
import Footer from '../Shared/Footer/Footer';
const StudentDetails = () => {
    const [selectValue, setSelectValue] = useState('')
    const onChangeHandle = (e) => {
        const selectorValue = e.target.value;
        setSelectValue(selectorValue)
    }
    console.log("value has beeenn selected", selectValue);


    return (
        <div>

            <div className='shortSection'>

                <p>short details by:</p>


                <select name='select' onChange={(e) => onChangeHandle(e)}>
                    <option selected value="name">Name</option>
                    <option value="id">Id</option>
                    <option value="class">Class</option>
                    <option value="date">Date</option>
                    <option value="oldest">Oldest</option>
                    <option value="newest">Newest</option>
                </select>
            </div>
            <div style={{ width: '100%', height: '30px', backgroundColor: '#393E46' }}>

            </div>
            <div>
                <img src={loading} alt="loading im" style={{ marginLeft: '25%' }} />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default StudentDetails;