import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
export default function Page2() {
  const [ans1, toggleAnswer1] = useState('');
  const [ans2, toggleAnswer2] = useState('');

  return (
    <div className="flex flex-column">
      <div className="flex" style={{ marginBottom: '20px' }}>
        <div className="question-wrapper">1. What are you Looking for ?</div>
        <div
          className="flex answer-wrapper"
          onChange={(e) => {
            console.log('on change called', e.target.id);
            toggleAnswer1(e.target.id);
          }}
        >
          <Form.Check
            type={'radio'}
            label="New Home Design"
            id="New Home Design"
            style={{ marginRight: '30px' }}
            checked={ans1 === 'New Home Design'}
          />
          <Form.Check
            type={'radio'}
            label="Renovation"
            id={`Renovation`}
            checked={ans1 === 'Renovation'}
          />
        </div>
      </div>
      <div className="flex">
        <div className="question-wrapper">
          2. Do you plan on renting out your home ?
        </div>
        <div
          className="flex answer-wrapper"
          onChange={(e) => {
            console.log('on change called', e.target.id);
            toggleAnswer2(e.target.id);
          }}
        >
          <Form.Check
            type={'radio'}
            label="Yes"
            id="renting-home-yes"
            style={{ marginRight: '30px' }}
            checked={ans2 === 'renting-home-yes'}
          />
          <Form.Check
            type={'radio'}
            label="No"
            id="renting-home-no"
            checked={ans2 === 'renting-home-no'}
          />
        </div>
      </div>
    </div>
  );
}
