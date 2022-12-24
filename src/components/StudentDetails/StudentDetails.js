import React, { useEffect } from 'react';
import { useState } from 'react';
import './StudentDetails.css';
const StudentDetails = () => {
    const [selectValue, setSelectValue] = useState('')
    const [studentDetails, setStudentDetails] = useState([])
    const onChangeHandle = (e) => {
        const selectorValue = e.target.value;
        setSelectValue(selectorValue)
    }


    useEffect(() => {
        fetch('https://bornoacademiccare.up.railway.app/add-student')
            .then(res => res.json())
            .then(data => setStudentDetails(data))
    }, [])




    const studentDetailsBtn = (id) => {

        // console.log('student id', id);
        fetch(`https://bornoacademiccare.up.railway.app/add-student/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {

                if (data.deletedCount > 0) {

                    alert('deleted successfully')
                    const remainStDetails = studentDetails.filter(studentDetail => studentDetail._id !== id)
                    setStudentDetails(remainStDetails)
                    // console.log(remainDc);

                }
            })
    }
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
            <div style={{ width: '100%', hBSc: '10px', backgroundColor: '#393E46' }}>

            </div>

            <section className='infoHeader'>
                <div style={{ width: '12%' }}><p>Id no</p> </div>
                <div style={{ width: '30%' }}><p>Name</p> </div>
                <div style={{ width: '10%' }}><p>Class</p> </div>
                <div style={{ width: '15%' }}><p>Contact</p> </div>
                <div style={{ width: '12%' }}><p>Details</p> </div>
                <div style={{ width: '10%' }}><p>Edit</p> </div>
                <div style={{ width: '10%' }}><p>Delete</p> </div>
            </section>

            {
                studentDetails.map(studentDet =>
                    <section className='studentData'>
                        <div style={{ width: '12%' }}><p>{studentDet.studentId}</p> </div>
                        <div style={{ width: '30%' }}><p>{studentDet.name}</p> </div>
                        <div style={{ width: '10%' }}><p>{studentDet.class}</p> </div>
                        <div style={{ width: '15%' }}><p>{studentDet.gurdianMobile}</p> </div>
                        <div style={{ width: '12%' }} onClick={() => alert('view cliked')}><p className="viewPart">View</p> </div>
                        <div style={{ width: '10%' }} onClick={() => alert('edit cliked')}><p className="viewPart">Edit</p> </div>
                        <div style={{ width: '10%' }}><p className="viewPart" onClick={() => studentDetailsBtn(studentDet._id)}>Delete</p> </div>
                    </section>
                )
            }










            {/* <div>
                <img src={loading} alt="loading im" style={{ marginLeft: '25%' }} />
            </div> */}
        </div>
    );
};

export default StudentDetails;