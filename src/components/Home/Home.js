import React, { useState } from 'react';
import "./Home.css";
import { Link, Outlet } from "react-router-dom";
import logo from "../../photos/borno logo.png"
import { HiUserGroup } from "react-icons/hi";
import { FaUserGraduate } from "react-icons/fa";
import { RiPagesFill } from "react-icons/ri";
import { BiNotepad } from "react-icons/bi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Footer from '../Shared/Footer/Footer';
const Home = () => {
    // const [student, setStudent] = useState(false)
    // const [show, setShow] = useState(false)

    const [stu, setStu] = useState(false);
    const [fee, setFee] = useState(false)
    const [auth, setAuth] = useState(false)





    return (
        <div style={{ backgroundColor: '#F0F2F5' }}>
            <div className='heading'>

                <h2>Borno Academic Care</h2>
                <p className='title'>Students Management System(sms)</p>


            </div>

            <div className='layoutContainer'>


                <div id='scrl' className='layoutContainerInsOne'>
                    <div className='category'>
                        <section className="imgcontainer">
                            <img src={logo} alt="" height="100" width="100" />
                        </section>
                        <hr />
                        <hr /><hr />
                        <section>
                            <ul className='listedItem'>
                                <li> <MdOutlineRemoveRedEye className='icons' />
                                    <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>OverView</Link>
                                </li>
                                <li onClick={() => setAuth(!auth)}> <HiUserGroup className='icons' />
                                    <Link style={{ textDecoration: 'none', color: 'white' }}>Author</Link>
                                </li>
                                {
                                    auth &&
                                    <div>
                                        <li>
                                            <Link to="author" style={{ textDecoration: 'none', color: 'white', fontSize: '15px', marginLeft: '20px' }}>All Author</Link>
                                        </li>
                                        <li>
                                            <Link to="add-author" style={{ textDecoration: 'none', color: 'white', fontSize: '15px', marginLeft: '20px' }}>Add Author</Link>
                                        </li>
                                    </div>

                                }





                                <li> <BiNotepad className='icons' />
                                    <Link to="debit-credit" style={{ textDecoration: 'none', color: 'white' }}>Debit/Credit</Link>
                                </li>
                                <li onClick={() => setStu(!stu)}> <FaUserGraduate className='icons' />Students</li>
                                {
                                    stu &&
                                    <div>
                                        <li>
                                            <Link to="student-details" style={{ textDecoration: 'none', color: 'white', fontSize: '15px', marginLeft: '20px' }}>Student Details</Link>
                                        </li>
                                        <li>
                                            <Link to="add-student-info" style={{ textDecoration: 'none', color: 'white', fontSize: '15px', marginLeft: '20px' }}>Add Student Details</Link>
                                        </li>
                                    </div>

                                }
                                <li onClick={() => setFee(!fee)}> <RiPagesFill className='icons' />Tution fees</li>
                                {
                                    fee &&
                                    <div>
                                        <li>
                                            <Link to="fees-record" style={{ textDecoration: 'none', color: 'white', fontSize: '15px', marginLeft: '20px' }}>Fees Record(Running)</Link>
                                        </li>
                                        <li>
                                            <Link to="past-record" style={{ textDecoration: 'none', color: 'white', fontSize: '15px', marginLeft: '20px' }}>Previouse Fees Records</Link>
                                        </li>
                                        <li>
                                            <Link to="add-payment" style={{ textDecoration: 'none', color: 'white', fontSize: '15px', marginLeft: '20px' }}>Add Payment</Link>
                                        </li>
                                    </div>
                                }





                            </ul>
                        </section>
                    </div>


                    <p></p>
                </div>
                <div className='layoutContainerInsTwo'>


                    <div>

                        <Outlet>

                        </Outlet>
                        <Footer></Footer>
                    </div>

                </div>

            </div>

        </div >
    );
};

export default Home;