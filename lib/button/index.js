import React from 'react';
import './style';
const Button = ({
  children
}) => {
  const prefixBtn = 'maby-btn';
  return (
    <button className={`${prefixBtn} ${prefixBtn + '-primary'}`}>{children}</button>
  );
}
export default Button;
