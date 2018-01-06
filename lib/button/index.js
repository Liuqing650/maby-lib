import React from 'react';
import classNames from 'classnames';
import './style';
export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.timeout = null;
  }
  handleClick = (e) => {
    this.setState({ clicked: true });
    clearTimeout(this.timeout);
    this.timeout = window.setTimeout(() => this.setState({ clicked: false }), 500);
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };
  render() {
    const prefix = 'maby-btn';
    const btnType = ['primary', 'default', 'danger', 'dashed', 'circle'];
    const btnSize = ['default', 'small', 'large'];
    const buttonType = disabled ? 'disabled' : btnType.includes(type) ? type : 'default';
    const buttonSize = btnSize.includes(size) ? size : 'default';
    const classes = classNames(prefix, className, {
      [`${prefix}-${buttonType}`]: buttonType,
      [`${prefix}-size-${buttonSize}`]: buttonSize,
      [`${prefix}-clicked`]: this.state.clicked;
    });
    return (
      <button className={classes} onClick={this.handleClick}>{children}</button>
    );
  }
}
export default Button;
