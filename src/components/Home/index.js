import React from 'react';
import HpSection1 from './Section1';
import HpSection2 from './Section2';
import './styles.css';

export default class Home extends React.Component {
  render() {
    return (
      <div className="flex flex-column hp-wrapper">
        <HpSection1 />
        <HpSection2 />
      </div>
    );
  }
}
