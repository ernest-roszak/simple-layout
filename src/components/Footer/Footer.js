import React from 'react';
import { FooterCenter, FooterAbout, FooterContact } from '.';

function Footer() {
  return (
    <footer className="footer">
      <FooterAbout />
      <FooterCenter />
      <FooterContact />
    </footer>
  );
}

export default Footer;
