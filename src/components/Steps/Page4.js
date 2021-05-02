import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import RangeSlider from '../RangeSlider';
export default function Page4() {
  const [ans1, toggleAnswer1] = useState('Immediately');
  const [priceRange, setPriceRange] = useState(10);
  const radios = {
    q: ['Immediately', '1-3 Months', '4-6 Months', 'Greater than 6 months'],
  };
  return (
    <div className="flex flex-column">
      <div className="flex qst-ans-wrapper">
        <div className="question-wrapper">
          1. What price range would you choose for your home interiors ?
        </div>
        <div className="flex answer-wrapper">
          <RangeSlider
            start={'1 Lac'}
            end={'80+ Lac'}
            min={1}
            max={100}
            name="Lac"
            selectedValue={priceRange}
            onSelectRange={(value) => setPriceRange(value)}
          />
        </div>
      </div>
      <div className="flex qst-ans-wrapper">
        <div className="question-wrapper">
          2. When would you like us to start interiors of your home ?
        </div>
        <div className="flex answer-wrapper">
          {radios['q'].map((option) => (
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
    </div>
  );
}
