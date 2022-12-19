import React, { useRef } from 'react';
import './SingleAuthor.css'
import { GrUserWorker } from "react-icons/gr";
import { BiPhoneCall } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



const SingleAuthor = (props) => {
    const { _id, name, post, number, qualification, img
    } = props.value
    const authorDataUi = props.data
    const setAuthorDataUi = props.setData

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);




    // datas collect 


    const [fname, setFname] = useState('')
    const [fpost, setFpost] = useState('')
    const [fnumber, setFnumber] = useState('')
    const [fqualifi, setFqualifi] = useState('')



    const nameField = useRef();
    const postField = useRef()
    const numberField = useRef()
    const qualificationField = useRef()


    const handleOnChange = () => {
        setFname(nameField.current.value)
        setFpost(postField.current.value)
        setFnumber(numberField.current.value)
        setFqualifi(qualificationField.current.value)

    }

    // author info update code 

    const updateAuthorInfo = (e) => {
        const authorData = {
            name: fname,
            post: fpost,
            number: fnumber,
            qualification: fqualifi
        }

        console.log(authorData);

        alert('backend coming soon')
        e.preventDefault()
        e.target.reset()

    }


    //delete button here

    const handleDelete = (id) => {

        fetch(`https://bornoacademiccare.up.railway.app/add-author/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully')
                    const remainAuthor = authorDataUi.filter(authUi => authUi._id !== id)
                    setAuthorDataUi(remainAuthor)
                    console.log(remainAuthor);

                }
            })
    }



    return (
        <div>
            <div className='singleCard'>
                <div className='imgBox'>
                    <img src={img} alt="img box" />
                </div>
                <div className='infoBox'>
                    <h1 className='authorName'>{name}</h1>
                    <h3 className='authorPost'><GrUserWorker />::{post}</h3>
                    <h3 className='authorCall'><BiPhoneCall />:: {number}</h3>
                    <h3 className='authorEdu'><FaUserGraduate />:: {qualification}</h3>
                    {/* <h3 style={{ color: 'white', margin: 0, fontSize: '15px' }}>Education Year: {year}</h3> */}
                </div>
                <div className='editBtn'>
                    <button onClick={handleOpen}>Edit Info</button>
                    <button onClick={() => handleDelete(_id)} style={{ marginTop: '2px' }}>Delete</button>
                </div>


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
                                    Update Author Info
                                </Typography>
                                <form onSubmit={updateAuthorInfo} style={{ width: '90%', margin: '2px auto' }}>
                                    <label className='updateLabel'>Your Name:</label>
                                    <input className='updateinput' type="text" placeholder='Enter your name' ref={nameField} onChange={handleOnChange} />
                                    <label className='updateLabel'>Your Post:</label>
                                    <input className='updateinput' type="text" placeholder='Enter your post' ref={postField} onChange={handleOnChange} />
                                    <label className='updateLabel'>Your Number:</label>
                                    <input className='updateinput' type="number" placeholder='Enter your number' ref={numberField} onChange={handleOnChange} />
                                    <label className='updateLabel'>Your qualification:</label>
                                    <input className='updateinput' type="text" placeholder='Enter your Subject' ref={qualificationField} onChange={handleOnChange} /><br />
                                    <button type='submit' className='updateAuthorbtn'>Submit info</button>

                                </form>
                            </Box>
                        </Fade>
                    </Modal>
                </div>


            </div>
        </div>
    );
};

export default SingleAuthor;