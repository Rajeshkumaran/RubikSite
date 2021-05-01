import React from 'react';
import HpSection2Img from '../../img/hp_section2_img.png';
import BestQuality from '../../img/hp_best_quality.svg';
import BestServices from '../../img/hp_best_services.svg';
import Warranty from '../../img/hp_warranty.svg';
import BenefitsCard from './BenefitsCard';
const benefits = [
  {
    benefitTitle: 'Best Quality',
    benefitInfo:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue augue vitae, semper neque, adipiscing ',
    imgSrc: BestQuality,
  },
  {
    benefitTitle: 'Best Services',
    benefitInfo:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue augue vitae, semper neque, adipiscing ',
    imgSrc: BestServices,
  },
  {
    benefitTitle: 'Warranty',
    benefitInfo:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue augue vitae, semper neque, adipiscing ',
    imgSrc: Warranty,
  },
];
function HpSection2() {
  return (
    <div className="flex flex-column hp-section2-wrapper">
      <div style={{ maxHeight: '600px', overflow: 'hidden' }}>
        <img
          src={HpSection2Img}
          alt="hp-section2-img"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
      <div className="hp-s2-content-wrapper">
        <div className="hp-s2-ss1 flex align-items-center">
          <span className="hp-line"></span>
          <p className="benefits-text">Benefits You Get by Selecting US</p>
        </div>
        <div className="hp-s2-ss2 flex">
          {benefits.map((benefit) => (
            <BenefitsCard {...benefit} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default HpSection2;
