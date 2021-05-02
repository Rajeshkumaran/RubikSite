import React, { useEffect } from 'react';
import './styles.css';
import CirclePending from '../../img/circle_pending.png';
import StepContent from './StepContent';
const STEPS = {
  step1: {
    id: 'step1',
    stepName: 'Property Details',
    width: 0,
  },
  step2: {
    id: 'step2',
    stepName: 'Scope of Work',
    width: 0,
  },
  step3: {
    id: 'step3',
    stepName: 'Services',
    width: 0,
  },
  step4: {
    id: 'step4',
    stepName: 'Budget & Timeline',
    width: 0,
  },
};
const Step = ({
  step,
  updateWidth,
  isSecondLastItem,
  isLastItem,
  activeItem,
}) => {
  useEffect(() => {
    const element = document.getElementById(`process-${step.id}`);
    if (element) {
      updateWidth(step.id, element.getBoundingClientRect().width);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLastItem]);
  return (
    <div className="step-box flex flex-column" id={`process-${step.id}`}>
      <div className={`flex align-items-center`}>
        {isSecondLastItem && (
          <span
            style={{
              display: 'inline-block',
              background: '#CCCCCC',
              height: '3px',
              width: '100%',
            }}
          />
        )}
        <span style={{ background: activeItem ? 'red' : 'none' }}>
          <img src={CirclePending} alt="circle-pending" />
        </span>
        {!isLastItem && (
          <span
            style={{
              width: `${step.width}px`,
              display: 'inline-block',
              background: '#CCCCCC',
              height: '3px',
            }}
          />
        )}
      </div>
      <span
        className="process-step-text"
        style={{
          marginTop: '20px',
          textAlign: !isLastItem ? 'left' : 'right',
        }}
      >
        {step.stepName}
      </span>
    </div>
  );
};
export default class Steps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: { ...STEPS },
      activeStep: 0,
    };
  }
  updateWidth = (stepId, width) => {
    this.setState((oldState) => ({
      steps: {
        ...oldState.steps,
        [stepId]: {
          ...oldState.steps[stepId],
          width,
        },
      },
    }));
  };
  updateStep = (stepNo) =>
    this.setState({
      activeStep: stepNo,
    });
  resizeListener = () => {
    this.setState({
      isWindowChanged: !this.state.isWindowChanged,
    });
  };
  componentDidMount() {
    window.addEventListener('resize', this.resizeListener);
  }
  render() {
    const { steps, activeStep } = this.state;
    const mappedSteps = Object.keys(steps);
    return (
      <div className="steps-container">
        <div className="steps-wrapper flex">
          {mappedSteps.map((stepId, index) => (
            <Step
              key={`step-${stepId}`}
              step={steps[stepId]}
              updateWidth={this.updateWidth}
              isSecondLastItem={mappedSteps.length - 1 === index}
              isLastItem={mappedSteps.length - 1 === index}
              activeItem={activeStep === index}
            />
          ))}
        </div>
        <StepContent updateStep={this.updateStep} />
      </div>
    );
  }
}
