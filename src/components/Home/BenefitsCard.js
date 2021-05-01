import React from 'react';
function BenefitsCard({ imgSrc, benefitTitle, benefitInfo }) {
  return (
    <div className="flex flex-column benefit-card-wrapper">
      <div className="flex justify-content-center align-items-center">
        <div>
          <img src={imgSrc} alt="hp-s2-benefit-img" />
        </div>
        <p style={{ margin: '0px 15px' }}>{benefitTitle}</p>
      </div>
      <div style={{ margin: '20px 5px' }}>
        <p style={{ maxWidth: '320px' }}>{benefitInfo}</p>
      </div>
    </div>
  );
}
export default BenefitsCard;
