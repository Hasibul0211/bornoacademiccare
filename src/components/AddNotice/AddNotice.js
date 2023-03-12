
import React, { useRef, useState } from 'react';

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

        alert(totalNotce)
        e.preventDefault()
    }




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
                <p style={{ fontWeight: '700', fontSize: '18px', paddingLeft: '5px' }}>showing result:</p>
            </div>
        </section>

    );
};

export default AddNotice;