import React from 'react';
import './SingleAuthor.css'
import { GrUserWorker } from "react-icons/gr";
import { BiPhoneCall } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";

const SingleAuthor = (props) => {
    const { id, name, position, contact, education, year, photo } = props.value
    console.log(id)
    return (
        <div>
            <div className='singleCard'>
                <div className='imgBox'>
                    <img src={photo} alt="img box" />
                </div>
                <div className='infoBox'>
                    <h1 className='authorName'>{name}</h1>
                    <h3 className='authorPost'><GrUserWorker />::{position}</h3>
                    <h3 className='authorCall'><BiPhoneCall />:: {contact}</h3>
                    <h3 className='authorEdu'><FaUserGraduate />:: {education}</h3>
                    {/* <h3 style={{ color: 'white', margin: 0, fontSize: '15px' }}>Education Year: {year}</h3> */}
                </div>
                <div className='editBtn'>
                    <button onClick={() => alert('edit button clicked')}>Edit Info</button>
                </div>
            </div>
        </div>
    );
};

export default SingleAuthor;