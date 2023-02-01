import React from 'react';
import './Teachers.css';
import profileImg from '../../photos/student.jpg';

const Teachers = () => {
    return (
        <div>
            <p style={{ textAlign: 'center', textTransform: 'capitalize' }}>this is teacehrs page</p>
            <section className='teacherContainer'>
                <div className='teacherBox'>
                    <div className='teacherImg'>
                        <img src={profileImg} alt="" style={{ width: '100%' }} />
                    </div>
                    <p className='teacherName'>pranto majumder</p>
                </div>






                <div className='teacherBox'>
                    <p>sohel</p>
                </div>
                <div className='teacherBox'>
                    <p>masum</p>
                </div>
                <div className='teacherBox'>
                    <p>shanto</p>
                </div>
                <div className='teacherBox'>
                    <p>raj</p>
                </div>
                <div>

                    B
                </div>
            </section>
        </div>
    );
};

export default Teachers;