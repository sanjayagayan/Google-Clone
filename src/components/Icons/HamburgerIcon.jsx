import React from 'react';

const HamburgerIcon = ({ width = "24px", height = "24px", className = "" }) => {
  return (
    <svg
      className={className}
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
    >
      <path d="M2 4h20v2H2zm0 6h20v2H2zm0 6h20v2H2z"></path>
    </svg>
  );
};

export default HamburgerIcon;
