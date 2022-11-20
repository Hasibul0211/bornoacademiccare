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





    return (
        <div>
            <div className='heading'>
                <h2>Borno Academic Care</h2>
                <p className='title'>students management system(sms)</p>
            </div>

            <div className='layoutContainer'>
                <div id='scrl' className='layoutContainerInsOne'>
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
                            <li> <HiUserGroup className='icons' />
                                <Link to="author" style={{ textDecoration: 'none', color: 'white' }}>Author</Link>
                            </li>
                            <li> <BiNotepad className='icons' />
                                <Link to="debit-credit" style={{ textDecoration: 'none', color: 'white' }}>Debit/Credit</Link>
                            </li>
                            <li onClick={() => setStu(!stu)}> <FaUserGraduate className='icons' />Students</li>
                            {
                                stu &&
                                <div>
                                    <li>
                                        <Link to="student-details" style={{ textDecoration: 'none', color: 'white', fontSize: '17px', marginLeft: '20px' }}>Student Details</Link>
                                    </li>
                                    <li>
                                        <Link to="add-student-info" style={{ textDecoration: 'none', color: 'white', fontSize: '17px', marginLeft: '20px' }}>Add Student Details</Link>
                                    </li>
                                </div>

                            }
                            <li onClick={() => setFee(!fee)}> <RiPagesFill className='icons' />Tution fees</li>
                            {
                                fee &&
                                <div>
                                    <li>
                                        <Link to="fees-record" style={{ textDecoration: 'none', color: 'white', fontSize: '17px', marginLeft: '20px' }}>Fees Record(Running)</Link>
                                    </li>
                                    <li>
                                        <Link to="past-record" style={{ textDecoration: 'none', color: 'white', fontSize: '17px', marginLeft: '20px' }}>Previouse Fees Records</Link>
                                    </li>
                                    <li>
                                        <Link to="add-payment" style={{ textDecoration: 'none', color: 'white', fontSize: '17px', marginLeft: '20px' }}>Add Payment</Link>
                                    </li>
                                </div>
                            }





                        </ul>
                    </section>
                    <p></p>
                </div>
                <div className='layoutContainerInsTwo'>


                    <div>

                        <Outlet>
                        </Outlet>

                    </div>
                    <Footer></Footer>
                </div>

            </div>

        </div >
    );
};

export default Home;