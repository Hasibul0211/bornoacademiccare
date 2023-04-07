
import React, { useEffect, useRef, useState } from 'react';

import "./AddNotice.css"

const AddNotice = () => {

    const [notices, setNotices] = useState();
    const [dates, setDates] = useState()


    const notice = useRef()
    const date = useRef()

    const handleOnchangeNotice = () => {
        setNotices(notice.current.value)
        setDates(date.current.value)


    }



    const submitNotice = (e) => {
        const totalNotce = {
            description: notices,
            date: dates
        }

        fetch('https://bornoacademiccare.up.railway.app/add-notice', {
            method: 'POST',
            headers: {
                'content-type': 'Application/json'
            },
            body: JSON.stringify(totalNotce)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Notice added successfully')
                }
            })





        alert(totalNotce)
        e.preventDefault()
    }

    const [notic, setNotic] = useState([]);
    useEffect(() => {
        fetch('https://bornoacademiccare.up.railway.app/notice').then(res => res.json()).then(data => setNotic(data))
    }, [])


    const deleteNotice = (id) => {
        alert(id)

        fetch(`https://bornoacademiccare.up.railway.app/notice/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully')
                    const remainStDetails = notic.filter(singleNotice => singleNotice._id !== id)
                    setNotic(remainStDetails)
                }
            })
    }


    console.log(notic);





    return (
        <section>
            <div>
                <h1 className='noticeHeader'> Write your notice below</h1>
                <hr />
            </div>
            <div className='noticeHolder'>
                <form onSubmit={submitNotice}>
                    <input type="text" placeholder='Write notice' className='noticeText' ref={notice} onChange={handleOnchangeNotice} />
                    <input type="date" className='noticeDate' ref={date} onChange={handleOnchangeNotice} />
                    <button type='submit' className='noticeBtn' >Submit</button>
                </form>
            </div>
            <hr />
            <div>
                <p style={{ fontWeight: '700', fontSize: '18px', paddingLeft: '5px', textTransform: 'capitalize' }}>showing result: {notic.length}</p>
            </div>
            <div>
                {
                    notic.map(notice => <div style={{ marginLeft: '10px', textTransform: 'capitalize', border: '1px solid', marginTop: "2px", fontSize: '14px', padding: "2px" }}>
                        <p style={{ margin: 0, padding: '5px', backgroundColor: 'yellow', width: '50%', borderRadius: '10px', color: 'black' }}>{notice.description} on {notice.date}</p>
                        <p style={{ margin: "2px", padding: '5px', backgroundColor: 'red', width: '8%', borderRadius: '10px', color: 'white', cursor: 'pointer' }} onClick={() => deleteNotice(notice._id)}>delete now</p>
                    </div>)
                }
            </div>
        </section >

    );
};

export default AddNotice;