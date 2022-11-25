import React, { useRef, useState } from 'react';

const SeeAuthor = () => {

    const [aname, setAname] = useState('')
    const [apost, setApost] = useState('')
    const [anumber, setAnumber] = useState('')
    const [aqualifi, setAqualifi] = useState('')



    const nameFieldAdd = useRef();
    const postFieldAdd = useRef()
    const numberFieldAdd = useRef()
    const qualificationFieldAdd = useRef()


    const handleOnChange = () => {
        setAname(nameFieldAdd.current.value)
        setApost(postFieldAdd.current.value)
        setAnumber(numberFieldAdd.current.value)
        setAqualifi(qualificationFieldAdd.current.value)

    }
    const addAuthorInfo = (e) => {
        const authorDataSet = {
            name: aname,
            post: apost,
            number: anumber,
            qualification: aqualifi
        }

        console.log(authorDataSet);

        alert('backend coming soon')
        e.preventDefault()
        e.target.reset()

    }






    return (
        <div>
            <form onSubmit={addAuthorInfo} style={{ width: '90%', margin: '5% auto 8% auto' }}>
                <label className='updateLabel'>Your Name:</label>
                <input className='updateinput' type="text" placeholder='Enter your name' ref={nameFieldAdd} onChange={handleOnChange} /><br />
                <label className='updateLabel'>Your Post:</label>
                <input className='updateinput' type="text" placeholder='Enter your post' ref={postFieldAdd} onChange={handleOnChange} /><br />
                <label className='updateLabel'>Your Number:</label>
                <input className='updateinput' type="number" placeholder='Enter your number' ref={numberFieldAdd} onChange={handleOnChange} /> <br />
                <label className='updateLabel'>Your qualification:</label>
                <input className='updateinput' type="text" placeholder='Enter your Subject' ref={qualificationFieldAdd} onChange={handleOnChange} /><br />
                <button type='submit' className='updateAuthorbtn'>Submit info</button>

            </form>
        </div>
    );
};

export default SeeAuthor;