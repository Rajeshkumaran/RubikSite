import React from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
export default class StepContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNo: 1,
    };
  }
  renderPage = () => {
    switch (this.state.pageNo) {
      case 1:
        return <Page1 />;
      case 2:
        return <Page2 />;
      default:
        return <Page1 />;
    }
  };
  render() {
    const { pageNo } = this.state;
    return (
      <div className="step-content-wrapper">
        {this.renderPage()}
        <div className="step-controls">
          {pageNo > 1 && (
            <button
              className="step-control-back"
              onClick={() =>
                this.setState({
                  pageNo: this.state.pageNo - 1,
                })
              }
            >
              Back
            </button>
          )}
          {pageNo < 2 && (
            <button
              className="step-control-next"
              onClick={() =>
                this.setState({
                  pageNo: this.state.pageNo + 1,
                })
              }
            >
              Next
            </button>
          )}
        </div>
      </div>
    );
  }
}
