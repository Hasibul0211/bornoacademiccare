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
                    <p className='teacherQlt'>Qualification: Hon's First Year</p>
                    <p className='teacherSubs'>subjects: </p>
                    <p className='teacherSub'>Four & Five All subjects</p>
                    <p className='teacherSub'>HSC: Higher Math</p>
                    <p className='teacherPhn'>Contact: 01900000000</p>
                    <p className='teacherClass'>Class taken total: 05</p>
                </div>


                <div className='teacherBox'>
                    <div className='teacherImg'>
                        <img src={profileImg} alt="" style={{ width: '100%' }} />
                    </div>
                    <p className='teacherName'>Sohel biswas</p>
                    <p className='teacherQlt'>Qualification: Hon's(Chemistry)</p>
                    <p className='teacherSubs'>subjects: </p>
                    <p className='teacherSub'>Chemistry & English</p>
                    <p className='teacherPhn'>Contact: 01900000000</p>
                    <p className='teacherClass'>Class taken total: 05</p>
                </div>

                <div className='teacherBox'>
                    <div className='teacherImg'>
                        <img src={profileImg} alt="" style={{ width: '100%' }} />
                    </div>
                    <p className='teacherName'>Masum Hasan</p>
                    <p className='teacherQlt'>Qualification: Hon's(psycology)</p>
                    <p className='teacherSubs'>subjects: </p>
                    <p className='teacherSub'>Bangladesh & Global science</p>
                    <p className='teacherPhn'>Contact: 01900000000</p>
                    <p className='teacherClass'>Class taken total: 05</p>
                </div>


                <div className='teacherBox'>
                    <div className='teacherImg'>
                        <img src={profileImg} alt="" style={{ width: '100%' }} />
                    </div>
                    <p className='teacherName'>mubarok hossain shanto</p>
                    <p className='teacherQlt'>Qualification: Hon's(English)</p>
                    <p className='teacherSubs'>subjects: </p>
                    <p className='teacherSub'>English</p>
                    <p className='teacherPhn'>Contact: 01900000000</p>
                    <p className='teacherClass'>Class taken total: 05</p>
                </div>
                <div className='teacherBox'>
                    <div className='teacherImg'>
                        <img src={profileImg} alt="" style={{ width: '100%' }} />
                    </div>
                    <p className='teacherName'>Raj</p>
                    <p className='teacherQlt'>Qualification: Hon's(Accounting)</p>
                    <p className='teacherSubs'>subjects: </p>
                    <p className='teacherSub'>Accounting</p>
                    <p className='teacherPhn'>Contact: 01900000000</p>
                    <p className='teacherClass'>Class taken total: 05</p>
                </div>
                <div className='teacherBox'>
                    <div className='teacherImg'>
                        <img src={profileImg} alt="" style={{ width: '100%' }} />
                    </div>
                    <p className='teacherName'>nizam uddin nahid</p>
                    <p className='teacherQlt'>Qualification: Hon's(Aggriculture)</p>
                    <p className='teacherSubs'>subjects: </p>
                    <p className='teacherSub'>Ict(HSC),Englsih,General Science, Religion</p>
                    <p className='teacherPhn'>Contact: 01900000000</p>
                    <p className='teacherClass'>Class taken total: 05</p>
                </div>
                <div className='teacherBox'>
                    <div className='teacherImg'>
                        <img src={profileImg} alt="" style={{ width: '100%' }} />
                    </div>
                    <p className='teacherName'>Mehedi Hasan</p>
                    <p className='teacherQlt'>Qualification: Hon's(Bangla)</p>
                    <p className='teacherSubs'>subjects: </p>
                    <p className='teacherSub'>Biology(HSC+SSC), Bangla</p>
                    <p className='teacherPhn'>Contact: 01900000000</p>
                    <p className='teacherClass'>Class taken total: 05</p>
                </div>
                <div className='teacherBox'>
                    <div className='teacherImg'>
                        <img src={profileImg} alt="" style={{ width: '100%' }} />
                    </div>
                    <p className='teacherName'>Md Hasibul Hasan</p>
                    <p className='teacherQlt'>Qualification: Bsc(EEE)</p>
                    <p className='teacherSubs'>subjects: </p>
                    <p className='teacherSub'>Physics,Chemistry(HSC+SSC), Math</p>
                    <p className='teacherPhn'>Contact: 01906899680</p>
                    <p className='teacherClass'>Class taken total: 05</p>
                </div>

            </section>
        </div>
    );
};

export default Teachers;