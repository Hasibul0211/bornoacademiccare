import React from 'react';
import { useState, useEffect } from 'react';
import SingleAuthor from '../../extraComponent/SingleAuthor/SingleAuthor';

const Author = () => {
    const [data, setData] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/add-author')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    // console.log(data);

    return (
        <div>

            {
                data?.map((dat) => (<SingleAuthor value={dat} key={data.id} data={data} setData={setData}></SingleAuthor>))
            }
        </div >
    );
};

export default Author;