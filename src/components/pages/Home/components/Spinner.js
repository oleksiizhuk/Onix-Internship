import React from 'react';
import '../../../../scss/pages/home/component/spinner.scss';

const Spinner = () => {
  return (
    <div className="lds-css ng-scope">
      <div className="lds-facebook">
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Spinner;
