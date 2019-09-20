import React from 'react';

import '../../../../scss/pages/home/component/errorIndicator.scss'

const ErrorApi = () => {
    return (
        <div className='error-indicator'>
            <span className='boom'>BOOM!</span>
            <span>something has gone terribly wrong</span>
            <span>(but we already sent droids to fix it)</span>
        </div>
    )
};

export default ErrorApi;
