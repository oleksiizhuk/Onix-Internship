import React from 'react';

import './error-api.css'

const errorApi = () => {

    return (
        <div className='error-indicator'>
            <span className='boom'>BOOM!</span>
            <span>something has gone terribly wrong</span>
            <span>(but we already sent droids to fix it)</span>
        </div>
    )
};

export default errorApi;
