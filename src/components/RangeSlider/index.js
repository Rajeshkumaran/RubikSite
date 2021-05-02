import React from 'react';
import { Form } from 'react-bootstrap';
import './styles.css';
export default class RangeSlider extends React.Component {
  render() {
    const {
      start = '200 sq.ft',
      end = '5000 sq.ft',
      min,
      max,
      selectedValue,
      onSelectRange,
      name,
    } = this.props;
    return (
      <div className="flex" style={{ alignItems: 'center' }}>
        <div className="flex flex-column">
          <div className="range-info-wrapper">
            <span style={{ fontSize: '10px', color: '#A2A1A1' }}>{start}</span>
            <span style={{ fontSize: '10px', color: '#A2A1A1' }}>{end}</span>
          </div>
          <div>
            <Form.Control
              type="range"
              custom
              min={min}
              max={max}
              value={selectedValue}
              onChange={(e) => onSelectRange(e.target.value)}
            />
          </div>
        </div>
        <div
          className="flex"
          style={{ marginLeft: '20px', alignItems: 'center' }}
        >
          <span className="range-selected-value">{selectedValue}</span>
          <span style={{ fontSize: '14px', color: '#A2A1A1' }}>{name}</span>
        </div>
      </div>
    );
  }
}
