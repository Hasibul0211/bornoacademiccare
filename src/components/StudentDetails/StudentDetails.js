import React from 'react';
import { useState } from 'react';
import './StudentDetails.css';
const StudentDetails = () => {
    const [selectValue, setSelectValue] = useState('')
    const onChangeHandle = (e) => {
        const selectorValue = e.target.value;
        setSelectValue(selectorValue)
    }
    console.log("value has beeenn selected", selectValue);


    return (
        <div className='container'>

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
            <div style={{ width: '100%', height: '10px', backgroundColor: '#393E46' }}>

            </div>

            <section className='infoHeader'>
                <div style={{ width: '12%' }}><p>Id no</p> </div>
                <div style={{ width: '33%' }}><p>Name</p> </div>
                <div style={{ width: '10%' }}><p>Class</p> </div>
                <div style={{ width: '12%' }}><p>View Details</p> </div>
                <div style={{ width: '12%' }}><p>Status</p> </div>
                <div style={{ width: '10%' }}><p>Edit</p> </div>
                <div style={{ width: '10%' }}><p>Remove</p> </div>
            </section>
            {/* <div>
                <img src={loading} alt="loading im" style={{ marginLeft: '25%' }} />
            </div> */}
        </div>
    );
};

export default StudentDetails;