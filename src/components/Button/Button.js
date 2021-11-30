import React from 'react';
import './Button.css';

class Button extends React.Component {
  render() {
    const {
      className,
      type = 'button',
      onHandleClick,
      content,
    } = this.props;

    return (
      <button
        className={`Button ${className}`}
        type={type}
        onClick={onHandleClick}
      >
        {content}
      </button>
    );
  }
}

export default Button;
