import React from "react";

const Footer: React.FC = () => {
  return (
    <div
      className="footer bg-white py-4 d-flex flex-lg-column fixed-bottom "
      id="kt_footer"
    >
      <div className=" container  d-flex flex-column flex-md-row align-items-center justify-content-between">
        <div className="text-dark order-2 order-md-1">
          <span className="text-muted font-weight-bold mr-2">2021©</span>
          <a
            href="!#"
            target="_blank"
            rel="noreferrer"
            className="text-dark-75 text-hover-primary"
          >
            e-commerce | Admin Panel
          </a>
        </div>

        <div className="nav nav-dark order-1 order-md-2">
          <a
            href="!#"
            target="_blank"
            rel="noreferrer"
            className="nav-link pr-3 pl-0"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;