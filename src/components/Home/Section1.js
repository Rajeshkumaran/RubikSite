import React from 'react';
import HpImg1 from '../../img/home_page_img1.png';
import HpSmiley from '../../img/hp_smiley.svg';
const metaInfo = [
  {
    text: '32',
    info: 'Properties build',
  },
  {
    text: '2',
    info: 'Awards gained',
  },
  {
    text: '4+',
    info: 'years experience',
  },
];
function HpSection1() {
  return (
    <div className="hp-s1 flex">
      <div className="hp-s1-ss1">
        <div className="flex meta-wrapper">
          {metaInfo.map((meta) => (
            <div className="flex flex-column meta-item-wrapper">
              <p className="hp-meta-txt">{meta.text}</p>
              <p className="hp-meta-info">{meta.info}</p>
            </div>
          ))}
        </div>
        <div className="hp-speciality-wrapper">
          <div className="flex flex-column">
            <div className="flex align-items-center">
              <div className="flex flex-column">
                <p className="sp-text1">Making Your Place Favourite</p>
                <p className="sp-text2">is our speciality!.</p>
              </div>
              <div style={{ width: '83px' }}>
                <img src={HpSmiley} alt="hp-smiley" />
              </div>
            </div>
            <div className="hp-view-services">
              <div className="estimate-btn">View services</div>
            </div>
          </div>
        </div>
      </div>
      <div className="hp-s1-ss2">
        <div className="img-wrapper">
          <img src={HpImg1} alt="hp-img-1" />
        </div>
      </div>
    </div>
  );
}

export default HpSection1;
