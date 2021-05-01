import React from 'react';
import './styles.css';
import ProcessImg1 from '../../img/process_img1.svg';
import Input from '../Input';
export default class Process extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        type: 'text',
        value: '',
        dirty: false,
        error: false,
      },
      email: {
        type: 'text',
        value: '',
        dirty: false,
        error: false,
      },
      mobile: {
        type: 'text',
        value: '',
        dirty: false,
        error: false,
      },
    };
  }
  onInputChange = (state) => {
    this.setState({
      ...state,
    });
  };
  render() {
    const { name, mobile, email } = this.state;
    return (
      <div className="process-wrapper">
        <div className="process-s1 flex">
          <div className="flex flex-column form-wrapper">
            <p className="process-hurry-text">
              Hurray, Send us your details and get estimation for further move
            </p>
            <Input state={name} name="name" placeholder="Your name" />
            <Input state={email} name="email" />
            <Input state={mobile} name="mobile" />
          </div>
          <div className="flex flex-column align-items-center get-estimates-wrapper">
            <p className="get-estimate-text">Get Estimate</p>
            <div style={{ maxWidth: '300px', marginTop: '20px' }}>
              <img
                style={{
                  width: '100%',
                  height: '100%',
                }}
                src={ProcessImg1}
                alt="process-img-1"
              />
            </div>
          </div>
        </div>
        <div className="process-s2"></div>
      </div>
    );
  }
}
