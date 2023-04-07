import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import './AddStudent.css'
const AddStudent = () => {
    const [stuName, setStuName] = useState('')
    const [stuId, setStuId] = useState('')
    const [stuFather, setStuFather] = useState('')
    const [stuFatherMob, setStuFatherMob] = useState('')
    const [stuMother, setStuMother] = useState('')
    const [stuMotherMob, setStuMotherMob] = useState('')
    const [stuClass, setStuClass] = useState('')
    const [stuAge, setStuAge] = useState('')
    const [stuSchool, setStuSchool] = useState('')
    const [stuAddress, setStuAddress] = useState('')
    const [stuGurdian, setStuGurdian] = useState('')
    const [stuGurdianMob, setStuGurdianMob] = useState('')
    const [admissionDate, setAdmissionDate] = useState('')
    const [birthDate, setBirthDate] = useState('')

    const [tuitionFees, setTuitionFees] = useState('')


    // student info collectl 
    const name = useRef()
    const id = useRef()
    const fatherName = useRef()
    const fatherMobile = useRef()
    const motherName = useRef()
    const motherMobile = useRef()
    const classes = useRef()
    const age = useRef()
    const school = useRef()
    const address = useRef()
    const gurdian = useRef()
    const gurdianMobile = useRef()
    const dateValue = useRef()
    const birthValue = useRef()
    const tuitionFee = useRef()

    const handleOnChangeStudent = () => {
        setStuName(name.current.value);
        setStuId(id.current.value);
        setStuFather(fatherName.current.value);
        setStuFatherMob(fatherMobile.current.value);
        setStuMother(motherName.current.value);
        setStuMotherMob(motherMobile.current.value);
        setStuClass(classes.current.value);
        setStuAge(age.current.value);
        setStuSchool(school.current.value);
        setStuAddress(address.current.value);
        setStuGurdian(gurdian.current.value);
        setStuGurdianMob(gurdianMobile.current.value);
        setAdmissionDate(dateValue.current.value);
        setBirthDate(birthValue.current.value);
        setTuitionFees(tuitionFee.current.value);


    }


    const submitStudentInfo = (e) => {
        alert('clicked add button to submit info')


        const studentDetails = {
            studentId: stuId,
            name: stuName,
            fatherName: stuFather,
            fatherMobile: stuFatherMob,
            motherName: stuMother,
            motherMobile: stuMotherMob,
            class: stuClass,
            age: stuAge,
            school: stuSchool,
            address: stuAddress,
            gurdian: stuGurdian,
            gurdianMobile: stuGurdianMob,
            admissionDate: admissionDate,
            birthDate: birthDate,
            tuitionFees: tuitionFees

        }

        fetch('https://bornoacademiccare.up.railway.app/add-student', {
            method: 'POST',
            headers: {
                'content-type': 'Application/json'
            },
            body: JSON.stringify(studentDetails)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('student info added successfully')
                }
            })

        console.log(studentDetails);
        e.preventDefault()
    }







    return (
        <div className='container'>
            {/* <section>
                <p style={{ textAlign: 'center', fontWeight: '600', fontFamily: 'new Times roman', fontSize: '20px', backgroundColor: '#153462', marginLeft: '20%', marginRight: '20%', padding: '10px', borderRadius: '10px', color: 'white' }}>Add Student Information</p>
            </section> */}
            <section>
                <div>
                    <h1 style={{ textAlign: 'center', color: '#153462', fontSize: '25px', margin: '1px', fontFamily: "cursive" }}>Borno Academic Care</h1>
                    <address style={{ textAlign: 'center', color: '#153462', fontSize: '12px', margin: '1px', padding: '1px', fontWeight: '800' }}>East Arichpur,Shaheed Smrity School road,Jamaibajar</address>
                    <hr />
                </div>
                <form onSubmit={submitStudentInfo}>
                    <div className='sameLine'>
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                            <p style={{ fontWeight: '500', backgroundColor: '#153462', border: '2px solid #153462', padding: '2px', borderRadius: '5px 0 5px 0', color: 'white', fontSize: '15px' }}>Student Id:</p>
                            <input type="number" className='idInput' placeholder='Please Enter Id' style={{ marginLeft: '-4px' }} ref={id} onChange={handleOnChangeStudent} required />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                            <p style={{ fontWeight: '600', backgroundColor: '#153462', border: '2px solid #153462', padding: '2px', borderRadius: '5px 0 5px 0', color: 'white', fontSize: '15px' }}>Tution Fee:</p>
                            <input type="number" className='idInput' placeholder='Please Enter amount' style={{ marginLeft: '-4px' }} ref={tuitionFee} onChange={handleOnChangeStudent} required />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                            <p style={{ marginLeft: '10px', fontWeight: '600', backgroundColor: '#153462', border: '2px solid #153462', padding: '2px', borderRadius: '5px 0 5px 0', color: 'white', fontSize: '15px' }}>Date of Admission:</p>
                            <input type="date" className='idInput' style={{ marginLeft: '-4px', height: '24px' }} ref={dateValue} onChange={handleOnChangeStudent} required />
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }} className='sameLine'>
                        <p style={{ fontWeight: '600', backgroundColor: '#153462', border: '2px solid #153462', padding: '2px', borderRadius: '5px 0 5px 0', color: 'white', fontSize: '15px' }}>Student Name:</p>
                        <input type="text" className='idInput' style={{ width: '81%', marginLeft: '-4px' }} placeholder='Please Enter Student Name' ref={name} onChange={handleOnChangeStudent} required />
                    </div>

                    {/* father info */}

                    <div className='sameLine'>
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', width: '700px' }}>
                            <p style={{ fontWeight: '600', backgroundColor: '#153462', border: '2px solid #153462', padding: '2px', borderRadius: '5px 0 5px 0', color: 'white', fontSize: '15px' }}>Father's Name:</p>
                            <input type="text" className='idInput' style={{ width: '80%', marginLeft: '-4px' }} placeholder='Please Enter Father Name' ref={fatherName} onChange={handleOnChangeStudent} required />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                            <p style={{ fontWeight: '600', backgroundColor: '#153462', border: '2px solid #153462', padding: '2px', borderRadius: '5px 0 5px 0', color: 'white', fontSize: '15px' }}>Mobile:</p>
                            <input type="number" className='idInput' placeholder='Please Enter Mobile No' style={{ marginLeft: '-4px' }} ref={fatherMobile} onChange={handleOnChangeStudent} required />
                        </div>

                    </div>

                    {/* mother info here */}

                    <div className='sameLine'>
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', width: '700px' }}>
                            <p style={{ fontWeight: '600', backgroundColor: '#153462', border: '2px solid #153462', padding: '2px', borderRadius: '5px 0 5px 0', color: 'white', fontSize: '15px' }}>Mother's Name:</p>
                            <input type="text" className='idInput' style={{ width: '79%', marginLeft: '-4px' }} placeholder='Please Enter Mother Name' ref={motherName} onChange={handleOnChangeStudent} required />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                            <p style={{ fontWeight: '600', backgroundColor: '#153462', border: '2px solid #153462', padding: '2px', borderRadius: '5px 0 5px 0', color: "white", fontSize: '15px' }}>Mobile:</p>
                            <input type="number" className='idInput' placeholder='Please Enter Mobile No' style={{ marginLeft: '-4px' }} ref={motherMobile} onChange={handleOnChangeStudent} required />
                        </div>

                    </div>

                    {/* class info here */}
                    <div className='sameLine'>
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', width: '330px' }}>
                            <p style={{ fontWeight: '600', paddingRight: '10px', backgroundColor: '#153462', border: '2px solid #153462', padding: '2px', borderRadius: '5px 0 5px 0', color: 'white', fontSize: '15px' }}>Class: </p>
                            <input type="text" className='idInput' placeholder='Please Enter Class' style={{ width: '60%', marginLeft: '-4px' }} ref={classes} onChange={handleOnChangeStudent} required />
                        </div>

                        {/* age info here */}
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', width: '400px' }}>
                            <p style={{ fontWeight: '600', paddingRight: '10px', backgroundColor: '#153462', border: '2px solid #153462', padding: '2px', borderRadius: '5px 0 5px 0', color: 'white', fontSize: '15px' }}>Age: </p>
                            <input type="number" className='idInput' placeholder='Please Enter Age' style={{ width: '60%', marginLeft: '-4px' }} ref={age} onChange={handleOnChangeStudent} required />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                            <p style={{ marginLeft: '10px', fontWeight: '600', backgroundColor: '#153462', border: '2px solid #153462', padding: '2px', borderRadius: '5px 0 5px 0', color: 'white', fontSize: '15px' }}>Date of Birth</p>
                            <input type="date" className='idInput' style={{ marginLeft: '-4px', height: '24px' }} ref={birthValue} onChange={handleOnChangeStudent} required />
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }} className='sameLine'>
                        <p style={{ fontWeight: '600', backgroundColor: '#153462', border: '2px solid #153462', padding: '2px', borderRadius: '5px 0 5px 0', color: 'white', fontSize: '15px' }}>School Name:</p>
                        <input type="text" className='idInput' style={{ width: '80%', marginLeft: '-4px' }} placeholder='Please Enter School Name' ref={school} onChange={handleOnChangeStudent} required />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', margin: '1px' }} className='sameLine'>
                        <p style={{ fontWeight: '600', backgroundColor: '#153462', border: '2px solid #153462', padding: '2px', borderRadius: '5px 0 5px 0', color: 'white', fontSize: '15px' }}>Address:</p>
                        <input type="text" className='idInput' style={{ width: '84.3%', marginLeft: '-4px' }} placeholder='Please Enter Address' ref={address} onChange={handleOnChangeStudent} required />
                    </div>

                    {/* local gurdian info */}
                    <div className='sameLine'>
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', width: '700px' }}>
                            <p style={{ fontWeight: '600', backgroundColor: '#153462', border: '2px solid #153462', padding: '2px', borderRadius: '5px 0 5px 0', color: 'white', fontSize: '15px' }}>Gurdian Name:</p>
                            <input type="text" className='idInput' style={{ width: '79%', marginLeft: '-4px' }} placeholder='Please Enter Gurdian Name' ref={gurdian} onChange={handleOnChangeStudent} required />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                            <p style={{ fontWeight: '600', backgroundColor: '#153462', border: '2px solid #153462', padding: '2px', borderRadius: '5px 0 5px 0', color: 'white', fontSize: '15px' }}>Mobile:</p>
                            <input type="number" className='idInput' placeholder='Please Enter Mobile No' style={{ marginLeft: '-4px' }} ref={gurdianMobile} onChange={handleOnChangeStudent} required />
                        </div>

                    </div>

                    <hr />

                    {/* submit button section here */}
                    <div className='submitBtn'>
                        <button type='submit'>Submit</button>
                    </div>

                </form>
            </section>
            {/* <img src={loading} alt="loading im" style={{ marginLeft: '25%' }} /> */}
        </div>
    );
};

export default AddStudent;