import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './SingleStudent.css';
import stuImg from '../../photos/student.jpg'
import { useState } from 'react';
import { Fade, Modal, Typography } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import { Box } from '@mui/system';
import { useReactToPrint } from 'react-to-print'
import { useRef } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 200,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
    borderRadius: '10px'
};




const SingleStudent = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { id } = useParams()
    const navigate = useNavigate()






    const backbtn = () => {
        navigate('/home/student-details')
    }
    const [studentData, setStudentData] = useState('')
    useEffect(() => {
        fetch('https://bornoacademiccare.up.railway.app/add-student')
            .then(res => res.json())
            .then(data => {
                const findStuData = data.find(stuDa => stuDa._id === id)

                setStudentData(findStuData);

            })
    }, [])
    console.log(studentData);



    // to print option here
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: studentData.name
    });
    return (
        <div style={{ backgroundColor: '#F0F2F5' }}>
            <section className='stuheading'>
                <h2>Borno Academic Care</h2>
                <p className='title'>Students Management System(SMS)</p>

            </section>

            {/* single student details here */}
            <section className='stuDetails'>
                <p style={{ textAlign: 'center', fontSize: '20px', backgroundColor: ' #153462', padding: '8px', color: 'white' }}>Student Details</p>
                <div className='stuDetail' ref={componentRef}>
                    <div className='stuImg'>
                        <img src={stuImg} alt="" style={{ width: '100%', height: '100%', borderRadius: '5px' }} />
                    </div>
                    <div style={{ backgroundColor: '#F0F2F5', boxShadow: '1px 1px 1px 1px gray' }} >
                        <p className='stuId'>Student Id: {studentData.studentId}</p>
                        <p className='stuDate'>Admission Date: {studentData.admissionDate}</p>
                        <h2 className='stuName'>Name: {studentData.name}</h2>
                        <p className='stuFaName'>Father's Name: {studentData.fatherName}</p>
                        <p className='stuFaMob'>Mobile No(Father): {studentData.fatherMobile}</p>
                        <p className='stuFaName'>Mother's Name: {studentData.motherName}</p>
                        <p className='stuFaMob'>Mobile No(Mother): {studentData.motherMobile}</p>
                        <p className='stuClass'>Class: {studentData.class}</p>
                        <p className='stuAGe'>Age: {studentData.age} Years</p>
                        <p className='stuAGe'>Date of Birth: {studentData.birthDate}</p>
                        <p className='stuScl'>Institution Name: {studentData.school}</p>
                        <p className='stuFaName'>Local Guardian Name: {studentData.gurdian}</p>
                        <p className='stuFaMob'>Mobile No(Local Guardian): {studentData.gurdianMobile}</p>
                        <address className='stuAdd'>Address: {studentData.address}
                        </address>
                        <p className='stuFee'>Fees: {studentData.tuitionFees}Tk</p>
                    </div>
                    <div className='btnContain'>
                        <button onClick={handleOpen}>Edit Details</button>
                        <button onClick={backbtn}>Back Home</button>
                        <button onClick={handlePrint}>Print</button>
                    </div>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                            <Box sx={style}>
                                <Typography id="transition-modal-title" variant="h6" component="h2" className='textCenter'>
                                    Oppps!!!!!! Sorry <br />
                                    Functionality disable for next version
                                </Typography>

                            </Box>
                        </Fade>
                    </Modal>
                </div>

            </section>
            <section className='studentAcademicData'>
                <p style={{ textAlign: 'center', fontSize: '20px', backgroundColor: ' #153462', padding: '8px', color: 'white' }}>Academic Info</p>
                <div>
                    <p style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}>Insuficient Data to Show</p>
                </div>
            </section>
        </div>
    );
};

export default SingleStudent;