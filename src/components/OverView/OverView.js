import React from 'react';
import loading from '../../photos/loading.gif'
const OverView = () => {
    return (
        <div>
            <h2>this is over view page</h2>
            <img src={loading} alt="loading im" style={{ marginLeft: '25%' }} />
        </div>
    );
};

export default OverView;