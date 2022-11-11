import React from 'react';
import './AddStudent.css'
import loading from '../../photos/loading.gif'
const AddStudent = () => {


    const submitStudentInfo = (e) => {
        alert('clicked add button to submit info')
        e.preventDefault()
    }







    return (
        <div className='container'>
            <section>
                <p style={{ textAlign: 'center', fontWeight: '600', fontFamily: 'new Times roman', fontSize: '20px', backgroundColor: 'orange', marginLeft: '20%', marginRight: '20%', padding: '10px', borderRadius: '10px' }}>Add Student Information</p>
            </section>
            <section>
                <div>
                    <h1 style={{ textAlign: 'center', color: 'red', fontSize: '30px', margin: '1px' }}>Borno Academic Care</h1>
                    <address style={{ textAlign: 'center', color: 'red', fontSize: '15px', margin: '1px', padding: '1px' }}>East Arichpur,Shaheed Smrity School road,Jamaibajar</address>
                    <hr />
                </div>
                <form onSubmit={submitStudentInfo}>
                    <div className='sameLine'>
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                            <p style={{ fontWeight: '600', backgroundColor: 'orange', border: '2px solid orange', padding: '4px', borderRadius: '5px 0 5px 0' }}>Student Id:</p><input type="number" className='idInput' placeholder='Please Enter Id' style={{ marginLeft: '-4px' }} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                            <p style={{ marginLeft: '10px', fontWeight: '600', backgroundColor: 'orange', border: '2px solid orange', padding: '4px', borderRadius: '5px 0 5px 0' }}>Date of Admission:</p><input type="date" className='idInput' style={{ marginLeft: '-4px', height: '32px' }} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }} className='sameLine'>
                        <p style={{ fontWeight: '600', backgroundColor: 'orange', border: '2px solid orange', padding: '4px', borderRadius: '5px 0 5px 0' }}>Student Name:</p><input type="text" className='idInput' style={{ width: '81%', marginLeft: '-4px' }} placeholder='Please Enter Student Name' />
                    </div>

                    {/* father info */}

                    <div className='sameLine'>
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', width: '700px' }}>
                            <p style={{ fontWeight: '600', backgroundColor: 'orange', border: '2px solid orange', padding: '4px', borderRadius: '5px 0 5px 0' }}>Father's Name:</p><input type="text" className='idInput' style={{ width: '80%', marginLeft: '-4px' }} placeholder='Please Enter Father Name' />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                            <p style={{ fontWeight: '600', backgroundColor: 'orange', border: '2px solid orange', padding: '4px', borderRadius: '5px 0 5px 0' }}>Mobile:</p><input type="number" className='idInput' placeholder='Please Enter Mobile No' style={{ marginLeft: '-4px' }} />
                        </div>

                    </div>

                    {/* mother info here */}

                    <div className='sameLine'>
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', width: '700px' }}>
                            <p style={{ fontWeight: '600', backgroundColor: 'orange', border: '2px solid orange', padding: '4px', borderRadius: '5px 0 5px 0' }}>Mother's Name:</p><input type="text" className='idInput' style={{ width: '79%', marginLeft: '-4px' }} placeholder='Please Enter Mother Name' />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                            <p style={{ fontWeight: '600', backgroundColor: 'orange', border: '2px solid orange', padding: '4px', borderRadius: '5px 0 5px 0' }}>Mobile:</p><input type="number" className='idInput' placeholder='Please Enter Mobile No' style={{ marginLeft: '-4px' }} />
                        </div>

                    </div>
                    <div className='sameLine'>
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', width: '330px' }}>
                            <p style={{ fontWeight: '600', paddingRight: '10px', backgroundColor: 'orange', border: '2px solid orange', padding: '4px', borderRadius: '5px 0 5px 0' }}>Class: </p><input type="number" className='idInput' placeholder='Please Enter Class' style={{ width: '60%', marginLeft: '-4px' }} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', width: '400px' }}>
                            <p style={{ fontWeight: '600', paddingRight: '10px', backgroundColor: 'orange', border: '2px solid orange', padding: '4px', borderRadius: '5px 0 5px 0' }}>Age: </p><input type="number" className='idInput' placeholder='Please Enter Age' style={{ width: '60%', marginLeft: '-4px' }} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                            <p style={{ marginLeft: '10px', fontWeight: '600', backgroundColor: 'orange', border: '2px solid orange', padding: '4px', borderRadius: '5px 0 5px 0' }}>Date of Birth</p><input type="date" className='idInput' style={{ marginLeft: '-4px', height: '32px' }} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }} className='sameLine'>
                        <p style={{ fontWeight: '600', backgroundColor: 'orange', border: '2px solid orange', padding: '4px', borderRadius: '5px 0 5px 0' }}>School Name:</p><input type="text" className='idInput' style={{ width: '80%', marginLeft: '-4px' }} placeholder='Please Enter School Name' />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', margin: '1px' }} className='sameLine'>
                        <p style={{ fontWeight: '600', backgroundColor: 'orange', border: '2px solid orange', padding: '4px', borderRadius: '5px 0 5px 0', color: 'black' }}>Address:</p><input type="text" className='idInput' style={{ width: '84.3%', marginLeft: '-4px' }} placeholder='Please Enter Address' />
                    </div>

                    {/* local gurdian info */}
                    <div className='sameLine'>
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', width: '700px' }}>
                            <p style={{ fontWeight: '600', backgroundColor: 'orange', border: '2px solid orange', padding: '4px', borderRadius: '5px 0 5px 0' }}>Gurdian Name:</p><input type="text" className='idInput' style={{ width: '79%', marginLeft: '-4px' }} placeholder='Please Enter Gurdian Name' />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                            <p style={{ fontWeight: '600', backgroundColor: 'orange', border: '2px solid orange', padding: '4px', borderRadius: '5px 0 5px 0' }}>Mobile:</p><input type="number" className='idInput' placeholder='Please Enter Mobile No' style={{ marginLeft: '-4px' }} />
                        </div>

                    </div>

                    <hr />

                    {/* submit button section here */}
                    <div className='submitBtn'>
                        <button>submit</button>
                    </div>
                    <hr />
                </form>
            </section>
            {/* <img src={loading} alt="loading im" style={{ marginLeft: '25%' }} /> */}
        </div>
    );
};

export default AddStudent;