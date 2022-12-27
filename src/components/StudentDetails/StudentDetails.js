import { Backdrop, Box, Fade, Modal, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './StudentDetails.css';

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



const StudentDetails = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
    const navigate = useNavigate()
    // const studentsingleDetail = () => {

    // }
    const viewdeatislbtn = (id) => {
        navigate(`/student-single-detail/${id}`)
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
                        <div style={{ width: '12%' }}><p className="viewPart" onClick={() => viewdeatislbtn(studentDet._id)}>
                            view
                        </p> </div>
                        <div style={{ width: '10%' }} onClick={handleOpen}><p className="viewPart">Edit</p> </div>
                        <div style={{ width: '10%' }}><p className="viewPart" onClick={() => studentDetailsBtn(studentDet._id)}>Delete</p> </div>
                        <div>
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

                )
            }










            {/* <div>
                <img src={loading} alt="loading im" style={{ marginLeft: '25%' }} />
            </div> */}
        </div>
    );
};

export default StudentDetails;