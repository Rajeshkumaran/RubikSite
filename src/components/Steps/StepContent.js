import React from 'react';
import Page2 from './Page2';
export default class StepContent extends React.Component {
  render() {
    return (
      <div className="step-content-wrapper">
        <Page2 />
        <div className="step-controls">
          <button className="step-control-back">Back</button>
          <button className="step-control-next">Next</button>
        </div>
      </div>
    );
  }
}
