import React from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page4 from './Page4';
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
      case 3:
        return <Page4 />;
      default:
        return <Page1 />;
    }
  };
  onBack = () => {
    const { updateStep } = this.props;
    this.setState({
      pageNo: this.state.pageNo - 1,
    });
    updateStep(this.state.pageNo - 1 - 1);
  };
  onNext = () => {
    const { updateStep } = this.props;
    this.setState({
      pageNo: this.state.pageNo + 1,
    });
    updateStep(this.state.pageNo + 1 - 1);
  };
  render() {
    const { pageNo } = this.state;
    return (
      <div className="step-content-wrapper">
        {this.renderPage()}
        <div className="step-controls">
          {pageNo > 1 && (
            <button className="step-control-back" onClick={this.onBack}>
              Back
            </button>
          )}
          {pageNo < 3 && (
            <button className="step-control-next" onClick={this.onNext}>
              Next
            </button>
          )}
          {pageNo === 3 && (
            <button
              className="step-control-submit"
              onClick={() =>
                this.setState({
                  pageNo: this.state.pageNo + 1,
                })
              }
            >
              Submit
            </button>
          )}
        </div>
      </div>
    );
  }
}
