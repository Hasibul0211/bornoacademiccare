import React from 'react';
import './SingleAuthor.css'

const SingleAuthor = (props) => {
    const { id, name, position, contact, education, year } = props.value
    console.log(id)
    return (
        <div>
            <div className='singleCard'>
                <div className='imgBox'>
                    <img src="" alt="img box" />
                </div>
                <div className='infoBox'>
                    <h1 style={{ color: 'white', fontSize: '25px' }}>Name: {name}</h1>
                    <h3 style={{ color: 'white', margin: 0, fontSize: '15px' }}>Post: {position}</h3>
                    <h3 style={{ color: 'white', margin: 0, fontSize: '15px' }}>Contact: {contact}</h3>
                    <h3 style={{ color: 'white', margin: 0, fontSize: '15px' }}>Education: {education}</h3>
                    <h3 style={{ color: 'white', margin: 0, fontSize: '15px' }}>Education Year: {year}</h3>
                </div>
                <div className='editBtn'>
                    <button onClick={() => alert('edit button clicked')}>Edit Info</button>
                </div>
            </div>
        </div>
    );
};

export default SingleAuthor;