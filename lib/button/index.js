import React from 'react';
import classNames from 'classnames';
import './style';
const Button = ({
  type,
  size,
  className,
  disabled,
  children
}) => {
  const prefix = 'maby-btn';
  const btnType = ['primary', 'default', 'danger', 'dashed', 'circle'];
  const btnSize = ['default', 'small', 'large'];
  const buttonType = disabled ? 'disabled' : btnType.includes(type) ? type : 'default';
  const buttonSize = btnSize.includes(size) ? size : 'default';
  const classes = classNames(prefix, className, {
    [`${prefix}-${buttonType}`]: buttonType,
    [`${prefix}-${buttonSize}`]: buttonSize
  });
  return (
    <button className={classes}>{children}</button>
  );
}
export default Button;
