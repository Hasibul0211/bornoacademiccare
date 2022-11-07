import React from 'react';
import { useState, useEffect } from 'react';
import SingleAuthor from '../../extraComponent/SingleAuthor/SingleAuthor';

const Author = () => {
    const [data, setData] = useState()
    useEffect(() => {
        fetch('/authorData.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(data);

    return (
        <div>

            {
                data?.map((dat) => (<SingleAuthor value={dat} key={data.id}></SingleAuthor>))
            }
        </div >
    );
};

export default Author;