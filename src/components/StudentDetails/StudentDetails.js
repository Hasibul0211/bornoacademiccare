import React from 'react';
import { useState } from 'react';
import './StudentDetails.css'
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
        </div>
    );
};

export default StudentDetails;