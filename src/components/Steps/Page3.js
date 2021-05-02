import React from 'react';
const services = {
  'Modular Kitchen': 0,
  Wardrobe: 0,
  'Crrockery Unit': 0,
  'TV Unit': 0,
  'False Ceiling': 0,
  'Study Unit': 0,
  Bathroom: 0,
  'Puja Unit': 0,
  'Wall papers & wall paint': 0,
};
export default class Page3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services,
    };
  }
  render() {
    const { services } = this.state;
    return (
      <div className="flex flex-column">
        <div style={{ marginBottom: '30px' }}>
          What are the services you would like to have?
        </div>
        <div className="flex" style={{ flexWrap: 'wrap' }}>
          {Object.keys(services).map((service) => (
            <div className="flex align-items-center" style={{ margin: '10px' }}>
              <span>{service}</span>
              <input
                key={service}
                className="qty-input"
                type="number"
                placeholder="Qty"
                min={1}
                max={99}
                id={service}
                onChange={(e) => {
                  this.setState({
                    services: {
                      ...this.state.services,
                      [service]: e.target.value,
                    },
                  });
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
