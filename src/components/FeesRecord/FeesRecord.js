import React, { useEffect, useState } from 'react';
import './FeesRecord.css';
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { MdFileDownloadDone } from "react-icons/md";
import { Backdrop, Fade, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useRef } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    height: 150,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
    borderRadius: '10px'
};



const FeesRecord = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    const [feesRecords, setFeesRecords] = useState('')
    const [objects, setObjects] = useState({})

    useEffect(() => {

        fetch('https://bornoacademiccare.up.railway.app/add-student')
            .then(res => res.json())
            .then(data => {
                setFeesRecords(data)
            })

    }, [])


    // console.log("out from loop", objects);
    // data.forEach(element => {
    //     const newObjects = { id: element.studentId, name: element.name, class: element.class, tuitionFees: element.tuitionFees, paymentStatus: "incomplete" }

    //     setObjects(newObjects);

    // });
    const allRecordsBtn = () => {

        // console.log(feesRecords);

        const datas = feesRecords.forEach(element => {
            const newObjects = { id: element.studentId, name: element.name, class: element.class, tuitionFees: element.tuitionFees, paymentStatus: "incomplete" }
            fetch('https://bornoacademiccare.up.railway.app/fees-recod', {
                method: 'POST',
                headers: {
                    'content-type': 'Application/json'
                },
                body: JSON.stringify(newObjects)
            })
            // setObjects(newObjects);

        });
    }

    const [feesRecordDatas, setFeesRecordDatas] = useState([])
    useEffect(() => {
        fetch('https://bornoacademiccare.up.railway.app/fees')
            .then(res => res.json())
            .then(data => setFeesRecordDatas(data))
    }, [])


    // console.log(feesRecordDatas);

    function refreshPage() {
        window.location.reload(false);
    }
    const removeFeesRecordBtn = (id) => {

        fetch(`https://bornoacademiccare.up.railway.app/fees/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refreshPage()
                    alert('deleted successfully')
                    const remainfeesRecord = feesRecordDatas.filter(feesRecordData => feesRecordDatas._id !== id)
                    setFeesRecordDatas(remainfeesRecord)
                    // console.log(remainDc);

                }
            })




    }

    // month value capture section funtion
    const [getMonth, setGetMonth] = useState('')
    const monthName = useRef()
    const onChangeMonth = () => {
        const monthNameValue = monthName.current.value;
        setGetMonth(monthNameValue);
    }

    const enterMonthName = (e) => {
        const newMonth = { month: getMonth }
        console.log(newMonth);
        fetch('https://bornoacademiccare.up.railway.app/month', {
            method: 'POST',
            headers: {
                'content-type': 'Application/json'
            },
            body: JSON.stringify(newMonth)
        }).then(res => res.json())
            .then(data => console.log(data))
        console.log(getMonth);

        e.preventDefault()
        e.target.reset()
        refreshPage()
    }

    const [getMonthV, setGetMonthV] = useState([])
    useEffect(() => {
        fetch('https://bornoacademiccare.up.railway.app/month')
            .then(res => res.json())
            .then(data => setGetMonthV(data[0].month))
    }, [])



    function refreshPage() {
        window.location.reload(false);
    }
    const monthDeleteBtn = () => {
        fetch('https://bornoacademiccare.up.railway.app/month', {
            method: 'DELETE'
        })

        refreshPage()
    }


    return (
        <div style={{ paddingTop: '15px' }}>
            <section className='monthSection'>
                <div>
                    <div style={{ width: '25px', margin: '5px 10px', paddingTop: '2px', borderRadius: '2px', cursor: 'pointer', paddingLeft: '4px', boxShadow: '1px 1px 1px 1px gray', color: 'blue' }} onClick={handleOpen}>
                        <AiOutlinePlus title='Add new' />
                    </div>
                    <div style={{ width: '25px', margin: '5px 10px', paddingTop: '2px', borderRadius: '2px', cursor: 'pointer', paddingLeft: '4px', boxShadow: '1px 1px 1px 1px gray', color: 'blue' }} onClick={monthDeleteBtn} >
                        <AiFillDelete title='Delete now' />
                    </div>

                </div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    // onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style}>
                            <Typography id="transition-modal-title" variant="h6" component="h2" className='textCenter'>
                                <form onSubmit={enterMonthName}>
                                    <label>Enter Month's Name</label><br />
                                    <input type="text" onChange={onChangeMonth} ref={monthName} /><br />
                                    <button type="submit" onClick={handleClose}>Done</button>
                                </form>
                                <button onClick={handleClose}>Close</button>
                            </Typography>

                        </Box>
                    </Fade>
                </Modal>
                <div className='monthNameDesign'><p style={{ margin: '0', fontSize: '25px' }}>{getMonthV}</p></div>
            </section>


            <section className='feesRecordHeader'>
                <div><p>Id</p></div>
                <div><p>Name</p></div>
                <div><p>Class</p></div>
                <div><p>Amount</p></div>
                <div><p>Status</p></div>
                <div><p>Action</p></div>
            </section><hr />

            {/* fees data  */}
            {
                feesRecordDatas.map(feesRecordData => <section className='feesRecordsData'>
                    <div><p>{feesRecordData.studentId}</p></div>
                    <div><p>{feesRecordData.name}</p></div>
                    <div><p>{feesRecordData.class}</p></div>
                    <div><p>{feesRecordData.fees} Tk</p></div>
                    {
                        feesRecordData.feesStatus ? <div><p><ImCross></ImCross></p></div> : <div><p><MdFileDownloadDone></MdFileDownloadDone></p></div>
                    }

                    <div className="feesDelete" title='Delete Now'><p onClick={() => removeFeesRecordBtn(feesRecordData._id)}><AiFillDelete></AiFillDelete></p></div>
                </section>)
            }

        </div>
    );
};

export default FeesRecord;