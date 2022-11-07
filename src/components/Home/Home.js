import React, { useState } from 'react';
import "./Home.css";
import { Link, Outlet } from "react-router-dom";
import logo from "../../photos/borno logo.png"
import { HiUserGroup, HiInformationCircle } from "react-icons/hi";
import { FaUserGraduate } from "react-icons/fa";
import { RiPagesFill } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Footer from '../Shared/Footer/Footer';
const Home = () => {
    const [show, setShow] = useState(false)





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
                            <li onClick={() => setShow(!show)}> <FaUserGraduate className='icons' />Students</li>
                            {
                                show && <li> <HiInformationCircle className='icons' />
                                    <Link to="student-details" style={{ textDecoration: 'none', color: 'white' }}>Student Details</Link>
                                </li>
                            }
                            <li> <RiPagesFill className='icons' />Tution fees</li>





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


            <div>


            </div>

        </div >
    );
};

export default Home;