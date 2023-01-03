import React, { useEffect, useState } from 'react';
import './FeesRecord.css';
const FeesRecord = () => {
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
            fetch('http://localhost:5000/fees-recod', {
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
        fetch('https://bornoacademiccare.up.railway.app/fees-record')
            .then(res => res.json())
            .then(data => setFeesRecordDatas(data))
    }, [])


    // console.log(feesRecordDatas);

    function refreshPage() {
        window.location.reload(false);
    }
    const removeFeesRecordBtn = (id) => {

        fetch(`https://bornoacademiccare.up.railway.app/fees-record/${id}`, {
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



    return (
        <div style={{ paddingTop: '15px' }}>
            <section>
                <button onClick={allRecordsBtn}>get all records</button>
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
                feesRecordDatas.map(feesRecordData => <section className='feesRecordHeader'>
                    <div><p>{feesRecordData.id}</p></div>
                    <div><p>{feesRecordData.name}</p></div>
                    <div><p>{feesRecordData.class}</p></div>
                    <div><p>{feesRecordData.tuitionFees}</p></div>
                    <div><p>{feesRecordData.paymentStatus}</p></div>
                    <div><p onClick={() => removeFeesRecordBtn(feesRecordData._id)}>Remove</p></div>
                </section>)
            }

        </div>
    );
};

export default FeesRecord;