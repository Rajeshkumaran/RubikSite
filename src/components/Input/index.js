import React from 'react';
import './styles.css';
export default class Input extends React.Component {
  onChange = (e) => {
    const { name, onChange, state } = this.props;
    onChange({
      [name]: {
        ...state,
        value: e.target.value,
        dirty: true,
        error: false,
      },
    });
  };
  render() {
    const {
      state,
      name,
      className = '',
      placeholder = 'Enter input',
    } = this.props;
    return (
      <div className={`base-input-wrapper-styles ${className}`}>
        <input
          className="base-input"
          {...state}
          name={name}
          onChange={this.onChange}
          placeholder={placeholder}
        />
      </div>
    );
  }
}
