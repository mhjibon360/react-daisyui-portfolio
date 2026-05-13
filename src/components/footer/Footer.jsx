import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal  items-center justify-center p-4 text-darkbrown">
      <p>Copyright &copy; {new Date().getFullYear()} - All right reserved</p>
    </footer>
  );
};

export default Footer;
