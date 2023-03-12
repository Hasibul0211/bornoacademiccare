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
import useFirebase from '../../hocks/UseFirebase';
const Home = () => {
    // const [student, setStudent] = useState(false)
    // const [show, setShow] = useState(false)

    const [stu, setStu] = useState(false);
    const [fee, setFee] = useState(false)
    const [auth, setAuth] = useState(false)

    const { user, logOut } = useFirebase()



    return (
        <div style={{ backgroundColor: '#F0F2F5' }}>
            <div className='heading'>

                <h2>Borno Academic Care</h2>
                <p className='title'>Students Management System(sms)</p>


            </div>

            <div className='layoutContainer'>


                <div id='scrl' className='layoutContainerInsOne'>
                    <div className='category' id='scrl'>
                        {/* <section className="imgcontainer">
                            <img src={logo} alt="" height="100" width="100" />
                        </section> */}

                        <section>

                            <ul className='listedItem' style={{ listStyle: 'none' }}>
                                <li> <MdOutlineRemoveRedEye className='icons' />
                                    <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>OverView</Link>
                                </li>
                                <li > <HiUserGroup className='icons' />
                                    <Link to="author" style={{ textDecoration: 'none', color: 'white' }}>Author</Link>
                                </li>
                                <li > <HiUserGroup className='icons' />
                                    <Link to="teachers" style={{ textDecoration: 'none', color: 'white' }}>Teachers</Link>
                                </li>

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

                                    </div>
                                }
                                <li onClick={() => setAuth(!auth)}>All Controls</li>
                                {
                                    auth && <div>
                                        <li>
                                            <Link style={{ textDecoration: 'none', color: 'white', fontSize: '15px', marginLeft: '20px' }}>Teacher Attendence</Link>
                                        </li>
                                        <li>
                                            <Link style={{ textDecoration: 'none', color: 'white', fontSize: '15px', marginLeft: '20px' }}>Teacher Payment</Link>
                                        </li>
                                        <li>
                                            <Link to="add-payment" style={{ textDecoration: 'none', color: 'white', fontSize: '15px', marginLeft: '20px' }}>Add Payment</Link>
                                        </li>
                                        <li>
                                            <Link to="add-student-info" style={{ textDecoration: 'none', color: 'white', fontSize: '15px', marginLeft: '20px' }}>Add Student Details</Link>
                                        </li>
                                        <li>
                                            <Link to="add-author" style={{ textDecoration: 'none', color: 'white', fontSize: '15px', marginLeft: '20px' }}>Add Author</Link>
                                        </li>
                                        <li>
                                            <Link to="add-notice" style={{ textDecoration: 'none', color: 'white', fontSize: '15px', marginLeft: '20px' }}>Add Notice</Link>
                                        </li>

                                    </div>


                                }

                            </ul>
                        </section>
                        <div style={{ color: 'white', padding: '5px', borderRadius: '10px' }}>
                            <p style={{ marginLeft: '5px', fontSize: '15px', textTransform: 'capitalize' }}>
                                Logged User: {user.displayName}
                            </p>
                            <button onClick={logOut} style={{ margin: '0 30% 0 30%', cursor: 'pointer' }}>Log out</button>
                        </div>
                    </div>


                    <p></p>
                </div>
                <div className='layoutContainerInsTwo'>


                    <div>

                        <Outlet>

                        </Outlet>

                    </div>

                </div>

            </div>

        </div >
    );
};

export default Home;