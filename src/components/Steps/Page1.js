import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import RangeSlider from '../RangeSlider';
export default function Page1() {
  const [ans1, toggleAnswer1] = useState('Apartment');
  const [ans2, toggleAnswer2] = useState('2 BHK');
  const [homeSize, setHomeSize] = useState(1200);
  const radios = {
    q1: ['Apartment', 'Villa', 'Independant House'],
    q2: ['Studio/1BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK', '6+ BHK'],
  };
  return (
    <div className="flex flex-column">
      <div className="flex qst-ans-wrapper">
        <div className="question-wrapper">1. Your Home is a......</div>
        <div className="flex answer-wrapper">
          {radios['q1'].map((option) => (
            <Form.Check
              key={option}
              type={'radio'}
              label={option}
              id={option}
              style={{ marginRight: '30px' }}
              checked={ans1 === option}
              onChange={(e) => toggleAnswer1(e.target.id)}
            />
          ))}
        </div>
      </div>
      <div className="flex qst-ans-wrapper">
        <div className="question-wrapper">
          2. What is your Home Configuration ?
        </div>
        <div className="flex answer-wrapper">
          {radios['q2'].map((option) => (
            <Form.Check
              key={option}
              type={'radio'}
              label={option}
              id={option}
              style={{ marginRight: '30px' }}
              checked={ans2 === option}
              onChange={(e) => toggleAnswer2(e.target.id)}
            />
          ))}
        </div>
      </div>
      <div className="flex qst-ans-wrapper">
        <div className="question-wrapper">
          3. What is the size of your home ?
        </div>
        <div className="flex answer-wrapper">
          <RangeSlider
            start={'200 sq.ft'}
            end={'5000 sq.ft'}
            min={200}
            max={5000}
            name="Sq.ft"
            selectedValue={homeSize}
            onSelectRange={(value) => setHomeSize(value)}
          />
        </div>
      </div>
    </div>
  );
}
