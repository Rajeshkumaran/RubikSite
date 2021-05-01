import React from 'react';
import Logo from '../../img/logo_transparent_bg.png';
import './styles.css';
const ColumnData = [
  {
    heading: 'Services',
    links: ['Modular Kitchen', 'Wardrobe'],
  },
  {
    heading: 'Quick Links',
    links: [
      'About Us',
      'Process',
      'Gallery',
      'Blogs',
      'Contact',
      'Get Estimate',
    ],
  },
  {
    heading: 'Contact Us',
    links: ['About us', 'Wardrobe'],
  },
];
function Footer() {
  return (
    <div className="flex footer-wrapper">
      <div>
        <img src={Logo} alt="logo-img" />
      </div>
      <div className="flex footer-columns-wrapper">
        {ColumnData.map((col) => (
          <div className="flex flex-column footer-col-wrapper">
            <p className="footer-col-heading">{col.heading}</p>
            {col.links.map((link) => (
              <a className="footer-col-item" href="/">
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Footer;
